import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({

    items:[
        {
            itemId:{
                type:String,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
                default:1
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
})

export const Cart = mongoose.model('cart', cartSchema);