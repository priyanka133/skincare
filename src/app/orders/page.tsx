"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import { MdOutlineHelp } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// import img4 from "@/Assests/product4.jpg";
import img55 from "@/Assests/product5.jpg";
import NavbarWithSidebar from "../components/custom/navbar";


interface Order {
  id?: string;
  orderNumber: string;
  itemCount: number;
  deliveredOn: string;
  status: string;
  imageUrl: string;
  productName?: string;
  quantity?: number;
  price?: number;
  details: {
    orderId: string;
    placedDate: string;
    shippingAddress: {
      name: string;
      address: string;
      phone: string;
    };
    shipment: {
      amountPaid: number;
      packageDeliveredOn: string;
      items: number; // Add this field


    };
    paymentDetails: {
      amountPaid: number;
      paymentMethod: string;
    };
  };
}





const orders: Order[] = [
  {
    id: '1',
    orderNumber: '12345',
    itemCount: 2,
    deliveredOn: '2024-12-01',
    status: 'Delivered',
    imageUrl: 'https://example.com/image.jpg',
    productName: 'Product Name',
    quantity: 1,
    price: 50,
    details: {
      orderId: '12345',
      placedDate: '2024-11-25',
      shippingAddress: {
        name: 'John Doe',
        address: '123 Main St',
        phone: '123-456-7890',
      },
      shipment: {
        amountPaid: 100,
        packageDeliveredOn: "2024-12-01",
        items: 1
      },
      paymentDetails: {
        amountPaid: 50,
        paymentMethod: 'Credit Card',
      },
    },
  },
  // More orders here...
];




const OrderHistory = () => {
  type Ratings = Record<number, number>;

  const [ratings, setRatings] = useState<Ratings>({});
  
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);


  const handleViewDetails = (order: Order) => {
        setSelectedOrder(order);
  };
  

  const handleBackToOrders = () => {
    setSelectedOrder(null);
  };

