"use client";

import { useEffect, useState } from "react";
import { supabase } from "app/lib/supabaseClient";
import Product from "@/Product";
import Link from "next/link";

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
          url: `/categories/${category}`,
        });
      }

      setCategoryData(results);
      setLoading(false);
    }

    fetchCategoryImages();
  }, []);

  if (loading) return <div>Loading categories...</div>;

  return (
    <section className="px-5 sm:px-10 xl:px-20  w-full py-24  relative">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Explore Our Categories
        </h2>
        <p className="text-gray-600 text-base">
          Discover curated selections of our finest work—from fashion to food, decor to earth-conscious design.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16">
        {categoryData.map((category) => (
          <Product key={category.name} category={category} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link href="/contact">
          <button className="px-6 py-3 text-white bg-primary rounded-full hover:bg-opacity-90 transition">
            Drop Your Query
          </button>
        </Link>
      </div>
    </section>
  );
}
