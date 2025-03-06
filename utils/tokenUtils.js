import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateToken= (user)=>{
    return jwt.sign({userId:user._id}, process.env.JWT_SECRET, {expiresIn:"1h"})
}

export default generateToken