import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
        required: true,
      },
      title: String,
      price: Number,
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      totalPrice: Number,
    },
  ],
  cartTotal: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
