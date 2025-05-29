"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category;
  const fileNames = Array.from({ length: 6 }, (_, i) => `${i + 1}.webp`);

  const bucketName = "media";

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryImages() {
      const urls = fileNames.map((file) => {
        const { data } = supabase
          .storage
          .from(bucketName)
          .getPublicUrl(`${category}/${file}`);
        return {
          name: file,
          url: data.publicUrl,
        };
      });

      setImages(urls);
      setLoading(false);
    }

    if (category) fetchCategoryImages();
  }, [category]);

  if (loading) return <p>Loading images...</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Category: {category}</h1>
      <div className="grid grid-cols-3 gap-4">
        {images.map((img) => (
          <img
            key={img.name}
            src={img.url}
            alt={img.name}
            className="w-full h-auto object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
}
