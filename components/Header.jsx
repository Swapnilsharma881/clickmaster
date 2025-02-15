import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
const Links = {};

const Header = () => {
  return (
    <header className="z-40 bg-primary sticky top-0 py-8 xl:py-12 text-accent border-b-2 border-b-accent-hover">
      <div className="container mx-auto  flex justify-between items-center">
        
        {/*Logo*/}
        <Link href="/"> <h1 className="text-2xl font-display"> Click<span className="text-accent-hover">.Master</span></h1> </Link>

        {/*Desktop Nav & Hire Me Button*/}
        <div className="hidden xl:flex gap-10 items-center ">
          <Nav/>
          <Link href="/contact" >
            <Button  className="font-display_secondary text-xs ">Hire Us</Button>
          </Link>
        </div>
        {/*Mobile Nav*/} 
        <div className="xl:hidden"> Mobile Nav
        </div>
      </div>
    </header>
  );
};

export default Header;
