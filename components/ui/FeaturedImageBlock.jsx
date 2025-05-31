// components/FeaturedImageBlock.jsx or .tsx
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const FeaturedImageBlock = ({ image, title, description, reverse }) => {
  const imageContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div
      className={`flex flex-col ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } items-center gap-6 sm:gap-12`}
    >
      <div ref={imageContainer} className="flex-1 overflow-hidden">
        <motion.div style={{ y }}>
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full h-64 sm:h-96 object-cover object-top rounded-2xl shadow-md"
            unoptimized
          />
        </motion.div>
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">
          {title.replace(/-/g, " ")}
        </h3>
        <p className="text-gray-600 text-base sm:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedImageBlock;
