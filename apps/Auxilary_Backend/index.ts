import express from "express";
import "dotenv/config"

const app = express()
const PORT = process.env.PORT || 4001 


app.get("/",(req,res) => {
    return res.json({
        Name: "Ayan",
        Success: true
    })
})


app.listen(PORT,() => {
    console.log(`App is running at ${PORT}`)
})