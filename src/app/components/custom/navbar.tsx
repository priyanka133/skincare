"use client";
import React, { useState } from "react";
import Link from "next/link";
import img14 from "@/Assests/productd2.jpg";
import Image from "next/image";

import {
  FaArrowLeft,
 
  FaChevronRight,
 
  FaUserCircle,
} from "react-icons/fa";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const NavbarWithSidebar = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  // const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <div>
      <header className="border-b border-[#ddd] w-full">
        <div className="bg-[#fbece3] text-center py-2 text-xs md:text-sm text-[#703527] font-medium">
          Healthy skin, happy you
        </div>

        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-[#703527]">
            GlowFlow
          </Link>

          {/* Desktop Navbar */}
          <nav className="hidden lg:flex space-x-4 sm:space-x-8 text-xs sm:text-sm font-medium text-[#703527]">
            <Link href="/" className="hover:text-[#aa5c3b]">
              HOME
            </Link>
            <Link href="/about" className="hover:text-[#aa5c3b]">
              ABOUT US
            </Link>
            <Link href="/service" className="hover:text-[#aa5c3b]">
              PAGES
            </Link>
            <Link href="/shop" className="hover:text-[#aa5c3b]">
              SHOP
            </Link>
            <Link href="/contact" className="hover:text-[#aa5c3b]">
              CONTACT US
            </Link>
          </nav>

          {/* Icons */}
          <div className="relative flex items-center space-x-2 sm:space-x-4">
            {/* Cart Button */}
            <button
              className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 border-4 border-[#f9e5da] rounded-full shadow-lg"
              onClick={toggleSidebar}
            >
              <PiShoppingCartSimpleLight className="text-[#4e2e28] text-lg sm:text-2xl" />
            </button>

            {/* Book Now Button */}
            <Link href="/book">
              <button className="bg-[#703527] text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-1 sm:py-2 rounded-full hover:bg-[#572017]">
                BOOK NOW
              </button>
            </Link>

            {/* Profile Icon */}
            <div className="relative">
              <button
                className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full shadow-lg border-4 border-[#f9e5da]"
                onClick={toggleDropdown}
              >
                <FaUserCircle className="text-[#4e2e28] text-lg sm:text-2xl" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <Link
                    href="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Orders
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      alert("Logged Out!");
                      setIsDropdownOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="relative">
  <div
    className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg p-6 flex flex-col transition-transform duration-300 ${
      isSidebarOpen ? "translate-x-0" : "translate-x-full"
    }`}
    style={{ zIndex: 1050 }} 
  >
    <div className="flex justify-between items-center mb-4">
      <button
        className="text-gray-500"
        onClick={toggleSidebar} 
      >
        <FaArrowLeft size={20} />
      </button>
      <h2 className="text-lg font-bold">
        Bag <span className="text-gray-500 text-sm">(1 item)</span>
      </h2>
      <button className="text-[#703527] text-sm font-medium">
        View Wishlist
      </button>
    </div>


    <div className="flex-grow overflow-y-auto pb-8"> 
     
    <div className="border border-gray-300 rounded-md p-4 shadow-sm">
  <div className="flex justify-between items-center h-full">
    <p className="text-sm flex items-center">
      <span className="font-medium">2684 Reward Points</span>{" "}
      <span className="text-gray-500 ml-1">(₹26.84)</span>
    </p>
    <button 
      className="text-[#703527] text-sm font-medium border border-[#703527] px-3 py-1 rounded hover:bg-[#703527] hover:text-white transition"
      onClick={() => alert("Apply button clicked!")} 
    >
      Apply
    </button>
  </div>
</div>




      <div className="flex items-start space-x-4 border-b border-gray-200 pb-4 mb-4 mt-3">
        <div className="w-20 h-20 flex-shrink-0 rounded-md bg-gray-100">
          <Image
            src={img14}
            alt="Product"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">
            Eucerin Anti-Pigment Dark Circle Eye Corrector Serum
          </p>
          <p className="text-gray-500 text-sm">15ml</p>
          <div className="flex items-center space-x-4">
      <span className="text-gray-800 text-sm">Quantity: </span>

      <div className="flex items-center border border-gray-300 rounded-md">
        <button
          onClick={decreaseQuantity}
          className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-l-md"
        >
          -
        </button>

        <span className="px-4 py-1 text-sm">{quantity}</span>

        <button
          onClick={increaseQuantity}
          className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-r-md"
        >
          +
        </button>
      </div>
    </div>

        <div className="flex justify-between items-center mt-4 w-full">
  <span className="text-gray-400 text-sm">You Pay</span>
  <div className="flex items-center space-x-2">
    <p className="text-sm font-bold">₹2155</p>
    <p className="text-gray-400 line-through text-sm">₹2394</p>
  </div>
</div>


         
        </div>
       
      </div>


      

      <div className="flex justify-between items-center border border-gray-200 p-4 rounded-md mt-4 mb-4">
  <p className="text-sm font-medium">Coupons</p>
  <button className="flex items-center text-[#703527] text-sm font-medium">
    Collect now and save extra!
    <FaChevronRight className="ml-1" />
  </button>
</div>

      <div className="border border-gray-300 p-4 mt-4 mb-12">
  <h2 className="text-lg font-semibold text-gray-800 mb-4">Price Details</h2>
  <div className="border-b border-gray-200 pb-4 mb-4">
    <div className="flex justify-between items-center mb-2">
      <p className="text-sm text-gray-600">Bag MRP (1 item)</p>
      <p className="text-sm">₹2394</p>
    </div>
    <div className="flex justify-between items-center mb-2">
      <p className="text-sm text-gray-600">Bag Discount</p>
      <p className="text-sm text-green-600">-₹239</p>
    </div>
    <div className="flex justify-between items-center mb-2">
      <p className="text-sm text-gray-600">Shipping</p>
      <p className="text-sm text-green-600">Free</p>
    </div>
    
  </div>
  <div className="flex justify-between items-center mb-2">
      <p className="text-lg font-semibold text-gray-600">You Pay</p>
      <p className="text-lg font-semibold text-gray-600">₹2274</p>
    </div>
</div>

    </div>

    

    {/* Proceed Button */}
    <div className="fixed bottom-0 left-0 w-full max-w-md bg-white p-4 border-t border-gray-200 z-1050">
    <div className="flex justify-between">
    <div className="flex flex-col items-start">
        <p className="text-lg font-bold">₹2155</p>
        <span className="text-sm text-gray-600">Grand Total</span>
      </div>
      <Link href="/address">
  <button className="w-auto bg-[#703527] text-white py-3 px-6 rounded-lg text-sm font-medium hover:bg-orange-900">
    Proceed
  </button>
</Link>
    </div>
    </div>

    
  </div>

  {isSidebarOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50"
      onClick={toggleSidebar} 
      style={{ zIndex: 1040 }} 
    ></div>
  )}
</div>



    </div>
  );
};

export default NavbarWithSidebar;
