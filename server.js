import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import noteRoutes from './routes/noteRoutes.js';

dotenv .config();
const app= express();
app.use(express.json());

connectDB();

app.use('/auth', authRoutes);
app.use('/notes', noteRoutes);

app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})