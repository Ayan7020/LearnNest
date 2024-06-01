"use client";
import { SignupData } from "@repo/store/Auth";
import TemplateOtp from "../../../components/Templateotp";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";


const Sendotp = () => {
    const Router = useRouter()
    const [data, setdata] = useRecoilState(SignupData);

    if(data.email === ''){
        Router.push('/auth/signup')
    }
    return <div className="absolute top-[100px] sm:top-[35%] "> 
        {data.email && <TemplateOtp/>}
    </div>
}   

export default Sendotp