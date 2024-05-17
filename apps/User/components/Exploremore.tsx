"use client";
import {HomePageExplore} from "@repo/data/HomepageExplorerData"
import { useState } from 'react'; 
import CourseCard from "@repo/ui/CourseCard";
import { motion } from "framer-motion"

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const Exploremore = () => {
    const [CurrentTab,setCurrentTab] = useState(HomePageExplore[2]?.tag)
    const [Courses,setCourses] = useState(HomePageExplore[2]?.courses)
    const [CurrentCard,setCurrentCard] = useState(HomePageExplore[2]?.courses[1]?.heading)

    const setMycourse = (value:any) => {
        setCurrentTab(value)
        const result = HomePageExplore.filter((course) => course.tag === value )
        setCourses(result[0]?.courses)

    }
    return <motion.div  viewport={{once: true}} initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{ duration: 1.0, ease: "easeOut" }}> 
        <div className='text-4xl font-semibold text-center text-black dark:text-white'>
            Unlock the
            <span className="text-[#9C49CF] text-transparent bg-clip-text font-bold">
              {" "}Power of Code {" "}
              </span>
        </div>
        <p className="text-center text-richblack-300  text-lg font-semibold mt-3 mb-3 lg:mb-0">
        Learn to build anything you can imagine
        </p>
        <div className="hidden max-w-full lg:flex mt-5 shadow-custom flex-row gap-1 rounded-full  dark:bg-richblack-800 mb-5 border-black border-[1px] p-1">
            {
                tabsName.map((element,index) => {
                    return (
                        <div 
                        className={`text-[16px] flex flex-row items-center gap-9 font-medium ${CurrentTab === element? "bg-richblack-900 text-richblack-5 font-medium":"text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-8 py-2`}
                        key={index}
                        onClick={() => {setMycourse(element)}}
                        >
                            {element}
                        </div>
                    )
                })
            }
        </div>
        <div className='hidden lg:block lg:h-[200px]'></div>
          <motion.div  className='lg:absolute gap-10 justify-center lg:gap-0  lg:justify-between flex  flex-wrap w-full lg:left-1 lg:-translate-y-[50%] text-black lg:mb-0 mb-9 lg:px-0 px-3'> 
                {
                    Courses?.map((element,index) => {
                        return (
                            <CourseCard 
                             key={index}
                             cardData={element}
                             currentCard={CurrentCard}      
                             onClick = {() => {setCurrentCard(element.heading)}} 
                            />
                        )
                    })
                }   
        </motion.div>  
    </motion.div>
}

export default Exploremore;