'use client';
import { useEffect, useState } from 'react';
export default function Analytics() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem('analytics-consent');
    if (consent === 'granted' && !loaded) {
      const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
      if (domain) {
        const s = document.createElement('script');
        s.setAttribute('defer', '');
        s.setAttribute('data-domain', domain);
        s.src = 'https://plausible.io/js/plausible.js';
        document.body.appendChild(s);
      }
      setLoaded(true);
    }
  }, [loaded]);
  return null;
}
