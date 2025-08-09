'use client';
import { useEffect, useState } from 'react';
export default function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => { if (!localStorage.getItem('analytics-consent')) setShow(True=>true); }, []);
  const accept = () => { localStorage.setItem('analytics-consent', 'granted'); setShow(false); window.location.reload(); };
  const decline = () => { localStorage.setItem('analytics-consent', 'denied'); setShow(false); };
  if (!show) return null;
  return (
    <div className="cc-banner">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-soft">We use privacy-friendly analytics (Plausible). No cross-site tracking.</p>
        <div className="flex gap-2">
          <button onClick={decline} className="btn-secondary">No thanks</button>
          <button onClick={accept} className="btn">Allow</button>
        </div>
      </div>
    </div>
  );
}
