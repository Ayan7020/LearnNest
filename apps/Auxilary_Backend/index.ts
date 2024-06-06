import express from "express";
import db from "@repo/db/clients"  
import dotenv from  "dotenv"; 
import cors from "cors";
import ProfileRoutes from "./routes/Profile"; 

const app = express();

dotenv.config(); 
const PORT = process.env.PORT || 4000;


app.use(express.json()) 
app.use( cors({
    origin: "*",
    credentials: true
}))  

app.use("/api/v1/profile", ProfileRoutes) 

app.get("/", (req, res) => {    
    return res.json({   
        Success: true,
        message:'Your server is up and running....'
    })
})
 

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT} in the environment: ${process.env.ENVIRONMENT}`); 
})

module.exports = app;