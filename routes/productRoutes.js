import express from 'express';
import { 
  getProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', protect, createProduct); // Protected route
router.put('/:id', protect, updateProduct); // Protected route
router.delete('/:id', protect, deleteProduct); // Protected route

export default router;
