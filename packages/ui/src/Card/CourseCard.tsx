"use client";
import { BackgroundGradient } from "@repo/ui/BackgroundGradient";
import { BookOpenCheck, Users } from "lucide-react";
const CourseCard = ({cardData,currentCard,onClick}:any) => {
    return (
            <div className={` w-full md:w-[360px] lg:w-[30%] cursor-pointer `} onClick={onClick} >
                <BackgroundGradient className={` rounded-[22px] h-[300px] ${currentCard === cardData.heading ? "bg-white   text-richblack-25": "bg-richblack-800  text-richblack-25"}`} > 
                    <div className='flex flex-col gap-3 p-6 border-b-[2px] border-richblack-400 border-dashed h-[80%]'>
                        <p className={`font-semibold text-[20px] ${currentCard === cardData.heading ? "text-richblack-800": ""}`}>
                            {cardData.heading}
                        </p>
                        <p className="text-richblack-400">{cardData.description}</p>
                    </div>
                    <div className={`flex flex-row justify-between px-6 py-4 font-medium ${currentCard === cardData.heading ? " text-blue-300": " text-richblack-300"} `}>
                        <div className='flex items-center gap-2 text-[16px]'>
                            <Users/>
                            <span>{cardData.level}</span>
                        </div>
                        <div className='flex items-center gap-2 text-[16px]'>
                            <BookOpenCheck/>
                            <span>{cardData.lessionNumber} Lessons</span>
                        </div>
                     </div>
                </BackgroundGradient>
            </div>  
    )
}

export default CourseCard;