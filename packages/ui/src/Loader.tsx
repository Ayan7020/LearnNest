"use client";
import { LoaderCircle } from "lucide-react";


const Loader = () => {
    return <div className="animate-spin w-[100px] flex flex-col items-center shadow-[10px_-5px_50px_-5px]  shadow-blue-200 rounded-full "><LoaderCircle width={50} height={100}/></div> 
}

export default Loader;