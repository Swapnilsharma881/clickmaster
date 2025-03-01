import Carousel from "@/components/section/Caraousel";
import Clients from "@/components/section/Clients";
import AnimatedGallery from "@/components/section/DynamicGallery";
import Galley from "@/components/section/Gallery";
import HeroSection from "@/components/section/HeroSection"; // Adjust the path if necessary
import Services from "@/components/section/Services";
const Home = () => {
  return (
    <>
    <HeroSection />
    <Carousel/>
    <Clients/>
    <AnimatedGallery/>
    <Galley/>
    <Services/>
 
    </>
  )
}


export default Home;
