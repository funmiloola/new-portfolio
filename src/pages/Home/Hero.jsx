import { useEffect, useState } from "react";
import data from "../../data.json";
export default function Hero() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
     setShow(true)
    }, 2000)
    return ()=> clearTimeout(timer)
  },[])
  return (
    <section className=" lg:px-8 w-full max-w-6xl mx-auto pt-18 lg:pt-0 pb-8 lg:pb-0 lg:h-screen lg:overflow-y-hidden">
      <div className="w-full grid grid-rows-2 lg:grid-cols-2 gap-9 lg:gap-40 justify-items-center items-center lg:justify-between font-display  ">
        <div className="flex flex-col items-center justify-start gap-4 lg:items-start lg:w-full">
          <h2 className="text-[#172631] dark:text-white text-center  lg:text-left text-[22px] lg:text-4xl font-medium typewriter ">
            Hello,
          </h2>
          {show && (
             <h3 className="text-[#172631] dark:text-white text-center  lg:text-left text-[22px] lg:text-4xl font-medium typewriter-1 ">
            {" "}
            I'm <span className="text-orange-400 font-semibold">Favour</span> a
            frontend developer.
          </h3>
         )}
          <p className="text-[#172631] dark:text-white text-center lg:text-left  font-sans md:text-lg  px-4  lg:px-0">
            Based in Lagos, Nigeria, I’m a frontend developer passionate about
            building web applications that look great and work even better. I
            enjoy crafting interfaces that feel intuitive and visually
            appealing. Outside of tech, I’m a movie and music lover.
          </p>
          <a
            href={data.resume}
            target="_blank"
            className="font-sans border border-[#172631] bg-[#172631] dark:border-[#1A1A1A] dark:bg-[#1A1A1A] px-4 py-2 text-white dark:text-white rounded-md hover:text-orange-400 dark:hover:text-orange-400"
          >
            View Resume
          </a>
        </div>
        <div className="lg:w-full">
          <img
            src="/ChatGPT Image Jan 14, 2026, 10_28_28 AM.png"
            alt=""
            className="w-50 h-75 lg:w-full lg:h-auto object-cover "
          />
        </div>
      </div>
    </section>
  );
}
