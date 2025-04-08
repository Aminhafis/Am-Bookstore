import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { useNavigate } from "react-router-dom";
import home1 from "../imgs/home1.jpg";
import Home2 from "../imgs/Home2.jpg";
import Home3 from "../imgs/Home3.jpg";
import Home4 from "../imgs/Home4.jpg";
import Home5 from "../imgs/Home5.jpg";
import Home6 from "../imgs/Home6.jpg";
import Home7 from "../imgs/Home7.jpg";
import Home8 from '../imgs/Home8.jpg'
import Home9 from '../imgs/Home9.jpg'
import thewaiting from '../imgs/the wiating.jpg'
import fangfiction from '../imgs/fang fiction.jpg'
import thehouseatwatchhill from '../imgs/the house at watch will.jpg'
import themessage from '../imgs/themessage.jpg'
import verity from '../imgs/verity.jpg'
import wherethecrawdadssinging from '../imgs/wherethecrawdadssing.jpg'
import H from '../imgs/H.png'
import b from '../imgs/B.png'
import Bookland from '../imgs/Bookland.png'
import Crown from '../imgs/Crown.png'
import Company from '../imgs/Company.png'
import slide1 from '../imgs/slide1.jpg'
import slide2 from '../imgs/slide2.jpg'
import slide3 from '../imgs/slide3.jpg'
import slide4 from '../imgs/slide4.avif'
import slide5 from '../imgs/slide5.jpg'
import slide6 from '../imgs/slide6.jpg'


