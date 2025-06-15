"use client";

import React, { useRef, useEffect, useState } from "react";
import { supabase } from "app/lib/supabaseClient";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);
  const [heroImage, setHeroImage] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false); // ✅ Track image load

  // Fetch hero image from Supabase
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

  // Animate text only after image is loaded
  useEffect(() => {
    if (!heroRef.current || !imageLoaded) return;

    const ctx = gsap.context(() => {
      // Title animation: slow scale-in
      gsap.fromTo(
        "#hero-text",
        { scale: 0, opacity: 0 },
        {
          duration: 2.5,
          scale: 1,
          opacity: 1,
          ease: "power4.out",
        }
      );

      // Subtitle animation: fade in with slight upward motion
      gsap.fromTo(
        "#hero-subtext",
        { y: 50, opacity: 0 },
        {
          delay: 1.5,
          duration: 1.8,
          y: 0,
          opacity: 1,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [imageLoaded]);

  // Parallax background scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPos = window.scrollY;
      heroRef.current.style.backgroundPositionY = `${scrollPos * 0.3}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-black"
      style={{ backgroundPosition: "center", backgroundSize: "cover" }}
    >
      {/* Background Image with fade-in */}
      {heroImage && (
        <>
          <img
            src={heroImage}
            alt="Hero background"
            className={`
              absolute inset-0 w-full h-full object-cover sm:object-left
              filter brightness-75 transition-opacity duration-1000 ease-out
              ${imageLoaded ? "opacity-100" : "opacity-0"}
            `}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />
        </>
      )}

      {/* Hero Text Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-5 sm:px-10 xl:px-20 text-center text-white">
        <h1
          id="hero-text"
          className="opacity-0 translate-y-12 text-white text-4xl sm:text-5xl md:text-6xl ..."
        >
          Serving Taste Through the Lens.  
        </h1>

        <p
          id="hero-subtext"
          className="opacity-0 translate-y-12 mt-4 text-h1 text-primary sm:text-lg ..."
        >
          Expertly crafted imagery for gourmet dishes and fine products.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
