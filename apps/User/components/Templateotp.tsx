"use client";  
import PlainButton from "@repo/ui/Button"; 
import { SignupData } from "@repo/store/Auth";
import { useRecoilState } from "recoil";
import {  useState } from "react";
import { toast } from "react-hot-toast" 
import OtpInput from "react-otp-input"; 
import axios from "axios";
import { useRouter } from "next/navigation";
import Loading from "@repo/ui/Loader";


    
const TemplateOtp = () => { 
    
    const [data, setdata] = useRecoilState(SignupData);
    const [input, setInput] = useState('');
    const [loading,setloading] = useState<Boolean>(false)
    const Router = useRouter();



    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const otp = data.otp;  
        toast.loading("loading",{
            id: 'Loadingotp'
        })
        setloading(true) 
        if(otp===input){   
            try { 
                const response = await axios.post(`/api/signup`,{ 
                    FirstName: data.FirstName,
                    LastName: data.LastName,
                    email: data.email,
                    password: data.password,
                    AccountType: data.AccountType,
                    Authtype: data.Authtype
                  });  
                  

                  if(response.data.success){
                    setdata(prevData => ({
                        ...prevData,
                        otp: ''   
                    }));
                    toast.success("Signup successfull",{
                        id: 'Loadingotp'
                    });

                    Router.push("/auth/login")
                  }  else {
                    setdata(prevData => ({
                        ...prevData,
                        otp: ''   
                    }));
                    toast.error(`Error Something went's wrong :- ${response.data.message}`,{
                        id: 'Loadingotp'
                    });
                    Router.push("/auth/signup")
                  }
            } catch (e) {
                setdata(prevData => ({
                    ...prevData,
                    otp: ''   
                }));
                setloading(false)
                toast.error("Database is Currently Down",{
                    id: 'Loadingotp'
                })
                console.error("Database Error: ", e);
            }
        } else {
            setloading(false)
            toast.error("Invalid OTP, try again",{
                id: 'Loadingotp'
            })
        }  
    } 
 


    return <>
        {loading? <div>
            <Loading/>
        </div>:<div className="w-full md:w-[600px] flex flex-col items-center gap-10 shadow-[10px_-5px_50px_-5px]  shadow-blue-200 p-6 rounded-xl">
        <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-xl lg:text-4xl text-[#9C49CF]">Verification Code</h2>
            <p className="text-md lg:text-lg text-richblack-200 ">we have sent the code verification to your email</p>
        </div>
        <div>
            <p className="text-md">{data.email || "Random.@gmail.com"}</p>
        </div>
        <form className="flex flex-col gap-6 items-center" onSubmit={handleSubmit} > 
            <div>    
                <OtpInput
                 value={input}
                 onChange={setInput}
                 numInputs={6} 
                 renderInput={(props) => (
                    <input
                    {...props}
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-[40px] lg:w-[60px]  bg-richblue-25 text-black ring-4  dark:bg-black rounded-[0.5rem] dark:text-richblack-5 aspect-square text-center "  
                    />
                 )}
                 containerStyle={{
                    justifyContent: "space-between",
                    gap: "0 6px",
                  }}

                />
            </div>   
            <PlainButton active={true} width_Button="fit" type="submit">
                Submit
            </PlainButton>
        </form>
    </div>}
    </>
}

export default TemplateOtp