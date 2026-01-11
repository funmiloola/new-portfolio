import data from "../../data.json"
export default function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between px-8 md:px-24 items-center pt-16 md:pt-8 font-display">
        <div className="flex flex-col items-center md:items-start">
        <h2 className="text-white text-center md:text-left text-2xl md:text-3xl font-medium pb-6">
            Hello, <br />I'm <span className="text-orange-400 font-semibold">Favour</span> a frontend developer.
          </h2>
          <a href={data.resume} target="_blank" className="font-sans border border-[#172631] bg-[#172631] px-4 py-2 text-white rounded-md hover:text-orange-400">View Resume</a>
          </div>
        <img src="" alt="" className="w-50 h-75 md:w-100 md:h-150 object-fill rounded-md" />
        </div>

    </>
  );
}
