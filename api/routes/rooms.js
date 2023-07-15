import express from "express";
import { createRoom,updateRoom,deleteRoom,getRoom,getallRooms, updateRoomAvailability } from "../controllers/room.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router=express.Router();

//create
router.post("/:hotelid",verifyAdmin,createRoom);

//update
router.put("/:id",verifyAdmin,updateRoom);

router.put("/availability/:id",updateRoomAvailability);

//delete
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)

//GET
router.get("/:id",getRoom)

//GET-ALL
router.get("/",getallRooms);

export default router;