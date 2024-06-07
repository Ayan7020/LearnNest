"use client";

import SmallButton from "@repo/ui/SmallButton";
import { Edit2Icon, Trash, UploadCloud } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import PersonalDetails from "../../../components/PersonalDetails";
import TextInput from "@repo/ui/TextInput";
import PlainButton from "@repo/ui/Button";
import Smallbutton from "@repo/ui/SmallButton";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const Router = useRouter();
  const { data: session, status } = useSession();
  const [oldpassword, setoldpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    toast.loading("Updating ...", { id: "Updating_Password" });
    try {
      const response = await axios.post("/api/updatepassword", {
        oldpassword: oldpassword,
        newpassword: newpassword,
      });
      if (response?.data.success) {
        toast.success("Password Updated Successfully", {
          id: "Updating_Password",
        });
        await signOut({ redirect: false });
        Router.push("/auth/login");
      } else {
        toast.error(`ERROR ${response.data?.message}`, {
          id: "Updating_Password",
        });
      }
    } catch (error) {
      toast.error("ERROR WHILE UPDATING", { id: "Updating_Password" });
      console.error("Error in updating Password :- ", error);
    }
  };

  const AccountDelete = async (e: any) => {
        e.preventDefault();
        toast.loading("loading",{id: "Delete_ACC_ID"})
        try{
            const response = await axios.post("/api/deleteaccount")
            if(response?.data.success){
                toast.success("Account Deleted",{id: "Delete_ACC_ID"})
                await signOut({ redirect: false });
                Router.push("/auth/signup")
            } else {
                toast.error("Something went's wrong !",{id: "Delete_ACC_ID"})
            }
        } catch (error){
            toast.error("Something went's wrong",{id:"Delete_ACC_ID"})
        }
  } 
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "linear", duration: 0.3 }}
      className="p-4 md:p-8 lg:p-16"
    >
      <div className="space-y-10">
        <h1 className="text-2xl md:text-4xl font-semibold">Edit Profile</h1>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 rounded-md border-2 bg-richblack-50 dark:border-[1px] border-richblack-700 dark:bg-richblack-800 p-4 md:p-8 lg:px-12">
          <div className="flex items-center gap-x-3 md:gap-x-4">
            {!session?.user.image ? (
              <div className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer text-2xl text-white bg-[#c567ff]">
                {session?.user.FirstName?.split("")[0]}
              </div>
            ) : (
              <img
                src={`${session?.user.image}`}
                alt={`Image`}
                className="w-[50px] md:w-[78px] rounded-full"
              />
            )}
            <div className="space-y-3">
              <p className="text-md md:text-lg font-semibold text-black dark:text-richblack-5">
                Change Profile Picture
              </p>
              <div className="flex gap-3">
                <SmallButton active={false}>Select</SmallButton>
                <SmallButton active={true}>
                  Upload
                  <UploadCloud />
                </SmallButton>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-md border-2 bg-richblack-50 dark:border-[1px] border-richblack-700 dark:bg-richblack-800 p-4 md:p-8 lg:px-12">
          <PersonalDetails />
        </div>
        <div className="w-full rounded-md border-2 bg-richblack-50 dark:border-[1px] border-richblack-700 dark:bg-richblack-800 p-4 md:p-8 lg:px-12">
          <div className="space-y-4 p-4">
            <div className="space-y-4 w-full">
              <p className="text-xl font-semibold">Password</p>
              <div className="w-full border-2 border-richblack-600 dark:border-richblack-50 bg-black"></div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center w-full gap-3"
            >
              <div className="flex flex-col md:flex-row gap-3 w-full">
                <TextInput
                  label="Current Password"
                  inputType="password"
                  type="password"
                  placeholder="Enter Current Password"
                  onChange={(e) => {
                    setoldpassword(e.target.value);
                  }}
                  required
                />
                <TextInput
                  label="New Password"
                  inputType="password"
                  type="password"
                  placeholder="Enter New Password"
                  onChange={(e) => {
                    setnewpassword(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex gap-3">
                <Smallbutton active={false}>Cancel</Smallbutton>
                <Smallbutton active={true} type="submit">
                  Submit
                </Smallbutton>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full rounded-md border-2  dark:border-[1px] border-richblack-700  bg-[#f3656557] p-4 md:p-8 lg:px-12"> 
            <div className="flex gap-4 items-center"> 
                <section className="bg-[#f4454557]  rounded-full flex flex-row items-center p-4">
                    <Trash />
                </section>
                <section className="text-[#ff5e5e] dark:text-[#fad3d3] space-y-1"> 
                        <p className="text-md sm:text-xl font-semibold text-black dark:text-white mb-2">Delete Account</p>
                        <span className="text-sm sm:text-md">
                            <p>Would you like to delete account?</p> 
                            <p>This account may contain Paid Courses. Deleting your account is permanent and will remove all the contain associated with it.</p> 
                        </span>
                        <a 
                        onClick={AccountDelete}
                        className="hover:underline cursor-pointer text-[#8d3a3a] dark:text-[#d27e7e] text-md sm:text-lg">I want to delete my account.</a> 
                </section>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
