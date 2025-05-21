// RazorPay.js
import axios from "axios";
import { toast } from "react-toastify";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const displayRazorpay = async (totalAmount, userId, navigate, setCart) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    toast.error("Razorpay SDK failed to load. Are you online?");
    return;
  }

  try {
    const result = await axios.post("https://am-bookstore-mw9b.onrender.com/api/create-order", {
      amount: totalAmount,
      currency: "INR",
      userId,
      receipt: `receipt_${userId}`,
    });

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_x4xn8TaOnqmHti",
      amount: amount.toString(),
      currency,
      name: "Bookstore",
      description: "Test Transaction",
      order_id,
      handler: async function (response) {
        try {
          const verificationResult = await axios.post(
            "https://am-bookstore-mw9b.onrender.com/api/verify-payment",
            {
              order_id,
              payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (verificationResult.data.message === "Payment verified successfully") {
            toast.success("Your order has been placed successfully!");

            // ✅ Clear cart
            await axios.delete(`https://am-bookstore-mw9b.onrender.com/api/cart/${userId}`);
            setCart([]); // Clear local state

            // ✅ Redirect
            navigate("/home");

          } else {
            toast.error("Payment verification failed. Please try again.");
          }
        } catch (err) {
          console.error("Verification error:", err);
          toast.error("Error verifying payment.");
        }
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Bookstore Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  } catch (error) {
    console.error("Order creation error:", error);
    toast.error("Server error while creating order.");
  }
};

export default displayRazorpay;
