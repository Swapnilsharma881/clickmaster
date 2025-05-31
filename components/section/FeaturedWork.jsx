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
        .order("created_at", { ascending: true });

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
    <section className="relative bg-white py-16 px-4 sm:px-8">
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
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <Link href="/portfolio">
          <button className="px-6 py-3 bg-primary text-white text-lg font-medium rounded-xl shadow hover:bg-opacity-90 transition duration-300">
            View More Work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedWork;
