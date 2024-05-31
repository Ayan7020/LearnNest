import CredentialsProvider from "next-auth/providers/credentials";   
import GoogleProvider from "next-auth/providers/google";
import db from "@repo/db/clients";
import bcrypt from "bcrypt";     
import { Session, getServerSession } from "next-auth";
import type { Adapter } from "next-auth/adapters"; 


interface CustomSession extends Session {
    AccountType?: string;
    Authenticated?: boolean;
    Authtype?: string;
}

const FetchUserInfo = async (email: string) => {
    const user = await db.user.findFirst({
        where: {
            email: email
        }
    });
    return user;
};

export const authOptions = {  
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',  
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
                            email: ExistingUser.email,
                            AccountType: ExistingUser.AccountType, 
                            Authenticated: ExistingUser.Authenticated,
                            Authtype: ExistingUser.Authtype
                        };
                    } 
                } 
            } 
        })
    ],
    secret: process.env.JWT_SECRET || "secret",

    callbacks: {
        async jwt({ token }: any) {
            return token;
          },
        async session({ token, session,user }: any) { 
            const userData = await FetchUserInfo(session.user.email);
            session.user.id = token.sub;    
            session.user.AccountType = userData?.AccountType || '';
            session.user.Authenticated = userData?.Authenticated || false;
            session.user.Authtype = userData?.Authtype || '';
            return session; 
        }, 
        async signIn({account,profile,user}: any){ 
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
                                email: profile.email,
                                Authtype: "GOOGLE",
                                AccountType: "Student"
                            }   
                        });
                        user.Authenticated = false
                        return true; 
                    } catch (e){
                        console.error("Error in Google Account Creation : ",e);
                        return false;
                    }
                } 
                user.Authenticated = ExistingUser.Authenticated
                return true;
            } 
            return true;
        },
        async redirect({ url, baseUrl  }: any) { 
            if (url === '/api/auth/signout') {
                return `${baseUrl}/`;
            }
            return `${baseUrl}/Authtype`;
        },
    } 
};