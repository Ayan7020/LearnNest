"use client"
import React, { Suspense, useEffect, useState } from "react";
import TextInput from "@repo/ui/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpSchema, SignUpSchemaValue } from "@repo/common/signupschemas";
import { useRouter } from "next/navigation";
import { SignupLoading } from "@repo/store/Loading";
import { useRecoilState } from "recoil";
import { toast } from "react-hot-toast"  
import axios from "axios";
import otpGenerator  from "otp-generator"
import { SignupData } from "@repo/store/Auth";  
import otpGenerate from "../lib/otp";
 
 
const SignupForm = () => {
  const [Signupdata,setSignupData] = useRecoilState(SignupData)
  const [loading,setloading] = useRecoilState(SignupLoading) 
  const [toggle,settoggle] = useState<"Instructor" | "Student">("Student")

  const {register,handleSubmit,formState: { errors },} = useForm<SignUpSchemaValue>({
    resolver: zodResolver(SignUpSchema),
  });
  const Router = useRouter();

  const onSubmit: SubmitHandler<SignUpSchemaValue> = async (data, e) => {
    e?.preventDefault();    
    try { 
      setloading(true)  
      const otp = otpGenerate(length=6);  
      setSignupData({ 
        FirstName: data.FirstName,
        LastName: data.LastName,
        email: data.email,
        password: data.password,
        otp:otp,
        AccountType:toggle,
        Authtype: "CREDENTIALS"
      }) 
      const response = await axios.post(`/api/sendotp`,{
      email:data.email,
      username: data.FirstName,
      otp: otp 
    }); 
    setloading(false) 
    if(response.data.success){
      toast.success(response.data.message) 
      Router.push("/auth/Sendotp")
    } 
    else {
      toast.error(response.data.message)
    }
    } catch (e) {
      setloading(false)
      console.error("Error on Otp: ",e)
      toast.error("Error while genrating OTP")
    }
     
  };

  const handleSignupDataAccountType = ({value}:any):void => {
    settoggle(value) 
    setSignupData(prevData => ({
      ...prevData,AccountType: value
    }))
  }

  return ( 
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 flex flex-col gap-2"
    >  
    <div className="bg-white dark:bg-richblack-800 text-black dark:text-richblack-25 flex gap-2 w-fit px-2 py-2 rounded-2xl  font-semibold  border-2 border-black cursor-pointer ">
      <p className={`p-2 px-4 text-center ${toggle === "Student" ? "bg-[#9C49CF]  rounded-xl text-white transition-all duration-200": ""}`} onClick={() => {handleSignupDataAccountType( {value:"Student"})}}>Student</p>


      <p  className={`p-2 px-4  ${toggle === "Instructor" ? "bg-[#9C49CF] rounded-xl text-white transition-all duration-200": ""}`} onClick={() => {handleSignupDataAccountType( {value:"Instructor"})}}>Instructor</p> 
    </div>
      <div className="flex w-full gap-10">
        <TextInput
          placeholder="Enter first name"
          label="First Name"
          inputType="text"
          {...register("FirstName")} 
          ErrorMessage={errors.FirstName && errors.FirstName.message}
        />
        <TextInput
          placeholder="Enter last name"
          label="Last Name"
          inputType="text"
          {...register("LastName")}
          ErrorMessage={errors.LastName && errors.LastName.message}
        />
      </div>
      <div className="my-2">
        <TextInput
          placeholder="Enter email address"
          label="Email Address"
          inputType="text"
          {...register("email")}
          ErrorMessage={errors.email && errors.email.message}
        />
      </div>
      <div className="flex gap-10">
        <TextInput
          placeholder="Enter password"
          label="Create Password"
          inputType="password"
          typePassword={true}
          {...register("password")}
          ErrorMessage={errors.password && errors.password.message}
        />
        <TextInput
          placeholder="Confirm password"
          label="Confirm Password"
          inputType="password"
          typePassword={true}
          {...register("confirmPassword")}
          ErrorMessage={
            errors.confirmPassword && errors.confirmPassword.message
          }
        />
      </div>
      <button
        type="submit"
        className="bg-[#9C49CF] h-[50px] text-[13px] sm:text-[16px] font-bold rounded p-2 text-center mt-3 hover:scale-95 transition-all duration-200 hover:ring-1 ring-white text-white"
      >
        Submit
      </button> 
    </form> 
  );
};

export default SignupForm;
