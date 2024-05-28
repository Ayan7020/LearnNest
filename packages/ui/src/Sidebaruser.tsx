'use client';
import { LayoutDashboard, LogOut, Monitor, Plus, Settings, User } from "lucide-react";
import * as Icons from "lucide-react"
import { UserSideBar } from "@repo/data/Usersidebarconfig"
import Sidebarlinks from "./SidebarLinks";
import PlainButton from "@repo/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";


const SidebarUser = () =>{ 

    const router = usePathname();
    return(
        <div className="bg-[#9d00ff1d] w-[13%] hidden md:block"> 
            <ul className="mt-20  w-full flex flex-col gap-4">
                {UserSideBar.map((element,index):any => {
                    return (
                        <li key={index} className="w-full">
                            <Sidebarlinks links={element.path} iconName={element.icon} name={element.name} />
                        </li>
                    )
                })} 
            </ul>  
            <div className="flex flex-col items-center mt-6"> 
                <div className="h-[10px] border-t-4 border-[#9c49cf] rounded-xl w-[80%] "></div> 
            </div>
            <div className="mt-5  flex flex-col gap-4  w-full ">
            <Sidebarlinks links={'/dashboard'} iconName={'Settings'} name={'Settings'} />
              <div className="ml-6">
                    <PlainButton width_Button="fit" active={false} >
                            <LogOut/>
                            Logout
                    </PlainButton>
              </div>  
            </div> 
        </div>
    ) 
}


export default SidebarUser;