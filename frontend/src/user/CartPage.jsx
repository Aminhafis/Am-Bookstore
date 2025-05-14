// src/CartPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import displayRazorpay from "./RazorPay.js"; // Import the Razorpay function

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCart = async () => {
    const userId = localStorage.getItem("Id");
    try {
      const response = await axios.get(`https://am-bookstore-mw9b.onrender.com/api/cart/${userId}`);
      setCart(response.data.items);
      setLoading(false);
    } catch (error) {
      setError("Failed to load cart");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleBuyNow = () => {
    const totalAmount = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const userId = localStorage.getItem("Id");
    displayRazorpay(totalAmount, userId);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!cart.length) return <p>Your cart is empty.</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>
      <div className="grid gap-6">
        {cart.map((item) => (
          <div key={item.bookId._id} className="flex justify-between items-center p-4 shadow rounded bg-zinc-200">
            <img src={item.bookId.image} className="w-24 h-36" alt={item.title} />
            <span>{item.title}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Total: Rs{item.totalPrice}</span>
          </div>
        ))}
      </div>
      <button onClick={handleBuyNow} className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Buy Now
      </button>
    </div>
  );
};

export default CartPage;
