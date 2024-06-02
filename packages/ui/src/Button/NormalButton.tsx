import { forwardRef } from "react";
import { Button } from "../shad/ui/button";  
import { ButtonProps } from "@repo/types/ButtonProps";

const PlainButton = forwardRef<HTMLButtonElement, ButtonProps>(({children,active,width_Button,...props},ref) => {
    return (
        <div className="flex justify-center items-center w-full">  
            <Button 
            ref={ref} 
            className={`w-${width_Button} text-[16px] md:text-[20px] flex justify-center items-center gap-4 px-4 md:px-8 py-3 md:py-6 hover:scale-95 duration-200 transition-all
            ${active? "bg-[#9C49CF] text-white hover:bg-[#9C49CF]":"bg-white text-black hover:bg-white"}`}
            {...props}>{children}</Button>
        </div>
    )
})

export default PlainButton
