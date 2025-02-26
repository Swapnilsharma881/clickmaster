import Client from "../Client";

const clientsData = [
    {
      name: "John Doe + Jane Doe",
      testimonial: "This service is amazing! Highly recommended.",
      image: "https://picsum.photos/id/1011/600/400",
    },
    {
      name: "Jane Smith",
      testimonial: "A game-changer for my business. Great experience!",
      image: "https://picsum.photos/id/1012/600/400",
    },
  ];




function Clients() {

return(

    <section className="px-5 sm:px-10 xl:px-20 top-0 py-8 h-screen w-full xl:py-5 relative">
        <div className="h-full overflow-hidden ">
            {
                clientsData.map((clientsData,index) => (
                    <Client key={index} {...clientsData}/>
                )

                )
            }
        </div>
    </section>

)
    
}

export default Clients;