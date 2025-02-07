//index.js
import express from "express";
import authRoutes from "./routes/auth.route.js";  
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config()
const app = express();

const PORT = process.env.PORT 

app.use(express.json());
app.use(cookieParser());


// Use the routes
app.use("/api/auth", authRoutes);


// Start the server
app.listen(PORT, () => {
    console.log("Server is running on PORT:" + PORT);
    connectDB()
});
