
export type SignupFormValid = {
    FirstName: string;
    LastName?: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    otp?: string;
    AccountType: "Student"  | "Instructor"; 
    Authtype: "GOOGLE" | "CREDENTIALS";
    Authenticated?: boolean;
}

interface Authtype  {
    title: "Student" | "Instructor";
    subtitle: string;
    content: string[];
}

export interface AuthTypeData extends Array<Authtype>{}