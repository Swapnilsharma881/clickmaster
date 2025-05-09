"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#hero", {
        duration: 2,
        opacity: 1,
      });
    }, heroRef);

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <section ref={heroRef} className="bg-primary text-primary w-full">
      <div className="absolute h-[200px] w-screen flex justify-center items-center">
        <h1 id="hero" className="text-5xl font-bold relative">
         <span>Welcome</span> <span>to</span> <span>my</span> <span>World!!</span> 
        </h1>
      </div>
      <div className="sm:h-[100vh] overflow-hidden">
        <img
          className="inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/30771220/pexels-photo-30771220/free-photo-of-photographer-in-foggy-teriberka-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photographer in foggy Teriberka landscape"
        />
      </div>
    </section>
  );
};

export default HeroSection;
