import Carousel from "@/components/section/Caraousel";
import Clients from "@/components/section/Clients";
import HeroSection from "@/components/section/HeroSection";
import DynamicGallery from "@/components/section/DynamicGallery"
import Gallery from "@/components/section/Gallery";
import  {supabase } from "../lib/supabaseClient"

const Home = async () => {

  const { data, error } = await supabase.from('test').select('*')

  return (
    <>

        <div>
      <h1>Supabase Test</h1>
      {error && <p>Error: {error.message}</p>}
      {data && data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No data found.</p>
      )}
    </div>

    <HeroSection/>
    <Carousel/>
    {/* <Clients/>
    <DynamicGallery/>
    <Gallery/> */}
    </>
  )
}

export default Home;
