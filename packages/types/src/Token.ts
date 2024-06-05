
export type JWTTOKENTYPE = {
    user: {
    id: number;
    FirstName: string;
    LastName?: string;
    email: string; 
    AccountType: "Student"  | "Instructor"; 
    Authtype: "GOOGLE" | "CREDENTIALS";
    Authenticated?: boolean;
    }
}
 