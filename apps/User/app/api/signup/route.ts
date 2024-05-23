import { NextRequest, NextResponse } from "next/server";
import db from "@repo/db/clients";
import bcrypt from "bcrypt";
import { SignInSchemaValue } from "@repo/common/SigninSchema";

const signup = async(req:NextRequest,res:NextResponse) => {
    const body: SignInSchemaValue = await req.json();

    console.log(body) 

    const existingUser = await db.user.findFirst({
        where: {
            email: body.email
        }
    }); 

    console.log("EXISTING: ",existingUser)
    if(!existingUser){
        return NextResponse.json({
           success: false,
           error: {
            path: "email",
            message: "Email already exist"
           } 
        })
    }
    else {
        const password = await bcrypt.hash(body.password,10)  
        try {
            await db.user.create({
                data: {
                    Firstname: body.FirstName,
                    Lastname: body.LastName,
                    email: body.email, 
                    password: password
                }
            })
            
            return NextResponse.json({
                success: true
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export {signup as POST}