import Service from "../Service";

const serviceList = [
    "Wedding Photography",
    "Product Shoot",
    "Creative shoots",
    "Wedding Photography",
    "Product Shoot",
    "Creative shoots",
]




function Services() {
    return (
        <section className="border border-black px-5 sm:px-10 xl:px-20 top-0 py-8 h-screen w-full xl:py-5 relative">
            <div className="h-full">

                    {serviceList.map((service,index) =>{
                        return <Service key={index} service = {service}/>
                    })}
            </div>


        </section>
    )
}

export default Services;