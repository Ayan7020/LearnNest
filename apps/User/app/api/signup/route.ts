import { NextRequest, NextResponse } from "next/server" 
import bcrypt from "bcrypt";
import db from "@repo/db/clients";

interface SignupData {
    FirstName: string;
    LastName: string;
    email: string;
    password: string;  
    AccountType: "Instructor" | "Student";
    Authtype: "GOOGLE" | "CREDENTIALS"
}
  
const  signup = async (req: NextRequest): Promise<NextResponse> => {  
    try {
        const body = await req.json(); 

        const data: SignupData = body.data || body
        
        
        const { FirstName, LastName, email, password,AccountType,Authtype } = data

        if (!FirstName || !LastName || !email || !password  || !AccountType || !Authtype) {
            return NextResponse.json({
                success: false,
                error: {
                    path: "validation",
                    message: "All fields are required.",
                },
            });
        }

        const existingUser = await db.user.findFirst({
            where: {
                email: data.email
            }
        });

        if(existingUser){
            return NextResponse.json({
                success: false,
                path: "email",
                message: "This email is already in use."
            });
        } 
        else {
            const HashedPassword = await bcrypt.hash(data.password,10) 
            const date = new Date()
            await db.user.create({
                data: {
                    Firstname: data.FirstName,
                    Lastname: data.LastName,
                    email: data.email,
                    password: HashedPassword,
                    Authtype: data.Authtype,
                    AccountType: data.AccountType, 
                    Authenticated: true,
                    additionalDetails: {
                        create: {
                            Gender: null,  
                            contactNumber: null,
                            DateofBirth: null
                        }
                    }
                }
            }); 
            
            return NextResponse.json({ 
                success: true,
                message: "User registered successfully",
            }); 
        }
    } catch (e) {
        console.error("Signup error: ",e)
        return NextResponse.json({
            success: false,
            error: {
                path: "global",
                message: "Internal server error"
            }
        })
    }
}  

export { signup as POST}