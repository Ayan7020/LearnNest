import {transporter} from '../transporter'
import otpTemplate from "../template/VerificationEmail";
import { ApiResponse } from "@repo/types/ApiResponse";
import dotenv from  "dotenv"

dotenv.config();
export async function sendVerificationEmail(
    email: string,
    username: string,
    verifycode: string
): Promise<ApiResponse>{
    try { 
        
        const EmailTemp = otpTemplate(email,username,verifycode)
        const respond = await transporter.sendMail({ 
            from: '756900001@smtp-brevo.com',  
            to: email,
            subject: 'LearnNest - Verification Code ',
            html: EmailTemp

        })  
        return {
            success: true,
            message: "OTP sent to your email"
        }

    } catch (emailError){
        console.error("Error sending verification email",emailError);
        return {
            success: false,
            message: "Failed to send error"
        }
    } 
}

