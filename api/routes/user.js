import express from "express"
import { deleteUser, getallUser, getUser, updateUser, updateUserBooked } from "../controllers/user_con.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();


//update
router.put("/:id",verifyUser,updateUser);
//router.put("/booked/:id/", updateUserBooked);

//delete
router.delete("/:id",verifyUser,deleteUser);
//get
router.get("/:id",verifyUser,getUser);
//get all
router.get("/",verifyAdmin,getallUser);

export default router