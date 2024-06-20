import {product} from "../model/ProductSchema.js"
import { products } from "../Constants/data.js";
const DefaultData = async ()=>{
    try {
        await product.insertMany(products);
        console.log("data imported successfully");
    } catch (error) {
        console.log("error in importing the data ", error.message);
    }
}

export default DefaultData;