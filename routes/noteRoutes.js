import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createNote,deleteNote,getNote, updateNote } from "../controllers/noteControllers.js";


const router = express.Router();

router.post("/", authMiddleware, createNote)
router.get("/", authMiddleware, getNote)
router.put("/:id", authMiddleware, updateNote)
router.delete("/:id", authMiddleware, deleteNote)

export default router