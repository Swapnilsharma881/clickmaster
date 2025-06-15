import HeroSection from "@/section/HeroSection";
import FeaturedWork from "@/section/FeaturedWork";
import MeetTheMan from "@/section/MeetTheMan";

export const metadata = {
  title: "Clickkmaster - Freelance Photographer in Delhi, Jaipur, Lucknow and North India | Event, Portrait, and Product Photography",
  description: "Freelance photographer offering event, portrait, and product photography in Delhi, Jaipur, Lucknow, and across North India.",
  keywords: [
    "freelance photographer Delhi",
    "event photography Jaipur",
    "portrait photographer Lucknow",
    "product photography North India",
    "wedding photography",
    "candid photography",
  ],
  alternates: {
    canonical: "https://clickkmaster.in/",
  },
  openGraph: {
    title: "Clickkmaster - Freelance Photographer in Delhi, Jaipur, Lucknow and North India",
    description: "Freelance photography services including events, portraits, and product shoots across North India.",
    url: "https://clickkmaster.in/",
    siteName: "Clickkmaster",
    images: [
      {
        url: "https://kqoiszdheczrpsfxutiw.supabase.co/storage/v1/object/public/personal//og-image.jpg", // 🔁 Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Clickkmaster Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clickkmaster - Freelance Photography Services",
    description: "Event, portrait, and product photography in Delhi, Jaipur, Lucknow and nearby cities.",
    images: ["https://kqoiszdheczrpsfxutiw.supabase.co/storage/v1/object/public/personal//og-image.jpg"], // same as above
  },
};


const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedWork />
      <MeetTheMan />
    </main>
  );
};

export default Home;
