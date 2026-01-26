import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

export default function Button() {
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [dark, setDark] = useState(
    localStorage.theme === "dark" ||
      (!localStorage.theme && system)
        
    );
    const [openModal, setOpenModal] = useState(false)
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
        setDark(true)
        setOpenModal(false)
    }
    function handleLightTheme() {
        setDark(false)
        setOpenModal(false)
    }
    function handleSystemTheme() {
        setDark(system)
        setOpenModal(false)
    }
  return (
    <>
      <div
              className={`relative cursor-pointer px-2 py-1 border rounded-md shadow-md ${dark ? 'border-white bg-white' : 'border-slate-300 bg-slate-200' }`}
        onClick={() => setOpenModal(!openModal)}
          >
              <img src={dark ? "/icons8-dark-mode-48.png" : "/icons8-light-mode-78.png"} alt="" className="w-3 h-3 md:w-4 md:h-4"/>
               <Dropdown onSystemClick={handleSystemTheme} onLightClick={handleLightTheme} onClick={handleDarkTheme} openModal={openModal } />
          </div>
          <div>
           
              </div>
    </>
  );
}
