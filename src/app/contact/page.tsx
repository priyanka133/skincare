import React from "react";
import Navbar from "../components/custom/navbar";
import { FaEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";

export default function page() {
  return (
    <>
      <Navbar />
      <div>
        <header className="bg-[#FDECE3] bg-custom bg-cover bg-center relative py-32 flex items-center justify-center flex-col">
          {/* Blurred and Lightened Background */}
          <div className="absolute inset-0 bg-[#FDECE3]/80 backdrop-blur-0"></div>

          {/* Text Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-[#5A3726] text-xl font-medium uppercase tracking-wider">
              Welcome to glowflow
            </h2>
            <h1 className="text-[#5A3726] text-4xl font-bold mt-2">
              Contact Us
            </h1>
          </div>
        </header>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-4xl p-8 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-[#5A3726] ">
            Get In Touch
          </h1>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <input
              type="text"
              placeholder="Subjects"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white   bg-[#552d10] rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-6xl h-[500px] border rounded-md shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97320.23128439236!2d73.7537056!3d19.9917568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebeb0e0b5573%3A0x506c2a576fcbd99c!2sNashik%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1681420837745!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 mt-2">
            At Beautify we are here to help you anytime to assist in answering
            any of your questions so you can make the best decision regarding
            your salon journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6 md:px-16">
          {/* Address */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-[#c58b74] text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Address</h3>
            <p className="text-gray-600 mt-2">
              Head Office: 785 15th Street, Office <br />
              478 Berlin, De 81566
            </p>
            <a
              href="#"
              className="text-[#c58b74] text-sm font-medium mt-2 underline"
            >
              Check Location
            </a>
          </div>

          {/* Call Us */}
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-[#c58b74] text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
            <p className="text-[#c58b74] mt-2 font-semibold">+60 16 299 1398</p>
            <p className="text-gray-600 mt-2">
              Mon to Sun: 9:30am - 6:30pm <br />
              Exclude Public Holiday
            </p>
          </div>

          {/* Email Us */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-[#c58b74] text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
            <p className="text-gray-600 mt-2">customer@example.com</p>
            <p className="text-gray-600">info@example.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
