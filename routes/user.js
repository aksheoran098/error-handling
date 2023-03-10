import express from "express"
import { newUser } from "../controllers/userController.js";

const router = express.Router();


router.get('/new', newUser)
router.get('/check',(req,res)=>{
    res.status(500).send("<h1> Misson Successful<h1>")
})
export default router;