"use client";

import Link from "next/link";
import Nav from "../Nav";
import { useEffect } from "react";


const Header = () => {
  useEffect(() => {
     
   
  }, []);

  return (
    <header className=" fixed bg-backGround top-0 z-40 flex flex-col justify-between items-center sticky px-5 sm:px-10 xl:px-20 py-8 xl:py-5">
      <div className="container mx-auto  flex justify-between items-center">
        {/*Logo*/}
        <Link href="/">
         {"  "}
          <h1 className="text-2xl font-display">
            {" "}
            Clickk<span className="text-primary">.Master</span>
          </h1>{" "}
        </Link>

        {/*Desktop Nav & Hire Me Button*/}
        <div className=" hidden xl:flex  gap-10 items-center ">
          <Nav />
            <Link href="/contact">
            <button className="group relative overflow-hidden px-3 py-2 bg-white text-primary border rounded-full">
              <span className="relative z-10 transition-colors duration-5000 group-hover:text-white">Hire Me</span>
              <span className="absolute top-0 left-0 w-full h-full bg-hover transform -translate-y-full  group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
            </button>

            </Link>
        </div>
        {/*Mobile Nav*/}
        <div className="xl:hidden"><img src="/icons/burgerMenu.svg" alt="Menu" className="w-6 h-6" /></div>
      </div>
    </header>
  );
};

export default Header;
