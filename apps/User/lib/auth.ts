import CredentialsProvider from "next-auth/providers/credentials";   
import GoogleProvider from "next-auth/providers/google";
import db from "@repo/db/clients";
import bcrypt from "bcrypt";
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: { 
                email: { label: "Email Address", type: "text", placeholder: "Johndoe@gmail.com", required: true },
                password: { label: "Password", type: "password", required: true }
            },
            async authorize(credentials: any) {   
                const ExistingUser = await db.user.findFirst({
                    where: {
                        email: credentials.username 
                    }
                });
                if(!ExistingUser){ 
                    throw new Error("User Doesn't Exist");
                } 
                else {
                    const Pass = ExistingUser.password || ""
                    const isValidPassword = await bcrypt.compare(credentials.password,Pass);
                    if(!isValidPassword){
                        throw new Error("Invalid Password");
                    } 
                    else { 
                        return {  
                            id: ExistingUser.id.toString(),  
                            name: ExistingUser.Firstname, 
                            email: ExistingUser.email 
                        };
                    } 
                } 
            } 
        })
    ],
    secret: process.env.JWT_SECRET || "secret",

    callbacks: {
        async session({ token, session }: any) {
            session.user.id = token.sub;
            return session;
        }, 
        async signIn({account,profile}: any){
            if(account.provider === "google"){
                const ExistingUser = await db.user.findFirst({
                    where: { 
                        email: profile.email
                    }
                });
                if(!ExistingUser){
                    try {
                        const response = await db.user.create({
                            data: {
                                Firstname: profile.name,
                                email: profile.email 
                            }
                        }); 
                        return true; 
                    } catch (e){
                        console.error("Error in Google Account Creation : ",e);
                        return false;
                    }
                }
                return true;
            } 
            return true;
        },
        async redirect({ url, baseUrl }: any) { 
            if (url === '/api/auth/signout') {
                return `${baseUrl}/`;
            }
            return `${baseUrl}/myprofile`;
        },
    } 
};