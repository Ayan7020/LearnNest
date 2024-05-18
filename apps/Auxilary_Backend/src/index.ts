import express from "express";

const app = express();

app.get("/", (req, res) => { 
    return res.json({
        Name: "AYAN",
        Success: true
    })
})

app.listen(4000,() => {
    console.log("Server is running on port 4000");
})

module.exports = app;