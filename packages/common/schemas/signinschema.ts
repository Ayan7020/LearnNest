import { z } from "zod";

export const SignInSchema = z.object({
    FirstName: z.string().min(1,{message: "Name is Required"}),
    LastName: z.string().min(1,{message: "Name is Required"}),
    email: z.string().email("Invalid email address"), 
    password: z.string().min(8,{message: "Password must be 8 character"}),
    confirmPassword: z.string().min(1,{message: "Confirm Password is Required"}) 
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export type SignInSchemaValue = z.infer<typeof SignInSchema>; 
