"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { Button } from "./shad/ui/button";
import Sidebar from "./Sidebar";
import { useTheme } from "next-themes";
import LinksDropdown from "./dropdown/LinksDropdown";
import { motion } from "framer-motion";

import { NavbarLinks } from "../../data/Navbar-links";
import { ModeToggle } from "./Toggle/ToggleTheme";

const subLinks = [
  {
    title: "Python",
    link: "/catalog/python",
  },
  {
    title: "Web Dev",
    link: "/catalog/web-development",
  },
];

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(false);
  const [action, setAction] = useState(false);
  const { theme } = useTheme(); 
  const router = usePathname();

  const token = null;

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: "easeOut" }}  className="flex  h-20 items-center justify-center shadow-[10px_-5px_50px_-5px]  shadow-blue-200">
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
          <Link href="/">
            <h1 className=" text-2xl lg:text-3xl font-semibold">LearnNest</h1>
          </Link>
          <nav>
            <ul className="hidden md:flex gap-x-6 text-lg text-[#7C7575]">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <LinksDropdown Title={link.title} links={subLinks} />
                  ) : (
                    <Link href={link.path || "/"}>
                      <p
                        className={
                          router === link.path
                            ? "text-[#9C49CF]"
                            : "font-sb text-black dark:text-white hover:text-[#c567ff] dark:hover:text-[#c567ff]"
                        }
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:flex gap-3  items-center">
            {token === null && (
              <Button className="bg-transparent h-12 text-black dark:text-white rounded-lg hover:bg-transparent  hover:ring-2 focus:ring-2 ">
                Login
              </Button>
            )}
            {token === null && (
              <Button className="bg-[#9C49CF] h-12 text-white rounded-lg hover:bg-[#671997] focus:ring-2">
                Signup
              </Button>
            )}
          <ModeToggle/>
          </div>
          <div className="flex md:hidden items-center gap-2">
          <ModeToggle/>
            <Button
              onClick={() => {setToggle(!toggle); setAction(true)}}
              className=" bg-white  bg-transparent focus:bg-transparent hover:bg-transparent text-white rounded-lg "
            >
              {toggle ? <X color="#9C49CF"/> : <AlignJustify color="#9C49CF" />}
            </Button> 
          </div>
        </div>
      </motion.div>  
      <div className="relative block md:hidden "> 
        {action && <Sidebar onClick={() => {
          setToggle(!toggle)
        }} State={toggle} />} 
      </div> 
        {children} 
    </div>
  );
};

export default Navbar;
