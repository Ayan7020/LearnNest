"use client";
import AnimatedButton from "@repo/ui/AnimatedButton";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@repo/ui/TypeWritterEffect";
import { motion } from "framer-motion";

export default function Page(): JSX.Element {
  return (
    <div>
      <div className="relative mx-auto flex flex-col items-center text-white justify-between  w-11/12 max-w-maxContent">
        <Link href={"/signup"} className="mt-10">
          <AnimatedButton svg={true}>Become an Instructor</AnimatedButton>
        </Link>
        <motion.div 
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center text-4xl font-semibold mt-10 text-black dark:text-white">
          Empower Your Future with
          <span className="bg-[#9C49CF] text-transparent bg-clip-text font-bold">
            {" "}
            Coding Skills
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className=" mt-4 w-[90%] text-center text-lg font-bold text-slate-500"
        >
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </motion.div>
      </div>
    </div>
  );
}
