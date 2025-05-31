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
      const path = `${folder}/`; // e.g. "decor/", "wedding/"

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

  if (loading) return <p className="text-center">Loading images...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold capitalize mb-6">
        Category: {folder}
      </h2>
      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
        {images.map((url, idx) => (
          <div key={idx} className="relative group cursor-pointer">
            <img
              src={url}
              alt={`Image ${idx + 1}`}
              className="w-full aspect-square object-cover rounded shadow opacity-100 transition-opacity duration-300 group-hover:opacity-60"
              onClick={() => setSelectedImage(url)}
            />
            {/* Centered plus icon */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-0 transition duration-300"
              onClick={() => setSelectedImage(url)}
            >
              <img
                src="/icons/plus.svg"
                alt="View Fullscreen"
                className="w-12 h-12  p-2 "
              />
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Fullscreen View"
            className="max-w-full max-h-full rounded hover:scale-2"
          />
        </div>
      )}
    </div>
  );
}
