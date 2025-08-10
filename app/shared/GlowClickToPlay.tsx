'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

type Props = {
  posterSrc?: string;
  videoSrc?: string;
  alt?: string;
};

export default function GlowClickToPlay({
  posterSrc = '/glow.png',
  videoSrc = '/glow-intro.mp4',
  alt = 'Glow introduction',
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canPlay, setCanPlay] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(videoSrc, { method: 'HEAD' });
        if (!cancelled) setCanPlay(res.ok);
      } catch {
        if (!cancelled) setCanPlay(false);
      }
    })();
    return () => { cancelled = true; };
  }, [videoSrc]);

  const onTogglePlay = async () => {
    if (!canPlay || !videoRef.current) return;
    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch {}
  };

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[460px] overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-contain"
        muted
        playsInline
        preload="metadata"
      />
      <div className={`absolute inset-0 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <Image src={posterSrc} alt={alt} fill priority className="object-contain" sizes="(max-width:768px) 90vw, 460px" />
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 grid place-items-center">
          {canPlay ? (
            <button onClick={onTogglePlay} className="rounded-full bg-emerald-500/90 px-5 py-3 text-sm font-medium text-white shadow-xl ring-1 ring-white/10 hover:bg-emerald-500">▶ Click to Play</button>
          ) : (
            <span className="rounded-full bg-slate-800/80 px-4 py-2 text-xs text-slate-100 ring-1 ring-white/10">Video coming soon</span>
          )}
        </div>
      </div>
      {canPlay && <button aria-label="Toggle play" onClick={onTogglePlay} className="absolute inset-0 cursor-pointer" tabIndex={-1} />}
    </div>
  );
}