const handleRatingChange = (productIndex: number, rating: number) => {
  setRatings({ ...ratings, [productIndex]: rating });
};

  if (selectedOrder) {
    return (
      <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-10">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <button
            className="flex items-center mb-4 text-[#5A3726] hover:underline"
            onClick={handleBackToOrders}
          >
            <FaArrowLeft className="mr-2" />
            Back to Orders
          </button>
          <h1 className="text-2xl font-semibold text-[#5A3726] mb-6">
            Order Details
          </h1>

          {/* Order Details */}
          <div className="space-y-6">
            <p>
              <span className="font-semibold text-[#5A3726]">Order ID: </span>
              {selectedOrder.details.orderId}
            </p>
            <p>
              <span className="font-semibold text-[#5A3726]">Placed On: </span>
              {selectedOrder.details.placedDate}
            </p>
            <p>
              <span className="font-semibold text-[#5A3726]">Total: </span>
              {selectedOrder.details.shipment.amountPaid}
            </p>

            {/* Shipping Address */}
            <div className="mb-6 border-t border-b py-4 mt-6">
              <h2 className="text-lg font-semibold text-[#5A3726] mb-4">
                Shipping Address
              </h2>
              <p className="text-[#5A3726]">
                <strong>{selectedOrder.details.shippingAddress.name}</strong>
              </p>
              <p className="text-[#5A3726]">
                {selectedOrder.details.shippingAddress.address}
              </p>
              <p className="text-[#5A3726]">
                +91 {selectedOrder.details.shippingAddress.phone}
              </p>
            </div>

            {/* Payment Details */}
            <div className="border-t border-b border-gray-300 mt-6 mb-6 py-6">
              <h2 className="text-lg font-semibold text-[#5A3726] mb-4">
                Shipment 1 of 1
              </h2>
              <p className="text-[#5A3726]">
                <span className="font-semibold">Amount Paid:</span>{" "}
                {selectedOrder.details.shipment.amountPaid}
              </p>
              <p className="text-[#5A3726]">
                <span className="font-semibold">Package Delivered On:</span>{" "}
                {selectedOrder.details.shipment.packageDeliveredOn}
              </p>
            </div>

            <div className="relative w-full  rounded-lg p-6">
  <ul className="space-y-6 max-w-5xl mx-auto">
    {[
      { step: "Order Confirmed", date: "Thu, 7 Nov", active: true },
      { step: "Shipped", date: "Fri, 8 Nov", active: true },
      { step: "Delivered", date: "Sun, 10 Nov", active: true },
    ].map((item, index, array) => (
      <li className="flex items-center" key={index}>
        {/* Progress Bar and Step Marker */}
        <div className="flex flex-col items-center">
          {/* Step Marker */}
          <span
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              item.active ? "bg-green-500 text-white" : "bg-gray-300 text-gray-500"
            } font-semibold`}
          >
            {index + 1}
          </span>
          {/* Vertical Line */}
          {index !== array.length - 1 && (
            <div
              className={`w-1 flex-grow ${
                item.active ? "text-[#5A3726]" : "text-[#462a1c]"
            }`}
            ></div>
          )}
        </div>

        {/* Step Details */}
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <p
            className={`text-lg font-semibold ${
              item.active ? "text-[#5A3726]" : "text-[#462a1c]"
            }`}
          >
            {item.step}
          </p>
          <p className="text-sm text-[#5A3726]">{item.date}</p>
        </div>
      </li>
    ))}
  </ul>
</div>


          </div>

          {/* Delivered Items */}
          <div>
      <h3 className="text-lg font-semibold text-[#5A3726] mb-4">
        {selectedOrder.details.shipment.items} Item(s) Delivered
      </h3>
      <div className="space-y-6">
        {Array.from({ length: selectedOrder.details.shipment.items }).map((_, index) => (
          <div key={index} className="flex items-start space-x-4 border-b pb-4">
            <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
              <Image
                src={img55} // Local image path in the public folder
                alt="Product"
                className="w-full h-full object-cover"
                width={64} // You can specify the width and height of the image
                height={64}
              />
            </div>
            <div className="flex-grow">
              <p className="font-semibold text-[#5A3726]">Product {index + 1}</p>
              <p className="text-[#5A3726] text-sm">Qty: 1</p>
              <div className="mt-2">
                <p className="text-[#5A3726] text-sm">Rate this product:</p>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => handleRatingChange(index, star)}
                      className={`cursor-pointer ${
                        ratings[index] >= star ? "text-yellow-500" : "text-gray-400"
                      }`}
                    >
                      {ratings[index] >= star ? <AiFillStar /> : <AiOutlineStar />}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="flex items-center space-x-2 bg-[#703527] text-white px-4 py-2 rounded-lg hover:bg-[#582a1e]">
              <FaDownload />
              <span>Download Invoice</span>
            </button>
            <button className="flex items-center space-x-2 bg-[#703527] text-white px-4 py-2 rounded-lg hover:bg-[#582a1e]">
              <MdOutlineHelp />
              <span>Need Help</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <NavbarWithSidebar/>
    <header className="bg-bgP bg-cover bg-center relative py-16 flex items-center justify-center flex-col">
  <div className="absolute inset-0 bg-[#FDECE3]/80 backdrop-blur-0"></div>
  
  <div className="relative z-10 text-center">
    <h2 className="text-[#5A3726] text-base md:text-xl font-medium uppercase tracking-wider">
      Welcome to GlowFlow
    </h2>
    <h1 className="text-[#5A3726] text-2xl md:text-4xl font-bold mt-2"> My Orders</h1>
  </div>
</header>
    <div className="min-h-screen  py-8 px-4 sm:px-8">
     

      <div className="bg-[#fff6f1]fggokiuj shadow rounded-lg max-w-4xl mx-auto">
      {orders.map((order, index) => (
    <div
      key={index}
      className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 p-4 sm:p-6 last:border-b-0"
    >
      <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 relative overflow-hidden rounded-lg">
        <Image
          src={order.imageUrl}
          alt={`Order ${order.orderNumber}`}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex-grow sm:ml-6 mt-4 sm:mt-0 space-y-2">
        <p className="text-[#5A3726] font-medium">
          <span className="font-semibold">Order Number:</span> {order.orderNumber}
        </p>
        <p className="text-[#5A3726] font-medium">
          <span className="font-semibold">Item Count:</span> {order.itemCount}
        </p>
        <p className="text-[#5A3726] font-medium">
          <span className="font-semibold">Delivered On:</span> {order.deliveredOn}
        </p>
      </div>
      <div className="mt-4 sm:mt-0">
        <button
          onClick={() => handleViewDetails(order)}
          className="px-4 py-2 text-sm text-white bg-[#703527] rounded-lg hover:bg-[#703527]"
        >
          View Details
        </button>
      </div>
    </div>
  ))}

      </div>
    </div>
    </>
  );
};

export default OrderHistory;
