import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  role:{
    type: String,
    required: true
  },
  phone:{
    type: String,
    required: true
  },
  Booked: [{ number: Number, unavaliable: {type: [Date]}}],
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
