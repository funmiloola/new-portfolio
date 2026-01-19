import data from "../../data.json";
export default function Project() {
  return (
    <div className="font-sans px-8 py-10 md:py-20 w-full max-w-6xl mx-auto">
      <h2 className="text-white font-semibold text-center text-xl md:text-2xl ">
        Projects
      </h2>
      <div className="flex flex-col justify-center gap-8 pt-12 px-5 md:px-10">
        {data.project.map((p, index) => (
          <a href={p.link} target="_blank">
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 border border-[#395263] bg-[#172631] rounded-lg px-6 md:px-8 py-8 group hover:bg-[#283a46]"
            >
              <div>
                <img
                  src={p.img}
                  alt=""
                  className="max-w-36 min-h-30 object-fit rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg group-hover:text-orange-400">
                  {p.name}
                </h2>
                <p className="text-white pt-2">{p.desc}</p>
                <div className="flex gap-2 items-center py-3">
                  {p.technologies.map((tech, index) => (
                    <span className="text-white text-[10px] md:text-xs font-medium bg-[#243c4d] group-hover:bg-[#172631] px-2 md:px-4 py-1 rounded-full" key={index}>{tech}</span>
                  ))}
                 </div>
                <a href={p.github} target="_blank" className="text-orange-400  hover:border-b hover:border-b-orange-400 " >View on Github</a>        
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
