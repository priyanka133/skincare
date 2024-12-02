"use client";

import {  FaQuoteRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import dynamic from "next/dynamic";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function CarouselComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Emily R.",
      location: "New York, NY",
      review:
        "The spa services are wonderful and really productive. I can really see the difference in my skin tone and texture. Throughout each visit, the staff always pays attention to me and makes sure I'm comfortable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophia L.",
      location: "Los Angeles, CA",
      review:
        "I have never had better-looking skin, and the staff is fantastic. Every time I walk in, I instantly feel at ease and relaxed. All visits are invigorating due to the customized care and attention to detail.",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#f9e5da] p-6 sm:p-8 md:p-12 rounded-lg">
      <div className="lg:w-96 mb-8">
        <h3 className="text-sm text-gray-500 uppercase mb-1">Customer Praise</h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Customer Testimonials</h2>
        <p className="text-gray-600">
          Verified customer testimonials highlighting our outstanding spa and beauty care services.
        </p>
      </div>

      <div className="lg:w-2/3 w-full">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col bg-white rounded-lg shadow-md p-6 mx-4 h-72 w-full md:w-96"
            >
              <div className="flex mb-3">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <AiFillStar key={i} className="text-[#FFC107]" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 relative flex-grow">
                
                {testimonial.review}
                <FaQuoteRight className="absolute text-[#f9e5da] text-3xl -bottom-2 right-0" />
              </p>
              <div className="font-medium text-gray-800">
                <p>{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
