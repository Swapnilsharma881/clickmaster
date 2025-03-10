"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    let setx = 0;
  const cursor = useRef(null);

  const handleMouseMove = (e) => {
    console.log("working",e);
    setx = e.clientX;
    
    
  };


  useEffect(() => {
    console.log(cursor);
    const cursorDiv = cursor.current;

    cursorDiv.addEventListener("mousemove", handleMouseMove);
    console.log("added");

    return () => {
      cursorDiv.removeEventListener("mousemove", handleMouseMove);
      console.log("removed");
    };
  }, []);

  return (
    <motion.div
      ref={cursor}
      animate={{ x: setx }}
      className="absolute h-10 w-10 top-0 z-50 bg-white border border-black"
    ></motion.div>
  );
}
