import { Request, Response, NextFunction } from "express"; 
import jwt from "jsonwebtoken" 

export const auth = async (req: Request,res: Response,Next: NextFunction) => {
    try {
        const Token = req.headers.authorization   || req.body.token 

        const token = Token.split(' ')[1] 

        if(!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing"
            }) 
        }
        try {
            const Secret = process.env.JWT_SECRET || '' 
            const payload = jwt.verify(token,Secret); 
            if(!payload){
                return res.status(401).json({
                    success:false,
                    message:"Invaild token. Payload 1"
                })
            } 
        } catch (error) {
            return res.status(401).json({
                success:false, 
                error: error,
                message:"Invaild token. Payload 2"
            })
        }
        Next();
    } catch (error) {
        console.error("Auth BE Error :- ",error)
        return res.status(401).json({
            success:false,
            message:"Error in validating token."
        })
    }
}   