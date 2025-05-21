import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import displayRazorpay from "./RazorPay.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const toastShownRef = useRef(false); // <-- New ref
  const navigate = useNavigate();

  const fetchCart = async () => {
    const userId = localStorage.getItem("Id");

    if (!userId) {
      setLoading(false);
      if (!toastShownRef.current) {
        toast.error("Please login to view your cart.");
        toastShownRef.current = true; // Mark toast as shown
      }
      return;
    }

    try {
      const response = await axios.get(
        `https://am-bookstore-mw9b.onrender.com/api/cart/${userId}`
      );
      setCart(response.data.items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart:", error);
      toast.error("Failed to fetch cart items.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleBuyNow = () => {
    const totalAmount = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const userId = localStorage.getItem("Id");

    if (!userId) {
      toast.error("Please login to proceed with purchase.");
      return;
    }

    displayRazorpay(totalAmount, userId, navigate, setCart);
  };

  if (loading) return <p className="text-center mt-6">Loading...</p>;

  const userId = localStorage.getItem("Id")

  if(!userId) return null
  if (userId && !cart.length)
    return <p className="text-center text-gray-600 mt-6">Your cart is empty.</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>
      <div className="grid gap-6">
        {cart.map((item) => (
          <div
            key={item.bookId._id || item.bookId}
            className="flex justify-between items-center p-4 shadow rounded bg-zinc-200"
          >
            <img
              src={item.bookId.image || item.image}
              className="w-24 h-36 object-cover rounded"
              alt={item.title}
              loading="lazy"
            />
            <div className="flex-1 px-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <span className="font-bold text-green-800">Rs {item.totalPrice}</span>
          </div>
        ))}
      </div>
      <button
        onClick={handleBuyNow}
        className="mt-6 px-6 py-3 bg-green-500 text-white font-medium text-lg rounded hover:bg-green-600"
      >
        Buy Now
      </button>
    </div>
  );
};

export default CartPage;
