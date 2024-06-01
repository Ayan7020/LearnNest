"use client";
import AnimatedButton from "@repo/ui/AnimatedButton";
import Link from "next/link";
import CTAButton from "@repo/ui/button";
import CodeCard from "@repo/ui/card";
import { motion } from "framer-motion";
import Banner from "../assets/banner.mp4" 
import Exploremore from "../components/Exploremore";
import { ArrowRight } from "lucide-react";
import "../CSS/HomeBg.css"
import Timelinesection from "../components/Timelinesection";
export default function Page(): JSX.Element {
  return (
    <div>
      <div className="relative mx-auto flex flex-col items-center text-white justify-between  w-11/12 max-w-maxContent bg-green-500">
        <Link href={"/signup"} className="mt-10">
          <AnimatedButton svg={true}>Become an Instructor</AnimatedButton>
        </Link>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="text-center text-4xl font-semibold mt-10 text-black dark:text-white">
          Empower Your Future with
          <span className="text-[#9C49CF] text-transparent bg-clip-text font-bold">
            {" "}
            Coding Skills
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" ,delay: 1.0}}
          className=" mt-4 w-[90%] text-center text-lg font-bold text-richblack-300"
        >
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }} 
        className='flex flex-row gap-7 mt-8'>
          <CTAButton active={true}  linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false}  linkto={"/login"}>
            Book a Demo  
          </CTAButton>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{once: true}}
        className='mx-3 my-14 shadow-[10px_-5px_50px_-5px] shadow-blue-200 rounded-full hover:translate-y-[-10px] transition-all'>
          <video className="rounded-xl" muted loop autoPlay>
            <source src={Banner} type="video/mp4" className=""/>
          </video>
        </motion.div>
        <div>
       <div>
        <CodeCard
          position={"lg:flex-row"}
          heading={
            <div className='text-4xl font-semibold'>
              Unlock your
              <span className="text-[#9C49CF] text-transparent bg-clip-text font-bold">
              {" "}coding potential  {" "}
              </span>
              with our online courses.
            </div>
          }
          subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
          ctabtn1={{
            btnText: "Try it yourself",
            linkto: "/signup",
            active: true
          }}
          ctabtn2={{
            btnText: "Learn More",
            linkto: "/login",
            active: false
          }}
          codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>LearnNest</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a></nav>\n</body>`}
          codeColor={"text-yellow-25"}
        />
      </div>
      <div>
        <CodeCard
          position={"lg:flex-row-reverse"}
          heading={
            <div className='w-[100%] text-4xl font-semibold lg:w-[50%]'>
              Start
              <span className="text-[#9C49CF] text-transparent bg-clip-text font-bold">
              {" "}coding in seconds {" "}
              </span> 
            </div>
          }
          subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
          ctabtn1={{
            btnText: "Continue Lesson",
            linkto: "/signup",
            active: true
          }}
          ctabtn2={{
            btnText: "Learn More",
            linkto: "/login",
            active: false
          }}
          codeblock={`import React from "react";\nimport CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          codeColor={"text-white"}
        />
      </div>
      </div>
        <Exploremore/>
      </div>
      <div className="bg-pure-greys-100  dark:bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg  h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="hidden lg:block h-[180px]"></div>
            <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            viewport={{once: true}}
            className="mt-8 lg:mt-0 flex flex-row gap-7">
              <CTAButton active={true} linkto="/auth/signup">
                  <div className="flex items-center gap-3">
                     Explore Full Catalog
                     <ArrowRight/>
                  </div>
              </CTAButton>
              <CTAButton active={false} linkto="/auth/signup">
                  <div>
                     Learn more  
                  </div>
              </CTAButton>
            </motion.div>
          </div>
        </div>
        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
            <div className="flex flex-col lg:flex-row justify-between gap-5 mb-10 -mt-20 lg:mt-[95px] ">
              <div className='text-4xl font-semibold lg:w-[45%]'>
                  Get the Skills you need for a
              <span className="text-[#9C49CF] text-transparent bg-clip-text font-bold">
                  {" "}Job that is in demand {" "}
              </span>
              </div>
              <div className="flex flex-col gap-10 lg:w-[40%] items-start ">
                <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                </div>
                <CTAButton active={true} linkto={"/signup"}>
                  <div>
                    Learn more
                  </div>
                </CTAButton>
              </div>
            </div>
            <Timelinesection/>
        </div> 
      </div>
    </div>
  );
} 
