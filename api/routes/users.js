import express from "express";
import User from "../models/User.js"
import {updateUser,deleteUser,getUser,getallUser} from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import { createError } from "../utils/error.js";

const router=express.Router();

//checkauthentication
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user, You are logged in")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user, You are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello admin, You are logged in and you can delete all accounts")
// })



//update
router.put("/:id",verifyUser,updateUser);

//delete
router.delete("/:id",verifyUser,deleteUser)

//GET
router.get("/:id",verifyUser,getUser)

//GET-ALL
router.get("/",verifyAdmin,getallUser);

export default router;
//640219b6d000ba39fad80025