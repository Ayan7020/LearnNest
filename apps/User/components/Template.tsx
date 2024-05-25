"use client"
import Link from "next/link";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import { motion } from "framer-motion";
import SignupImage from "../public/signup.webp";
import Googlepng from "../public/Google.png";
import Image from "next/image"; 


interface TemplateProps  { 
    title: string,
    description1: string, 
    description2: string,
    image: string,
    formType: string 
}

const Template = ({ title, description1, description2, image, formType }: TemplateProps) => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{opacity:1}}
        transition={{ease:"linear",duration: 1.0}}
        className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12"> 
            <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
                <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-900 dark:text-richblack-5">
                    {title}
                </h1> 
                <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
                    <span className="text-richblack-200 dark:text-richblack-100 block">{description1}</span> 
                    <span className="font-edu-sa font-bold italic text-blue-200 dark:text-blue-100">{description2}</span>
                </p>
                {formType === "signup"? <SignupForm/>:<SigninForm/>}     
                <div className="flex flex-col justify-center items-center gap-3 mt-4"> 
                <div>
                    <p>Or</p>
                </div>
                <div className="w-full flex flex-col gap-5">
                <button type="submit" className="bg-white flex flex-row items-center justify-center gap-5 text-black text-[13px] sm:text-[16px] font-bold rounded p-2 text-center mt-2 hover:scale-95 transition-all duration-200 ring-2 dark:ring-0 hover:ring-2 ring-[#9C49CF] w-full">
                <Image src={Googlepng} alt="Google" className="w-8 "/>
                Sign In with Google     
                </button>
                <Link href={"/"} className="text-richblack-900 dark:text-white  flex flex-row justify-center items-center gap-3 underline">Already have an Account?<p className="text-blue-100 underline">Login</p></Link>
                </div>
                </div> 
            </div> 
            <div className="rounded-xl ">
                <Image src={SignupImage} alt="Image" className="rounded-xl shadow-[10px_-5px_50px_-5px] shadow-blue-200"/>
            </div>
        </motion.div>
    )
} 

export default Template;