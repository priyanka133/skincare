"use client";
import { useState } from "react";
import Image from "next/image";
import { FaStar, FaHeart, FaShoppingCart, FaStarHalfAlt } from "react-icons/fa";
import { FiChevronRight, FiChevronUp } from "react-icons/fi";
import img14 from "@/Assests/productd2.jpg";
import img15 from "@/Assests/productd4.jpg";
import img17 from "@/Assests/productdmain.jpg";
import Navbar from "@/app/components/custom/navbar";
import Footer from "@/app/components/custom/footer";
import Link from "next/link";

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("howToUse");
  const productImages = [img17, img14, img15];
  const [isFormVisible, setFormVisible] = useState(false);
  const recommendedProducts = [
    { id: 1, name: "Product A", price: "₹1,499", image: img14, rating: 4.5 },
    { id: 2, name: "Product B", price: "₹2,999", image: img15, rating: 4.2 },
    { id: 3, name: "Product C", price: "₹999", image: img17, rating: 4.0 },
    { id: 4, name: "Product C", price: "₹999", image: img17, rating: 4.0 },
  ];

  const [customerReviews, setCustomerReviews] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      rating: 5,
      review:
        "This product is amazing! It made a huge difference in my skincare routine. Highly recommend it to everyone!",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    review: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };
  



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      setCustomerReviews((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          ...newReview,
        },
      ]);
      setNewReview({ name: "", rating: 5, review: "" });
    }
  };
  return (
    <>
      <Navbar />
      <div className="bg-[#fffaf6] ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 ">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8">
              <div className="flex gap-4">
                <div className="flex flex-col gap-4">
                  {productImages.map((image, index) => (
                    <div
                      key={index}
                      className={`relative w-20 h-20 border-2 rounded-lg cursor-pointer transition-transform ${
                        selectedImage === index
                          ? "border-black scale-105"
                          : "border-gray-300"
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  ))}
                </div>

                <div className="relative w-full h-[300px] sm:h-[350px]">
                  <Image
                    src={productImages[selectedImage]}
                    alt="Product Image"
                    layout="fill"
                    objectFit="contain"
                  />

                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    <FaHeart className="text-orange-500 text-2xl" />
                  </div>
                </div>
              </div>

              <div className="hidden lg:block border-l border-gray-300"></div>

              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  24K Gold Radiance Beauty Boosting Face Elixir
                </h1>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-gray-500">
                    4.8 / 112 Reviews | 13 Ratings & 7 Reviews
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-xl text-gray-800">
                    <span className="line-through text-gray-500">
                      MRP: ₹3780
                    </span>
                    <span className="font-bold text-gray-800 ml-2">₹3402</span>
                    <span className="text-green-600 ml-2">10% Off</span>
                  </p>
                </div>

                <p className="text-gray-700 leading-7 mb-6">
                  Experience the luxury of skincare with our 24K Gold Radiance
                  Face Elixir. Infused with gold particles, this elixir promotes
                  skin brightness, hydration, and anti-aging benefits.
                </p>

                <div className="flex items-center gap-4">
                  <button className="flex items-center justify-center gap-2 bg-[#703527] text-white py-3 px-6 rounded-md hover:bg-[#703527] transition">
                    <FaShoppingCart />
                    <span>Add to Cart</span>
                  </button>
                  <Link
      href="/wishlist"
      className="flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-md hover:border-black hover:bg-gray-100 transition"
    >
      <FaHeart />
      <span>Add to Wishlist</span>
    </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 px-4 sm:px-6 lg:px-12">
            <div className=" mx-auto">
              <h2 className="text-2xl font-bold text-[#703527] mb-4">
                Product Details
              </h2>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-start mb-4 border-b border-gray-200">
                  <button
                    className={`mr-4 pb-2 ${
                      activeTab === "description"
                        ? "text-[#703527] border-b-2 border-orange-900"
                        : "text-[#703527]"
                    }`}
                    onClick={() => setActiveTab("description")}
                  >
                    Description
                  </button>
                  <button
                    className={`mr-4 pb-2 ${
                      activeTab === "ingredients"
                        ? "text-[#703527] border-b-2 border-orange-900"
                        : "text-[#703527]"
                    }`}
                    onClick={() => setActiveTab("ingredients")}
                  >
                    Ingredients
                  </button>
                  <button
                    className={`mr-4 pb-2 ${
                      activeTab === "howToUse"
                        ? "text-[#703527] border-b-2 border-orange-900"
                        : "text-[#703527]"
                    }`}
                    onClick={() => setActiveTab("howToUse")}
                  >
                    How To Use
                  </button>
                </div>

                <div className="mt-4 text-gray-700">
                  {activeTab === "description" && (
                    <p>
                      Experience the exquisite feel of 24K gold-infused
                      skincare. This product description content aligns with the
                      elegant nature of our premium elixir.
                    </p>
                  )}
                  {activeTab === "ingredients" && (
                    <p>
                      Ingredients content goes here. Highlighting the finest
                      components of skincare.
                    </p>
                  )}
                  {activeTab === "howToUse" && (
                    <div>
                      <ul className="list-disc ml-6 space-y-2">
                        <li>
                          Drop 2-4 drops of the Gold Elixir on your fingertips,
                          rub slightly, and press and dab onto the skin.
                        </li>
                        <li>
                          Massage on a well-cleansed face and neck, with light,
                          soothing movements.
                        </li>
                        <li>
                          For best results, use it in the morning after
                          moistening the skin with the Face Spritz for better
                          absorption.
                        </li>
                      </ul>

                      {expanded && (
                        <>
                          <br />
                          <p className="font-bold">
                            How to use in different ways:
                          </p>
                          <ul className="list-disc ml-6 space-y-2">
                            <li>Everyday moisturizing primer</li>
                            <li>Added to creams</li>
                            <li>Mixing with highlighter</li>
                            <li>Mixing in foundation</li>
                            <li>Under eye area</li>
                            <li>Hydrate and nourish lips</li>
                            <li>Along with face massage and tools</li>
                          </ul>
                          <br />
                          <p className="font-bold">Note:</p>
                          <p>
                            Conduct a patch test on your skin before proper
                            application. To test your skin for allergy, apply a
                            1-inch patch on the inner, lower arm, rub it in, and
                            leave for 24 hours, observing any signs of a
                            reaction.
                          </p>
                        </>
                      )}

                      <div
                        className="text-orange-500 flex items-center cursor-pointer mt-2"
                        onClick={() => setExpanded(!expanded)}
                      >
                        {expanded ? (
                          <>
                            Show Less{" "}
                            <FiChevronUp className="ml-1 text-orange-500" />
                          </>
                        ) : (
                          <>
                            Show More{" "}
                            <FiChevronRight className="ml-1 text-orange-500" />
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <section className="mt-12">
                <h2 className="text-2xl font-bold text-[#703527] mb-6">
                  Recommended Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {recommendedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group relative border bg-white rounded-lg p-4 shadow transition-all duration-300 hover:shadow-md"
                      style={{ paddingBottom: "4rem" }}
                    >
                      <div className="relative w-full h-72">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>

                      <h3 className="mt-4 text-lg font-medium text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-gray-600">{product.price}</p>
                      <div className="flex items-center mt-2">
                        <div className="flex text-yellow-500">
                          {[...Array(Math.floor(product.rating))].map(
                            (_, i) => (
                              <FaStar key={i} />
                            )
                          )}
                          {product.rating % 1 ? (
                            <FaStar className="half-star" />
                          ) : null}
                        </div>
                        <span className="ml-2 text-gray-500 text-sm">
                          ({product.rating.toFixed(1)})
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all">
                        <button
                          type="button"
                          className="wishlist_button_text flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 23 20"
                          >
                            <title>Heart icon</title>
                            <path
                              className="heart-icon-path"
                              fill="#fff"
                              stroke="currentColor"
                              d="M11.4967297,19.0021565 C12.1501607,18.4744665 15.7313591,16.1461023 16.6556949,15.4660553 C20.4639993,12.6642314 22.5,9.83806845 22.500204,6.31427989 C22.4080534,3.08900922 19.7336922,0.5 16.5,0.5 C14.6798666,0.5 13.0132876,1.30878098 11.8904344,2.71234752 L11.5,3.20039053 L11.1095656,2.71234752 C9.98671236,1.30878098 8.32013337,0.5 6.5,0.5 C3.16873226,0.5 0.5,3.08355995 0.5,6.3 C0.5,9.87466924 2.55294628,12.7216506 6.38828771,15.5301224 C7.34346545,16.229562 10.7334347,18.4195137 11.4967297,19.0021565 Z"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="flex items-center justify-center px-4 py-2 bg-[#703527] text-white text-sm rounded hover:bg-orange-700"
                        >
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 bg-white py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Ratings & Reviews
                  </h2>

                  {!isFormVisible && (
                    <button
                      onClick={() => setFormVisible(true)}
                      className="bg-[#703527] text-white py-2 px-6 rounded hover:bg-orange-700 mb-6"
                    >
                      Write a Review
                    </button>
                  )}

                  {/* Review Form */}
                  {isFormVisible && (
                    <div className="mb-10 border rounded-lg p-6 ">
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={newReview.name}
                            onChange={handleInputChange}
                            className="border rounded p-3 w-full"
                            required
                          />
                          <select
                            name="rating"
                            value={newReview.rating}
                            onChange={handleInputChange}
                            className="border rounded p-3 w-full"
                          >
                            {[5, 4, 3, 2, 1].map((star) => (
                              <option key={star} value={star}>
                                {star} Star{star > 1 && "s"}
                              </option>
                            ))}
                          </select>
                        </div>
                        <textarea
                          name="review"
                          placeholder="Write your review here..."
                          value={newReview.review}
                          onChange={handleInputChange}
                          className="border rounded p-3 w-full mt-4"
                          rows={4}
                          required
                        ></textarea>
                        <div className="flex justify-between items-center mt-4">
                          <button
                            type="submit"
                            className="bg-[#703527] text-white py-2 px-6 rounded hover:bg-orange-700"
                          >
                            Submit Review
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormVisible(false)}
                            className="bg-gray-300 text-gray-700 py-2 px-6 rounded hover:bg-gray-400"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Display Customer Reviews */}
                  <div className="space-y-8">
                    {customerReviews.map((review) => (
                      <div
                        key={review.id}
                        className="border rounded-lg p-6 shadow hover:shadow-md transition"
                      >
                        <div className="flex items-center mb-4">
                          <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-gray-600">
                            {review.name[0]}
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-800">
                              {review.name}
                            </h3>
                            <div className="flex text-yellow-500">
                              {[...Array(Math.floor(review.rating))].map(
                                (_, i) => (
                                  <FaStar key={i} />
                                )
                              )}
                              {review.rating % 1 !== 0 && <FaStarHalfAlt />}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.review}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
