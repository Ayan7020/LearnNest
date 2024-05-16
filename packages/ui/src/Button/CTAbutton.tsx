import Link from "next/link";

interface CTAbuttonProps {
    children: React.ReactNode;
    active: boolean;
    linkto: string;
}

const Button = ({children, active, linkto}: CTAbuttonProps) => {
    return <Link href={linkto}>
        <div className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${active ? "bg-[#9C49CF] ring-2 dark:ring-0 text-white":" bg-white text-black shadow-xl ring-2"}  hover:scale-95 transition-all duration-200 hover:shadow-none `} >
            {children}
        </div>
    </Link>
}

export default Button; 