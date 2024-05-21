"use client"
import TextInput from "@repo/ui/TextInput"
import CTAButton from "@repo/ui/button"; 

function verifyHandler() {
    
}

const SignupForm = () => {
    return <form action="/" className="mt-4 flex flex-col gap-2">
        <div className="flex w-full">
            <TextInput placeholder="Enter first name" label="First Name" inputType="text"/>    
            <TextInput placeholder="Enter last name" label="Last Name" inputType="text"/>    
        </div>
        <div className=""> 
            <TextInput placeholder="Enter email address" label="Email Address" inputType="text"/>    
        </div>
        <div className="flex ">
            <TextInput placeholder="Enter password" label="Create Password" inputType="password"/>    
            <TextInput placeholder="Confirm password" label="Confirm Password" inputType="password"/>    
        </div>   
        <CTAButton linkto="/" active={true}>
            Submit
        </CTAButton>
    </form>
}

export default SignupForm