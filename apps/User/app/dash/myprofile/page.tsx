"use client";

import PlainButton from "@repo/ui/Button";
import { Edit2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"


const Page = () => {
    const router = useRouter()
    const {data:session, status} = useSession();  

    const HandleEditButton = () => {
        router.push('/dash/settings')
    }
    return (     
        <motion.div 
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        transition={{ease:"linear",duration:0.5}}
        className="p-4 md:p-8 lg:p-12 h-screen">
            <div className="space-y-10">
                <h1 className="text-2xl md:text-4xl font-semibold">My Profile</h1>
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 rounded-md border-2 bg-richblack-50 dark:border-[1px] border-richblack-700 dark:bg-richblack-800 p-4 md:p-8 lg:px-12">
                    <div className="flex items-center gap-x-3 md:gap-x-4">
                        {!session?.user.image ? <div className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer text-2xl text-white  bg-[#c567ff]">
                            {session?.user.FirstName?.split('')[0]}
                        </div>:<img
                            src={`${session?.user.image}`}
                            alt={`Image`}
                            className="w-[50px] md:w-[78px] rounded-full"
                        />}
                        <div className="space-y-1">
                            <p className="text-md md:text-lg font-semibold text-black dark:text-richblack-5">
                                {session?.user.FirstName + ' ' + session?.user.LastName}
                            </p>
                            <p className="text-md text-black dark:text-richblack-300">
                                {session?.user.email}
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-auto ">
                        <PlainButton active={true} width_Button="full" onClick={HandleEditButton}>
                            <p className="text-md md:text-lg font-semibold">Edit</p>
                            <Edit2Icon width={20} />
                        </PlainButton>
                    </div>
                </div>
                {/* {About} */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 rounded-md border-2 bg-richblack-50 dark:border-[1px] border-richblack-700 dark:bg-richblack-800 p-4 md:p-8 lg:px-12">
                    <div className="space-y-6">
                        <p className="text-md md:text-lg font-semibold text-black dark:text-richblack-5">About</p>
                        <p className="text-md text-black dark:text-richblack-300">
                        {session?.user.AdditionalDetails.about? session.user.AdditionalDetails.about:'Write Something About Yourself'} 
                        </p>
                    </div>
                    <div className="w-full md:w-auto ">
                        <PlainButton active={true} width_Button="full" onClick={HandleEditButton}>
                            <p className="text-md md:text-lg font-semibold">Edit</p>
                            <Edit2Icon width={20} />
                        </PlainButton>
                    </div>
                </div>
                {/* Personal  Details */}
                 <div className="w-full flex flex-col gap-y-10  rounded-md border-2 bg-richblack-50 dark:border-[1px] border-richblack-700 dark:bg-richblack-800 p-4 md:p-8 lg:px-12">
                    <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-between">
                        <p className="text-md md:text-lg font-semibold text-black dark:text-richblack-5">Personal Details
                        </p>
                        <div className="w-full md:w-auto ">
                        <PlainButton active={true} width_Button="full" onClick={HandleEditButton}>
                            <p className="text-md md:text-lg font-semibold">Edit</p>
                            <Edit2Icon width={20} />
                        </PlainButton>
                    </div>
                    </div>
                    <div className="flex max-w-[500px] justify-between"> 
                    <div className="flex flex-col gap-y-5"> 
                        <div>
                            <p className="mb-2 text-sm text-richblack-600">First Name</p>
                            <p className="text-sm font-medium text-black dark:text-richblack-5">{session?.user.FirstName}</p>
                        </div>  
                        <div>
                            <p className="mb-2 text-sm text-richblack-600">Email</p>
                            <p className="text-sm font-medium text-black dark:text-richblack-5">{session?.user.email}</p>
                        </div>  
                        <div>
                            <p className="mb-2 text-sm text-richblack-600">Gender</p>
                            <p className="text-sm font-medium text-black dark:text-richblack-5">
                                {session?.user.AdditionalDetails.Gender? session.user.AdditionalDetails.Gender:'Add Gender'}
                            </p>
                        </div>  
                    </div> 
                    <div className="flex flex-col gap-y-5">
                        <div>
                            <p className="mb-2 text-sm text-richblack-600">Last Name</p>
                            <p className="text-sm font-medium text-black dark:text-richblack-5">{session?.user.LastName}</p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
                            <p className="text-sm font-medium text-black dark:text-richblack-5">
                            {session?.user.AdditionalDetails.contactNumber? session.user.AdditionalDetails.contactNumber:'Add Contact Number'}
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
                            <p className="text-sm font-medium text-black dark:text-richblack-5">
                                {session?.user.AdditionalDetails.DateofBirth
                                    ? (session.user.AdditionalDetails.DateofBirth instanceof Date
                                        ? session.user.AdditionalDetails.DateofBirth.toLocaleDateString()
                                        : session.user.AdditionalDetails.DateofBirth)
                                    :'19-05-2024'}  
                            </p> 
                        </div>
                    </div>
                    </div>
                 </div>
            </div>
        </motion.div>
    );
};

export default Page;
