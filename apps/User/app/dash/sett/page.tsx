"use client";
 
import SmallButton from "@repo/ui/SmallButton";
import { Edit2Icon, UploadCloud } from "lucide-react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion" 
import PersonalDetails from "../../../components/PersonalDetails";

const Page = () => {
    const {data:session, status} = useSession();  
    return (    
        <motion.div 
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        transition={{ease:"linear",duration:0.3}}
        className="p-4 md:p-8 lg:p-12 h-screen">
            <div className="space-y-10">
                <h1 className="text-2xl md:text-4xl font-semibold">Edit Profile</h1>
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 rounded-md border-2 bg-richblack-50 dark:border-[1px] border-richblack-700 dark:bg-richblack-800 p-4 md:p-8 lg:px-12">
                    <div className="flex items-center gap-x-3 md:gap-x-4">
                        {!session?.user.image ? <div className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer text-2xl text-white  bg-[#c567ff]">
                            {session?.user.FirstName?.split('')[0]}
                        </div>:<img
                            src={`${session?.user.image}`}
                            alt={`Image`}
                            className="w-[50px] md:w-[78px] rounded-full"
                        />}
                        <div className="space-y-3">
                            <p className="text-md md:text-lg font-semibold text-black dark:text-richblack-5">
                                    Change Profile Picture
                            </p> 
                             <div className="flex gap-3">
                                <SmallButton active={false}>Select</SmallButton>
                                <SmallButton active={true}>
                                    Upload
                                    <UploadCloud/>
                                </SmallButton>
                             </div>
                        </div>
                    </div> 
                </div> 
                <div className="w-full rounded-md border-2 bg-richblack-50 dark:border-[1px] border-richblack-700 dark:bg-richblack-800 p-4 md:p-8 lg:px-12">
                      {/* <PersonalDetails/>  */}
                </div>
            </div>
        </motion.div>
    );
};

export default Page;
