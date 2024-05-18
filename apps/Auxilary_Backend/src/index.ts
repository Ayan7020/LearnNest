import express from "express";  
import { HomePageExplore } from "@repo/data/HomepageExplorerData";
const app = express();

app.get("/", (req, res) => {  
    console.log(HomePageExplore)
    return res.json({
        Name: "AYAN", 
        Success: true
    })
})

app.listen(4000,() => {
    console.log("Server is running on port 4000");
})

module.exports = app;