import express from "express";
import axios from "axios";
import cron from "node-cron";   
import dotenv from  "dotenv"; 
import cors from "cors";

const app = express();

dotenv.config(); 
const PORT = process.env.PORT || 4000;


app.use(express.json()) 
app.use( cors({
    origin: "*",
    credentials: true
}))


app.get('/ping',(req,res) => {
    res.send('Server is Alive')
})

const PingURL = process.env.PINGURL || ""

// Research -----> 
// cron.schedule('*/15 * * * *',async () => {
//     try {
//         const response = await axios.get(PingURL);
//         console.log('Ping successful:', response.data);
//     } catch (error) {
//         console.error('Error pinging the server:', error);
//     }
// })
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