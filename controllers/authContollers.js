import User from "../models/userModels.js";
import bcrypt from  'bcrypt'
import generateToken from "../utils/tokenUtils.js";

export const signUp = async(req, res)=>{
    try{
        const {name, email, password}= req.body
        const existUser=await User.findOne({email})
        if(existUser) return res.status(404).json("User already exists")
        const user = await User.create({name,email,password})
        res.status(201).json({message: "User created successfully"})
    }
    catch(error){
        res.status(500).json("Internal server error")
    }
}

export const login= async(req, res)=>{
    try{
            const {email, password}= req.body
            const user= await User.findOne({email})
            if(!user) return res.status(404).json("User not found")
            const ismatch= await bcrypt.compare(password, user.password)
            if(!ismatch) return res.status(400).json("Invalid credentials")

            const token= generateToken(user)
            res.status(200).json({token})
        }
        catch(error)
        {
            console.log(error)
        }
    }