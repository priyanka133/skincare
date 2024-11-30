import Image from "next/image";
import { FaSpa } from "react-icons/fa";
import Navbar from "../components/custom/navbar";
import img from "@/Assests/images7.jpg";
import img1 from "@/Assests/images2.jpg";
import img2 from "@/Assests/image3.jpg";

import img3 from "@/Assests/images4..jpg";
import img4 from "@/Assests/images5.jpg";
import img5 from "@/Assests/images6.jpg";

export default function Services() {
  const services = [
    {
      title: "Glowing Face",
      description: "Face transformation with expert cosmetic care.",
      imagePath: img,
    },
    {
      title: "Beauty Parlor",
      description: "Unwind and fully indulge in pure luxurious beauty.",
      imagePath: img1,
    },
    {
      title: "Nail Elegance",
      description: "Indulge in premium luxurious nail care and treatments.",
      imagePath: img2,
    },
    {
      title: "Essential Makeup",
      description: "Essential makeup tools for achieving perfect beauty.",
      imagePath: img3,
    },
    {
      title: "Thermal Bath",
      description: "Relaxation and renewal in thermal baths: an escape.",
      imagePath: img4,
    },
    {
      title: "Stone Massage",
      description: "Experience deep relaxation with stone massages.",
      imagePath: img5,
    },
  ];

  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <header className="bg-[#FDECE3] bg-custom bg-cover bg-center relative py-32 flex items-center justify-center flex-col">
          <div className="absolute inset-0 bg-[#FDECE3]/80 backdrop-blur-0"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-[#5A3726] text-xl font-medium uppercase tracking-wider">
              What We Offer
            </h2>
            <h1 className="text-[#5A3726] text-4xl font-bold mt-2">
              Our Services
            </h1>
          </div>
        </header>

        <section className="py-28 px-6 lg:px-20">
          <div className="text-center mb-10">
            <h3 className="text-[#BE9471] font-medium uppercase tracking-wider">
              Our Services
            </h3>
            <h2 className="text-[#5A3726] text-3xl font-bold mt-2">
              Explore our beauty services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={service.imagePath}
                    alt={service.title}
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>

                <div className="bg-[#FDECE3] z-10 w-16 h-16 rounded-full flex items-center justify-center -mt-8 border-4 border-white shadow-md">
                  <FaSpa className="text-[#BE9471] text-2xl z-10" />
                </div>

                <h3 className="text-[#5A3726] font-bold text-lg mt-4">
                  {service.title}
                </h3>
                <p className="text-[#5A3726]/80 text-sm text-center mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
