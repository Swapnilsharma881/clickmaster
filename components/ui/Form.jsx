function Form() {
  return (
    <section className="px-5 sm:px-10 xl:px-20 py-12 w-full relative bg-accent">
      <div className="p-5 max-w-2xl mx-auto">
        <form className="flex flex-col gap-10" action="/submit">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-800">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-4 py-3   rounded-md focus:outline-primary  transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="px-4 py-3  rounded-md focus:outline-primary  transition"
            />
          </div>

          {/* Event */}
          <div className="flex flex-col gap-2">
            <label htmlFor="event" className="text-sm font-medium text-gray-800">
              Event
            </label>
            <input
              type="text"
              name="event"
              id="event"
              className="px-4 py-3   rounded-md focus:outline-primary  transition"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button className="group relative overflow-hidden px-3 py-2 bg-white text-primary border rounded-full">
              <span className="relative z-10 transition-colors duration-5000 group-hover:text-white">Submit</span>
              <span className="absolute top-0 left-0 w-full h-full bg-hover transform -translate-y-full  group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
