export default function Dropdown({onClick,data,openModal,setOpenModal }) {
   
    return (
        <div className={`fixed inset-0 bg-black/50    inset-0 flex items-center justify-center z-50 ${openModal ? 'hidden' : "fixed"}`}>
            <div className="bg-white dark:bg-[#182f41] w-80 md:w-96 rounded-md px-4 py-6 ">
            <h2 className="text-sm md:text-base font-semibold text-center text-[#172631] dark:text-white ">Are you sure you want to switch to { data}</h2>
            <div className="flex items-center justify-end pt-16 pb-3 gap-4 pr-3">
          <button
            className="bg-[#172631] dark:bg-orange-400 border-[#172631] dark:border-orange-400 px-6 py-0.5 rounded-md text-[#ffffff] font-semibold cursor-pointer"
            onClick={onClick}
          >
            Yes
          </button>
          <button
            className="bg-[#E9EAEB] border-[#E9EAEB] px-6 py-0.5 rounded-md text-[#172631] dark:text-orange-400 font-semibold cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            No
          </button>
                </div>
                </div>
        </div>
    )
}