export default function Dropdown({onClick,onLightClick,openModal,onSystemClick }) {
   
    return (
        <div className={` ${openModal ? 'absolute left-0 top-11' : "hidden"}`}>
            <div className="bg-slate-200 border border-slate-300 dark:border-[#242323] dark:bg-[#242323] rounded-md w-18 px-1 py-0.5 md:px-2 md:py-1  shadow-md">
            <div className="">
          <p
            className="text-[10px] md:text-[12px] text-[#1A1A1A] dark:text-[#ffffff]  cursor-pointer hover:text-orange-400"
            onClick={onClick}
          >
            Dark
          </p>
          <p
            className="text-xs md:text-sm  text-[#1A1A1A] dark:text-[#ffffff] cursor-pointer pt-0.5 hover:text-orange-400"
            onClick={onLightClick}
          >
            Light
                    </p>
                    <p className=" text-xs md:text-sm  text-[#1A1A1A] dark:text-[#ffffff]  cursor-pointer pt-0.5 hover:text-orange-400" onClick={onSystemClick}>System</p>
                </div>
                </div>
        </div>
    )
}