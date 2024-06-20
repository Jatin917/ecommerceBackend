import { product } from "../model/ProductSchema.js"

export const getProducts = async (req, res) =>{
    try {
        const products = await product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const getProductDetails = async (req, res) =>{
    try {
        const id = req.params.id;
        const data = await product.findOne({'id':id});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}