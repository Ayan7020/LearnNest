"use client" 

import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth"; 
import Role from "../../../components/Role";
import { redirect } from "next/navigation";  
import { useSession } from "next-auth/react"; 
import Loading from "@repo/ui/Loading";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import PlainButton from "@repo/ui/Button";
import Authcard from "../../../components/AuthCard";
import {  Authtype } from "@repo/data/AuthtypeDataJson"; 
import { useState } from "react";
import UpdateAccount from "../../../lib/UpdateAccount";


 
const Page =  () => {   

    const Router = useRouter();
    const [selectedValue, setSelectedValue] = useState<number>(0);

    const {data:session,status} =  useSession();   
    if(status === "loading"){
        return  <div>
            <Loading/>
        </div>
    }
    if(!session?.user && !session?.user.Authenticated){ 
        Router.push("/") 
    }
    if(session?.user.Authenticated) {
        Router.push("/myprofile")
    }

    const handleChange = (index: number) => { 
        setSelectedValue(index);
      };

    const HandleSubmit = async () => {  
        const Email = session?.user.email || '';
        const Value = Authtype[selectedValue]?.title

        try {
            const response = await UpdateAccount(Email,Value);
            if(response.Authenticated){
                toast.success("Account Created Successfully");
                Router.push("/myprofile")
            }
            else {
                toast.error("Something Went Wrong try again");
            }
        } catch (e) {
            console.error("Error in AuthType Updation :- ")
            toast.error(`Please try again ${e}`)
        }
      };

    return <div>      
        {!session?.user.Authenticated && <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-2"> 
                <h1 className="text-2xl font-semibold">Hey {session?.user.name}</h1>
                <p className="text-richblack-100">Choose your Role</p>
            </div>
            <div className="space-y-4 px-4 md:px-0 md:space-y-6 lg:space-y-8">  
                 {Authtype.map((element,index) =>  (
                    <Authcard  
                    title={element.title} 
                    Subtitle={element.subtitle} 
                    Content={element.content} 
                    index={index}
                    selectedValue={selectedValue}
                    onChange={handleChange}
                    />
                 ))} 
            </div>
            <div className="flex flex-col items-center">   
                <PlainButton active={true} width_Button="fit"onClick={HandleSubmit}>Submit</PlainButton>
            </div>
        </div>}
    </div>     
}


export default Page;