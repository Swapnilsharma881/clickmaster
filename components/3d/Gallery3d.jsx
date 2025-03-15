"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery3D({ client }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [fullImage, setFullImage] = useState(null);
  

  return (
    <div className="w-full h-screen flex flex-col items-center p-5">
      {/* Client Details */}
      <div className="text-center text-white mb-6">
        <h1 className="text-3xl font-bold">{client.name}</h1>
        <p className="text-lg">{client.event} - {client.venue}</p>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center gap-5 max-w-[80%]">
        {client.images.map((src, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setFullImage(src)}
          >
            <motion.img
              src={src}
              alt={`Gallery Image ${index}`}
              className="w-40 h-40 object-cover rounded-lg"
              initial={{ opacity: 0 }} // 🔥 Hide images initially
              animate={{ opacity: hoveredIndex === index ? 1 : 0.1 }} // 🔥 Only show hovered image
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Image View */}
      <AnimatePresence>
        {fullImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullImage(null)}
          >
            <motion.img
              src={fullImage}
              alt="Full Image"
              className="max-w-full max-h-full rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
