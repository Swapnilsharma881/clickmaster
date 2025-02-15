"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const AnimatedNavItem = ({ name, path }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      // Animate scale and conditionally apply background color
      animate={{
        scale: isHovered ? 1.3 : 1, // Scale up when hovered
      }}
      transition={{
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      }}
      onHoverStart={() => setIsHovered(true)} // Set hover state on hover start
      onHoverEnd={() => setIsHovered(false)} // Reset hover state on hover end
      whileTap={{
        scale: 0.97, // Gentle scale-down effect on tap
        transition: {
          duration: 0.1,
          ease: "easeInOut",
        },
      }}
      className="relative cursor-pointer font-medium text-accent"
      
    >
      <Link href={path} className="px-4 py-2 block">
        {name}
      </Link>
    </motion.li>
  );
};

export default AnimatedNavItem;
