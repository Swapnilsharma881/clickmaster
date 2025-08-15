"use client";

import { useEffect, useState, useRef } from "react";
import { supabase } from "app/lib/supabaseClient";
import Categories from "@/Categories";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  const categories = [
    "sweets",
    "drinks",
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
          if (process.env.NODE_ENV === "development") {
            console.error(`Error getting URL for ${filePath}:`, error.message);
          }
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

  // Animate category cards on scroll
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".category-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [categoryData]);

  if (loading) {
    return (
      <section className="px-5 sm:px-10 xl:px-20 w-full py-24 relative">
        <p className="text-lg text-gray-500 animate-pulse">
          Loading categories...
        </p>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="px-5 sm:px-10 xl:px-20 w-full py-24 relative"
    >
      <div className="max-w-3xl mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Explore Our Categories
        </h2>
        <p className="text-gray-600 text-base">
          Discover curated selections of our finest work—from fashion to food,
          decor to earth-conscious design.
        </p>
      </div>

      <div className=" relative grid gap-12 md:gap-15 lg:gap-10 grid-cols-1">
        {categoryData.map((category, index) => (
          <div key={category.name} className="relative category-card lg:my-[30vh]">
            <Categories category={category} index = {index}/>
          </div>
        ))}
      </div>

      <div className="relative mt-14 text-center">
        <Link href="/contact">
          <button className="group relative overflow-hidden px-6 py-3 bg-white text-primary border rounded-full">
            <span className="relative z-10 transition-colors ease-in-out group-hover:text-white">
              Drop Your Query
            </span>
            <span className="absolute top-0 left-0 w-full h-full bg-primary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out will-change-transform z-0"></span>
          </button>
        </Link>
      </div>
    </section>
  );
}
