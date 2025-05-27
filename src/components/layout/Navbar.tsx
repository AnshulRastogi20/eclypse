
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between px-6 py-3 max-md:px-4 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[rgba(0,0,0,0.9)] backdrop-blur-md' 
        : 'bg-[rgba(0,0,0,0.59)]'
    }`}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/3bf8e3edfb4a0296c520ee626432fe8984b6de86?placeholderIfAbsent=true"
        alt="Eclypse Logo"
        className="w-[40px] h-[37px] object-contain rounded-[5px]"
      />
      <div className="hidden md:flex items-center gap-12 text-[19px] text-white font-normal tracking-[-0.39px]">
        <Link to="/about" className="hover:text-gray-300 transition-colors">
          About Us
        </Link>
        <Link to="/waitlist" className="hover:text-gray-300 transition-colors">
          Waitlist
        </Link>
        <Link to="/cart" className="hover:text-gray-300 transition-colors">
          Cart
        </Link>
        <Link 
          to="/shop" 
          className="bg-white text-black font-medium px-8 py-3 rounded-[9px] hover:bg-gray-100 transition-colors"
        >
          Buy
        </Link>
      </div>
      <div className="md:hidden text-white text-[19px] font-normal tracking-[-0.39px]">
        <Link 
          to="/shop" 
          className="bg-white text-black font-medium px-6 py-2 rounded-[9px] hover:bg-gray-100 transition-colors"
        >
          Buy
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
