import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

export default function Button() {
  const [dark, setDark] = useState(
    localStorage.theme === "dark" ||
      (!localStorage.theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
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
    function handleTheme() {
        setDark(!dark)
        setOpenModal(true)
    }

  return (
    <>
      <div
              className={`cursor-pointer px-2 text-sm md:text-base rounded-sm ${dark ? 'bg-orange-400': 'bg-white' }`}
        onClick={() => setOpenModal(!openModal)}
          >Mode
          </div>
          <div className={`${openModal ? 'hidden':"block"}`}>
            <Dropdown onClick={handleTheme} data={dark ? 'Light Mode' : 'Dark Mode'} openModal={openModal } setOpenModal={setOpenModal} />
              </div>
    </>
  );
}
