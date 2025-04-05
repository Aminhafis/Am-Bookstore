import React, { useState } from 'react'
import contact from '../imgs/contact.jpg'

function Contact() {

  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = ()=>{
    if (message && email && name) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }


  return (
      <div className="bg-black text-white font-Montserrat px-6 md:px-20 py-10">
        
        {/* Section Title */}
        <h5 className="text-xl text-center md:text-left p-2 hover:text-red-100 cursor-default">Special Online</h5>
        <h1 className="text-4xl md:text-6xl text-center md:text-left hover:text-red-100 cursor-default">MEET OUR TEAM</h1>
        <hr className="hidden md:block w-full h-[1px] bg-gray-400 my-5" />
  
        {/* Map Container */}
        <div className="map-container w-full h-80 md:h-[400px] relative overflow-hidden">
          <iframe
            className="w-full h-full"
            title="Google Map of Dubai"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Dubai, UAE&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen
          ></iframe>
        </div>
  
        {/* Office Locations (Now Responsive) */}
        <div className="text-lg flex flex-col md:flex-row justify-between items-center md:items-start pt-10 gap-10 md:gap-0 text-center md:text-left">
          <div>
            <h1 className="text-2xl">Jumeirah Office</h1>
            <p className="text-black hover:text-white cursor-pointer">Sunset Mall, Jumeirah 3</p>
            <p className="text-black hover:text-white cursor-pointer">Jumeirah 3, Dubai</p>
          </div>
          <div>
            <h1 className="text-2xl">Marina Plaza Office</h1>
            <p className="text-black hover:text-white cursor-pointer">Sheikh Zayed Road</p>
            <p className="text-black hover:text-white cursor-pointer">Dubai Marina, Dubai, UAE</p>
          </div>
          <div>
            <h1 className="text-2xl">One Horizon Center Office</h1>
            <p className="text-black hover:text-white cursor-pointer">Golf Course Road, DLF Phase V</p>
            <p className="text-black hover:text-white cursor-pointer">Sector 43 Haryana, India</p>
          </div>
          <div>
            <h1 className="text-2xl">DLF Cyber City Office</h1>
            <p className="text-black hover:text-white cursor-pointer">Phase 2, NH-8, Gurugram</p>
            <p className="text-black hover:text-white cursor-pointer">Haryana, India</p>
          </div>
        </div>
  
        {/* Contact Form Section (Now Responsive) */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between mt-16">
          
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl hover:text-red-100 cursor-default">SEND US A MESSAGE</h1>
            <p className="text-gray-400 pt-3">We’d love to hear from you !</p>
            <textarea
              className="w-full md:w-96 h-40 bg-black border border-gray-300 text-white p-2 mt-4 resize-none"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
  
            {/* Input Fields */}
            <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
              <div className="flex flex-col items-center w-full">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="bg-black h-12 w-full md:w-44 cursor-pointer text-white px-2 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <hr className="bg-gray-400 h-[1px] w-full md:w-44 border-0" />
              </div>
              <div className="flex flex-col items-center w-full">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-black h-12 w-full md:w-44 cursor-pointer text-white px-2 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <hr className="bg-gray-400 h-[1px] w-full md:w-44 border-0" />
              </div>
            </div>
  
            {/* Submit Button */}
            <button
              className="border-[1px] h-12 w-32 my-4 text-white font-Montserrat hover:bg-white hover:text-black transition"
              onClick={handleSubmit}
            >
              Submit
            </button>
  
            {/* Success Message */}
            {submitted && (
              <p className="text-green-500 font-semibold">Message has been sent!</p>
            )}
          </div>
  
          {/* Contact Image (Now Responsive) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={contact}
              alt="contact"
              className="w-full md:w-[500px] h-auto md:h-[300px] mt-10 md:mt-56"
            />
          </div>
        </div>
  
        {/* Bottom Divider */}
        <hr className="bg-gray-400 h-[1px] w-full mt-12 md:mt-24" />
      </div>
  )
}

export default Contact