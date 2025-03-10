"use client";

import Link from "next/link";
import Nav from "../Nav";
import { useEffect } from "react";


const Header = () => {
  useEffect(() => {
    console.log("First Mounted");
    
      return () => {
        console.log("First Unmounted");
      };
  }, []);

  return (
    <header className=" fixed bg-primary top-0 z-40 flex flex-col justify-between items-center sticky px-5 sm:px-10 xl:px-20 py-8 xl:py-5 text-accent ">
      <div className="container mx-auto  flex justify-between items-center">
        {/*Logo*/}
        <Link href="/">
          {" "}
          <h1 className="text-2xl font-display">
            {" "}
            Click<span className="text-accent-hover">.Master</span>
          </h1>{" "}
        </Link>

        {/*Desktop Nav & Hire Me Button*/}
        <div className=" hidden xl:flex  gap-10 items-center ">
          <Nav />
          <Link href="/contact">
            <button className="btn-primary px-2 py-2 text-white rounded-sm bg-accent-hover hover:bg-accent">Hire Me</button>
          </Link>
        </div>
        {/*Mobile Nav*/}
        <div className="xl:hidden"><img src="/icons/burgerMenu.svg" alt="Menu" className="w-6 h-6" /></div>
      </div>
    </header>
  );
};

export default Header;
