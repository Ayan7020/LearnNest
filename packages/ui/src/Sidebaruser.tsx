'use client'; 
import { UserSideBar } from "@repo/data/Usersidebarconfig";
import { UserSideBarItem } from "@repo/types/Usersidebar";
import Sidebarlinks from "./SidebarLinks"; 
import { usePathname } from "next/navigation"; 
import { motion } from "framer-motion"


const SidebarUser = () =>{ 

    const router = usePathname();
    return(
        <motion.div 
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{ease:"backIn",duration:0.5}}
        className="border-r-4 fixed  border-richblack-100  w-[13%] hidden xl:block h-full"> 
            <ul className="mt-20  w-full flex flex-col gap-4">
                {UserSideBar.map((element: UserSideBarItem,index):any => {
                    return (
                        <li key={index} className="w-full">
                            <Sidebarlinks links={element.path} iconName={element.icon} name={element.name} />
                        </li>
                    )
                })} 
            </ul>  
            <div className="flex flex-col items-center mt-6"> 
                <div className="h-[10px] border-t-2 border-[#9c49cf] rounded-xl w-[80%] "></div> 
            </div>
            <div className="mt-5  flex flex-col gap-4  w-full ">
            <Sidebarlinks links={'/dash/settings'} iconName={'Settings'} name={'Settings'} /> 
            </div> 
        </motion.div>
    ) 
}


export default SidebarUser;