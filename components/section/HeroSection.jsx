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
      gsap.fromTo(
        "#hero-text",
        { y: -100, opacity: 0, scale: 0.95 },
        {
          duration: 1.8,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "bounce.out",
        }
      );
      gsap.fromTo(
        "#hero-subtext",
        { y: -50, opacity: 0 },
        {
          delay: 0.5,
          duration: 1.2,
          y: 0,
          opacity: 1,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

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
      {/* Hero Background Image */}
      {heroImage && (
        <>
          <img
            src={heroImage}
            alt="Hero background"
            className="
              absolute inset-0 w-full h-full
              object-cover
              sm:object-left
              transition-all duration-700 ease-in-out
              filter brightness-75
            "
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />
        </>
      )}

      {/* Hero Text */}
      <div className="relative z-20  flex flex-col justify-center items-center h-full px-5 sm:px-10 xl:px-20 text-center text-white">
        <h1
          id="hero-text"
          className="
            text-white 
            text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 
            font-extrabold max-w-5xl 
            tracking-[0.15em] sm:tracking-[0.15em] md:tracking-[0.15em] lg:tracking-[0.15em] xl:tracking-[0.15em]
            leading-[1.1] sm:leading-[1.2] xl:leading-[1.3]
          "
          style={{ wordSpacing: "0.25em" }}
        >
          Framing Taste, Defining Excellence
        </h1>
        <p
          id="hero-subtext"
          className="
            mt-4 
            text-h1 text-primary 
            sm:text-lg md:text-xl lg:text-xl xl:text-2xl 
            max-w-2xl opacity-0 
            tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wide xl:tracking-wide
            leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed
          "
          style={{ wordSpacing: "0.15em" }}
        >
          Expertly crafted imagery for gourmet dishes and fine products.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
