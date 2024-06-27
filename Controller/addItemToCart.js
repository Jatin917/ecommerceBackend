import { Cart } from "../model/cartSchema.js";

export const addItemToCart = async (req, res) => {
    try {
        // Destructure the request body to get userId, itemId, and quantity
        console.log(req.body);
        const { uid: userId, id: itemId, quantity } = req.body;

        // Find the user's cart by userId (which is now the document's _id)
        let cart = await Cart.findById(userId);

        // If cart doesn't exist, create a new one
        if (!cart) {
            cart = new Cart({ items: [], _id:userId});
            console.log(cart);
        }

        // Check if the item is already in the cart
        const existingItem = cart.items.find((item) => item.itemId === itemId);

        if (existingItem) {
            // If the item is already in the cart, update the quantity
            existingItem.quantity += quantity;
        } else {
            // If the item is not in the cart, add a new item
            const item = { itemId, quantity };
            cart.items.push(item);
        }

        // Save the cart
        console.log("save before");
        await cart.save();
        console.log("save after");

        // Send a success response with the updated cart
        return res.status(200).json({ success: true, cart });
    } catch (error) {
        // Send an error response in case of failure
        return res.status(500).json({ success: false, message: error.message });
    }
};
