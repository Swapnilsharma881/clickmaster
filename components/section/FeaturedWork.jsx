"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "app/lib/supabaseClient";
import Link from "next/link";
import FeaturedImageBlock from "@/ui/FeaturedImageBlock"; // adjust path as neededFeaturedImageBlock

const FeaturedWork = () => {
  const [featuredImages, setFeaturedImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.storage
        .from("featured")
        .list("", { limit: 10, sortBy: { column: "name", order: "asc" } });

      if (error) {
        console.error("Error fetching images:", error.message);
        return;
      }

      const imageUrls = data.map((file) => ({
        title: file.name.split(".")[0],
        description: "This is one of our standout visuals.",
        image: supabase.storage.from("featured").getPublicUrl(file.name).data
          .publicUrl,
      }));

      setFeaturedImages(imageUrls);
    };

    fetchImages();
  }, []);

  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
        Featured Work
      </h2>

      <div className="grid gap-12 sm:gap-16">
        {featuredImages.map((item, index) => (
          <FeaturedImageBlock
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
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
