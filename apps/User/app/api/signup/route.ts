import { NextRequest, NextResponse } from "next/server" 
import bcrypt from "bcrypt";
import db from "@repo/db/clients";

interface SignupData {
    FirstName: string;
    LastName: string;
    email: string;
    password: string; 
}
  
const  signup = async (req: NextRequest): Promise<NextResponse> => {  
    try {
        const body = await req.json();

        console.log("Body: ",body)
        const data: SignupData = body.data || body
        
        
        const { FirstName, LastName, email, password } = data

        if (!FirstName || !LastName || !email || !password ) {
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
            })
        } 
        else {
            const HashedPassword = await bcrypt.hash(data.password,10) 
            await db.user.create({
                data: {
                    Firstname: data.FirstName,
                    Lastname: data.LastName,
                    email: data.email,
                    password: HashedPassword
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