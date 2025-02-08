//auth.middleware.js
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        let token;

        // 1️⃣ Check for token in cookies or Authorization header
        if (req.cookies?.jwt) {
            token = req.cookies.jwt;
        } else if (req.headers.authorization?.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({ message: "You are not logged in" });
        }

        // 2️⃣ Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }

        console.log("Decoded token:", decoded);

        // 3️⃣ Fetch the user from the database (excluding password)
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("Retrieved user:", user);

        // 4️⃣ Attach user to request object
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const verifyAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }

        console.log("Decoded token in verifyAuth:", decoded);

        // 🔥 Fetch the user to ensure they still exist
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in verifyAuth middleware:", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
