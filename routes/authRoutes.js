import express from "express"
import { signUp } from "../controllers/authContollers.js"
import { login } from "../controllers/authContollers.js"

const router = express.Router()

router.post("/signup", signUp)
router.post("/login", login)

export default router