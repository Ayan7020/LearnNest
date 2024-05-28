"use client";  
 
import { useSession } from "next-auth/react";


const Page = () => {
    const session = useSession();
    return <div className="w-[60%] ">    
        My Profile Page
    </div>
}

export default Page;