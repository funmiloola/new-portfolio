import data from "../../data.json";
export default function Hero() {
  return (
    <section className="lg:px-8 w-full max-w-6xl mx-auto pt-18 lg:pt-0 pb-8 lg:pb-0 lg:h-screen lg:overflow-y-hidden">
      <div className="w-full grid grid-rows-2 lg:grid-cols-2 gap-9 lg:gap-60 justify-items-center items-center lg:justify-between font-display  ">

        <div className="flex flex-col items-center gap-7 lg:items-start lg:w-full">
          <h2 className="text-slate-50 dark:text-white text-center  lg:text-left text-2xl lg:text-4xl font-medium typewriter">
            Hello, <br /> I'm <span className="text-[#121e28] dark:text-orange-400 font-semibold">Favour</span> a frontend developer.
          </h2>
          <p className="text-white dark:text-white text-center lg:text-left font-sans md:text-lg ">
            Based in Lagos, Nigeria, I’m a frontend developer passionate about
            building web applications that look great and work even better. I
            enjoy crafting interfaces that feel intuitive and visually
            appealing. Outside of tech, I’m a movie and music lover.
          </p>
          <a
            href={data.resume}
            target="_blank"
            className="font-sans border border-[#121e28] bg-[#121e28] dark:border-[#172631] dark:bg-[#172631] px-4 py-2 text-white dark:text-white rounded-md hover:text-orange-400 dark:hover:text-orange-400"
          >
            View Resume
          </a>
        </div>
        <div className="lg:w-full"> 
          <img src="/ChatGPT Image Jan 14, 2026, 10_28_28 AM.png" alt="" className="w-50 h-75 lg:w-full lg:h-[80%] object-cover " />
          </div>
      </div>
    </section>
  );
}
