import express from 'express';
import { addToCart, updateCart, removeFromCart } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, addToCart);
router.put('/:productId', protect, updateCart);
router.delete('/:productId', protect, removeFromCart);

export default router;
