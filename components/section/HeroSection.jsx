// components/HeroSection.js

import React from "react";

const HeroSection = () => {
  return (
    <section className="w=screen bg-primary text-accent  ">
      <div className="">
        <video
          className=""
          autoPlay={true}
          loop
          preload="auto"
          src="/hero.mp4"
          
        >
          <source type="video/mp4" src="/hero.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
