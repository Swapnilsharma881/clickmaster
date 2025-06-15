"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";

function Categories({ category, index }) {
  const [loaded, setLoaded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const imageWrapperRef = useRef(null);

  // Check screen size on mount
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's lg breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    setLoaded(false);
  }, [category.image]);

  const { scrollYProgress } = useScroll({
    target: imageWrapperRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const imageClass = `object-cover transition-opacity duration-1000 ease-out ${
    loaded ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div className="relative grid grid-cols-1 gap-5 sm:gap-8">
      {/* Image with parallax only on lg+ screens */}
      <div
        ref={imageWrapperRef}
        className="relative h-[450px] sm:h-[700px] lg:h-[300px] overflow-hidden rounded-lg"
      >
        {isLargeScreen ? (
          <motion.div
            style={{ y }}
            className="absolute top-0 left-0 w-full h-[200%]"
          >
            <Image
              src={category.image}
              alt={`${category.name} image`}
              fill
              className={imageClass}
              objectFit="top"
              unoptimized
              onLoad={() => setLoaded(true)}
              priority={index === 0}
            />
          </motion.div>
        ) : (
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={category.image}
              alt={`${category.name} image`}
              fill
              className={imageClass}
              objectFit="cover"
              unoptimized
              onLoad={() => setLoaded(true)}
              priority={index === 0}
            />
          </div>
        )}
      </div>

      {/* Title and Link */}
      <div className="flex justify-between relative items-center">
        <p className="font-semibold text-lg text-gray-800">{category.name}</p>
        <Link href={`/categories/${category.name.toLowerCase()}`}>
          <Button
            className="relative underline text-sm text-primary hover:text-opacity-80 transition-colors duration-200"
            name="View More"
          />
        </Link>
      </div>
    </div>
  );
}

export default Categories;
