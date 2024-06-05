"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";
import { format } from 'date-fns'; 
 
import TextInput from "@repo/ui/TextInput";
import { PersonaldetailsSchema, PersonaldetailsValue } from "@repo/common/personalschemas"; 
import { PersonalDetailsAtoms } from "@repo/store/PersonalAtoms";
import api from "../lib/axiosapi";
import Smallbutton from "@repo/ui/SmallButton"; 

const PersonalDetails = () => {  
    const { data: session, update } = useSession(); 
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useRecoilState(PersonalDetailsAtoms);
    const [selectedOption, setSelectedOption] = useState(value.Gender);
    const dateofBirth = session?.user.AdditionalDetails?.DateofBirth || '' 

    const options = ['Male', 'Female']; 
    
    useEffect(() => { 
        if (!session) return;

        const { user } = session;
        const additionalDetails = user?.AdditionalDetails || {}; 

        setValue((prevValues: any) => ({
            ...prevValues,
            About: additionalDetails.about || prevValues.About,
            DateofBirth: additionalDetails.DateofBirth || prevValues.DateofBirth,
            FirstName: user?.FirstName || '',
            LastName: user?.LastName || ' ',
            Gender: additionalDetails.Gender || prevValues.Gender,
            ContactNumber: additionalDetails.contactNumber
        })); 
 
    }, [session, setValue]);

    const { register, handleSubmit, setValue: setFormValue, formState: { errors } } = useForm<PersonaldetailsValue>({
        resolver: zodResolver(PersonaldetailsSchema),
        defaultValues: value,
    });

    const onSubmit: SubmitHandler<PersonaldetailsValue> = async (data, e) => {
        e?.preventDefault();    
        toast.loading("Loading", { id: 'Updating_Profile' }); 

        try {
            const response = await api.put('api/v1/profile/updateprofile', {
                FirstName: data.FirstName,
                LastName: data.LastName,
                dateOfBirth: data.DateofBirth,
                gender: data.Gender,
                about: data.About,
                contactNumber: data.ContactNumber 
            });

            if (response.data.success) {  
                await update({
                    ...session,
                    user: {
                        ...session?.user,
                        FirstName: data.FirstName,
                        LastName: data.LastName,
                        AdditionalDetails: {
                            ...session?.user.AdditionalDetails,
                            DateofBirth: data.DateofBirth,
                            Gender: data.Gender,
                            about: data.About,
                            contactNumber: data.ContactNumber
                        }
                    }
                });   
                toast.success("Profile Updated", { id: 'Updating_Profile' });
                window.location.reload();
            } else {
                toast.error("Something went wrong", { id: 'Updating_Profile' });
            }
        } catch (error) {
            console.error("Error in updating:", error);
            toast.error(`Something went wrong ${error}`, { id: 'Updating_Profile' });
        } 
    };

    const handleOnChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const date = format(new Date(value), 'dd-MM-yyyy');
        setFormValue("DateofBirth", date); 
    }; 

    const handleClicked = (option: string) => {
        setFormValue("Gender", option);
        setSelectedOption(option);
        setIsOpen(false);
    };

    const HandleCancelButton = () => {
        // Implement cancel functionality if needed
    };

    return (
        <div className="space-y-4 p-4">
            <div className="space-y-4 w-full">
                <p className="text-xl font-semibold">Profile Information</p>
                <div className="w-full border-2 border-richblack-50 bg-black"></div>
            </div>
            <div>
                <form className="flex flex-col items-center mb-20 md:mb-0" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
                        <div className="w-full space-y-4">
                            <TextInput 
                                inputType="text"
                                label="First Name"
                                placeholder="First Name"
                                {...register("FirstName")}
                                ErrorMessage={errors.FirstName?.message}
                            />
                            <TextInput 
                                inputType="date"
                                type="date"
                                label="Date of Birth" 
                                onChange={handleOnChangeDate} 
                                ErrorMessage={errors.DateofBirth?.message}
                                placeholder="Date of Birth"  
                            />
                            <TextInput 
                                inputType="text"
                                label="Contact Number"
                                placeholder="Enter Contact Number"
                                {...register("ContactNumber")}
                                ErrorMessage={errors.ContactNumber?.message}
                            />
                        </div>
                        <div className="w-full space-y-5">
                            <TextInput 
                                inputType="text"
                                label="Last Name"
                                placeholder="Last Name"
                                {...register("LastName")}
                                ErrorMessage={errors.LastName?.message}
                            />
                            <div className="relative w-full space-y-3">
                                <label className="w-full mb-1 text-[12px] sm:text-[18px]">
                                    Gender
                                </label>
                                <div 
                                    className="w-full p-[12px] dark:text-richblack-5 rounded-[0.5rem] text-black border-2 dark:bg-richblack-800 font-medium cursor-pointer" 
                                    onClick={() => setIsOpen(!isOpen)}
                                    style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
                                >
                                    {selectedOption || 'Select an Option'}
                                </div>
                                {isOpen && (
                                    <div className="absolute w-full bg-white border-2 border-black dark:bg-richblack-800 dark:text-richblack-5 rounded-[0.5rem] mt-1">
                                        {options.map(option => (
                                            <div 
                                                key={option} 
                                                onClick={() => handleClicked(option)} 
                                                className="p-[12px] cursor-pointer hover:bg-gray-200 dark:hover:bg-richblack-700"
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <TextInput 
                                inputType="text"
                                label="About"
                                placeholder="Enter Bio Details"
                                {...register("About")}
                                ErrorMessage={errors.About?.message} 
                            />
                        </div>
                    </div>
                    <div className="flex justify-center w-full gap-3 mt-4  bottom-4">
                        <Smallbutton active={false} onClick={HandleCancelButton}>
                            Cancel
                        </Smallbutton>
                        <Smallbutton active={true} type="submit">
                            Submit
                        </Smallbutton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalDetails;
