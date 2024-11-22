import Cart from '../models/Cart.js';

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const existingItem = await Cart.findOne({ userId: req.user.id, productId });
    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.json(existingItem);
    }
    const newCartItem = new Cart({ userId: req.user.id, productId, quantity });
    await newCartItem.save();
    res.status(201).json(newCartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;
    const cartItem = await Cart.findOneAndUpdate(
      { userId: req.user.id, productId },
      { quantity },
      { new: true }
    );
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const cartItem = await Cart.findOneAndDelete({ userId: req.user.id, productId });
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
