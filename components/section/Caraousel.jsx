"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const images = [
  "https://picsum.photos/id/1/1920/1080",
  "https://picsum.photos/id/1/1920/1080",
  "https://picsum.photos/id/1/1920/1080",
  "https://picsum.photos/id/1/1920/1080",
  "https://picsum.photos/id/1/1920/1080",
  "https://picsum.photos/id/1/1920/1080",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const carouselRef = useRef(null); // Reference for the carousel

  function preloadImage(index) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = images[index];
      img.onload = resolve;
    });
  }

  async function nextImage() {
    setDirection(1);
    setIsLoading(true);
    await preloadImage((current + 1) % images.length);
    setCurrent((prev) => (prev + 1) % images.length);
    setIsLoading(false);
  }

  async function prevImage() {
    setDirection(-1);
    setIsLoading(true);
    await preloadImage(current === 0 ? images.length - 1 : current - 1);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsLoading(false);
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      position: "absolute",
    }),
    center: { x: 0, opacity: 1, position: "absolute" },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <section
      className="px-5 sm:px-10 xl:px-20 top-0 py-8 w-full xl:py-12"
    >
      <div className="relative w-full h-[30vh] sm:h-[90vh] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {!isLoading && (
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={images[current]}
                alt={`slide ${current}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="bg-accent p-2 text-primary absolute bottom-5 left-5"
          onClick={prevImage}
        >
          Prev
        </button>
        <button
          className="bg-accent p-2 text-primary absolute bottom-5 right-5"
          onClick={nextImage}
        >
          Next
        </button>
      </div>
    </section>
  );
}
