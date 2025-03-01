import Button from "../ui/Button";

function Form() {
  return (
    <section className="border border-black px-5 sm:px-10 xl:px-20 top-0 py-8 h-auto w-full xl:py-5 relative">
      <div className="p-5">
        <div className="">
          <form className="flex flex-col gap-12" action="/submit">
            <div className="flex flex-col gap-6">
              <label htmlFor="name"> Name</label>
              <input className="focus:outline-none py-2 bg-primary border-b-[1px] border-accent" type="text" name="name" id="name"/>
            </div>
            <div className="flex flex-col gap-6">
              <label htmlFor="email"> Email</label>
              <input className="focus:outline-none bg-primary border-b-[1px] border-accent" type="email" name="email" id="email"/>
            </div>
            <div className="flex flex-col gap-6">
              <label htmlFor="event">event</label>
              <input className="focus:outline-none bg-primary border-b-[1px] border-accent" type="text" name="event" id="event"/>
            </div>
            <div className="flex justify-end ">
                <button className="p-2 bg-accent text-white" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
