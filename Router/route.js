import express from 'express';
import { logInController, singUpController } from '../Controller/signup.js';
import { getProductDetails, getProducts } from '../Controller/getProducts.js';

const router = express.Router();

router.post('/signup', singUpController);
router.post('/login', logInController);
router.get('/products', getProducts);
router.get('/product/:id',getProductDetails);

export default router;