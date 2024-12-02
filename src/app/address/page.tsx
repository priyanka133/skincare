"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import img14 from "@/Assests/productd2.jpg";
import img13 from "@/Assests/product3.jpg";

import Link from "next/link";
interface Address {
  id: number;
  name: string;
  address: string;
  mobile: string;
  isDefault: boolean;
}

export default function AddressPage() {
  const [step, setStep] = useState(2);
  // const [selectedAddress, setSelectedAddress] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [editingAddress, setEditingAddress] = useState<number | null>(null);

  const [showPopup, setShowPopup] = useState(false);
  const handleNextStep = () => {
    if (step === 3) {
      setShowPopup(true);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  // const closePopup = () => {
  //   setShowPopup(false);
  //   setStep(1);
  // };

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      src: img13,
      title:
        "Dr. Sheth's Kesar & Kojic Acid Sunscreen With SPF 50+ PA++++ (80 g)",
      coupon: "TIRA100 coupon applied",
      price: 1258,
      originalPrice: 1398,
      discount: 10,
      quantity: 2,
    },
    {
      id: 2,
      src: img13,
      title: "Dr. Sheth's Vitamin C Serum (30 ml)",
      coupon: "TIRA100 coupon applied",
      price: 899,
      originalPrice: 999,
      discount: 10,
      quantity: 1,
    },
  ]);


  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      name: "Address 1",
      address: "123 Street",
      mobile: "123-456-7890",
      isDefault: true,
    },

    {
      id: 2,

      name: "Jane Doe",
      address: "456 Another St, City, State - 789101",
      mobile: "9876543211",
      isDefault: false,
    },
  ]);

  const [newAddress, setNewAddress] = useState<Address>({
    id: 0,
    name: "",
    address: "",
    mobile: "",
    isDefault: false,
  });
  
  const [showForm, setShowForm] = useState(false);
  // const [editingAddress, setEditingAddress] = useState(false);

  useEffect(() => {
    if (addresses.length > 0) {
      const defaultAddress = addresses.find((addr) => addr.isDefault);
      if (defaultAddress) {
        setSelectedAddress(defaultAddress); // Now, `defaultAddress` has an `id` field
      }
    }
  }, [addresses]);

  const handleEditAddress = (index: number) => {
    setNewAddress(addresses[index]); // Set the new address for editing
    setEditingAddress(index); // Assign the index as the value for editingAddress (number)
    setShowForm(true); // Show the form for editing
  };
  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleAddAddress = () => {
    const uniqueId = Date.now();
    if (newAddress.isDefault) {
      setAddresses(addresses.map((addr) => ({ ...addr, isDefault: false })));
    }
    setAddresses([...addresses, { ...newAddress, id: uniqueId }]);
    setNewAddress({ id: 0, name: "", address: "", mobile: "", isDefault: false });
    setShowForm(false);
  };

  //   const handleEditAddress = (index: number) => {
  //     const addressToEdit = addresses[index];
  //     setEditingAddress({ ...addressToEdit, index });
  //     setNewAddress(addressToEdit);
  //     setShowForm(true);
  //   };

  const handleSaveEditedAddress = () => {
    const updatedAddresses = [...addresses];
    if (newAddress.isDefault) {
      updatedAddresses.forEach((addr) => (addr.isDefault = false));
    }
    if (editingAddress !== null) {
      updatedAddresses[editingAddress] = newAddress; // Use editingAddress as the index
    }
    setAddresses(updatedAddresses);
    setEditingAddress(null); // Now compatible
    setNewAddress({ id: 0, name: "", address: "", mobile: "", isDefault: false });
    setShowForm(false);
  };
  

  const handleDeleteAddress = (index: number) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  const handleIncreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleRemoveItem(_id: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fbece3] py-8 px-4">
      <div className="w-full bg-white shadow-lg rounded-xl p-8">
        <div className="flex justify-end items-center mb-8 w-full">
          <div className="flex justify-between items-center w-full max-w-5xl">
            {["Signup", "Address", "Payment"].map((_label, index) => (
              <div
                key={index}
                className={`flex-1 flex items-center ${
                  step > index + 1 ? "text[#703527]" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step > index + 1
                      ? "bg-[#703527] text-white"
                      : step === index + 1
                      ? "bg-blue-200 text-[#703527]"
                      : "bg-gray-300"
                  }`}
                >
                  {index + 1}
                </div>
                {index < 2 && (
                  <div
                    className={`flex-1 h-1 ${
                      step > index + 1 ? "bg-[#703527]" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="p-4 md:p-6 bg-white border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              My Bag{" "}
              <span className="text-sm text-gray-600">
                ({cartItems.length} items)
              </span>
            </h2>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 mb-4 border border-gray-300 rounded-lg p-4"
              >
                <div className="flex items-start space-x-4">
                  <Image
                    src={item.src}
                    alt="Product Image"
                    width={96}
                    height={96}
                    className="object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-sm md:text-lg font-medium text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-green-600 font-medium mt-1">
                      {item.coupon}
                    </p>
                    <p className="text-sm md:text-base text-gray-700 mt-1">
                      ₹{item.price}{" "}
                      <span className="line-through text-gray-400">
                        ₹{item.originalPrice}
                      </span>
                      <span className="text-green-600 font-medium">
                        {" "}
                        ({item.discount}% OFF)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    <AiOutlineMinus className="text-gray-800 w-5 h-5" />
                  </button>
                  <p className="text-lg font-medium text-gray-800">
                    {item.quantity}
                  </p>
                  <button
                    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    <AiOutlinePlus className="text-gray-800 w-5 h-5" />
                  </button>

                  <button
  className="text-red-600 hover:underline flex items-center"
  onClick={() => handleRemoveItem(item.id.toString())}
>
  <AiOutlineDelete className="mr-2" /> Delete
</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {step === 2 && (
          <>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              My Addresses
            </h1>

            {addresses.filter((addr) => addr.isDefault).length > 0 && (
              <div className="mb-8 border border-gray-300 rounded-xl p-4 sm:p-6 shadow-sm">
                <h2 className="font-medium text-lg sm:text-xl text-gray-800 mb-2">
                  Default Address
                </h2>
                {addresses
                  .filter((addr) => addr.isDefault)
                  .map((addr, index) => (
                    <div key={index}>
                      <p className="text-sm text-gray-600">{addr.address}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Mobile: {addr.mobile}
                      </p>
                    </div>
                  ))}
              </div>
            )}

            {/* Address List */}
            <div className="space-y-4 sm:space-y-6">
              {addresses
                .filter((addr) => !addr.isDefault)
                .map((address, index) => (
                  <div
                    key={index}
                    className={`border border-gray-300 rounded-xl p-4 sm:p-6 shadow-sm flex flex-col hover:shadow-lg transition-all ${
                      selectedAddress === address ? "bg-gray-100" : ""
                    }`}
                    onClick={() => setSelectedAddress(address)}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                      <h2 className="font-medium text-lg sm:text-xl text-gray-800">
                        {address.name}
                      </h2>
                    </div>
                    <p className="text-sm text-gray-600">{address.address}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Mobile: {address.mobile}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
                      <button
                        className="flex items-center text-[#703527] hover:underline"
                        onClick={() => handleEditAddress(index)}
                      >
                        <AiOutlineEdit className="mr-2" /> Edit
                      </button>
                      <button
                        className="flex items-center text-red-600 hover:underline"
                        onClick={() => handleDeleteAddress(index)}
                      >
                        <AiOutlineDelete className="mr-2" /> Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {/* Add Address Button */}
            {!showForm && (
              <button
                className="flex items-center justify-center bg-[#703527] text-white px-4 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-[#5a2a1d] mt-6 w-full sm:w-auto"
                onClick={() => setShowForm(true)}
              >
                <AiOutlinePlus className="mr-2" /> Add New Address
              </button>
            )}

            {/* Address Form */}
            {showForm && (
              <div className="mt-8">
                <input
                  type="text"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl mb-4 text-sm sm:text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#703527]"
                  placeholder="Full Name"
                  value={newAddress.name}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl mb-4 text-sm sm:text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#703527]"
                  placeholder="Address"
                  value={newAddress.address}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, address: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl mb-4 text-sm sm:text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#703527]"
                  placeholder="Mobile"
                  value={newAddress.mobile}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, mobile: e.target.value })
                  }
                />
                <label className="flex items-center text-sm sm:text-lg text-gray-800 mb-6">
                  <input
                    type="checkbox"
                    checked={newAddress.isDefault}
                    onChange={(e) =>
                      setNewAddress({
                        ...newAddress,
                        isDefault: e.target.checked,
                      })
                    }
                  />
                  <span className="ml-3">Set as Default</span>
                </label>

                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    className="w-full sm:w-auto bg-[#703527] text-white py-3 px-6 rounded-xl text-base sm:text-lg font-medium hover:bg-[#5a2a1d] transition-all"
                    onClick={
                      editingAddress
                        ? handleSaveEditedAddress
                        : handleAddAddress
                    }
                  >
                    {editingAddress ? "Save Changes" : "Add Address"}
                  </button>
                  <button
                    className="w-full sm:w-auto bg-gray-300 text-gray-800 py-3 px-6 rounded-xl text-base sm:text-lg font-medium hover:bg-gray-400 transition-all"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {step === 3 && selectedAddress && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-8">
              <div className="col-span-1 md:col-span-8 space-y-4 md:space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow w-full">
                  <h2 className="text-sm md:text-lg font-semibold mb-4">
                    Delivery Bag
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Image
                          src={img14}
                          width={80}
                          height={80}
                          alt="Product"
                          className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            Product Name
                          </p>
                          <p className="text-xs md:text-sm text-gray-500">
                            Qty: 1
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-gray-800">
                        ₹ 499
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    Selected Address
                  </h2>
                  <p className="text-sm text-gray-600">
                    {selectedAddress.address}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Mobile: {selectedAddress.mobile}
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow w-full">
                  <h2 className="text-sm md:text-lg font-semibold mb-4">
                    Payment Options
                  </h2>
                  <div className="space-y-4">
                    <label className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="creditCard"
                        className="form-radio text-[#703527]"
                      />
                      <span className="text-sm text-gray-800">Credit Card</span>
                    </label>
                    <label className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        className="form-radio text-[#703527]"
                      />
                      <span className="text-sm text-gray-800">UPI</span>
                    </label>
                    <label className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        className="form-radio text-[#703527]"
                      />
                      <span className="text-sm text-gray-800">
                        Cash on Delivery
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-4 space-y-4 md:space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow w-full">
                  <h2 className="text-sm md:text-lg font-semibold mb-4">
                    Price Details
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Subtotal</p>
                      <p className="text-sm text-gray-800">₹ 499</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Discount</p>
                      <p className="text-sm text-green-600">-₹ 50</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Delivery Charges</p>
                      <p className="text-sm text-gray-800">₹ 30</p>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold text-sm md:text-lg">
                      <p>Total</p>
                      <p>₹ 479</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="mt-4 md:mt-8 flex justify-between items-center space-x-2">
          <button
            className={`${
              step === 1 ? "block" : "hidden"
            } bg-gray-300 text-gray-800 py-2 px-4 md:py-3 md:px-6 rounded-lg text-sm md:text-lg font-medium hover:bg-gray-400`}
          >
            <Link href="/wishlist">Previous</Link>
          </button>

          <button
            className={`${
              step === 1 ? "hidden" : "block"
            } bg-gray-300 text-gray-800 py-2 px-4 md:py-3 md:px-6 rounded-lg text-sm md:text-lg font-medium hover:bg-gray-400`}
            onClick={handlePreviousStep}
          >
            Previous
          </button>

          <button
            className={`$ bg-[#703527] text-white py-2 px-4 md:py-3 md:px-6 rounded-lg text-sm md:text-lg font-medium hover:bg-[#703527]`}
            onClick={handleNextStep}
          >
            {step === 3 ? "Finish" : "Next"}
          </button>

          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-xs md:max-w-sm text-center relative mx-4 md:mx-0">
                <h2 className="text-xl md:text-2xl font-bold text-[#703527] mb-4">
                  🎉 Congratulations!
                </h2>
                <p className="text-sm md:text-lg text-gray-600">
                  Your order has been successfully placed!
                </p>
                <Link href="/">
                  <button className="mt-4 md:mt-6 bg-[#703527] text-white py-2 px-4 md:py-2 md:px-6 rounded-lg text-sm md:text-base hover:bg-[#703527]">
                    Close
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
