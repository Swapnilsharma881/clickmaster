import Button from "@/components/ui/Button";
import Image from "next/image";
function Client({ name, image }) {
  const handleClick = () => console.log("See More");

  return (
    <div>
      <div className="grid grid-cols-5 grid-rows-1 gap-20 h-screen items-center justify-between">
        <div className=" col-span-2 flex flex-col justify-between w-full h-[30vh]">
          <Button
            className="self-start py-1 px-2 bg-accent-hover w-auto text-white inline-block"
            name="View Project"
          />
          <p className="self-end">{name}</p>
        </div>
        <div className=" col-span-3 h-[30vh] overflow-hidden">
        <Image
            src={image}
            alt="profile"
            width={500} 
            height={300} 
            className="w-full h-full object-cover object-center" 
          />
        </div>
      </div>
    </div>
  );
}

export default Client;
