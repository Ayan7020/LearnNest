import { sendVerificationEmail } from "@repo/email/sendVerificationEmail" 
import { NextRequest, NextResponse } from "next/server"

type Sendotp = {
    email: string,
    username: string,
    otp: string
}
 
const sendOtp = async  (req:NextRequest,res:NextResponse) => { 
    const body: Sendotp = await req.json() 
    const { email, username,otp } = body 
    const response  = await  sendVerificationEmail(email,username,otp) 
    
    if(response.success){ 
        return NextResponse.json({ 
            success: response.success,
            message: response.message, 
        })  
    }  
    else {
        return NextResponse.json({ 
            success: response.success,
            message: response.message
        })  
    } 
} 

export { sendOtp as POST}