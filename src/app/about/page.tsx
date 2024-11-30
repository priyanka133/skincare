"use client"
import Image from "next/image";
import img from "@/Assests/banner.jpg";
import img1 from "@/Assests/images2.jpg";
import img2 from "@/Assests/about3.jpg";
import img3 from "@/Assests/banner2.jpg";
import { useState } from "react";
import Navbar from "../components/custom/navbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FiCircle } from "react-icons/fi";

export default function AboutSection() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <>
      <Navbar />
      <section className="bg-white">
  
  <header className="bg-[#FDECE3] bg-custom bg-cover bg-center relative py-16 flex items-center justify-center flex-col">
   
    <div className="absolute inset-0 bg-[#FDECE3]/80 backdrop-blur-0"></div>
  
    <div className="relative z-10 text-center">
      <h2 className="text-[#5A3726] text-base md:text-xl font-medium uppercase tracking-wider">
        Welcome to GlowFlow
      </h2>
      <h1 className="text-[#5A3726] text-2xl md:text-4xl font-bold mt-2">About Us</h1>
    </div>
  </header>

  {/* Content Section */}
  <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 py-20 px-4 sm:px-6 lg:px-8">
    {/* Image */}
    <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-96 flex-shrink-0">
      <Image
        src={img1}
        alt="Renowned Beauty"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>

    {/* Text Content */}
    <div className="flex flex-col items-start w-full md:w-1/2">
      <h4 className="text-sm uppercase text-orange-600 font-semibold mb-2">
        About GlowFlow
      </h4>
      <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
        Renowned Beauty and Cosmetics Supplier
      </h2>
      <p className="text-gray-600 mb-6">
        Our wide selection of spa, haircare, and skincare important items is expertly made to guarantee you get the glowing appearance you desire.
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-6 mb-6 bg-gradient-to-r from-[#FFD1BB] to-[#fffcfb] rounded-lg border-l border-t border-b border-[#FFD1BB] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-orange-200 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 011.553-1.894L9 2m6 18l5.447-2.724A2 2 0 0021 15.382V6.618a2 2 0 00-1.553-1.894L15 2m0 0v18m-6 0V2"
              />
            </svg>
          </div>
          <p className="text-gray-700 font-medium">Natural Ingredients</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-orange-200 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4H8l4-8v4h1v4h4l-4 8z"
              />
            </svg>
          </div>
          <p className="text-gray-700 font-medium">Exceptional Results</p>
        </div>
      </div>

      <p className="text-gray-600 mb-6">
        With our opulent, superior skincare and cosmetics, discover radiant beauty. With the help of science and nature, discover your greatest self.
      </p>

      {/* Contact and Founder */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8">
        <button className="px-6 py-2 bg-orange-900 text-white font-semibold rounded hover:bg-orange-800">
          Contact Us
        </button>
        <div className="flex items-center gap-3">
          <Image
            src={img}
            alt="Emma Rose"
            width={38}
            height={38}
            className="rounded-full"
          />
          <div>
            <p className="text-gray-800 font-medium">Emma Rose</p>
            <p className="text-gray-600 text-sm">Founder, CEO</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    

<section className="flex flex-col lg:flex-row items-center lg:gap-12 mb-16 px-4 sm:px-6 lg:px-12 relative">
  <div className="relative bg-[#fce8dc] rounded-lg shadow-lg p-8 sm:p-12 w-full max-w-xl lg:max-w-2xl h-auto lg:h-[500px] mx-auto lg:mx-0 z-10">
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#703527] mb-6 sm:mb-8">
      Welcome to Our Story
    </h3>
    <p className="text-[#703527] text-base sm:text-lg leading-7 sm:leading-8">
      Our journey began with a passion for creating high-quality products that bring joy and value to people’s lives. 
      Explore our story and join us in celebrating the art of excellence.
    </p>
    <button className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 border border-[#703527] text-[#703527] font-medium text-base sm:text-lg rounded hover:bg-[#703527] hover:text-white">
      Learn More
    </button>
  </div>

  <div className="relative lg:-ml-20 mt-8 lg:mt-0 z-10">
    <Image
      src={img2} 
      alt="Beauty Salon Treatment"
      width={400}
      height={400}
      className="h-64 sm:h-80 lg:h-[400px] w-auto object-cover rounded-lg shadow-md"
    />
  </div>

  {!playVideo ? (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
      onClick={() => setPlayVideo(true)}
    >
      <div className="bg-[#703527] w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-5.197-3.056A1 1 0 008 9.056v5.888a1 1 0 001.555.832l5.197-3.056a1 1 0 000-1.664z"
          />
        </svg>
      </div>
    </div>
  ) : (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 z-30 flex items-center justify-center">
      <button
        className="absolute top-4 right-4 bg-white text-black w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shadow-lg z-40"
        onClick={() => setPlayVideo(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-8 sm:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <iframe
        className="w-[80%] lg:w-[60%] aspect-video rounded-lg"
        src="https://www.youtube.com/embed/eiMUqWJJF-U?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )}
</section>





    <section>
  <div className="bg-[#FAF5F0] min-h-screen flex flex-col justify-center items-center px-6 md:px-20 relative">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C] leading-snug">
          The Story Of <br />
          Fairytale Like <br />
          Salon
        </h1>
        <p className="text-[#6E6E6E] text-base sm:text-lg mt-4">
          High Level Beauty, Health and Wellbeing Solutions
        </p>
        <button className="mt-6 px-6 py-3 border border-[#2C2C2C] text-[#2C2C2C] rounded-md hover:bg-[#2C2C2C] hover:text-white transition">
          Shop Now
        </button>
      </div>

      <div className="relative bg-[#f8f4f0] p-6 rounded-lg max-w-sm mx-auto md:max-w-full">
        <div className="border border-gray-500 p-3 rounded-t-[46%]">
          <div className="relative rounded-t-[46%] rounded-b-none overflow-hidden pb-6">
            <Image
              src={img2} 
              alt="Beauty Salon Treatment"
              width={400}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        <div className="absolute top-5 left-4 flex items-center justify-center">
          <div className="relative flex items-center h-40 w-40">
            <div className="absolute bg-white rounded-full flex items-center justify-center top-8 p-4 z-10">
              <FiCircle className="h-10 w-10 text-[#c58b74]" />
            </div>

            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full">
                {Array.from("BEAUTY SALON 2024").map((char, index) => (
                  <span
                    key={index}
                    className="absolute text-[#1f1d1c] text-[10px] font-semibold top-16 ml-8 uppercase"
                    style={{
                      transform: `rotate(${
                        index * (360 / 16)
                      }deg) translate(50px) rotate(-${
                        index * (360 / 16)
                      }deg)`,
                      transformOrigin: "center",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
