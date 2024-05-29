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

const Bottombarlinks: FC<PageProps> = ({ links, iconName, name }) => {
    const router = usePathname();
    const IconComponent = Icons[iconName] as FC;
    return (
        <div className={`w-full h-20 flex flex-col justify-center items-center ${router === links ? "dark:bg-[#000000] transition-all duration-200 rounded-xl" : "text-richblack-300"}`}>
            <Link href={links} className="flex flex-col gap-2 items-center justify-center w-full h-full p-2 text-center break-words">
                {IconComponent && <IconComponent/>}
                <p className="leading-tight text-xs">{name}</p>
            </Link>
        </div>
    );
}

export default Bottombarlinks;
