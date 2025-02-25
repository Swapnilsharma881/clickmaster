// components/HeroSection.js

import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-primary text-accent">
  <div className="w-screen h-[90vh] overflow-hidden">
    <img 
      className="w-screen object-cover" 
      src="https://images.pexels.com/photos/30771220/pexels-photo-30771220/free-photo-of-photographer-in-foggy-teriberka-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      alt="Photographer in foggy Teriberka landscape"
    />
  </div>
</section>

  );
};

export default HeroSection;
