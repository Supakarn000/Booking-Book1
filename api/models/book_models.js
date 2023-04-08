import mongoose from 'mongoose';
//const { Schema } = mongoose;

const BookSchema = new mongoose.Schema({
    name:{
        type: String,
        requried:true
    },
    photos:{
        type: [String],
    },
    type:{
        type: String,
        requried:true
    },
    des:{
        type: String,
        requried:true
    },
    title:{
        type: String,
        requried:true
    },
    bookcode:{
        type: Number,
        min:0,max:1000
    },
    rooms:{
        type: [String],
        //requried:true
    },
    publisher:{
        type: String,
        requried:true
    }
    
})

export default mongoose.model("Book",BookSchema)