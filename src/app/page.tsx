import Navbar from "./components/custom/navbar";
import Image from "next/image";
import {
  FaTruck,
  FaShieldAlt,   
  
  FaHeadset,
  FaWallet,
  FaSpa,
  FaHandHoldingHeart,
  FaSmile,
  FaBath,
  FaStar,
  FaGem,
  FaRegClock,
  FaTag,
  FaRegComment,
  FaHeart,
} from "react-icons/fa";
import img from "@/Assests/productarticle.jpg";
import img2 from "@/Assests/service.jpg";
import img3 from "@/Assests/banner2.jpg";

import img4 from "@/Assests/product2.jpg";
import img5 from "@/Assests/product3.jpg";
import img6 from "@/Assests/skiinn.jpg";
import img7 from "@/Assests/product6.jpg";
import img8 from "@/Assests/ayurv.jpg";
import img9 from "@/Assests/bannerskin3.jpg";
import img10 from "@/Assests/bannerskin.jpg";
import img11 from "@/Assests/bannerskin1.jpg";
import img12 from "@/Assests/productarticle.jpg";
import img13 from "@/Assests/product.jpg";

import img15 from "@/Assests/consical1.jpg";
import img16 from "@/Assests/consical2.jpg";
import img17 from "@/Assests/consical3.jpg";



import { AiFillStar } from "react-icons/ai";
import Testimonials from "./components/custom/testinomal";
import Footer from "./components/custom/footer";
import Link from "next/link";

const articles = [
  { 
    title: "Essential Skincare Tips for the Summer of skin",
    date: "Oct 21, 2024",
    category: "Tips",
    image: img6,
    link: "#",
  },
  {
    title: "Revitalize Hair with Natural Ingredients of skin",
    date: "Oct 21, 2024",
    category: "Care",
    image: img12,
    link: "#",
  },
  {
    title: "Spa Treatments: Luxury for Wellness of skin",
    date: "Sep 16, 2024",
    category: "Tips",
    image: img13,
    link: "#",
  },
];

const products = [
  {
    id: 1,
    name: "Face Serum",
    price: "39.97 USD",
    originalPrice: "59.99 rupee",
    image: img15,
    rating: 5,
  },
  {
    id: 2,
    name: "Alcohol Free Toner",
    price: "27.95 USD",
    originalPrice: "39.99 rupee",
    image: img16,
    rating: 5,
  },
  {
    id: 3,
    name: "Mascara - Black",
    price: "24.97 USD",
    originalPrice: "39.99 rupee",
    image: img15,
    rating: 5,
  },
];
const imageData = [
  { id: 1, src: img7, likes: "1k", comments: "9" },
  { id: 2, src: img3, likes: "3k", comments: "6" },
  { id: 3, src: img4, likes: "4k", comments: "7" },
  { id: 4, src: img4, likes: "4k", comments: "8" },
  { id: 5, src: img4, likes: "3k", comments: "9" },
  { id: 6, src: img4, likes: "6k", comments: "7" },
];

// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   arrows: true,
//   // nextArrow: <CustomNextArrow />,
//   // prevArrow: <CustomPrevArrow />,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };
const categories = [
  {
    id: 1,
    imgSrc: img16, 
    title: "Mascara - Black",
    label: "Latest Line",
  },
  {
    id: 2,
    imgSrc: img15,
    title: "Alcohol Free Toner",
    label: "Latest Line",
  },
  {
    id: 3,
    imgSrc: img16,
    title: "Sun Protection",
    label: "Latest Line",
  },
  {
    id: 4,
    imgSrc: img17,
    title: "Skincare Serum",
    label: "Latest Line",
  },
];
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <section>
  <div>
    {/* Hero Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[700px] rounded-lg shadow-md overflow-hidden">
      {/* Left Side: Content */}
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:pl-20 bg-[#fbece3]">
        <p className="text-xs sm:text-sm uppercase text-[#aa5c3b] font-semibold">
          Organic{" "}
          <span className="bg-[#f0d8cb] px-1 rounded">Blends</span>
        </p>

        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#703527] mt-4">
          Superior <br />
          <span className="text-[#aa5c3b]">Skin Products</span>
        </h1>
        <p className="text-[#703527] mt-4 text-sm lg:text-base leading-relaxed">
          Discover our magnificent skincare products, made with high-quality
          components for radiant beauty and long-lasting effects, designed to
          subtly enhance your regimen.
        </p>
        <div className="flex mt-6 space-x-4">
          <button className="bg-[#703527] text-white px-4 sm:px-6 py-2 rounded-full text-sm font-medium hover:bg-[#572017]">
            Our Collections
          </button>
          <button className="border border-[#703527] text-[#703527] px-4 sm:px-6 py-2 rounded-full text-sm font-medium hover:bg-[#703527] hover:text-white">
            Our Combo
          </button>
        </div>
      </div>

      {/* Right Side: Image Fully Cover */}
      <div className="relative h-[300px] md:h-auto">
        <Image
          src={img} // Replace with your image path
          alt="Skin Products"
          layout="fill" // Ensures the image fully covers the grid area
          objectFit="cover" // Makes the image cover the entire container without distortion
          className="w-full h-full"
        />
      </div>
    </div>

    {/* Features Section */}
    <div className="bg-[#703527] text-white py-6 sm:py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0">
        {/* Free Delivery */}
        <div className="flex items-center space-x-4">
          <FaTruck className="text-xl sm:text-2xl text-white" />
          <div>
            <h4 className="font-semibold text-base sm:text-lg">Free Delivery</h4>
            <p className="text-xs sm:text-sm">No-cost shipping worldwide</p>
          </div>
        </div>

        {/* Satisfaction Guarantee */}
        <div className="flex items-center space-x-4">
          <FaShieldAlt className="text-xl sm:text-2xl text-white" />
          <div>
            <h4 className="font-semibold text-base sm:text-lg">
              Satisfaction Guarantee
            </h4>
            <p className="text-xs sm:text-sm">Guaranteed money-back policy</p>
          </div>
        </div>

        {/* Internet Assistance */}
        <div className="flex items-center space-x-4">
          <FaHeadset className="text-xl sm:text-2xl text-white" />
          <div>
            <h4 className="font-semibold text-base sm:text-lg">
              Internet Assistance
            </h4>
            <p className="text-xs sm:text-sm">24/7 online customer support</p>
          </div>
        </div>

        {/* Adaptable Payments */}
        <div className="flex items-center space-x-4">
          <FaWallet className="text-xl sm:text-2xl text-white" />
          <div>
            <h4 className="font-semibold text-base sm:text-lg">
              Adaptable Payments
            </h4>
            <p className="text-xs sm:text-sm">Payment options are flexible</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        {/*  Category Section */}
        <section>
  <div className="container mx-auto p-4 sm:p-6 md:p-12 lg:p-16">
    {/* Section Header */}
    <section className="text-center">
      <p className="text-xs sm:text-sm uppercase text-[#aa5c3b] font-semibold">
        Pure Beauty{" "}
        <span className="bg-[#f0d8cb] px-1 rounded">Care</span>
      </p>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mt-2">
        Find Your Category
      </h2>

      {/* Grid Layout for Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
        {/* Category Cards */}
        {categories.map((category) => (
          <Link
            href={`/product/${category.id}`}
            key={category.id}
            className="group border border-orange-200 text-center rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <Image
              src={category.imgSrc}
              alt={category.title}
              width={300}
              height={300}
              className="object-cover"
            />
            <p className="text-sm sm:text-base text-[#aa5c3b] font-medium mt-3">
              {category.label}
            </p>
            <h3 className="text-base sm:text-lg text-[#1a1a1a] font-bold mt-1">
              {category.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#703527] mt-1 mb-3 font-semibold">
              Shop Now
            </p>
          </Link>
        ))}
      </div>
    </section>
  </div>
</section>


        {/* banner */}
        <section>
  <div className="container mx-auto px-4 ">
    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="relative rounded-lg overflow-hidden h-60 group">
        <Image
          src={img9} // Replace with the actual image path
          alt="Nature Ingredients"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="relative z-10 p-6 mt-7 flex flex-col items-end bg-gradient-to-t from-black/40 to-transparent h-full">
          <h2 className="text-lg font-bold text-white mb-2">Natural</h2>
          <p className="text-2xl font-semibold text-white">
            Transform with Nature
          </p>
          <button className="mt-4 px-4 py-2 bg-transparent border border-white text-white font-bold rounded hover:bg-white hover:text-[#703527] transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative rounded-lg overflow-hidden h-60 group">
        <Image
          src={img11} // Replace with the actual image path
          alt="Foundation"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="relative z-10 p-6 mt-7 flex flex-col items-end bg-gradient-to-t from-black/40 to-transparent h-full">
          <h2 className="text-lg font-bold text-white mb-2">Foundation</h2>
          <p className="text-2xl font-semibold text-white">Natural Tone</p>
          <button className="mt-4 px-4 py-2 bg-transparent border border-white text-white font-bold rounded hover:bg-white hover:text-[#703527] transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative rounded-lg overflow-hidden h-60 group">
        <Image
          src={img10} // Replace with the actual image path
          alt="Travel Friendly Makeup"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="relative z-10 p-6 mt-7 flex flex-col items-end bg-gradient-to-t from-black/40 to-transparent h-full">
          <h2 className="text-lg font-bold text-white mb-2">Travel-Friendly</h2>
          <p className="text-2xl font-semibold text-white">
            Best for all Skin Tones
          </p>
          <button className="mt-4 px-4 py-2 bg-transparent border border-white text-white font-bold rounded hover:bg-white hover:text-[#703527] transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Transform with Our Glowing Services */}
        <section>
  <div className="container mx-auto py-16 px-6 md:px-8">
    {/* Section Header */}
    <div className="text-center">
      <p className="text-sm uppercase text-[#aa5c3b] font-semibold">
        What We <span className="bg-[#f0d8cb] px-1 rounded">Bring</span>
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mt-2">
        Transform with Our Glowing Services
      </h2>
    </div>

    {/* Services Section */}
    <div className="mt-12 flex flex-col lg:flex-row items-center gap-8">
      {/* Left Column */}
      <div className="flex flex-col space-y-6 w-full lg:w-1/3">
        {/* Card 1 */}
        <div className="flex items-center justify-between bg-gradient-to-r to-[#FFD1BB] from-[#ffffff] rounded-full px-4 py-3">
          <div>
            <h4 className="text-lg font-bold text-[#1a1a1a] text-end">
              Glowing Face
            </h4>
            <p className="text-sm text-[#703527] text-end">
              Face transformation with expert cosmetic care.
            </p>
          </div>
          <div className="text-[#aa5c3b] bg-[#fef3eb] p-4 rounded-full">
            <FaSmile size={24} />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-between bg-gradient-to-r to-[#FFD1BB] from-[#ffffff] rounded-full px-4 py-3">
          <div>
            <h4 className="text-lg font-bold text-[#1a1a1a] text-end">
              Beauty Parlor
            </h4>
            <p className="text-sm text-[#703527] text-end">
              Unwind and truly indulge in pure luxurious beauty.
            </p>
          </div>
          <div className="text-[#aa5c3b] bg-[#fef3eb] p-4 rounded-full">
            <FaHandHoldingHeart size={24} />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center justify-between bg-gradient-to-r to-[#FFD1BB] from-[#ffffff] rounded-full px-4 py-3">
          <div>
            <h4 className="text-lg font-bold text-[#1a1a1a] text-end">
              Nail Elegance
            </h4>
            <p className="text-sm text-[#703527] text-end">
              Indulge in premium luxurious nail care and treatments.
            </p>
          </div>
          <div className="text-[#aa5c3b] bg-[#fef3eb] p-4 rounded-full">
            <FaGem size={24} />
          </div>
        </div>
      </div>

      {/* Center Image */}
      <div className="flex-shrink-0 w-[200px] sm:w-[250px] lg:w-[300px]">
        <Image
          src={img2}
          alt="Service Image"
          width={300}
          height={400}
          className="rounded-full border-4 border-[#fef3eb]"
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-col space-y-6 w-full lg:w-1/3">
        {/* Card 4 */}
        <div className="flex items-center space-x-4 bg-gradient-to-r from-[#FFD1BB] to-[#ffffff] rounded-full px-4 py-3">
          <div className="text-[#aa5c3b] bg-[#fef3eb] p-4 rounded-full">
            <FaStar size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#1a1a1a]">
              Essential Makeup
            </h4>
            <p className="text-sm text-[#703527]">
              Essential makeup tools for achieving perfect beauty.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex items-center space-x-4 bg-gradient-to-r from-[#FFD1BB] to-[#ffffff] rounded-full px-4 py-3">
          <div className="text-[#aa5c3b] bg-[#fef3eb] p-4 rounded-full">
            <FaBath size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#1a1a1a]">Thermal Bath</h4>
            <p className="text-sm text-[#703527]">
              Relaxation and renewal in thermal baths. An escape.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex items-center space-x-4 bg-gradient-to-r from-[#FFD1BB] to-[#ffffff] rounded-full px-4 py-3">
          <div className="text-[#aa5c3b] bg-[#fef3eb] p-4 rounded-full">
            <FaSpa size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#1a1a1a]">Stone Massage</h4>
            <p className="text-sm text-[#703527]">
              Experience deep relaxation with stone massages.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container mx-auto py-16 px-4 sm:px-8">
    {/* Flex container for main content */}
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Banner Section */}
      <div className="relative bg-black text-white w-full lg:w-1/2 p-8 rounded-lg">
        <Image
          src={img4}
          alt="Banner Image"
          width={500}
          height={500}
          className="rounded-lg opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <p className="uppercase text-sm text-[#aa5c3b] font-semibold">
            New Arrival
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Latest Collection
          </h2>
          <button className="mt-4 px-6 py-2 bg-[#f6c8ac] text-black rounded-lg font-medium hover:bg-[#e8af92] transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-96">
        {/* Product Card 1 */}
        <div className="text-center">
          <Image
            src={img5}
            alt="Product Image"
            width={200}
            height={300}
            className="mx-auto h-60 object-cover rounded-lg"
          />
          <div className="mt-4">
            <div className="flex items-center justify-center text-[#f5a623] space-x-1">
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
            </div>
            <h4 className="mt-2 text-lg font-semibold">Face Serum</h4>
            <p className="mt-1 text-sm">
              <span className="text-[#703527] font-bold">$33.37</span>{" "}
              <span className="line-through text-gray-400">$59.99</span>
            </p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="text-center">
          <Image
            src={img5}
            alt="Product Image"
            width={200}
            height={300}
            className="mx-auto h-60 object-cover rounded-lg"
          />
          <div className="mt-4">
            <div className="flex items-center justify-center text-[#f5a623] space-x-1">
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
            </div>
            <h4 className="mt-2 text-lg font-semibold">Alcohol-Free Toner</h4>
            <p className="mt-1 text-sm">
              <span className="text-[#703527] font-bold">$27.85</span>{" "}
              <span className="line-through text-gray-400">$39.99</span>
            </p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="text-center">
          <Image
            src={img5}
            alt="Product Image"
            width={200}
            height={300}
            className="mx-auto h-60 object-cover rounded-lg"
          />
          <div className="mt-4">
            <div className="flex items-center justify-center text-[#f5a623] space-x-1">
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
            </div>
            <h4 className="mt-2 text-lg font-semibold">Mascara - Black</h4>
            <p className="mt-1 text-sm">
              <span className="text-[#703527] font-bold">$40.97</span>{" "}
              <span className="line-through text-gray-400">$50.99</span>
            </p>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="text-center">
          <Image
            src={img5}
            alt="Product Image"
            width={200}
            height={300}
            className="mx-auto h-60 object-cover rounded-lg"
          />
          <div className="mt-4">
            <div className="flex items-center justify-center text-[#f5a623] space-x-1">
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
            </div>
            <h4 className="mt-2 text-lg font-semibold">Sun Protection</h4>
            <p className="mt-1 text-sm">
              <span className="text-[#703527] font-bold">$54.82</span>{" "}
              <span className="line-through text-gray-400">$70.99</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[400px] rounded-lg shadow-md overflow-hidden">
    {/* Left Section: Image */}
    <div className="relative h-[250px] md:h-auto">
      <Image
        src={img8}
        alt="Golden Cream Jar"
        layout="fill"
        objectFit="cover"
        className="rounded-none"
      />
    </div>

    {/* Right Section: Content */}
    <div className="flex flex-col items-center justify-center bg-[#f9e5da] p-6 sm:p-8 space-y-4">
  {/* Newsletter Heading */}
  <p className="text-sm uppercase text-[#aa5c3b] font-semibold text-center">
    Join our{" "}
    <span className="bg-[#f0d8cb] px-2 py-1 rounded">newsletter</span>
  </p>

  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center">
    Subscribe for Latest Updates & News
  </h2>

  {/* Form */}
  <form className="flex flex-col w-full max-w-md space-y-2">
    {/* Email Input */}
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full p-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#ae856f]"
    />
    {/* Subscribe Button */}
    <button
      type="submit"
      className="bg-[#4e2e28] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#623c34] transition-all duration-300"
    >
      Subscribe
    </button>
  </form>
</div>

  </div>
</section>


<section className="py-16">
  {/* Section Header */}
  <div className="text-center mb-12">
    <p className="text-sm uppercase text-[#aa5c3b] font-semibold">
      Popular Cosmetics
    </p>
    <h2 className="text-3xl font-bold text-[#1a1a1a]">
      Best Selling Product
    </h2>
  </div>

  {/* Product Cards */}
  <div className="flex flex-wrap justify-center gap-6 sm:gap-4">
    {products.map((product) => (
      <div
        key={product.id}
        className="flex flex-col items-center p-6 w-full sm:w-64 md:w-56 lg:w-64 xl:w-72"
      >
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={300}
          className="w-full h-auto"
        />

        {/* Product Details */}
        <div className="mt-6 text-center">
          {/* Star Rating */}
          <div className="flex justify-center mb-3">
            {Array.from({ length: product.rating }, (_, i) => (
              <AiFillStar key={i} className="text-[#FFC107]" />
            ))}
          </div>

          {/* Product Name */}
          <h3 className="text-lg font-medium text-[#1a1a1a]">
            {product.name}
          </h3>

          {/* Pricing */}
          <p className="mt-2 text-sm text-[#703527]">
            <span className="font-bold">{product.price}</span>{" "}
            <span className="line-through text-gray-400">
              {product.originalPrice}
            </span>
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


        <section>
          <div className="">
            {" "}
            <Testimonials />
          </div>
        </section>

     <section className="py-20">
  <div className="max-w-7xl mx-auto px-6 sm:px-8">
    {/* Header Section */}
    <p className="text-center text-sm uppercase text-[#aa5c3b] font-semibold">
      Latest News{" "}
      <span className="bg-[#f0d8cb] px-1 rounded">Posts</span>
    </p>
    <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-700 uppercase mt-3 mb-8">
      Latest News & Articles
    </h2>

    {/* Articles Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden w-full"
        >
          {/* Image Section */}
          <div className="relative w-full h-48 sm:h-56">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>

          {/* Article Content */}
          <div className="p-4 sm:p-5 bg-[#fbece3]">
            {/* Metadata */}
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <FaTag className="mr-2 text-orange-500" />
              <span className="capitalize">{article.category}</span>
              <span className="mx-2">|</span>
              <FaRegClock className="mr-2 text-orange-500" />
              <span>{article.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
              {article.title}
            </h3>

            {/* Read More Link */}
            <a
              href={article.link}
              className="text-sm text-orange-500 hover:underline font-medium"
            >
              Read More →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        <section className="py-9">
          <div className="container-fluid mx-auto object-fit">
            <div className="flex flex-wrap -mx-0">
              {imageData.map((item) => (
                <div
                  key={item.id}
                  className="lg:w-1/6 md:w-1/5 sm:w-1/4 w-1/2 px-0 mt-4 relative group"
                >
                  <div className="item-grid grid-style-1">
                    <div className="h-64 relative overflow-hidden">
                      <a href="#" className="block overflow-hidden h-full">
                        <Image
                          src={item.src}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover transition-transform transform group-hover:scale-105"
                          width={400}
                          height={300}
                        />
                      </a>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0  bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="flex justify-between items-center text-white">
                          <a
                            href="#"
                            className="flex items-center mr-6 space-x-2"
                          >
                            <FaHeart className="far fa-heart mr-1" />
                            {item.likes}
                          </a>
                          <a href="#" className="flex items-center space-x-2">
                            <FaRegComment className="far fa-comment mr-1" />
                            {item.comments}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
