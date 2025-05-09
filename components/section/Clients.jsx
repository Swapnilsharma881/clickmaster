import Client from "../Client";

const clientsData = [
    {
      name: "John & Emma",
      testimonial: "This service is amazing! Highly recommended.",
      image: "https://picsum.photos/id/1011/600/400",
      url:"/clients/client-1/",
    },
    {
      name: "Alex & Sophia",
      testimonial: "A game-changer for my business. Great experience!",
      image: "https://picsum.photos/id/1012/600/400",
      url:"/clients/client-2/",
    },
  ];




function Clients() {

return(

    <section className=" px-5 sm:px-10 xl:px-20 top-0 py-8 h-auto w-full xl:py-5 relative">
        <div>
          <img src="https://arha.me/assets/secTitle1-eJlCIoKX.svg" height={30} className="fill-current text-green-600" alt=""  />
        </div>
        <div className="h-auto overflow-hidden ">
            {
                clientsData.map((client,index) => (
                    <Client key={index} clientsData={client}/>
                )

                )
            }
        </div>
    </section>

)
    
}

export default Clients;