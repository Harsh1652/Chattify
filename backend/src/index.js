//index.js
import express from "express";
import authRoutes from "./routes/auth.route.js";  
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js"; 
import cors from "cors";
import {app, server} from "./lib/socket.js";


dotenv.config()

const PORT = process.env.PORT 

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:5173"],  
    credentials: true                   
}));


// Use the routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes) ;

// Increase the request size limit to 10MB (adjust as needed)
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Start the server
server.listen(PORT, () => {
    console.log("Server is running on PORT:" + PORT);
    connectDB()
});
