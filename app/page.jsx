// pages/Home.js or your existing file

"use client"; // For client-side rendering

import React from "react";
import HeroSection from "../components/HeroSection"; // Adjust the path if necessary

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Other sections */}
      <section id="about">
        {/* About content goes here */}
      </section>
    </div>
  );
};

export default Home;
