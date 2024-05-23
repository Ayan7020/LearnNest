

import Image from "next/image"
import logo1 from "../public/Logo1.svg"
import logo2 from "../public/Logo2.svg"
import logo3 from "../public/Logo3.svg"
import logo4 from "../public/Logo4.svg"
import timelineimage from "../public/TimelineImage.png"
import { motion } from "framer-motion"

const timeline = [
    {
        Logo: logo1,
        heading: "Strategic Thinking",
        Description:"Empowering leaders to make informed",
    },
    {
        Logo: logo2,
        heading: "Innovative Leadership",
        Description:"Fostering creativity and innovation within your team",
    },
    {
        Logo: logo3,
        heading: "Effective Communication",
        Description:"Master the art of clear and persuasive communication",
    },
    {
        Logo: logo4,
        heading: "Team Building",
        Description:"Navigate and lead through organizational change with confidence",
    },
];

const Timelinesection = () => {
    return (<div className="overflow-hidden"> 
        <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
            <div className="lg:w-[45%] flex flex-col  lg:gap-3">
                {
                    timeline.map((element,index) => {
                        return (
                            <div className="flex flex-col lg:gap-3"
                            key={index}>
                                <div className="flex gap-6 ">
                                    <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                                        <Image src={element.Logo} alt="Logo"/>
                                    </div>
                                    <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} transition={{duration:1.0,ease:"easeInOut"}}>
                                        <h2 className="font-semibold text-[18px] ">{element.heading}</h2>
                                        <p className="text-base">{element.Description}</p>
                                    </motion.div>
                                </div>
                                <div className={`${index === 3? "hidden":""} h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px] `}></div>
                            </div>
                        )
                    })
                }
            </div>
            <div  
            className="relative w-fit h-fit rounded-xl shadow-blue-200 shadow-[0px_0px_30px_0px]">
                <Image src={timelineimage} alt="Image" className="rounded-xl"/> 
                <motion.div   
                className="bg-caribbeangreen-700 absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] top-0 lg:top-auto  flex flex-col lg:flex-row uppercase text-white py-5 gap-4 lg:gap-0 lg:py-10">
                    <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
                        <p className="text-3xl font-bold w-[75px]">10</p>
                        <p className="text-caribbeangreen-300 text-sm w-[75px]">Years of Experience</p>
                    </div>
                    <div className="flex gap-5 items-center lg:px-14 px-7">
                        <p className='text-3xl font-bold w-[75px]'>250</p>
                        <p className='text-caribbeangreen-300 text-sm w-[75px]'>Types of Courses</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>)
}

export default Timelinesection