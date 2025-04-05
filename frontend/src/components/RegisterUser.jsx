import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:12000/api/user/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log("Ok", res);
        navigate("/login")
      })
      .catch((err) => {
        console.log(err);
        navigate('/not-authorized')
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
      <button className="border border-gray-400 text-gray-400 w-36 h-12" onClick={()=> navigate("/login")} >LOG IN</button>
      <button type="button" onClick={() => navigate("/register")} className="border border-black w-36 h-12">SIGN UP</button>
      </div>
<div className="">

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 w-72 mt-4"
        />{" "}
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
        <button type="submit" className="border bg-black text-white h-14 w-72 mt-4 hover:bg-slate-700">
        SIGN UP
      </button>
      <p className="text-xs mt-4 ">By creating an account,you agree to our <u>Privacy Policy </u><br />and <u>Terms.</u>We'll send you updates on all things away. <br />Need to take-off? Unsubscribe anytime. </p>
      </form>
    </div>
  );
}

export default RegisterUser;
