import CredentialsProvider from "next-auth/providers/credentials";   
import GoogleProvider from "next-auth/providers/google";
import db from "@repo/db/clients";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: { 
                username: { label: "Email Address", type: "text", placeholder: "Johndoe@gmail.com", required: true },
                password: { label: "Password", type: "password", required: true }
            },
            async authorize(credentials: any) {  
                const existingUser = {id:2}
                const token = {
                    email: "Johndoe@gmail.com",
                    accountType: "Student", 
                } 
                return {  
                    id: existingUser.id.toString(), 
                    success: true,
                    message: 'Login Successfull', 
                    token,

                };
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