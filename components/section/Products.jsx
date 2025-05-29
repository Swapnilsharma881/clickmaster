"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../app/lib/supabaseClient";
import Product from "../Product";

export default function Categories() {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    "beverages",
    "containers",
    "decor",
    "earthmatters",
    "fashion",
    "food",
  ];

  useEffect(() => {
    async function fetchCategoryImages() {
      const bucketName = "media";
      const results = [];

      for (const category of categories) {
        const filePath = `${category}/1.webp`;

        // Get public URL
        const { data, error } = supabase.storage
          .from(bucketName)
          .getPublicUrl(filePath);

        if (error) {
          console.error(`Error getting URL for ${filePath}:`, error.message);
          continue;
        }

        results.push({
          name: category.charAt(0).toUpperCase() + category.slice(1),
          image: data.publicUrl,
          url: `/categories/${category}`, // Customize route if needed
        });
      }

      setCategoryData(results);
      setLoading(false);
    }

    fetchCategoryImages();
  }, []);

  if (loading) return <div>Loading categories...</div>;

  return (
    <section className="px-5 sm:px-10 xl:px-20 py-8 w-full relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Categories
      </h2>
      <div className="">
        {categoryData.map((category) => (
          <Product key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
}
