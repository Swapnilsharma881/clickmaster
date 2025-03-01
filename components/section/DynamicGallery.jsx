"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const galleryData = [
  {
    nameID: "Wedding",
    media: [
      { type: "image", src: "https://picsum.photos/600?random=1" },
      { type: "image", src: "https://picsum.photos/600?random=2" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { type: "image", src: "https://picsum.photos/600?random=3" },
      { type: "image", src: "https://picsum.photos/600?random=1" },
      { type: "image", src: "https://picsum.photos/600?random=2" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { type: "image", src: "https://picsum.photos/600?random=3" },
    ],
  },
  {
    nameID: "Product Shoot",
    media: [
      { type: "image", src: "https://picsum.photos/600?random=4" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { type: "image", src: "https://picsum.photos/600?random=5" },
      { type: "image", src: "https://picsum.photos/600?random=6" },
    ],
  },
  {
    nameID: "Creative Shoots",
    media: [
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { type: "image", src: "https://picsum.photos/600?random=7" },
      { type: "image", src: "https://picsum.photos/600?random=8" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ],
  },
];

export default function AnimatedGallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <div className="border border-black p-10 space-y-20">
      {galleryData.map((category, index) => (
        <motion.div
          key={index}
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.h2
            className="text-3xl font-bold text-center text-accent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {category.nameID}
          </motion.h2>

          {/* Media Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.media.map((item, mediaIndex) => (
              <motion.div
                key={mediaIndex}
                className="overflow-hidden shadow-lg relative w-full h-[200px] cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedMedia(item)}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={category.nameID}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Pop-up Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold cursor-pointer"
                onClick={() => setSelectedMedia(null)}
              >
                &times;
              </button>
              {selectedMedia.type === "image" ? (
                <Image
                  src={selectedMedia.src}
                  alt="Selected Media"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto rounded-lg object-cover"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
