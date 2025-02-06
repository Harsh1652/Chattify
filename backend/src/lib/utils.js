import jwt from "jsonwebtoken"

export const generateToken= (useId, res) => {
    const token = jwt.sign({useId}, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })
    res.cookie("jwt", token, {

        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, //prevents xss & cross-site scripting  attacks 
        sameeSite: "Strict",
        secure: process.env.NODE_ENV == "development"
    })
    return token;
}
