import data from "../../data.json";
export default function Hero() {
  return (
    <section className="px-8 w-full max-w-6xl mx-auto pt-18 md:pt-4 pb-8">
      <div className="w-full flex flex-col md:flex-row gap-9 md:gap-48 justify-center md:justify-between  items-center  font-display ">

        <div className="flex flex-col items-center gap-7 md:items-start  md:w-3/5">
          <h2 className="text-white text-center md:text-left text-2xl md:text-5xl font-medium">
            Hello, <br />
            I'm <span className="text-orange-400 font-semibold">Favour</span> a
            frontend developer.
          </h2>
          <p className="text-white text-center md:text-left font-sans md:text-xl ">
            Based in Lagos, Nigeria, I’m a frontend developer passionate about
            building web applications that look great and work even better. I
            enjoy crafting interfaces that feel intuitive and visually
            appealing. Outside of tech, I’m a movie and music lover.
          </p>
          <a
            href={data.resume}
            target="_blank"
            className="font-sans border border-[#172631] bg-[#172631] px-4 py-2 text-white rounded-md hover:text-orange-400"
          >
            View Resume
          </a>
        </div>
        <div className=" md:w-2/5"> 
          <img src="/ChatGPT Image Jan 14, 2026, 10_28_28 AM.png" alt="" className="w-50 h-75 md:w-100 md:h-150 object-fill" />
          </div>
      </div>
    </section>
  );
}
