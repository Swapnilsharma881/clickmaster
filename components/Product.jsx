import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/ui/Button";

function Product({ category }) {
  const [isLg, setIsLg] = useState(false);
  const imageContainer = useRef(null);

  // Detect screen width >= 1024px
  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ["start end", "end start"], // ["Target Top ViewPort Botton", Target bottom ViewPort top ]
  });

  // Top to bottom movement
  const y = useTransform(scrollYProgress, [0, 1], [0, -600]);
  console.log(y);

  return (
    <div>
      <div className="relative grid grid-cols-1 gap-16  sm:gap-8 ">
        <div
          ref={imageContainer}
          className="relative h-[400px] sm:h-[700px] lg:h-[300px] overflow-hidden rounded-lg"
        >
          {isLg ? (
            <div className="relative w-full h-full">
              <motion.div style={{ y }} className="w-full h-[300%]">
                <Image
                  src={category.image}
                  alt={`${category.name} image`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
            </div>
          ) : (
            <Image
              src={category.image}
              alt={`${category.name} image`}
              fill
              className="object-cover"
              unoptimized
            />
          )}
        </div>

        <div className="flex justify-between items-center">
          <Link href={`/categories/${category.name.toLowerCase()}`}>
            <Button
              className="underline text-sm text-primary hover:text-opacity-80 transition-colors duration-200"
              name="View More"
            />
          </Link>

          <p className="font-semibold text-lg text-gray-800">{category.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
