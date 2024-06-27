import { Cart } from "../model/cartSchema.js"


export const getCartItems = async(req, res) =>{
    try {
        const id = req.params.id;
        const carts = await Cart.findById(id);
        return res.status(200).json({carts});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}