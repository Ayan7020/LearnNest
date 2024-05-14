"use client"

import { useState } from "react";
import { Button } from "./shad/ui/button"; 
import { ModeToggle } from "./Toggle/ToggleTheme";
import { AlignJustify, X } from "lucide-react"; 

const Navbar = () => { 
  const [Toggle,setToggle] = useState(false)
  return (
    <div>
      <div className="flex justify-around font-poppins mt-4 items-center shadow-lg shadow-indigo-500/50 pb-3 ">
        <div className="text-[20px] sm:text-[25px] md:text-[30px] font-semibold cursor-pointer">
          <h1>LearnNest</h1>
        </div>
        <div>
          <ul className="hidden sm:flex gap-5 sm:text-[15px] md:text-[20px] text-[#7C7575] cursor-pointer ">
            <li className="text-black dark:text-white">Home</li>
            <li className="hover:text-black dark:hover:text-white">Catalog</li>
            <li className="hover:text-black dark:hover:text-white">About us</li>
            <li className="hover:text-black dark:hover:text-white">Contact us</li>
          </ul> 
        </div>
        <div className="flex gap-2 items-center">
          <Button className="bg-white text-black shadow-none border-none rounded-[15px] sm:p-5 sm:pt-3 sm:h-[43px] hover:bg-slate-100 text-[15px] sm:text-[20px] bg-transparent dark:text-white dark:hover:bg-slate-800 focus:ring-2 ">
            Login
          </Button>
          <Button className="bg-[#9C49CF] text-[15px] sm:text-[20px] shadow-none border-none rounded-[15px] sm:p-4 sm:pt-3  sm:h-[43px] hover:bg-[#671997] dark:text-white focus:ring-2 ">
            Signup
          </Button>
          <div className="block sm:hidden"> 
            <Button className="w-12 bg-transparent focus:bg-transparent hover:bg-transparent focus:ring-2" onClick={() => {setToggle(!Toggle)}}> 
              {Toggle? <X  className="text-black dark:text-white"/> : <AlignJustify className="text-black dark:text-white"/> } 
            </Button>
          </div>
          <ModeToggle />
        </div>
      </div>
      {Toggle? <div className="bg-white dark:bg-transparent mb-5 py-3 shadow  ">
          <ul className="flex flex-col gap-5 text-[20px] text-[#7C7575] cursor-pointer items-center">
            <li className="text-black dark:text-white">Home</li>
            <li className="hover:text-black dark:hover:text-white">Catalog</li>
            <li className="hover:text-black dark:hover:text-white">About us</li>
            <li className="hover:text-black dark:hover:text-white">Contact us</li>
          </ul> 
        </div>: null}
    </div>
  );
};

export default Navbar;
