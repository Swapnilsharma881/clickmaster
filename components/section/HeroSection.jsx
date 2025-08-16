"use client";

import React, { useRef, useEffect, useState } from "react";
import { supabase } from "app/lib/supabaseClient";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);
  const [videos, setVideos] = useState([]);
  const [videosLoaded, setVideosLoaded] = useState(0);

  // ✅ Fetch all videos from heroGrid folder in Supabase
  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase.storage
        .from("personal")
        .list("heroGrid", { limit: 50 }); // fetch up to 50 videos

      if (error) {
        console.error("Error fetching videos:", error.message);
        return;
      }

      // ✅ Sort numerically (1.webm, 2.webm, 10.webm in correct order)
      const videoUrls = data
        .sort(
          (a, b) =>
            Number(a.name.split(".")[0]) - Number(b.name.split(".")[0])
        )
        .map((file) => {
          return supabase.storage
            .from("personal")
            .getPublicUrl(`heroGrid/${file.name}`).data.publicUrl;
        });

      setVideos(videoUrls);
    };

    fetchVideos();
  }, []);

  // ✅ Animate text after all videos load
  useEffect(() => {
    if (!heroRef.current || videos.length === 0) return;
    if (videosLoaded < videos.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#hero-text",
        { scale: 0, opacity: 0 },
        {
          duration: 2,
          scale: 1,
          opacity: 1,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        "#hero-subtext",
        { y: 50, opacity: 0 },
        {
          delay: 1,
          duration: 1.5,
          y: 0,
          opacity: 1,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [videosLoaded, videos.length]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* 🎥 Responsive Video Grid */}
      <div className="absolute inset-0 grid gap-1 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {videos.map((video, idx) => (
          <video
            key={idx}
            src={video}
            className="w-full h-full object-cover filter brightness-75"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideosLoaded((prev) => prev + 1)}
          />
        ))}
      </div>


      {/* Hero Text */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-center text-white">
        <h1
          id="hero-text"
          className="opacity-0 text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          Serving Taste Through the Lens.
        </h1>

        <p
          id="hero-subtext"
          className="opacity-0 mt-4 sm:text-lg max-w-2xl"
        >
          Expertly crafted imagery for gourmet dishes and fine products.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
