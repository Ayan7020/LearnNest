import { NextRequest, NextResponse } from "next/server";  
import GetJWTToken from "../../../lib/Token"; 

const  signup = async (req: NextRequest)  => {  
    const token = await GetJWTToken()
    return NextResponse.json(token) 
}  

export { signup as POST, signup as GET} 