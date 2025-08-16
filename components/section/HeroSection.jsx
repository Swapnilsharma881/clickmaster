"use client";

import React, { useRef, useEffect, useState } from "react";
import { supabase } from "app/lib/supabaseClient";
import gsap from "gsap";

const HeroSection = ({ mobileVideoIndex = 2, tabletVideoIndex = 2 }) => {
  const heroRef = useRef(null);
  const [videos, setVideos] = useState([]);
  const [videosLoaded, setVideosLoaded] = useState(0);
  const [screenType, setScreenType] = useState("large"); // large | tablet | mobile

  // ✅ Detect screen type
  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      if (width >= 1024) setScreenType("large");
      else if (width >= 640) setScreenType("tablet");
      else setScreenType("mobile");
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ Fetch all videos from Supabase
  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase.storage
        .from("personal")
        .list("heroGrid", { limit: 50 });

      if (error) {
        console.error("Error fetching videos:", error.message);
        return;
      }

      const videoUrls = data
        .sort((a, b) => Number(a.name.split(".")[0]) - Number(b.name.split(".")[0]))
        .map((file) => 
          supabase.storage.from("personal").getPublicUrl(`heroGrid/${file.name}`).data.publicUrl
        );

      setVideos(videoUrls);
    };

    fetchVideos();
  }, []);

  // ✅ Animate text after videos load
  useEffect(() => {
    if (!heroRef.current || videos.length === 0) return;

    const requiredVideos = screenType === "large" ? videos.length : 1;
    if (videosLoaded < requiredVideos) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#hero-text",
        { scale: 0, opacity: 0 },
        { duration: 2, scale: 1, opacity: 1, ease: "power4.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [videosLoaded, videos.length, screenType]);

  // ✅ Determine videos to render based on screen type
  let videosToRender = [];
  if (screenType === "large") videosToRender = videos; // show all
  else if (screenType === "tablet") videosToRender = [videos[tabletVideoIndex]]; // show tablet-specific
  else videosToRender = [videos[mobileVideoIndex]]; // show mobile-specific

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-black">
      <div className={`absolute inset-0 ${screenType === "large" ? "grid grid-cols-3 gap-1" : "flex"}`}>
        {videosToRender.map((video, idx) => (
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
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-center text-white/50">
        <h1 id="hero-text" className="opacity-0 text-4xl sm:text-5xl md:text-6xl font-bold">
          Serving Taste Through the Lens.
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
