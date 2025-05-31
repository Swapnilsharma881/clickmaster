"use client";

import { useEffect, useState } from "react";
import { supabase } from "app/lib/supabaseClient";

export default function DynamicGallery({ folder }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

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

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <section className="px-5 sm:px-10 xl:px-20">
      <div className="py-16  max-w-6xl ">
      <h2 className="text-2xl font-medium mb-8 text-gray-800 capitalize text-center">
        {folder.replace(/-/g, " ")}
      </h2>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 gap-2">
        {images.map((url, idx) => (
          <div key={idx} className="relative cursor-pointer rounded-md overflow-hidden shadow-sm group">
            <img
              src={url}
              alt={`Image ${idx + 1}`}
              className="w-full aspect-square object-cover rounded-md transition-opacity duration-300 group-hover:opacity-80"
              onClick={() => setSelectedImage(url)}
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl transition-transform duration-300"
          />
        </div>
      )}
    </div>
    </section>
  );
}
