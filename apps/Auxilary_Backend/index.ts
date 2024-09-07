import express from "express";
import db from "@repo/db/clients";
import dotenv from "dotenv";
import cors from "cors";
import ProfileRoutes from "./routes/Profile";
import { exec } from "child_process";  

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true
}));

app.use("/api/v1/profile", ProfileRoutes);

app.get("/", (req, res) => {
    return res.json({
        Success: true,
        message: 'Your server is up and running....'
    });
});
 
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in the environment: ${process.env.ENVIRONMENT}`);
});
 
function reloadServer() {
    console.log("Reloading the server...");
    server.close(() => {
        console.log("Server shut down gracefully. Restarting...");
 
        exec(`node ${__filename}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error restarting server: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    });
}
 
setInterval(reloadServer, 60000);

module.exports = app;
