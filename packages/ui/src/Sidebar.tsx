"use client";
import { motion } from 'framer-motion';
import { NavbarLinks } from "../../data/Navbar-links";
import Dropdown from "./dropdown/Dropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./shad/ui/button";
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react';
import  {useRouter} from "next/navigation"
import CustomButton from '@repo/ui/Button'

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



const variants = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3, 
        },
    },
    closed: {
        opacity: 0,
        x: "-100%",
        transition: {
            duration: 0.3,  
        },
    },
};

const Sidebar = ({onClick,State}:{ 
  onClick: () => void,
  State: boolean
}) => {
  const session = useSession();
  const Router = useRouter();
  const token = session.data;
  const router = usePathname();
  const isOpen = State; 
  const [shouldRender, setShouldRender] = useState(true);

  const handleSignOut = async () => {
    await signOut({ redirect: false }); 
    Router.push('/auth/login'); 
  };

  return (
    <motion.div
      className=" fixed bg-richblack-25 border-r-4 border-pure-greys-300 dark:bg-richblack-900 w-[50%] h-[100%] dark:text-white  flex flex-col gap-4 pt-20 top-0 z-10"
      initial={isOpen? "closed":"open"}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <ul className="flex flex-col gap-4 text-[20px] w-full">
        {NavbarLinks.map((link, index) => (
          <li key={index} className="w-full">
            {link.title === "Catalog" ? (
              <Dropdown Title={link.title} links={subLinks} />
            ) : (
              <Link href={link?.path || "/"} onClick={onClick}> 
                <p
                  className={`cursor-pointer ${router === link?.path ? "text-[#9C49CF]" : "dark:text-white hover:text-[#9C49CF]"} flex flex-col items-center`}
                >
                  {link.title}
                </p>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2 pt-4 border-t-2 border-black dark:border-white  items-center">
        {token === null && <Link href={'/auth/login'} className='w-full flex flex-col items-center'> 
        <Button onClick={onClick} className="bg-transparent border border-white text-black dark:text-white rounded-[15px] px-6 py-3 hover:bg-transparent ring-1 dark:hover:text-white  transition-colors duration-300 ease-in-out focus:ring-2 w-[70%] ">
          Login
        </Button>
        </Link>}
        {token === null && <Link href={'/signup'} className='w-full flex flex-col items-center'>
        <Button className="bg-[#9C49CF] text-white rounded-[15px] px-6 py-3 hover:bg-[#671997] transition-colors duration-300 ease-in-out w-[70%]" onClick={onClick}>
          Signup
        </Button>
        </Link>}
        {token && (
         <Link href={'/dash/myprofile'} className='w-full  flex flex-col items-center'>
         <CustomButton  onClick={onClick} width_Button='full' active={true}>
           Dashboard
         </CustomButton> 
         </Link>)}
        {token && ( 
         <CustomButton  onClick={handleSignOut} width_Button='full' active={false}>
           Signout
         </CustomButton>)}
      </div>
    </motion.div>
  );
};

export default Sidebar;
