import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { VscAccount , VscThreeBars} from "react-icons/vsc";
import { RiShoppingBagLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";

const listItems = [
  { name: 'Home', path: '/home' },
  { name: 'About', path: '/about' },
  { name: 'Shop', path: '/viewProduct' },
  { name: 'Category', path: '/category' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

   // Background color map for each route
   const bgColorMap = {
    "/home": "bg-stone-200",
    "/about": "bg-white",
    "/viewProduct": "bg-zinc-100",
    "/category": "bg-zinc-200",
    "/blog": "bg-white",
    "/contact": "bg-white",
  };

  const currentBg = bgColorMap[location.pathname] || "bg-white";

  const handleLogout = () => {
    localStorage.removeItem("Id");
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <div className={`${currentBg} transition-colors duration-500`}>
      <div className='hidden md:flex font-BebasNeue flex-row py-2 text-gray-500 items-center justify-between px-4'>
        <div className='flex justify-start gap-6'>
          <span>Our Social:</span>
          <span>In.</span>
          <span>Fb.</span>
          <span>X.</span>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex gap-1'>
            <IoSearch aria-label="Search" className='h-6 w-6' />
            <span className='inline'>Search</span>
          </div>
          <div className='flex gap-1'>
            <RiShoppingBagLine
              aria-label="Cart"
              className='h-6 w-6'
              onClick={() => navigate('/cart')}
            />
            <span className='inline'>Cart</span>
          </div>
        </div>
      </div>
      <hr className='hidden md:block border-0 h-[1px] bg-black mx-4 md:mx-8' />

      <div className='relative w-full flex items-center justify-between py-3 px-4 md:px-10 text-gray-800 font-bold'>
        <h1 className='text-lg md:text-xl'>AM Bookstore</h1>

        <div className='hidden md:flex items-center gap-8'>
          <ul className='flex flex-row gap-8 text-lg'>
            {listItems.map(({ name, path }, index) => (
              <li 
                className='cursor-pointer' 
                onClick={() => navigate(path)}
                key={index}
              >
                {name}
              </li>
            ))}
          </ul>

          <div className='flex items-center gap-4'>
            <VscAccount
              aria-label="Account"
              className='h-6 w-6 cursor-pointer'
              onClick={() => navigate("/login")}
            />
            <button className='text-sm' onClick={handleLogout}>Logout</button>
          </div>
        </div>

        <button
          className='md:hidden text-2xl absolute right-4 top-3'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <VscThreeBars />
        </button>
      </div>

      {menuOpen && (
        <ul className='md:hidden flex flex-col gap-4 px-4 py-2 bg-stone-200 text-lg'>
          {listItems.map(({ name, path }, index) => (
            <li 
              className='cursor-pointer border-b border-gray-300 py-2' 
              onClick={() => {
                navigate(path);
                setMenuOpen(false);
              }}
              key={index}
            >
              {name}
            </li>
          ))}
        </ul>
      )}

      {menuOpen && (
        <div className='md:hidden flex flex-col items-center gap-4 mt-2'>
          <VscAccount
            aria-label="Account"
            className='h-6 w-6 cursor-pointer'
            onClick={() => {
              navigate("/login");
              setMenuOpen(false); 
            }}
          />
          <button className='text-sm' onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
