"use client";

import React, { useEffect, useRef } from "react";  // <-- import here
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function TransitionProvider({ children }) {
  const pathname = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 400 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
    );

    tl.fromTo(
      "#hero-text",
      { y: 0, opacity: 0, scale: 0 },
      {
        duration: 1.8,
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
      },
      ">0.2"
    );

    tl.fromTo(
      "#hero-subtext",
      { y: 50, opacity: 0 },
      {
        duration: 1.8,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      },
      ">0.5"
    );

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div ref={containerRef} className="page-transition">
      {children}
    </div>
  );
}
