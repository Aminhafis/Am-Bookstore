import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Import images
import home1 from "../imgs/home1.jpg";
import Home2 from "../imgs/Home2.jpg";
import Home3 from "../imgs/Home3.jpg";
import Home4 from "../imgs/Home4.jpg";
import Home5 from "../imgs/Home5.jpg";
import Home6 from "../imgs/Home6.jpg";
import Home7 from "../imgs/Home7.jpg";
import Home8 from "../imgs/Home8.jpg";
import Home9 from "../imgs/Home9.jpg";

import thewaiting from "../imgs/the wiating.jpg";
import fangfiction from "../imgs/fang fiction.jpg";
import thehouseatwatchhill from "../imgs/the house at watch will.jpg";
import themessage from "../imgs/themessage.jpg";
import verity from "../imgs/verity.jpg";
import wherethecrawdadssinging from "../imgs/wherethecrawdadssing.jpg";

import slide1 from "../imgs/slide1.jpg";
import slide2 from "../imgs/slide2.jpg";
import slide3 from "../imgs/slide3.jpg";
import slide4 from "../imgs/slide4.avif";
import slide5 from "../imgs/slide5.jpg";
import slide6 from "../imgs/slide6.jpg";

const Carousel = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Validate and notify email subscription
  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Subscription successful.", { autoClose: 1000 });
    setEmail("");
  };

  // Helper for conditional visibility classes based on screen size
  const getVisibilityClass = (hiddenOn) => {
    if (hiddenOn === "mobile") return "hidden sm:block";
    if (hiddenOn === "tablet") return "hidden lg:block";
    return "";
  };

  // Data for the top hero carousel (3 slides, each with 3 images)
  const heroSlides = [
    {
      images: [
        { src: home1, author: "LI-YOUNG LEE" },
        { src: Home2, author: "CLYO MENDOZA", hiddenOn: "mobile" },
        { src: Home3, author: "MAI MOCHIZUKI", hiddenOn: "tablet" },
      ],
    },
    {
      images: [
        { src: Home4, author: "BRUCE GORDON" },
        { src: Home5, author: "DON WINSLOW", hiddenOn: "mobile" },
        { src: Home6, author: "MELISSA M.MARTIN", hiddenOn: "tablet" },
      ],
    },
    {
      images: [
        { src: Home7, author: "CARL SCIACCHITANO" },
        { src: Home8, author: "TIA WILLIAMS", hiddenOn: "mobile" },
        { src: Home9, author: "RYAN LIEBENTHAL", hiddenOn: "tablet" },
      ],
    },
  ];

  // Data for recent products in the shopping expo section
  const recentProducts = [
    { title: "Michael Connelly", image: thewaiting, price: "Rs799" },
    { title: "Kate Stayman-London", image: fangfiction, price: "Rs499" },
    { title: "Karen Marie Moning", image: thehouseatwatchhill, price: "Rs999" },
    { title: "Ta-Nehisi Coates", image: themessage, price: "Rs599" },
    { title: "Colleen Hoover", image: verity, price: "Rs499" },
    { title: "Delia Owens", image: wherethecrawdadssinging, price: "Rs399" },
  ];

  // Data for the secondary slides carousel (slide1 to slide6)
  const secondarySlides = [
    { src: slide1 },
    { src: slide2 },
    { src: slide3 },
    { src: slide4 },
    { src: slide5 },
    { src: slide6 },
  ];

  return (
    <div>
      {/* Top Hero Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="relative"
      >
        {heroSlides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-[700px] bg-stone-200 text-white relative">
              <div className="flex items-center justify-center text-center text-8xl z-20">
                <h1 className="font-Montserrat pt-10 text-gray-300">
                  2024'S EDITIONS <br /> OF PAGE TURNERS
                </h1>
              </div>

              <div className="font-BebasNeue flex justify-center md:justify-between px-6 md:px-20 lg:px-40 animate-slideUp absolute top-[180px] w-full z-10">
                {slide.images.map(({ src, author, hiddenOn }, i) => (
                  <div
                    key={i}
                    className={`relative text-slate-950 ${getVisibilityClass(
                      hiddenOn
                    )}`}
                  >
                    <img
                      src={src}
                      alt={`Book cover by ${author}`}
                      className="h-80 w-56 md:h-96 md:w-64 lg:h-80 lg:w-56 transition-opacity duration-700 delay-300"
                    />
                    <div className="absolute left-0 bottom-0 w-full transition-transform duration-700 delay-150 translate-y-5 opacity-100 animate-fadeIn">
                      <p className="text-2xl absolute left-[-80px] bottom-16">
                        {author.split(" ").map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                      <hr className="border-slate-900 h-[2px] w-16 mx-auto mt-2 absolute left-[-80px] bottom-12" />
                      <p className="text-xs mt-1 absolute left-[-10px] bottom-10">
                        READ MORE
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Subscription Section */}
      <div className="bg-stone-300 h-[500px] px-6 md:px-12 lg:px-20 flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full">
          <div className="space-y-6">
            <h2 className="text-4xl font-Montserrat text-gray-800">
              Stay Updated with Our Monthly Picks
            </h2>
            <p className="text-gray-700">
              Get exclusive recommendations, new releases, and more delivered
              right to your inbox.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-3 w-full md:w-72 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Email address"
            />
            <button
              onClick={handleSubscribe}
              className="px-6 py-3 bg-orange-800 text-white rounded-lg hover:bg-orange-700 transition duration-300"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Recent Products Section */}
      <section className="py-10">
        <p className="text-xl font-mono text-center text-stone-500 pt-8">
          Your Shopping expo
        </p>
        <h1 className="text-5xl font-BebasNeue text-center p-6">Our recent</h1>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {recentProducts.map(({ title, image, price }, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center p-10 cursor-pointer">
                <img
                  src={image}
                  alt={`${title} book cover`}
                  className="w-40 h-52 rounded-lg"
                  onClick={() => navigate("/viewProduct")}
                />
                <h3 className="text-2xl font-BebasNeue text-center pt-3">
                  {title}
                </h3>
                <p className="text-orange-600 pt-2 font-bold">{price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Secondary Slides Carousel (slide1 to slide6) */}
      <section className="py-10 px-6 md:px-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {secondarySlides.map(({ src }, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Featured slide ${idx + 1}`}
                className="rounded-lg w-full h-auto object-cover cursor-pointer"
                onClick={() => navigate("/viewProduct")}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Carousel;
