import Button from "@/components/ui/Button";
import Image from "next/image";

function Client(props) {
  return (
    <div>
      <div className="border border-black grid grid-cols-1 gap-0 md:grid-cols-1 lg:grid-cols-5 lg:grid-rows-1 lg:gap-20 sm:h-[100vh] items-center justify-between">
        <div className="py-5 sm:col-span-2 flex flex-col justify-between w-full order-2 sm:order-1">
          <Button
            className="self-start py-1 px-2 bg-accent-hover w-auto text-white inline-block"
            name="View Project"
          />
          <p className="text-xl text-accent font-bold self-end">
            {props.clientsData.name}
          </p>
        </div>
        <div className="col-span-3 h-[30vh] overflow-hidden order-1 sm:order-2">
          <Image
            src={props.clientsData.image}
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
