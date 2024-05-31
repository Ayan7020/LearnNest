"use client";
import db from "@repo/db/clients";
import PlainButton from "@repo/ui/Button";
import Button from "@repo/ui/button"; 
import {  Authtype } from "@repo/data/AuthtypeDataJson";
import Authcard from "./AuthCard";
const Role = ({Name}:any) => { 
    return <div> 
        <div className="flex flex-col items-center gap-4"> 
            <h1 className="text-2xl">Hello {Name} </h1>
            <p>Choose your Role</p>
        </div>
        <div className="grid grid-cols-2">  

        </div>  
        <div> 
        <PlainButton active={true} width_Button="full">Submit</PlainButton>
        </div>
    </div>
}

export default Role 