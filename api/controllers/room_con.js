import room_models from "../models/room_models.js";
import book_models from "../models/book_models.js";
import user_models from "../models/user_models.js";

export const createRoom = async (req, res, next) => {
    const bookId = req.params.bookid;
    const newRoom = new room_models(req.body);
  
    try {
      const savedRoom = await newRoom.save();
      try {
        await book_models.findByIdAndUpdate(bookId, {
          $push: { rooms: savedRoom._id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedRoom);
    } catch (err) {
      next(err);
    }
  }

export const createRoomToUser = async (req, res, next) => {
    const userId = req.params.userid;
    const newUserRoom = new user_models(req.body);
  
    try {
      const savedUserRoom = await newUserRoom.save();
      try {
        await user_models.findByIdAndUpdate(userId, {
          $push: { Booked: savedUserRoom._id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedUserRoom);
    } catch (err) {
      next(err);
    }
  }

export const updateRoom = async(req,res,next)=>{
    try{
        const updatedRoom = await room_models.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updatedRoom)

    }catch(err){
        next(err);
    }
}
export const updateRoomAvailability = async(req,res,next)=>{
  try{
      await room_models.updateOne({"roomNumber._id":req.params.id},{
        $push:{
          "roomNumber.$.unavaliable": req.body.dates
        }
      })
      res.status(200).json("Room has been updated")

  }catch(err){
      next(err);
  }
}

export const deleteRoom = async(req,res,next)=>{
    const bookId = req.params.bookid;
    try{
        await room_models.findByIdAndDelete(req.params.id);
        try {
            await book_models.findByIdAndUpdate(bookId, {
              $pull: { rooms: req.params.id },
            });
          } catch (err) {
            next(err);
          }
        res.status(200).json("room has been deleted")

    }catch(err){
        next(err);
    }

}

export const getRoom = async(req,res,next)=>{
    try{
        const room = await room_models.findById(req.params.id)
        res.status(200).json(room)

    }catch(err){
        next(err);
    }
}

export const getallroom = async(req,res,next)=>{
    try{
        const rooms = await room_models.find()
        res.status(200).json(rooms)

    }catch(err){
        next(err);
    }
}