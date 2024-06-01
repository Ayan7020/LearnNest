"use client";

import TextInput from "@repo/ui/TextInput";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInSchema, SignInSchemaValue } from "@repo/common/signinschemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRecoilState } from "recoil";
import { SignupLoading } from "@repo/store/Loading";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const SigninForm = () => {
  const [loading,setloading] = useRecoilState(SignupLoading)  
  const router = useRouter(); 

  const {register,handleSubmit,formState: { errors }} = useForm<SignInSchemaValue>({
    resolver: zodResolver(SignInSchema),
  });
  const onSubmit: SubmitHandler<SignInSchemaValue> = async (data, e) => {
    e?.preventDefault();
    setloading(true);
    try {
        const res = await signIn("credentials",{
            username: data.email,
            password: data.password,
            redirect: false,
        });  
        if(res?.ok){
            toast.success("Welcome to LearnNest");
            setloading(false);
            router.push("/dash/myprofile")
        } else {
            setloading(false);
            toast.error(`${res?.error}`);
        }
    }catch (e){
        setloading(false)
        toast.error("Failed to Signin")
        console.error("error Happens in Signin",e);
    }
  };

  return (
    <form className="mt-4 flex flex-col gap-2 " onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full gap-2">
        <TextInput
          placeholder="JohnDoe@gmail.com"
          label="Email"
          inputType="text"
          {...register("email")}
          ErrorMessage={errors.email && errors.email.message}
        />
        <TextInput
          placeholder="Password"
          label="Password"
          inputType="password"
          typePassword={true}
          {...register("password")}
          ErrorMessage={errors.password && errors.password.message}
        />
        <button
          type="submit"
          className="bg-[#9C49CF] h-[50px] text-[13px] sm:text-[16px] font-bold rounded p-2 text-center mt-3 hover:scale-95 transition-all duration-200 hover:ring-1 ring-white text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
