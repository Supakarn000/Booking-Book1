import express from "express"
import {  countBytype1, countBytype2, createBook,deleteBook,getallBook,getBook,getBookRooms,updateBook } from "../controllers/book_con.js";
//import catagory_models from "../models/book_models.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//create
router.post("/",verifyAdmin, createBook);
//update
router.put("/:id",verifyAdmin,updateBook);
//delete
router.delete("/:id",verifyAdmin,deleteBook);
//get
router.get("/find/:id",getBook);
//get all
router.get("/",getallBook);

router.get("/countBytype1",countBytype1);
router.get("/countBytype2",countBytype2);
router.get("/room/:id",getBookRooms);


export default router