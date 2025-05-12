import axios from "axios";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const displayRazorpay = async (totalAmount, userId) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  // Create an order in the backend
  const result = await axios.post("https://am-bookstore-mw9b.onrender.com/api/create-order", {
    amount: totalAmount,
    currency: "INR", // Example: Hardcoding INR. Replace if needed
    userId: localStorage.getItem("Id"),
    receipt: `receipt_${userId}`, // A unique receipt ID
  });

  if (!result) {
    alert("Server error. Are you online?");
    return;
  }

  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: "rzp_test_x4xn8TaOnqmHti", // Enter Razorpay Key ID from the dashboard
    amount: amount.toString(),
    currency: currency,
    name: "Bookstore",
    description: "Test Transaction",
    order_id: order_id,
    handler: async function (response) {
      // After payment is successful, verify the payment on the backend
      const verificationResult = await axios.post(
        "https://am-bookstore-mw9b.onrender.com/api/verify-payment",
        {
          order_id: order_id, 
          payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        }
      );

      if (verificationResult.data.message === "Payment verified successfully") {
        alert("Payment Successful!");
        // TODO: Redirect the user or update the UI
      } else {
        alert("Payment verification failed. Please try again.");
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
};

export default displayRazorpay;
