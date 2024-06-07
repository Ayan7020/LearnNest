"use client";
import Link from "next/link";
import * as Icons from "lucide-react";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface PageProps {
    links: string;
    iconName: keyof typeof Icons;
    name: string;
}

const Page: FC<PageProps> = ({ links, iconName, name }) => {
    const router = usePathname();
    const IconComponent = Icons[iconName] as FC;
    
    return (
        <div className={`w-full font-semibold hover:text-white ${router === links? "bg-[#9c49cf56] border-l-4 border-[#9c49cf] transition-all duration-200": "text-richblack-300"}`}>
            <Link href={links} className={`flex gap-4 p-2 w-full pl-6`}>  
                {IconComponent && <IconComponent />} {name}
            </Link>
        </div>
    );
}

export default Page;
