import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

export default function Button() {
  const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [dark, setDark] = useState(
    localStorage.theme === "dark" || (!localStorage.theme && system)
  );
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);
  function handleDarkTheme() {
    setDark(true);
    setOpenModal(false);
  }
  function handleLightTheme() {
    setDark(false);
    setOpenModal(false);
  }
  function handleSystemTheme() {
    setDark(system);
    setOpenModal(false);
  }
  return (
    <>
      <div
        className={` pt-2 pr-4`}
        onClick={() => setOpenModal(!openModal)}
      >
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" className="peer sr-only" checked={dark} onChange={()=> setDark(!dark)}/>
                  <div className="h-6 w-11 rounded-full  bg-gray-400 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full  after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#172631] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full">
                      
                  </div>
                  <span className={`pl-1 md:pl-2 hidden md:block text-xs ${dark ? 'text-white' : 'text-[#172631]'}`} >{dark ? 'Dark Mode' : 'Light Mode'}</span> 
        </label>
      </div>
    </>
  );
}
