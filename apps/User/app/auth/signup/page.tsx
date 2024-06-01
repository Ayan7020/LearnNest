"use client";
import Template from "../../../components/Template";
import { useRecoilState } from "recoil"; 
import { SignupLoading } from "@repo/store/Loading"
import { LoaderCircle } from "lucide-react";



export default function Page() {
    const [loading,setloading] = useRecoilState(SignupLoading)

    return  <> 
        {loading? <div className="animate-spin w-[100px] flex flex-col items-center shadow-[10px_-5px_50px_-5px]  shadow-blue-200 rounded-full "><LoaderCircle width={50} height={100}/></div> 
        : <Template
        title="Join the millions learning to code with StudyNotion for free" 
        description1="Build skills for today, tomorrow, and beyond." 
        description2="Education to future-proof your career." 
        image="Hello" 
        formType="signup"
        />}
        </>
       
}

        