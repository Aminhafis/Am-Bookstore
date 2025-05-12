import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Scroll to top when this component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend validation
    if (!name || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    // Email validation using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format!");
      return;
    }

    // Password validation (at least 8 characters, must contain both letters and numbers)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must be at least 8 characters long and contain both letters and numbers.");
      return;
    }

    console.log({ name, email, password }); // Debugging

    axios
      .post("https://am-bookstore-mw9b.onrender.com/api/user/register", {
        name,
        email,
        password,
        role: "user",
      })
      .then((res) => {
        toast.success("Registration successful!");
        navigate("/login");
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          toast.error("User already exists!");
        } else {
          toast.error("Something went wrong. Try again.");
        }
        navigate("/not-authorized");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-auto h-screen bg-white text-center pt-20"
      >
        <h1 className="text-5xl font-serif py-4">Hello</h1>
        <div className="gap-2">
          <button
            className="border border-gray-400 text-gray-400 w-36 h-12"
            onClick={() => navigate("/login")}
          >
            LOG IN
          </button>
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="border border-black w-36 h-12"
          >
            SIGN UP
          </button>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 w-72 mt-4"
          />
          <hr className="bg-gray-400 h-[1px] w-72 border-0 ml-[500px]" />

          <input
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-72 mt-4"
          />
          <hr className="bg-gray-400 h-[1px] w-72 border-0 ml-[500px]" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 w-72 mt-4"
          />
          <hr className="bg-gray-400 h-[1px] w-72 border-0 ml-[500px]" />
        </div>
        <button
          type="submit"
          className="border bg-black text-white h-14 w-72 mt-4 hover:bg-slate-700"
        >
          SIGN UP
        </button>
        <p className="text-xs mt-4">
          By creating an account,you agree to our <u>Privacy Policy </u>
          <br />
          and <u>Terms.</u>We'll send you updates on all things away. <br />
          Need to take-off? Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}

export default RegisterUser;
