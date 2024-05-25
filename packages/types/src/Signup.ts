
export type SignupFormValid = {
    FirstName: string;
    LastName?: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    otp?: string;
}