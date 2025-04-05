import React from "react";
import Icon2 from "../imgs/Icon2.png";
import icon3 from "../imgs/icon3.png";
import Reading from "../imgs/Reading.mp4";

function About() {
  return (
    <div className="">
      <div className="box-border bg-white h-64 w-screen relative">
        <h1 className="font-Montserrat text-6xl  text-stone-400 text-center mt-44">
          Who we are and what we do.
        </h1>
      </div>
      <div className="box-border bg-stone-300 min-h-screen flex flex-col justify-center items-center px-4">
  {/* Video Section */}
  <div className="w-full max-w-4xl flex justify-center items-center mx-auto relative lg:-mt-64 z-10">
    <video className="w-full sm:w-3/4 lg:h-96 rounded-lg shadow-lg" controls>
      <source src={Reading} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Editions Section */}
  <div className="flex flex-wrap justify-center gap-8 mt-10">
    {/* First Edition */}
    <div className="flex flex-col items-center md:items-start w-full sm:w-[300px] h-auto p-6 text-center md:text-left">
      <img className="w-16 h-16 mb-4" src={Icon2} alt="icon2" />
      <h2 className="text-lg sm:text-xl font-semibold mb-2">FIRST EDITION</h2>
      <p className="text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        perspiciatis, laudantium odit aliquid officiis ipsam.
      </p>
    </div>

    {/* Second Edition */}
    <div className="flex flex-col items-center md:items-start w-full sm:w-[300px] h-auto p-6 text-center md:text-left">
      <img className="w-16 h-16 mb-4" src={icon3} alt="icon3" />
      <h2 className="text-lg sm:text-xl font-semibold mb-2">SECOND EDITION</h2>
      <p className="text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        perspiciatis, laudantium odit aliquid officiis ipsam.
      </p>
    </div>

    {/* Third Edition */}
    <div className="flex flex-col items-center md:items-start w-full sm:w-[300px] h-auto p-6 text-center md:text-left">
      <img className="w-16 h-16 mb-4" src={Icon2} alt="icon1" />
      <h2 className="text-lg sm:text-xl font-semibold mb-2">THIRD EDITION</h2>
      <p className="text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        perspiciatis, laudantium odit aliquid officiis ipsam.
      </p>
    </div>
  </div>
</div>

      <div className="flex flex-col md:flex-row bg-black text-white">
  
  {/* Left Section */}
  <div className="flex flex-col items-start w-full md:w-1/2 border-b-2 md:border-r-2 border-slate-100">
    <h1 className="text-7xl p-9 pr-3">
      Over 100 <br /> million <br />
      orders and <br />
      growing.
    </h1>
  </div>

  {/* Right Section */}
  <div className="flex flex-col items-start w-full md:w-1/2 border-b-2 border-slate-100">
    <img src="" alt="" className="w-full md:w-auto" />

    <p className="p-10 md:p-40">
      "Bookstore is a great choice for the varieties of books, make it a
      habit to read a lot of books."
      <p className="pl-10 md:pl-20">"Amin Hafis"</p>
    </p>
  </div>
  
</div>
<div className="bg-black text-white text-center px-6 md:px-20 lg:px-96">
  <h1 className="text-3xl md:text-4xl lg:text-5xl pt-8">
    Create the space for your <br />
    thinking to take off.
  </h1>
  <p className="pt-6 text-base md:text-lg lg:text-xl">
    A blank page is also a door. At medium, you can also walk through
    it. It's easy and free to share your thinking on any topic, connect
    with a group, express your thoughts. Reading is a way of life. <br />
    Make it happen.
  </p>
  <button className="border-2 hover:border-orange-300 hover:text-orange-300 mt-8 mb-8 p-3 rounded-full">
    Write on Bookstore
  </button>
</div>

      <div className="h-[500px] bg-stone-300 flex flex-col md:flex-row items-start md:justify-start justify-center px-6 md:px-20 py-16 md:py-36">
  
  {/* Heading */}
  <div className="flex flex-col  text-center md:text-left">
    <h1 className="text-4xl md:text-5xl">SUBSCRIBE TO OUR NEWSLETTER</h1>
  </div>

  {/* Text & Input Section */}
  <div className="flex flex-col  px-4 md:px-0 text-center md:text-left">
    <p className="text-lg font-serif text-stone-600 ">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim illum, veritatis assumenda architecto vel doloribus.
    </p>
    <input
      type="text"
      name="email"
      placeholder="Add your e-mail"
      className="w-full md:w-72 h-10 bg-transparent mt-5 text-lg outline-none border-b border-gray-500 focus:border-black transition"
    />
  </div>
</div>
    </div>
  );
}

export default About;
