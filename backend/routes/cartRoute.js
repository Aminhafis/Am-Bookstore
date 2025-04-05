import express from 'express';
import { deleteCart, deleteCartItem, getCart, postIntoCart, updateCart } from '../controllers/cartController.js';

const router = express.Router();

// Add item to cart route
router.post('/api/cart', postIntoCart )

// get item from the cart
router.get('/api/cart/:userId', getCart )

// 3. Update cart item quantity
router.put('/api/cart/:userId', updateCart)

// 4. Remove an item from the cart
router.delete('/api/cart/:userId/:bookId', deleteCartItem)

// 5. Clear the entire cart
router.delete('/api/cart/:userId',deleteCart)
  
export default router;