const Carousel = () => {
  const navigate = useNavigate();

const products = [
  {
    title: "Michael Connelly",
    image: thewaiting,
    price: "Rs799",
  },
  {
    title: "Kate Stayman-London",
    image: fangfiction,
    price: "Rs499",
  },
  {
    title: "Karen Marie Moning",
    image: thehouseatwatchhill,
    price: "Rs999",
  },
  {
    title: "Ta-Nehisi Coates",
    image: themessage,
    price: "Rs599",
  },
  {
    title: "Colleen Hoover",
    image: verity,
    price: "Rs499",
  },
  {
    title: "Delia Owens",
    image: wherethecrawdadssinging,
    price: "Rs399",
  },
]

  const slides = [
    {  image: slide1},
    { image: slide2},
    {  image: slide3},
    {  image: slide4},
    {  image: slide5 },
    {  image: slide6 },
  ];

  

  
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Use modules array to include features
        spaceBetween={30}
        slidesPerView={1}
        // navigation // Enable navigation (previous/next buttons)
        pagination={{ clickable: true }} // Enable clickable pagination dots
        autoplay={{ delay: 3000 }} // Autoplay with a 3-second delay
        loop={true} // Loop the slides infinitely
      > 
      
      <SwiperSlide>
  <div className="h-[700px] bg-stone-200 text-white relative">
    
    {/* Heading */}
    <div className="flex items-center justify-center text-center text-8xl z-20">
      <h1 className="font-Montserrat pt-10 text-gray-300">
        2024'S EDITIONS <br /> OF PAGE TURNERS
      </h1>
    </div>

    {/* Book Images Section */}
    <div className="font-BebasNeue flex justify-center md:justify-between px-6 md:px-20 lg:px-40 animate-slideUp absolute top-[180px] w-full z-10">
      
      {/* Image 1 - Always Visible */}
      <div className="relative text-slate-950">
  <img
    src={home1}
    alt=""
    className="h-80 w-56 md:h-96 md:w-64 lg:h-80 lg:w-56 transition-opacity duration-700 delay-300"
  />
  
  {/* Text container - Aligns over image only on sm & md screens */}
  <div className="absolute left-0 bottom-0 w-full transition-transform duration-700 delay-150 translate-y-5 opacity-100 animate-fadeIn">
    <p className="text-2xl absolute left-[-80px] bottom-16">LI-YOUNG <br /> LEE</p>
    <hr className="border-slate-900 h-[2px] w-16 mx-auto mt-2 absolute left-[-80px] bottom-12" />
    <p className="text-xs mt-1 absolute left-[-10px] bottom-10">READ MORE</p>
  </div>
</div>


      {/* Image 2 - Hide on Mobile, Show on Tablet & Desktop */}
      <div className="relative text-slate-950 hidden sm:block">
        <img
          src={Home2}
          alt=""
          className="h-80 w-56 md:h-96 md:w-64 lg:h-80 lg:w-56 transition-opacity duration-700 delay-300"
        />
       <div className="absolute left-0 bottom-0 w-full transition-transform duration-700 delay-150 translate-y-5 opacity-100 animate-fadeIn ">
                  <p className="text-2xl absolute left-[-80px] bottom-16">
                    CLYO <br /> MENDOZA
                  </p>
                  <hr className="border-slate-900 h-[2px] w-16 mx-auto mt-2 absolute left-[-80px] bottom-12" />
                  <p className="text-xs mt-1 absolute left-[-10px] bottom-10">
                    READ MORE
                  </p>
                </div>
      </div>

      {/* Image 3 - Hide on Tablet & Mobile, Show on Desktop */}
      <div className="relative text-slate-950 hidden lg:block">
        <img
          src={Home3}
          alt=""
          className="h-80 w-56 md:h-96 md:w-64 lg:h-80 lg:w-56 transition-opacity duration-700 delay-300"
        />
        <div className="absolute left-0 bottom-0 w-full transition-transform duration-700 delay-150 translate-y-5 opacity-100 animate-fadeIn ">
                  <p className="text-2xl absolute left-[-80px] bottom-16">
                    MAI <br /> MOCHIZUKI
                  </p>
                  <hr className="border-slate-900 h-[2px] w-16 mx-auto mt-2 absolute left-[-80px] bottom-12" />
                  <p className="text-xs mt-1 absolute left-[-10px] bottom-10">
                    READ MORE
                  </p>
                </div>
      </div>

    </div>

  </div>
</SwiperSlide>




<SwiperSlide>
  <div className="h-[700px] bg-stone-200 text-white relative">
    
    {/* Heading */}
    <div className="flex items-center justify-center text-center text-8xl z-20">
      <h1 className="font-Montserrat pt-10 text-gray-300">
        2024'S EDITIONS <br /> OF PAGE TURNERS
      </h1>
    </div>

    {/* Book Images Section */}
    <div className="font-BebasNeue flex justify-center md:justify-between px-6 md:px-20 lg:px-40 animate-slideUp absolute top-[180px] w-full z-10">
      
      {/* Image 1 - Always Visible */}
      <div className="relative text-slate-950">
        <img
          src={Home4}
          alt=""
          className="h-80 w-56 md:h-96 md:w-64 lg:h-80 lg:w-56 transition-opacity duration-700 delay-300"
        />
        <div className="absolute left-0 bottom-0 w-full transition-transform duration-700 delay-150 translate-y-5 opacity-100 animate-fadeIn ">
                  <p className="text-2xl absolute left-[-80px] bottom-16">
                    BRUCE <br /> GORDON
                  </p>
                  <hr className="border-slate-900 h-[2px] w-16 mx-auto mt-2 absolute left-[-80px] bottom-12" />
                  <p className="text-xs mt-1 absolute left-[-10px] bottom-10">
                    READ MORE
                  </p>
                </div>
      </div>

      {/* Image 2 - Hide on Mobile, Show on Tablet & Desktop */}
      <div className="relative text-slate-950 hidden sm:block">
        <img
          src={Home5}
          alt=""
          className="h-80 w-56 md:h-96 md:w-64 lg:h-80 lg:w-56 transition-opacity duration-700 delay-300"
        />
        <div className="absolute left-0 bottom-0 w-full transition-transform duration-700 delay-150 translate-y-5 opacity-100 animate-fadeIn ">
                  <p className="text-2xl absolute left-[-80px] bottom-16">
                    DON <br /> WINSLOW
                    </p>
                  <hr className="border-slate-900 h-[2px] w-16 mx-auto mt-2 absolute left-[-80px] bottom-12" />
                  <p className="text-xs mt-1 absolute left-[-10px] bottom-10">
                    READ MORE
                  </p>
                </div>
      </div>

      {/* Image 3 - Hide on Tablet & Mobile, Show on Desktop */}
      <div className="relative text-slate-950 hidden lg:block">
        <img
          src={Home6}
          alt=""
          className="h-80 w-56 md:h-96 md:w-64 lg:h-80 lg:w-56 transition-opacity duration-700 delay-300"
        />
        <div className="absolute left-0 bottom-0 w-full transition-transform duration-700 delay-150 translate-y-5 opacity-100 animate-fadeIn ">
                  <p className="text-2xl absolute left-[-80px] bottom-16">
                    MELISSA <br /> M.MARTIN
                  </p>
                  <hr className="border-slate-900 h-[2px] w-16 mx-auto mt-2 absolute left-[-80px] bottom-12" />
                  <p className="text-xs mt-1 absolute left-[-10px] bottom-10">
                    READ MORE
                  </p>
                </div>
      </div>

    </div>

  </div>
</SwiperSlide>

        <SwiperSlide>
        <div className="h-[700px] bg-stone-200 text-white relative">
            <div className="flex items-center justify-center text-center text-8xl z-20">
              <h1 className="font-Montserrat pt-10 text-gray-300">
                {" "}
                2024'S EDITIONS <br /> OF PAGE TURNERS
              </h1>
            </div>
            <div className="font-BebasNeue flex justify-center md:justify-between px-6 md:px-20 lg:px-40 animate-slideUp absolute top-[180px] w-full z-10">
              <div className="relative text-slate-950">
                <img src={Home7} alt="" className="h-80 w-56 md:h-96 md:w-64 lg:h-80 lg:w-56 transition-opacity duration-700 delay-300" />
                <div className="absolute left-0 bottom-0 w-full transition-transform duration-700 delay-150 translate-y-5 opacity-100 animate-fadeIn ">
                  <p className="text-2xl absolute left-[-80px] bottom-16">
                    CARL <br /> SCIACCHITANO
                  </p>
                  <hr className="border-slate-900 h-[2px] w-16 mx-auto mt-2 absolute left-[-80px] bottom-12" />
                  <p className="text-xs mt-1 absolute left-[-10px] bottom-10">
                    READ MORE
                  </p>
                </div>
              </div>

              <div className="relative text-slate-950 hidden sm:block">
        <img
          src={Home8}
          alt=""
          className="h-80 w-56 md:h-96 md:w-64 lg:h-80 lg:w-56 transition-opacity duration-700 delay-300"
        />
        <div className="absolute left-0 bottom-0 w-full transition-transform duration-700 delay-150 translate-y-5 opacity-100 animate-fadeIn ">
                  <p className="text-2xl absolute left-[-80px] bottom-16">
                    TIA <br /> WILLIAMS
                    </p>
                  <hr className="border-slate-900 h-[2px] w-16 mx-auto mt-2 absolute left-[-80px] bottom-12" />
                  <p className="text-xs mt-1 absolute left-[-10px] bottom-10">
                    READ MORE
                  </p>
                </div>
              </div>
              <div className="relative text-slate-950 hidden lg:block">
        <img
          src={Home9}
          alt=""
          className="h-80 w-56 md:h-96 md:w-64 lg:h-80 lg:w-56 transition-opacity duration-700 delay-300"
        />
        <div className="absolute left-0 bottom-0 w-full transition-transform duration-700 delay-150 translate-y-5 opacity-100 animate-fadeIn ">
                  <p className="text-2xl absolute left-[-80px] bottom-16">
                    RYAN <br /> LIEBENTHAL
                  </p>
                  <hr className="border-slate-900 h-[2px] w-16 mx-auto mt-2 absolute left-[-80px] bottom-12" />
                  <p className="text-xs mt-1 absolute left-[-10px] bottom-10">
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="bg-stone-300 h-[500px] px-6 md:px-12 lg:px-20 flex items-center">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full">
    
    {/* Heading Section */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-BebasNeue">
        SUBSCRIBE TO OUR NEWSLETTER
      </h1>
    </div>

    {/* Input & Description Section */}
    <div className="text-center md:text-left">
      <p className="text-lg font-serif text-stone-600 max-w-md mx-auto md:mx-0">
        Stay updated with the latest news and exclusive book releases!
      </p>

      {/* Email Input */}
      <div className="relative mt-5 max-w-sm mx-auto md:mx-0">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full h-12 bg-transparent border-b-2 border-neutral-800 text-lg outline-none px-2"
        />
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-stone-700 font-semibold hover:text-stone-900 transition">
          Subscribe
        </button>
      </div>
    </div>
    
  </div>
</div>


      <div className="">
        <p className="text-xl font-mono text-center text-stone-500 pt-28">Your Shopping expo</p>
        <h1 className="text-5xl font-BebasNeue text-center p-6">Our recent</h1>
       <Swiper
       slidesPerView={4}
       spaceBetween={20}
       autoplay={{
        delay: 0, // Continuous autoplay without delay
        disableOnInteraction: false,
      }}
      speed={3000} // Speed of the slide animation
      loop={true} // Ensures continuous looping
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      modules={[Autoplay]} // Include Autoplay module
      className="mySwiper"
    >{products.map((product, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col items-center p-10">
          <img src={product.image} alt={product.title} className="w-40 h-52 rounded-lg " onClick={() =>navigate('/viewProduct')} />
          <h3 className="text-2xl font-BebasNeue text-center pt-3">
            {product.title}
          </h3>
          <p className="text-xl font-mono text-center text-stone-500">
            {product.price}
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
      </div>
     

<div className="bg-stone-200 h-80 px-4 flex items-center justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-around gap-6 w-full max-w-6xl">
    
    <img src={H} alt="" className="w-24 h-20 md:w-28 md:h-24 p-4 cursor-pointer hover:bg-gray-300 transition" />
    
    <img src={b} alt="" className="w-24 h-24 md:w-28 md:h-28 p-5 cursor-pointer hover:bg-gray-300 transition" />
    
    <img src={Crown} alt="" className="w-24 h-28 md:w-28 md:h-32 p-5 cursor-pointer hover:bg-gray-300 transition" />
    
    <img src={Bookland} alt="" className="w-24 h-28 md:w-28 md:h-32 p-5 cursor-pointer hover:bg-gray-300 transition" />
    
    <img src={Company} alt="" className="w-24 h-28 md:w-28 md:h-32 p-5 cursor-pointer hover:bg-gray-300 transition" />
  
  </div>
</div>

        <div className="px-4 py-8">
        <Swiper
      slidesPerView={4}
      spaceBetween={20}
      autoplay={{
        delay: 0, // Continuous autoplay without delay
        disableOnInteraction: false,
      }}
      speed={3000} // Speed of the slide animation
      loop={true} // Ensures continuous looping
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      modules={[Autoplay]} // Include only the Autoplay module
      className="mySwiper"
    >
      {slides.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="h-52 w-60 rounded-lg  flex flex-col items-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover rounded"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

        </div>
    </div>
  );
};

export default Carousel;
