import HeroSection from "@/section/HeroSection";
import FeaturedWork from "@/section/FeaturedWork";
import MeetTheMan from "@/section/MeetTheMan";

export const metadata = {
  title: "Clickkmaster | Freelance Photographer in North India",
  description: "Freelance photographer offering , event, and portrait photography in Delhi, Jaipur, Lucknow, and across North India.",
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
