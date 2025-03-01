import Button from "./ui/Button";


function Service({service}) {
  return (
    <div className="grid grid-cols-2 py-5">
            <Button className="" name="See More" />
            <h1 className="text-accent text-2xl">{service}</h1>

    </div>
  )
}

export default Service;
