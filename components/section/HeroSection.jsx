"use client";
import React, { useRef, useEffect, useState } from "react";
import { supabase } from "app/lib/supabaseClient"; // adjust path if needed
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    const fetchHeroImage = async () => {
      const { data, error } = await supabase.storage
        .from("featured")
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

    return () => ctx.revert(); // Cleanup GSAP
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Hero Background Image */}
      {heroImage && (
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          src={heroImage}
          alt="Hero background"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Text */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
        <h1
          id="hero-text"
          className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
        Framing Taste, Defining Excellence
        </h1>
        <p className="mt-4 text-white text-lg sm:text-xl max-w-xl">
          Expertly crafted imagery for gourmet dishes and fine products.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
