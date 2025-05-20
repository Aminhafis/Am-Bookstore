import React, { useEffect , useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Reading from "../imgs/Reading.mp4";
import { toast } from "react-toastify";

function About() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Subscribed email:", email);
    toast.success("Subscription successful.", { autoClose: 1000 });
    setEmail(""); // reset after subscribe
  };

  return (
    <div className="bg-white">
      {/* Heading Section */}
      <div
  className="box-border bg-white h-72 w-screen relative flex items-center justify-center"
  data-aos="fade-down"
>
  <h1 className="font-Montserrat text-4xl sm:text-5xl md:text-6xl text-stone-400 text-center mt-20">
    Who we are and what we do.
  </h1>
</div>

{/* Video Section with centered overlap */}
<div
  className="w-full max-w-4xl mx-auto relative z-10 -mt-12 mb-[-4rem] lg:-mt-32 lg:mb-[-8rem] flex justify-center items-center"
  data-aos="zoom-in"
>
  <video className="w-full sm:w-3/4 lg:h-96 rounded-lg shadow-lg" controls>
    <source src={Reading} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

      {/* Editions Section */}
      <div className="box-border bg-stone-300 min-h-screen flex flex-col justify-center items-center px-4 pt-20">
        <div className="flex flex-wrap justify-center gap-8 mt-10 max-w-6xl">
          {/* First Edition */}
          <div
            className="flex flex-col items-center md:items-start w-full sm:w-[300px] h-auto p-6 text-center md:text-left bg-white rounded-md shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Book Icon */}
            <svg
              className="w-16 h-16 mb-4 text-zinc-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75z"
              />
            </svg>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">FIRST EDITION</h2>
            <p className="text-sm sm:text-base">
              Discover the classic beginnings that sparked a literary journey.
              Our first editions represent history in your hands.
            </p>
          </div>

          {/* Second Edition */}
          <div
            className="flex flex-col items-center md:items-start w-full sm:w-[300px] h-auto p-6 text-center md:text-left bg-white rounded-md shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Open Book Icon */}
            <svg
              className="w-16 h-16 mb-4 text-zinc-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75C8.36 4.5 4.5 6.75 4.5 6.75v10.5s3.86-2.25 7.5 0c3.64-2.25 7.5 0 7.5 0V6.75s-3.86-2.25-7.5 0z"
              />
            </svg>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">SECOND EDITION</h2>
            <p className="text-sm sm:text-base">
              Enhanced insights, refined words. The second edition revisits the
              classics with thoughtful improvements.
            </p>
          </div>

          {/* Third Edition */}
          <div
            className="flex flex-col items-center md:items-start w-full sm:w-[300px] h-auto p-6 text-center md:text-left bg-white rounded-md shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Feather Quill Icon */}
            <svg
              className="w-16 h-16 mb-4 text-zinc-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.24 3.76a9 9 0 01-12.73 0L3 8l3.27 3.27a9 9 0 0112.73 0L21 8l-3.27-4.24zM9 13l3 3 4-4"
              />
            </svg>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">THIRD EDITION</h2>
            <p className="text-sm sm:text-base">
              A blend of tradition and modern thought. This edition speaks to the
              contemporary reader with a classic heart.
            </p>
          </div>
        </div>
      </div>

      {/* Black Section with quote and orders */}
      <div className="flex flex-col md:flex-row bg-black text-white" data-aos="fade-right">
        {/* Left Section */}
        <div className="flex flex-col items-start w-full md:w-1/2 border-b-2 md:border-r-2 border-slate-100">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight p-4 sm:p-6 md:p-8 lg:p-9">
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

      {/* Text + CTA */}
      <div className="bg-black text-white text-center px-6 md:px-20 lg:px-96" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl lg:text-5xl pt-8">
          Create the space for your <br />
          thinking to take off.
        </h1>
        <p className="pt-6 text-base md:text-lg lg:text-xl">
          A blank page is also a door. At medium, you can also walk through it.
          It's easy and free to share your thinking on any topic, connect with
          a group, express your thoughts. Reading is a way of life. <br />
          Make it happen.
        </p>
        <button className="border-2 hover:border-orange-300 hover:text-orange-300 mt-8 mb-8 p-3 rounded-full">
          Write on Bookstore
        </button>
      </div>

      {/* Newsletter Section */}
      <div
        className="bg-stone-300 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-6 md:px-20 py-16 md:py-36 space-y-10 md:space-y-0 md:space-x-12"
        data-aos="fade-left"
      >
        {/* Heading */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
        </div>

        {/* Text, Input & Button */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <p className="text-base sm:text-lg font-serif text-stone-600">
          Stay updated with the latest news and exclusive book releases!
          </p>
          <div className="w-full md:w-auto mt-5 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              name="email"
              placeholder="Add your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-72 h-10 bg-transparent text-base outline-none border-b border-gray-500 focus:border-black transition"
            />
            <button
              onClick={handleSubscribe}
              className="mt-3 sm:mt-0 px-6 py-2 bg-black text-white hover:bg-orange-800 transition rounded-full"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
