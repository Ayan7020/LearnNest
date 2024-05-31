"use client";  
 
import { useSession } from "next-auth/react";


const Page = () => {
    const session = useSession();
    return <div className="w-[60%] h-screen">    
        Hii {session.data?.user.name}
        {JSON.stringify(session.data?.user.Authenticated)}
    </div>
}

export default Page;