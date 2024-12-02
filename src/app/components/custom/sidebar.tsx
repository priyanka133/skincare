
import React from "react";
import { FaArrowLeft } from "react-icons/fa";


interface CartSidebarProps {
  isSidebarOpen: boolean; // Type for the sidebar open state
  toggleSidebar: () => void; // Type for the function to toggle the sidebar
}
const CartSidebar: React.FC<CartSidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg p-6 flex flex-col transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-gray-500"
            onClick={toggleSidebar} // Close sidebar
          >
            <FaArrowLeft />
          </button>
          <h2 className="text-lg font-bold">
            Bag <span>(1 items)</span>
          </h2>
          <button className="text-pink-500 text-sm font-medium">
            View Wishlist
          </button>
        </div>

        {/* Rest of your sidebar content */}
        <div className="flex-grow">
          {/* Add content here */}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-auto">
          <p className="text-xl font-bold">₹2155</p>
          <button className="bg-pink-500 text-white py-3 px-6 rounded-lg text-sm font-medium hover:bg-pink-600">
            Proceed
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleSidebar} // Close when clicking outside
        ></div>
      )}
    </div>
  );
};

export default CartSidebar;
