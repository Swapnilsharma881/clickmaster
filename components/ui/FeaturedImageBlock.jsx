"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const FeaturedImageBlock = ({ image, title, description, reverse , index }) => {
  const imageContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <div className="relative grid grid-cols-1 gap-3 sm:gap-6 lg:grid-cols-2 w-full max-w-6xl h-auto min-h-[500px]">
      {/* Image Section */}
      <div
        ref={imageContainer}
        className={`relative h-[500px] sm:h-[700px] lg:h-[650px] overflow-hidden ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <motion.div style={{ y }}>
          <Image
            src={image}
            alt={title}
            fill
           className={`object-cover ${index === 0 ? 'lg:object-top' : ''}`}
            unoptimized
          />
        </motion.div>
      </div>

      {/* Text Section */}
      <div
        className={`flex flex-col justify-between items-center px-4 lg:px-6 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <p className="text-base text-gray-700 leading-relaxed tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturedImageBlock;
