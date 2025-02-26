import React from "react";
function Galley() {


  return (
    <section className="bg-primary text-accent">
      <div className="px-5 py-3  grid gap-3 grid-cols-1  grid-rows-[1fr_3fr_3fr_3fr_1fr] md:grid-clos-8 grid-rows-9 lg:h-[600] h-[250vh] lg:grid-cols-12 lg:grid-rows-3">
          
          <div id='1' className="border border-black lg:col-span-4 lg:row-span-2 " ></div>
          <div id='2' className="border border-black lg:col-span-4 lg:row-span-1 "></div>
          <div id='3' className="border border-black lg:col-span-4 lg:row-span-3 "></div>
          <div id='4' className="border border-black lg:col-span-4 lg:row-span-2 "></div>
          <div id='5' className="border border-black lg:col-span-4 lg:row-span-1 "></div>
  
      </div>
    </section>
  );
}

export default Galley;
