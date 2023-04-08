import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  roomNumber:[{ number: Number,unavaliable: {type: [Date]}}],

}, { timestamps: true });



export default mongoose.model("Room", RoomSchema);
