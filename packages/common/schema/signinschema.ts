import { z } from "zod"; 

export const SignInSchema = z.object({ 
    email: z.string().email("Invalid email address"),  
    password: z.string().min(8,{message: "Password must be 8 character"}) 
}) 

export type SignInSchemaValue = z.infer<typeof SignInSchema>; 
