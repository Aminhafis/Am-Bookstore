import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://am-bookstore-mw9b.onrender.com/api/user/login", {
        email,
        password,
      });
      console.log(response);

      localStorage.setItem("token", response.data.token); // save for both roles
      localStorage.setItem("role", response.data.user.role); // ✅ Add this line
      console.log("Saved token:", localStorage.getItem("token"));

      if (response.data.user.role === "admin") {
        toast.success("Welcome Admin ✌️", { autoClose: 1000 });
        setTimeout(() => navigate("/dashboard"), 1000); // Navigate after toast
      } else {
        toast.success("Login successfully!", { autoClose: 1000 });
        setTimeout(() => navigate("/home"), 1000); // Navigate after toast
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed! Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit} 
      className="w-full h-screen bg-white text-center pt-24 flex-row justify-center items-center" 
    >
      <h1 className="text-5xl font-serif py-4">Hello</h1>
      <div className="gap-2">
      <button className="border border-black w-36 h-12">LOG IN</button>
      <button type="button" onClick={() => navigate("/register")} className="border border-gray-400 text-gray-400 w-36 h-12">SIGN UP</button>
      </div>
      <div className="">
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
      <button type="submit" className="border bg-black text-white h-14 w-72 mt-5 hover:bg-slate-700">
        Login
      </button>
      <p className="text-xs text-indigo-900 mt-4">FORGOT PASSWORD?</p>


</form>
  );
}

export default Loginpage;
