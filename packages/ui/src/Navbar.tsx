"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AlignJustify, Database, LayoutDashboard, LogOutIcon, Settings, X } from "lucide-react";
import { Button } from "./shad/ui/button";
import Sidebar from "./Sidebar";
import { useTheme } from "next-themes";
import LinksDropdown from "./dropdown/LinksDropdown";
import { motion } from "framer-motion"; 
import { signOut } from 'next-auth/react';
import CustomButton from '@repo/ui/Button';
import Image from "next/image";

import { NavbarLinks } from "../../data/Navbar-links";
import { ModeToggle } from "./Toggle/ToggleTheme";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./shad/ui/dropdown-menu";  

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
  const session = useSession();
  const Router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [action, setAction] = useState(false);
  const { theme } = useTheme(); 
  const router = usePathname();

  const handleSignOut = async () => {
    await signOut({ redirect: false });  
    Router.push('/auth/login');  
  };

  const token = session.data; 
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.0, ease: "easeOut" }}  
        className="fixed top-0 left-0 w-full z-30 bg-white dark:bg-richblack-900 flex h-20 items-center justify-center shadow-[10px_-5px_50px_-5px] shadow-blue-200"
      >
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl lg:text-3xl font-semibold">LearnNest</h1>
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
          <div className="hidden md:flex gap-3 items-center">
            {token === null && (
              <Link href={"/auth/login"}>
                <Button className="bg-transparent h-12 text-black dark:text-white rounded-lg hover:bg-transparent hover:ring-2 focus:ring-2">Login</Button> 
              </Link>
            )}
            {token === null && (
              <Link href={"/auth/signup"}>
                <Button className="bg-[#9C49CF] h-12 text-white rounded-lg hover:bg-[#671997] focus:ring-2">
                  Signup
                </Button>
              </Link>
            )}
            {token && (
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    {session.data?.user?.image ? (
                      <div className="bg-[#c567ff] w-12 h-12 flex items-center justify-center rounded-full cursor-pointer text-2xl text-white">
                        <img src={session.data.user.image} alt={'Profile'} className="rounded-full"/>
                      </div>
                    ) : (
                      <div className="bg-[#c567ff] w-12 h-12 flex items-center justify-center rounded-full cursor-pointer text-2xl text-white">
                        {session.data.user?.name?.charAt(0)}
                      </div>
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="">
                    <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                    <DropdownMenuSeparator /> 
                    <DropdownMenuItem>
                      <Link href="/dash/myprofile" className="flex flex-row items-center justify-center gap-2">
                        <LayoutDashboard/>
                        My Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem> 
                      <Link href="/dash/myprofile" className="flex flex-row items-center justify-center gap-2">
                        <Settings/>
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator /> 
                    <DropdownMenuItem className="flex items-center justify-center">
                      <CustomButton active={true} width_Button='fit' onClick={handleSignOut}>
                        <p className="text-sm">LogOut</p>
                        <LogOutIcon/>
                      </CustomButton>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
            <ModeToggle/>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle/>
            <Button
              onClick={() => { setToggle(!toggle); setAction(true); }}
              className="bg-white bg-transparent focus:bg-transparent hover:bg-transparent text-white rounded-lg"
            >
              {toggle ? <X color="#9C49CF"/> : <AlignJustify color="#9C49CF" />}
            </Button>
          </div>
        </div>
      </motion.div>
      <div className="relative block md:hidden mt-20">
        {action && <Sidebar onClick={() => { setToggle(!toggle); }} State={toggle} />} 
      </div> 
      <div className="pt-5 md:pt-20">
        {children}
      </div>
    </div>
  );
};

export default Navbar;
