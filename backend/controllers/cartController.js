import mongoose from 'mongoose';
import cartModel from '../model/cartModel.js';

const toObjectId = (id) => new mongoose.Types.ObjectId(id);

// 1. Add to cart
export const postIntoCart = async (req, res) => {
  const { userId, bookId, title, price, quantity } = req.body;

  try {
    if (!userId || !bookId || !title || !price || typeof quantity !== 'number') {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const objectUserId = toObjectId(userId);
    const objectBookId = toObjectId(bookId);

    let cart = await cartModel.findOne({ userId: objectUserId });

    if (cart) {
      const itemIndex = cart.items.findIndex((item) => item.bookId.equals(objectBookId));

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
        cart.items[itemIndex].totalPrice = cart.items[itemIndex].quantity * price;
      } else {
        cart.items.push({
          bookId: objectBookId,
          title,
          price,
          quantity,
          totalPrice: price * quantity,
        });
      }

      cart.cartTotal = cart.items.reduce((acc, item) => acc + item.totalPrice, 0);
      await cart.save();
    } else {
      cart = new cartModel({
        userId: objectUserId,
        items: [
          {
            bookId: objectBookId,
            title,
            price,
            quantity,
            totalPrice: price * quantity,
          },
        ],
        cartTotal: price * quantity,
      });
      await cart.save();
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error('Error adding to cart:', error.message, error.stack);
    res.status(500).json({ error: error.message || 'Failed to add item to cart' });
  }
};

// 2. Get cart for a specific user
export const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const objectUserId = toObjectId(userId);
    const cart = await cartModel.findOne({ userId: objectUserId }).populate("items.bookId");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Failed to fetch cart" });
  }
};

// 3. Update cart item quantity
export const updateCart = async (req, res) => {
  const { userId } = req.params;
  const { bookId, quantity } = req.body;

  try {
    const objectUserId = toObjectId(userId);
    const objectBookId = toObjectId(bookId);

    const cart = await cartModel.findOne({ userId: objectUserId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex((item) => item.bookId.equals(objectBookId));

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = quantity;
      cart.items[itemIndex].totalPrice = cart.items[itemIndex].price * quantity;
      cart.cartTotal = cart.items.reduce((acc, item) => acc + item.totalPrice, 0);

      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "Item not found in cart" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update cart item" });
  }
};

// 4. Remove an item from the cart
export const deleteCartItem = async (req, res) => {
  const { userId, bookId } = req.params;

  try {
    const objectUserId = toObjectId(userId);
    const objectBookId = toObjectId(bookId);

    const cart = await cartModel.findOne({ userId: objectUserId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => !item.bookId.equals(objectBookId));
    cart.cartTotal = cart.items.reduce((acc, item) => acc + item.totalPrice, 0);

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
};

// 5. Clear the entire cart
export const deleteCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const objectUserId = toObjectId(userId);
    const cart = await cartModel.findOneAndDelete({ userId: objectUserId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to clear cart' });
  }
};
