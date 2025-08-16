"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ScrollBox({ text }) {
  const ref = useRef(null);

  // track scroll position of the box
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // transform scroll progress into background colors
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1], // scroll progress range
    ["#3b82f6", "#22c55e", "#ef4444"] // blue → green → red
  );

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, backgroundColor }}
      className="h-[400px] w-[400px] flex items-center justify-center text-3xl font-bold text-white rounded-2xl shadow-lg"
    >
      {text}
    </motion.div>
  );
}

export default function Page() {
  return (
    <div className="h-[3000px] flex flex-col items-center justify-center space-y-20 py-20">
      <ScrollBox text="Box 1" />
      <ScrollBox text="Box 2" />
      <ScrollBox text="Box 3" />
    </div>
  );
}
