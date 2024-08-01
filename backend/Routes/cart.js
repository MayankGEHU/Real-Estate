// routes/cart.js
const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

// Add item to cart
router.post('/add', async (req, res) => {
  try {
    const newItem = new CartItem(req.body);
    await newItem.save();
    res.status(200).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all items in the cart
router.get('/', async (req, res) => {
  try {
    const items = await CartItem.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
