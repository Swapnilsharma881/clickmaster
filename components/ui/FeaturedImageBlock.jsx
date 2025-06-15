"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const FeaturedImageBlock = ({ image, title, description, reverse, index }) => {
  const imageContainer = useRef(null);
  const [loaded, setLoaded] = useState(false); // ✅ Track if image is loaded

  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // ✅ Tailwind classes for fade-in effect
  const imageClass = `object-cover relative transition-opacity duration-1000 ease-out ${
    loaded ? "opacity-100" : "opacity-0"
  } ${index === 0 ? "lg:object-top" : ""}`;

  return (
    <div className="relative grid grid-cols-1 gap-3 sm:gap-6 lg:grid-cols-2 w-full max-w-6xl h-auto min-h-[500px]">
      {/* Image Section */}
      <div
        ref={imageContainer}
        className={`relative h-[500px] sm:h-[700px] lg:h-[400px] overflow-hidden ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            priority={index === 0}
            className={imageClass}
            onLoad={() => setLoaded(true)} // ✅ Trigger fade-in when image loads
          />
        </motion.div>
      </div>

      {/* Text Section */}
      <div
        className={`flex flex-col justify-between relative items-center px-4 lg:px-6 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <p className="text-base ">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedImageBlock;
