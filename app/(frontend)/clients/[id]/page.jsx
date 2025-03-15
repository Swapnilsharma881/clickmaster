"use client";

import { useParams } from "next/navigation";
import Gallery3D from "@/components/3d/Gallery3d";

const clients = {
  "client-1": {
    name: "John & Emma",
    event: "Wedding Ceremony",
    venue: "Rosewood Banquet Hall",
    images: ["/images/1.jfif", "/images/2.jfif", "/images/3.jfif", "/images/4.jfif", "/images/5.jfif", "/images/6.jfif"],
  },
  "client-2": {
    name: "Alex & Sophia",
    event: "Engagement Party",
    venue: "Sunset Beach Resort",
    images: ["/images/7.jfif", "/images/8.jfif", "/images/9.jfif", "/images/10.jfif", "/images/11.jfif", "/images/12.jfif"],
  },
};

export default function ClientPage() {
  const { id } = useParams(); // ✅ Correct way for App Router

  if (!id || !clients[id]) {
    return <p className="text-white text-center">Client not found</p>;
  }

  return <Gallery3D client={clients[id]} />;
}
