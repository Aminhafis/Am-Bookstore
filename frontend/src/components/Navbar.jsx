import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { VscAccount, VscThreeBars } from "react-icons/vsc";
import { RiShoppingBagLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import SearchBox from './SearchBox';

const listItems = [
  { name: 'Home', path: '/home' },
  { name: 'About', path: '/about' },
  { name: 'Shop', path: '/viewProduct' },
  { name: 'Category', path: '/category' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("Id");
    toast.success("User has been logged out");
    setDropdownOpen(false);
  };

  const handleCartClick = () => {
    const userId = localStorage.getItem("Id");

    if (!userId) {
      toast.error("Please login to view your cart.");
      return;
    }

    navigate("/cart");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const bgColorMap = {
    "/home": "bg-stone-200",
    "/about": "bg-white",
    "/viewProduct": "bg-zinc-100",
    "/category": "bg-zinc-200",
    "/blog": "bg-white",
    "/contact": "bg-white",
  };

  const currentBg = location.pathname.startsWith('/book/')
    ? "bg-zinc-300"
    : bgColorMap[location.pathname] || "bg-white";

  return (
    <div className={`${currentBg} transition-colors duration-500 shadow-sm`}>
      {/* Top strip */}
      <div className='hidden md:flex justify-between items-center px-6 py-2 text-sm text-gray-500'>
        <div className='flex gap-4'>
          <span>Follow us:</span>
          <FaInstagram className="h-4 w-4 hover:text-black cursor-pointer" />
          <FaFacebookF className="h-4 w-4 hover:text-black cursor-pointer" />
          <FaXTwitter className="h-4 w-4 hover:text-black cursor-pointer" />
        </div>
        <div className='flex gap-6 items-center'>
          <SearchBox className="h-5 w-5" />
         <div
      onClick={handleCartClick}
      className="flex items-center gap-2 cursor-pointer"
    >
      <RiShoppingBagLine className="h-5 w-5 hover:text-black cursor-pointer" />
    </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 mx-6" />

      {/* Main Navbar */}
      <div className='flex items-center justify-between px-6 py-4'>
        <h1 className='text-xl font-bold'>AM Bookstore</h1>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-10 items-center'>
          <ul className='flex gap-8 text-gray-800 font-medium'>
            {listItems.map(({ name, path }) => (
              <li key={path} className='cursor-pointer hover:text-gray-600' onClick={() => navigate(path)}>
                {name}
              </li>
            ))}
          </ul>

          {/* Account Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(prev => !prev)}
              className="flex items-center cursor-pointer"
            >
              <VscAccount className="h-6 w-6" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border shadow-md rounded-md text-sm py-1 z-50">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        navigate('/login');
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        navigate('/register');
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Signup
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button className='md:hidden text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
          <VscThreeBars className='h-5 w-5 cursor-pointer' />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden px-4 py-2 bg-stone-100 flex flex-col gap-4'>
          {listItems.map(({ name, path }) => (
            <span
              key={path}
              onClick={() => {
                navigate(path);
                setMenuOpen(false);
              }}
              className='border-b pb-2 cursor-pointer text-lg'
            >
              {name}
            </span>
          ))}
          <div className='mt-2'>
            {isLoggedIn ? (
              <button onClick={handleLogout} className='w-full text-left py-2'>
                Logout
              </button>
            ) : (
              <>
                <button onClick={() => { navigate("/login"); setMenuOpen(false); }} className='w-full text-left py-2'>
                  Login
                </button>
                <button onClick={() => { navigate("/register"); setMenuOpen(false); }} className='w-full text-left py-2'>
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
