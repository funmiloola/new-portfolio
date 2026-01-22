import {Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
export default function NavSection() {
  const [isActive, setIsActive] = useState("/");
  const [option,setOptions] = useState(false)
  const { pathname } = useLocation();
  
  return (
    <div className="flex justify-between items-center px-8 w-full max-w-6xl mx-auto pt-4">
      <nav className="flex justify-between  font-sans w-full border-b border-b-[#172631] dark:border-b-[#172631] pb-3">
       
     <Link to="/"> <h2 className="text-white font-semibold text-xl cursor-pointer hover:border-b-3  hover:border-b-[#172631] dark:hover:border-b-orange-400 font-logo">Favour Adebiyi</h2> </Link>
          
     <div className="flex items-center gap-8">
        <ul onClick={()=>setOptions(false)} className={`  ${option ? "fixed  z-10 top-16 left-0 w-[60%] px-6 pt-4 bg-[#fc7a0f] dark:bg-[#283a46] inset-0 min-h-screen h-full flex flex-col gap-5 " : "hidden md:flex  gap-20"}`}>
        <Link to="/">
          <li
            onClick={() => setIsActive("/")}
            className={`text-base md:text-sm cursor-pointer hover:text-[#121e28] dark:hover:text-orange-200 ${
              isActive && pathname === "/" ? " text-[#121e28] dark:text-orange-400"  : "text-slate-50 dark:text-white"
            }`}
          >
            Home
          </li>
        </Link>
        <Link to="/about">
          <li
            onClick={() => setIsActive("/about")}
            className={`text-base md:text-sm cursor-pointer hover:text-[#121e28] dark:hover:text-orange-200 ${
              isActive && pathname === "/about" ? "text-[#121e28] dark:text-orange-400"  : "text-slate-50 dark:text-white" 
            }`}
          >
            About
          </li>
        </Link>
        <Link to="/projects">
          <li
                      onClick={() => setIsActive("/projects")}
                      className={`text-base md:text-sm cursor-pointer hover:text-[#121e28] dark:hover:text-orange-200 ${ isActive && pathname === "/projects" ? "text-[#121e28] dark:text-orange-400"  : "text-slate-50 dark:text-white"}`}
          >
            Projects
          </li>
        </Link>
        <Link to="/contact">
          <li
                      onClick={() => setIsActive("/contact")}
                      className={`text-base md:text-sm cursor-pointer hover:text-[#121e28] dark:hover:text-orange-200 ${ isActive && pathname === "/contact" ? "text-[#121e28] dark:text-orange-400"  : "text-slate-50 dark:text-white"}`}
          >
            Contact
          </li>
        </Link>
        </ul>
        <Button/>
        </div>
      </nav>
      <div className=" block md:hidden">
        {option ? (
             <img src = "/close-icon.svg"  alt = "" className = "" onClick = { ()=> setOptions(false) }/>
          ): (
           
        <img src="/hamburger-icon.svg" alt="" className="" onClick={()=>setOptions(true)}/>
          )
        }
        
      </div>
      </div>
  );
}
