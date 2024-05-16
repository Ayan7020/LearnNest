import CTAButton from "@repo/ui/button";
import { ArrowRight } from "lucide-react";
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion";
import "./css/CodeCard.css"

interface CardButtonProps {
    btnText: string;
    linkto: string;
    active: boolean;
}

interface CodeCardProps {
    position: string;
    heading: JSX.Element | string;
    subheading: JSX.Element | string;
    ctabtn1: CardButtonProps;
    ctabtn2: CardButtonProps;
    codeblock: string;
    backgroudGradient?: string;
    codeColor: string;
}
const Card = ({position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroudGradient, codeColor}:CodeCardProps) =>{
    return <motion.div 
        initial={{opacity:0, y:100}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeInOut" }} 
        viewport={{ once: true}}
        className={`flex ${position} my-20 justify-between flex-col  gap-10`}>
        <div className="w-[100%] lg:w-[50%]  flex flex-col gap-8 text-black dark:text-white">
            {heading}
            <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3 ">
                {subheading}
            </div>
            <div className="flex gap-7 mt-7 items-center">
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto} >
                    <div className="flex gap-2 items-center">
                        {ctabtn1.btnText}
                        <ArrowRight/>
                    </div>
                </CTAButton>
                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto} >
                    <div>
                        {ctabtn2.btnText}
                    </div>
                </CTAButton>
            </div>
        </div>
        <div className="overflow-hidden">
        <motion.div
        initial={{opacity: 0, x:100}} 
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        viewport={{ once: true}}
        className="h-fit  dark-code  flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6  w-[100%] lg:w-[470px] rounded-full">
            <div className="absolute mgradient-custo w-[30%] h-[257px] rounded-full blur-2xl opacity-20 -left-2 -top-2"></div>
            <div className="text-center flex select-none flex-col w-[10%] text-richblack-400 font-inter font-bold full">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>
            <div className={`w-[90%] flex flex-col gap-2 font-bold  font-mono  text-white dark:${codeColor}  pr-1`} >
                <TypeAnimation
                 sequence={[codeblock,2000,""]} 
                 repeat={Infinity}
                 cursor={true}
                 style={
                    {
                            whiteSpace:"pre-line",
                            display: "block"
                    }
                 }
                 omitDeletionAnimation={true}
                />
            </div>
        </motion.div>
    </div>
    </motion.div>
} 

export default Card