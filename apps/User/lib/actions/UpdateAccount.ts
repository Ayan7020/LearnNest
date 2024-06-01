"use server"
import db from "@repo/db/clients";
 

const UpdateAccount = async (email: string,data?: "Student" | "Instructor") => {
    const response = await db.user.update({
        where:{
            email: email
        },
        data: {
            AccountType: data,
            Authenticated: true
        } 
    })
    return response
}

export default UpdateAccount 
