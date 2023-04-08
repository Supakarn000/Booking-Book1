import express from "express"
import { createRoom, createRoomToUser, deleteRoom, getallroom, getRoom, updateRoom, updateRoomAvailability } from "../controllers/room_con.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//create
router.post("/:bookid",verifyAdmin, createRoom);
//router.post("/:userid",verifyAdmin, createRoomToUser);
//update
router.put("/:id",verifyAdmin,updateRoom);
router.put("/availability/:id",updateRoomAvailability);
//delete
router.delete("/:id/:bookid",deleteRoom);
//get
router.get("/:id",getRoom);
//get all
router.get("/",getallroom);


export default router