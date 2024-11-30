"use client";

import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import img14 from "@/Assests/profile.jpg";
import NavbarWithSidebar from "../components/custom/navbar";

const ProfileCard = () => {
  const [profileDetails, setProfileDetails] = useState({
    email: "piyapardeshi111@gmail.com",
    mobile: "8317274111",
    dob: "4/10/2001",
  });

  const [addressDetails, setAddressDetails] = useState({
    name: "Priyanka Pardeshi",
    addressLine1: "Gangawadi Ravivar Karanja, 686 Nashik",
    addressLine2: "Near Kakad Sadan, Nashik-422001, Maharashtra",
    phone: "+91-8317274111",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editType, setEditType] = useState<"profile" | "address">("profile");
  const [formValues, setFormValues] = useState({ ...profileDetails });

  const openModal = (type: "profile" | "address") => {
    setEditType(type);
    setFormValues(type === "profile" ? { ...profileDetails } : { ...addressDetails });
    setIsModalOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editType === "profile") {
      setProfileDetails({ ...formValues });
    } else {
      setAddressDetails({ ...formValues });
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <NavbarWithSidebar />

      {/* Header */}
      <header className="bg-bgP bg-cover bg-center relative py-16 flex items-center justify-center flex-col">
        <div className="absolute inset-0 bg-[#FDECE3]/80"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-[#5A3726] text-base md:text-xl font-medium uppercase tracking-wider">
            Welcome to GlowFlow
          </h2>
          <h1 className="text-[#5A3726] text-2xl md:text-4xl font-bold mt-2">
            My Profile
          </h1>
        </div>
      </header>

      {/* Profile Section */}
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-56 bg-[#FDECE3] overflow-hidden shadow-lg relative">
            <Image
              src={img14}
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-[#5A3726]">
            Priyanka Pardeshi
          </h2>
        </div>

        {/* Profile Details */}
        <div className="p-6 bg-[#fff8f4] rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-4 text-[#5A3726]">
            Profile Details
          </h3>
          <p className="text-[#5A3726] mb-2">
            <span className="font-semibold">Email:</span> {profileDetails.email}
          </p>
          <p className="text-[#5A3726] mb-2">
            <span className="font-semibold">Mobile:</span> {profileDetails.mobile}
          </p>
          <p className="text-[#5A3726]">
            <span className="font-semibold">Date of Birth:</span> {profileDetails.dob}
          </p>
          <button
            className="flex items-center text-[#2c1d15] hover:underline mt-4"
            onClick={() => openModal("profile")}
          >
            <FaEdit className="mr-2" />
            Edit Profile
          </button>
        </div>

        {/* Address Details */}
        <div className="p-6 bg-[#fff8f4] rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-[#5A3726]">
            My Addresses
          </h3>
          <p className="text-[#5A3726] text-sm">
            {addressDetails.name}
            <br />
            {addressDetails.addressLine1}
            <br />
            {addressDetails.addressLine2}
          </p>
          <p className="text-gray-600 text-sm">{addressDetails.phone}</p>
          <button
            className="flex items-center text-[#2c1d15] hover:underline mt-4"
            onClick={() => openModal("address")}
          >
            <FaEdit className="mr-2" />
            Edit Address
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">
              Edit {editType === "profile" ? "Profile" : "Address"}
            </h3>
            {editType === "profile" ? (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formValues.mobile}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    name="dob"
                    value={formValues.dob}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Address Line 1
                  </label>
                  <textarea
                    name="addressLine1"
                    value={formValues.addressLine1}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Address Line 2
                  </label>
                  <textarea
                    name="addressLine2"
                    value={formValues.addressLine2}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
                  />
                </div>
              </>
            )}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
