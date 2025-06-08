"use client";

import { useEffect, useState } from "react";
import { supabase } from "app/lib/supabaseClient";

export default function DynamicGallery({ folder }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      const bucket = "media";
      const path = `${folder}/`;

      const { data, error } = await supabase.storage.from(bucket).list(path);

      if (error) {
        console.error("Error listing files:", error.message);
        setLoading(false);
        return;
      }

      const urls = data
        .filter((file) => file.name.endsWith(".webp"))
        .map(
          (file) =>
            supabase.storage.from(bucket).getPublicUrl(`${path}${file.name}`)
              .data.publicUrl
        );

      setImages(urls);
      setLoading(false);
    }

    fetchImages();
  }, [folder]);

  if (loading)
    return (
      <p className="text-center text-gray-500 select-none">Loading...</p>
    );

  return (
    <section className="px-5 sm:px-9 xl:px-20">
      <div className="py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-medium mb-8 text-gray-800 capitalize text-center select-none">
          {folder.replace(/-/g, " ")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((url, idx) => (
            <div
              key={idx}
              className="relative rounded-md overflow-hidden shadow-md"
            >
              <img
                src={url}
                alt={`Image ${idx + 1}`}
                className="w-full aspect-square object-cover rounded-md"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
