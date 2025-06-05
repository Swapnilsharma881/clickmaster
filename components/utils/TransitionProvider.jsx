'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function TransitionProvider({ children }) {
  const pathname = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 400 },
      { opacity: 1, y: 0, duration: 1, ease: 'power1.out' }
    );
  }, [pathname]);

  return (
    <div ref={containerRef} className="page-transition">
      {children}
    </div>
  );
}
