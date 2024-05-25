

 
import { createTransport } from "nodemailer"
import dotenv from  "dotenv"

dotenv.config();



export const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: "756900001@smtp-brevo.com",
        pass: process.env.PASSWORD
    }     
})