"use client";

import PlainButton from "@repo/ui/Button";
import { Edit2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion"
import toast from "react-hot-toast";

const Page = () => {
    const {data:session, status} = useSession();
    if(status === "loading"){
        toast.loading("Loading...",{
            id:'LoadingSession1'
        })
    }  
    return (    
        <motion.div 
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        transition={{ease:"linear",duration:0.5}}
        className="p-4 md:p-8 lg:p-12">
            <div className="space-y-10">
                <h1 className="text-2xl md:text-4xl font-semibold">My Profile</h1>
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 rounded-md border-2 bg-richblack-50 dark:border-[1px] border-richblack-700 dark:bg-richblack-800 p-4 md:p-8 lg:px-12">
                    <div className="flex items-center gap-x-3 md:gap-x-4">
                        <img
                            src={`${session?.user.image}`}
                            alt="Profile"
                            className="w-[50px] md:w-[78px] rounded-full"
                        />
                        <div className="space-y-1">
                            <p className="text-md md:text-lg font-semibold text-black dark:text-richblack-5">
                                {session?.user.name}
                            </p>
                            <p className="text-md text-black dark:text-richblack-300">
                                {session?.user.email}
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-auto ">
                        <PlainButton active={true} width_Button="full">
                            <p className="text-md md:text-lg font-semibold">Edit</p>
                            <Edit2Icon width={20} />
                        </PlainButton>
                    </div>
                </div>
                {/* {About} */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 rounded-md border-2 bg-richblack-50 dark:border-[1px] border-richblack-700 dark:bg-richblack-800 p-4 md:p-8 lg:px-12">
                    <div className="space-y-6">
                        <p className="text-md md:text-lg font-semibold text-black dark:text-richblack-5">About</p>
                        <p className="text-md text-black dark:text-richblack-300">Write Something About Yourself</p>
                    </div>
                    <div className="w-full md:w-auto ">
                        <PlainButton active={true} width_Button="full">
                            <p className="text-md md:text-lg font-semibold">Edit</p>
                            <Edit2Icon width={20} />
                        </PlainButton>
                    </div>
                </div>
                {/* Personal  Details */}
                 <div className="w-full flex flex-col gap-4 md:gap-0 rounded-md border-2 bg-richblack-50 dark:border-[1px] border-richblack-700 dark:bg-richblack-800 p-4 md:p-8 lg:px-12">
                    <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-between">
                        <p className="text-md md:text-lg font-semibold text-black dark:text-richblack-5">Personal Details
                        </p>
                        <div className="w-full md:w-auto ">
                        <PlainButton active={true} width_Button="full">
                            <p className="text-md md:text-lg font-semibold">Edit</p>
                            <Edit2Icon width={20} />
                        </PlainButton>
                    </div>
                    </div>
                    <div> 
                        
                    </div>
                 </div>
            </div>
        </motion.div>
    );
};

export default Page;
