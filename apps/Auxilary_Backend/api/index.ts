import express from "express";
import axios from "axios";
import cron from "node-cron";  
import { HomePageExplore } from "@repo/data/HomepageExplorerData";
import dotenv from  "dotenv"; 
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

app.get('/ping',(req,res) => {
    res.send('Server is Alive')
})

const PingURL = process.env.PINGURL || ""

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
        Name: "AYAN SHAIKH", 
        Explore: HomePageExplore,
        Success: true
    })
})

app.get("/HOME", (req, res) => {  
    return res.json({
        Name: "AYAN SHAIKH HOME", 
        Explore: HomePageExplore,
        Success: true
    })
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT} in the environment: ${process.env.ENVIRONMENT}`); 
})

module.exports = app;