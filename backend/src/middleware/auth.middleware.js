//auth.middleware.js
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "You are not logged in" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ message: "Invalid token" });
        }

        console.log("Decoded token:", decoded);

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("Retrieved user:", user);

        // Attach user to the request object and move to the next middleware
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protective middleware:", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
