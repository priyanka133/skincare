"use client"
import Image from "next/image";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; // Import Cross Icon
import { useState } from "react";
import img14 from "@/Assests/productd2.jpg";
import img15 from "@/Assests/productd4.jpg";
import img17 from "@/Assests/productdmain.jpg";
import Navbar from "../components/custom/navbar";

const Wishlist = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Nykaa SkinRX Illuminate+ 10% Vitamin C Face Serum",
      price: "₹350",
      originalPrice: "₹699",
      discount: "50% Off",
      rating: 4.5,
      image: img14,
    },
    {
      id: 2,
      name: "Vaseline Original Pure Skin Jelly",
      price: "₹90",
      originalPrice: "",
      discount: "",
      rating: 4.7,
      image: img15,
    },
    {
      id: 3,
      name: "Dr. Sheth's Kesar & Kojic Acid Sunscreen Spf 50+",
      price: "₹374",
      originalPrice: "₹499",
      discount: "25% Off",
      rating: 4.3,
      image: img17,
    },
  ]);

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="p-4 bg-[#fffaf6] min-h-screen">
        <div className="bg-white shadow-md rounded-md p-6 sm:px-8 lg:px-10">
          <h1 className="text-2xl font-bold text-[#703527] mb-4 text-center">
            My Wishlist ({items.length})
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col border rounded-lg shadow-sm p-4 bg-white hover:shadow-lg transition h-full"
              >
                {/* Cross Button */}
                <button
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.id)}
                >
                  <AiOutlineClose size={20} />
                </button>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="object-contain mx-auto"
                />
                <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                <div className="flex items-center text-gray-600 mt-1">
                  <span className="mr-2 text-yellow-500">★ {item.rating}</span>
                </div>
                <div className="text-[#703527] font-bold text-lg mt-2">
                  {item.price}
                  {item.originalPrice && (
                    <span className="text-gray-500 text-sm line-through ml-2">
                      {item.originalPrice}
                    </span>
                  )}
                </div>
                {item.discount && (
                  <div className="text-green-600 text-sm font-medium">
                    {item.discount}
                  </div>
                )}
                <div className="flex-grow"></div>
                <button className="bg-[#703527] text-white mt-3 py-2 rounded-md flex items-center justify-center hover:bg-[#703527]">
                  <FaShoppingBag className="mr-2" />
                  Move to Bag
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
