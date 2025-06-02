"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "app/lib/supabaseClient";
import Link from "next/link";
import FeaturedImageBlock from "@/ui/FeaturedImageBlock";

const FeaturedWork = () => {
  const [featuredImages, setFeaturedImages] = useState([]);
  const [isLgOrAbove, setIsLgOrAbove] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from("featured_images")
        .select("name, description, kahani, image_url")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching images:", error.message);
        return;
      }

      setFeaturedImages(data);
    };

    fetchImages();
  }, []);

  // Detect screen width to switch between `description` and `kahani`
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLgOrAbove(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="relative bg-white py-16 px-5 sm:px-9 xl:px-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:mb-14 mb-12 text-primary">
        Featured Work
      </h2>

      <div className="grid grid-cols-1 gap-20">
        {featuredImages.map((item, index) => (
          <FeaturedImageBlock
            key={index}
            image={item.image_url}
            title={item.name}
            description={isLgOrAbove ? item.kahani : item.description}
            reverse={index % 2 !== 0}
            index = {index}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center relative">
        <Link href="/portfolio">
          <button className="group relative overflow-hidden px-3 py-2 bg-white text-primary border rounded-full">
            <span className="relative z-10 transition-colors ease-in-out group-hover:text-white">
              View More Work
            </span>
            <span className="absolute top-0 left-0 w-full h-full bg-hover transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out will-change-transform z-0"></span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedWork;
