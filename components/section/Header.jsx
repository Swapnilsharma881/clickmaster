"use client";

import Link from "next/link";
import Nav from "@/Nav";
import { useState } from "react";
import Image from "next/image";

import burgerMenu from "public/icons/burgerMenu.svg";
import closeMenu from "public/icons/closeMenu.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed bg-backGround top-0 z-40 w-full flex flex-col justify-between items-center px-5 sm:px-10 xl:px-20 py-8 xl:py-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-display">
            Clickk<span className="text-primary">.Master</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex gap-10 items-center">
          <Nav />
          <Link href="/contact">
            <button className="group relative overflow-hidden px-3 py-2 bg-white text-primary border rounded-full">
              <span className="relative z-10 transition-colors group-hover:text-white">
                Hire Me
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-hover transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
            </button>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="xl:hidden">
          <button onClick={toggleMenu}>
            <Image
              src={isOpen ? closeMenu : burgerMenu}
              alt="Mobile Menu Toggle"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="xl:hidden mt-4 w-full text-center space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</span>
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>
            <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</span>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">contact</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
