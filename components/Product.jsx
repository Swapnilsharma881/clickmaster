import Button from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

  function Product(props) {
    const imageContainer = useRef(null);
    const { scrollYProgress } = useScroll({
      target: imageContainer,
      offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -0]);

  return (
    <div>
      <div className="relative grid grid-cols-1 gap-3 sm:gap-8">
        <div ref={imageContainer} className="relative h-[400px] sm:h-[700px] lg:h-[400px] overflow-hidden">
          <motion.div style={{ y }}>
            <Image
              src={props.category.image}
              alt="profile"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </div>
        <div className=" flex  justify-between">
          <Link href={`/categories/${props.category.name.toLowerCase()}`}>
            <Button
              className="underline text-sm text-primary hover:text-opacity-80 transition "
              name="View More"
            />
          </Link>
          <p className="font-semibold text-lg text-gray-800 ">
            {props.category.name}
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Product;
