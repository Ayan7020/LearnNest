import { z } from "zod";

export const PersonaldetailsSchema = z.object({
    FirstName: z.string()
        .min(1, { message: "First Name is required" })
        .max(50, { message: "First Name cannot exceed 50 characters" }),
    LastName: z.string()
        .min(1, { message: "Last Name is required" })
        .max(50, { message: "Last Name cannot exceed 50 characters" }),
    DateofBirth: z.union([z.string().min(1,{message: "Please enter your Date of Birth."}),z.date()])  
        .optional(),
    ContactNumber: z.string()
        .regex(/^\+?[1-9]\d{1,10}$/, { message: "Enter a valid contact number 1" })
        .refine(val => val.length === 10, { message: "Enter a valid contact number 2" })
        .optional(),
    About: z.string()
        .min(1, { message: "About is required" })
        .max(500, { message: "About cannot exceed 500 characters" })
        .optional(),
    Gender: z.string().optional()    
});

export type PersonaldetailsValue = z.infer<typeof PersonaldetailsSchema>;



