// components/HeroSection.js

import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text on Top of Video */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">Welcome to Our Photography Studio</h1>
          <p className="text-xl">
            Discover amazing photography and videography services.
          </p>
          <a
            href="#about"
            className="inline-block px-6 py-3 mt-6 text-lg bg-primary text-white rounded-full hover:bg-accent-hover"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
