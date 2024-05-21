import CredentialsProvider from "next-auth/providers/credentials"; 
// import bcrypt from "bcrypt"; 

export const authOptions = {
    providers: [
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
    },
    pages: {
        signIn: '/signin'  
    }
};