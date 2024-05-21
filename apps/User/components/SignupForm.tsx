"use client"
import TextInput from "@repo/ui/TextInput"
import CTAButton from "@repo/ui/button"; 

function verifyHandler() {
    
}

const SignupForm = () => {
    return <form action="/" className="mt-4 flex flex-col gap-2">
        <div className="flex w-full gap-10">
            <TextInput placeholder="Enter first name" label="First Name" inputType="text" />    
            <TextInput placeholder="Enter last name" label="Last Name" inputType="text"/>    
        </div>
        <div className="my-2"> 
            <TextInput placeholder="Enter email address" label="Email Address" inputType="text"/>    
        </div>
        <div className="flex gap-10">
            <TextInput placeholder="Enter password" label="Create Password" inputType="password" typePassword={true}/>    
            <TextInput placeholder="Confirm password" label="Confirm Password" inputType="password" typePassword={true}/>    
        </div>    
        <button type="submit" className="bg-[#9C49CF] h-[50px] text-[13px] sm:text-[16px] font-bold rounded p-2 text-center mt-3 hover:scale-95 transition-all duration-200 hover:ring-1 ring-white text-white ">Submit</button>
        
    </form>
}

export default SignupForm