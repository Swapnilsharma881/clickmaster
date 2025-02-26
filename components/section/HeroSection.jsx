"use client";
import React, { useRef } from "react";

const HeroSection = () => {
 

  return (
    <section  className=" bg-primary text-accent w-full ">
      <div className=" h-[100vh] overflow-hidden">
        <img
          className=" inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/30771220/pexels-photo-30771220/free-photo-of-photographer-in-foggy-teriberka-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photographer in foggy Teriberka landscape"
        />
      </div>
    </section>
  );
};

export default HeroSection;
