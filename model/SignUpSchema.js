import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
        trim:true,
    },
    lastname:{
        type:String,
        require:true,
        trim:true,
    },
    username:{
        type:String,
        require:true,
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
});
export const User = mongoose.model('user', userSchema);