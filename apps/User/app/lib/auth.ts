import CredentialsProvider from "next-auth/providers/credentials";   
<<<<<<< HEAD
import db from "@repo/db/clients"
 
=======

>>>>>>> parent of 44a5300 (Feat: Add Database)
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: { 
                FirstName: { label: "First Name", type: "text", placeholder: "John", required: true },
                LastName: { label: "Last Name", type: "text", placeholder: "Doe", required: true },
                Email: { label: "Email Address", type: "email", placeholder: "Johndoe@gmail.com", required: true },
                Password: { label: "Password", type: "password", required: true }
            },
            async authorize(credentials: any) {  
                const existingUser = await db.user.findFirst({
                    where: {
                        email: credentials.Email    
                    }
                }); 

                if(!existingUser){
                    throw new Error("User does not exist");
                }

                return {
                    id: existingUser.id.toString()
                }
            } 
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async session({ token, session }: any) {
            session.user.id = token.sub;
            return session;
        }
    } 
};