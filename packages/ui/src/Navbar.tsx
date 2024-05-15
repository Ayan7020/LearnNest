"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { Button } from "./shad/ui/button";
import Sidebar from "./Sidebar";
import { useTheme } from "next-themes";
import LinksDropdown from "./dropdown/LinksDropdown";

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
  const [themes, setThemes] = useState(theme);
  const router = usePathname();

  const token = null;

  return (
    <div>
      <div className="flex h-20 items-center justify-center shadow-lg shadow-indigo-500/50">
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
                            : "text-black dark:text-white hover:text-[#9C49CF]"
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
              className="h-12 bg-white dark:bg-black focus:bg-slate-400 text-white rounded-lg dark:focus:bg-black"
            >
              {toggle ? <X color="#9C49CF"/> : <AlignJustify color="#9C49CF"/>}
            </Button> 
          </div>
        </div>
      </div>  
      <div className="relative block md:hidden "> 
        {action && <Sidebar onClick={() => {
          setToggle(!toggle)
        }} State={toggle} />} 
        {children}
      </div>
    </div>
  );
};

export default Navbar;
