import { Response } from "express";
import db from "@repo/db/clients" 
import jwt from "jsonwebtoken" 

export const UpdateProfile = async (req: any,res: Response) => {
    try {
        const date = new Date()
        const {dateOfBirth=date , gender, about="", contactNumber,FirstName,LastName } = req.body;
 
        const USERID = parseInt(req.headers.id ) 
        if(!contactNumber || !gender || !FirstName || !LastName){
            return res.status(400).json({
                success:false,
                message:'All fields are required',
            });
        } 
        const UserDetails = await  db.user.findFirst({
            where: {
                id: USERID
            },
            include: {
                additionalDetails: true
            } 
        }); 
        if(!UserDetails){
            return res.status(400).json({
                success:false,
                message:'Invalid User Id',
            });
        } 
        const profileId = UserDetails.additionalDetails  
        await db.user.update({
            where: {
                id: USERID
            },
            data: {
                Firstname: FirstName,
                Lastname: LastName
            }
        })
        const updatedProfile = await db.profile.update({
            where: {
                id: profileId?.id   
            },
            data: {
                Gender: gender,
                DateofBirth: dateOfBirth,
                about: about,
                contactNumber: contactNumber
            }
        });  
        const updatedUserDetails = await db.user.findFirst({
            where: {
                id: USERID
            },
            include: {
                additionalDetails: true
            }
        }) 
        return res.status(200).json({
            success:true,
            message:'Profile updated successfully',
            updatedUserDetails
        }) 
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'Failed to update profile',
            error: error.message,
        })    
    }
}