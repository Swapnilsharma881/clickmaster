"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "app/lib/supabaseClient";

const MeetTheMan = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const { data } = supabase.storage
      .from("personal")
      .getPublicUrl("sunny.webp");

    if (data?.publicUrl) {
      setImageUrl(data.publicUrl);
    }
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-5 sm:px-9 xl:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2
            className="
              text-3xl sm:text-4xl lg:text-5xl 
              font-extrabold text-gray-800 
              mb-6 
              tracking-wide sm:tracking-wide lg:tracking-wider
              leading-tight sm:leading-tight lg:leading-snug
            "
            style={{ wordSpacing: "0.2em" }}
          >
            Meet! Your Photographer
          </h2>
          <p
            className="
              text-gray-700 
              text-base sm:text-lg lg:text-xl 
              leading-relaxed sm:leading-loose 
              tracking-normal sm:tracking-wide 
              max-w-2xl mx-auto md:mx-0
            "
            style={{ wordSpacing: "0.12em" }}
          >
            Hi, I’m <span className="font-semibold text-black">Sunny</span>, a food & product photographer passionate about turning everyday items into visual art. 
            With a blend of creativity and technical skill, I help brands showcase their identity through compelling imagery. 
            Whether it’s sizzling dishes or premium product shots, I capture every detail with precision and soul.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Photographer Sunny"
              className="
                w-full h-80 sm:h-96 lg:h-[28rem] 
                object-cover object-top 
                rounded-xl shadow-lg
                transition-all duration-500 ease-in-out
              "
            />
          ) : (
            <div className="w-full h-80 sm:h-96 bg-gray-300 animate-pulse rounded-xl" />
          )}
        </div>
      </div>
    </section>
  );
};

export default MeetTheMan;
