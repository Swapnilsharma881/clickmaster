"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const logos = ["photomishtri", "dawn&dusk", "earthmatters", "tajmahal", "evafarm", "prashant"];

const BrandMarquee = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "linear",
        duration: 20,
        repeat: -1,
        // Use 'force3D' for smoother GPU accelerated animation
        force3D: true,
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white py-12 px-4 sm:px-8 lg:px-20">
      {/* Heading */}
      <h2 className="italic text-center text-sm sm:text-sm lg:text-lg font-semibold text-gray-700 mb-5 uppercase tracking-wider select-none">
        Worked For
      </h2>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div
          className="flex w-max will-change-transform"
          ref={trackRef}
        >
          {[...logos, ...logos].map((text, index) => (
            <div
              key={index}
              className="italic w-32 h-20 flex items-center justify-center text-gray-700 text-xl font-medium hover:text-black transition-colors duration-300 ease-in-out select-none cursor-default"
              // Added cursor-default & select-none to prevent text selection on drag/hover
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
