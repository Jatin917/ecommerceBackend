import express from 'express';
import { logInController, singUpController } from '../Controller/signup.js';
import { getProductDetails, getProducts } from '../Controller/getProducts.js';
import { addItemToCart } from '../Controller/addItemToCart.js';
import { getUserDtails } from '../Controller/getUserDetails.js';
import { getCartItems } from '../Controller/getCartItems.js';

const router = express.Router();

router.post('/signup', singUpController);
router.post('/login', logInController);
router.get('/products', getProducts);
router.get('/product/:id',getProductDetails);
router.post('/cart/add',addItemToCart);
router.get('/cart/:id',getCartItems);
router.get('/user/:id',getUserDtails);

export default router;