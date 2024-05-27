"use client";
import { useSession } from "next-auth/react";

const Page = () => {
    const session = useSession();
    return <div>
        My Profile :- 
        {JSON.stringify(session)}
    </div>
}

export default Page;