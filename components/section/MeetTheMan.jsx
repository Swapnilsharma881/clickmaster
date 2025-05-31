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
    <section className="bg-gray-100 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
  {/* Text Section */}
  <div className="flex-1 text-center md:text-left">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
      Meet! Your Photographer
    </h2>
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
      Hi, I’m <span className="font-semibold">Sunny</span>, a food & product photographer passionate about turning everyday items into visual art. With a blend of creativity and technical skill, I help brands showcase their identity through compelling imagery. Whether it’s sizzling dishes or premium product shots, I capture every detail with precision and soul.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-1">
    {imageUrl && (
      <img
        src={imageUrl}
        alt="Photographer Sunny"
        className="w-full h-80 sm:h-96 object-cover object-top shadow-md"
      />
    )}
  </div>
</div>

    </section>
  );
};

export default MeetTheMan;
