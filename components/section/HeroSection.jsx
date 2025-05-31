"use client";
import React, { useRef, useEffect, useState } from "react";
import { supabase } from "app/lib/supabaseClient";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    const fetchHeroImage = async () => {
      const { data, error } = await supabase.storage
        .from("personal")
        .getPublicUrl("hero.webp");

      if (error) {
        console.error("Error fetching hero image:", error.message);
        return;
      }

      setHeroImage(data.publicUrl);
    };

    fetchHeroImage();
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("#hero-text", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Hero Background Image */}
      {heroImage && (
  <img
  src={heroImage}
  alt="Hero background"
  className="
    absolute inset-0 w-full h-full
    object-cover
    sm:object-left
    transition-all duration-700 ease-in-out
  "
/>

)}

      
      {/* Hero Text */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-5 sm:px-10 xl:px-20  text-center">
        <h1
          id="hero-text"
          className="text-primary text-4xl sm:text-5xl  xl:text-7xl font-extrabold tracking-tight leading-tight max-w-5xl"
        >
          Framing Taste, Defining Excellence
        </h1>
        <p className="mt-4 text-h1 text-base sm:text-lg md:text-xl max-w-2xl">
          Expertly crafted imagery for gourmet dishes and fine products.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
