import Button from "@/components/ui/Button";
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
    const y = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div>
      <div className="grid grid-cols-5 grid-rows-1 h-screen gap-0 items-center justify-between">
        <div className="px-20 py-10 col-span-2 flex content-between justify-between">
          <Link href={`/categories/${props.category.name.toLowerCase()}`}>
            <Button
              className="py-1 px-2 bg-accent-hover w-auto text-black inline-block"
              name="View More"
            />
          </Link>
          <p className="text-xl text-accent font-bold self-end">
            {props.category.name}
          </p>
        </div>
        <div ref={imageContainer} className="relative h-[30vh] col-span-3  overflow-hidden">
          <motion.div style={{ y }}>
            <Image
              src={props.category.image}
              alt="profile"
              width={500}
              height={300}
              className="w-full h-full object-cover object-center"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Product;
