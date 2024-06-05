import { ButtonHTMLAttributes, forwardRef } from "react";

interface SmallbuttonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    active: boolean; 
}
const Smallbutton = forwardRef<HTMLButtonElement,SmallbuttonProps>(({children,active,...props},ref) => {
    return <button  
    className={`${active ? 'bg-[#9C49CF] text-white hover:bg-[#9C49CF]' : 'bg-white text-black hover:bg-white'} flex justify-center items-center width-fit p-2 px-4 gap-2 rounded-sm hover:scale-95 duration-200 transition-all`}
    ref={ref}
    {...props}>  
        {children}
    </button>
})

export  default Smallbutton