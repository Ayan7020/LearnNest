"use client"
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../shad/ui/button"; 
import "../Css/Animated.Button.css";

interface AnimatedButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    width?: number;
    height?: number;
    svg?: boolean;
}

const AnimatedButton = ({ children, onClick, width, height, svg }: AnimatedButtonProps) => {
    return (
        <motion.div
            className=" flex justify-center items-center "
            style={{ width, height }}
            onClick={onClick}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
        > 
            <Button className="flex flex-row items-center px-5 sm:px-10 h-[50px] gap-4 bg-[#9C49CF] text-white rounded-full font-bold transition-all duration-200 hover:scale-95 hover:bg-[#6d3292] w-fit hover:drop-shadow-none text-md sm:text-xl ring-4 ring-blue-500 dark:ring-blue-200">
                {children}
                {svg && (
                    <motion.div
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
                    >
                        <ArrowRight />
                    </motion.div>
                )}
            </Button> 
        </motion.div>
    );
};

export default AnimatedButton;
