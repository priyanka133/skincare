// components/OpeningHours.jsx
import Image from "next/image";
import img from "@/Assests/phooos.jpg";

export default function OpeningHours() {
  return (
    <div className="bg-[#FDECE3] flex items-center justify-center min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
        <div className="flex-1 space-y-6">
          <h3 className="text-sm font-semibold text-[#A97D68] uppercase tracking-wide">
            Book Your{" "}
            <span className="bg-[#FDECE3] px-1 py-0.5 rounded-md">Visit</span>
          </h3>
          <h2 className="text-3xl font-bold text-[#5A3726]">Opening Hours</h2>
          <p className="text-sm text-[#5A3726]/80">
            Find out what time we&apos;re currently available. Convenience and
            leisure on your terms are ensured by hours customized to fit your
            schedule for luxurious spa treatments and cosmetic care.
          </p>
          <div className="">
            <div className="flex items-center justify-between bg-gradient-to-r  border-l border-t border-b border-[#FFD1BB] to-[#fff5ef] from-[#ffd9c7]  px-4 py-3">
              <span className="text-[#5A3726] font-medium">
                Monday to Friday
              </span>
              <span className="text-[#5A3726]">10:00 AM — 4:00 PM</span>
            </div>

            <div className="flex items-center justify-between bg-gradient-to-r  border-l border-t border-b border-[#FFD1BB] to-[#fff5ef] from-[#ffd9c7]  px-4 py-3">
              <span className="text-[#5A3726] font-medium">Saturday</span>
              <span className="text-[#5A3726]">11:30 AM — 1:00 PM</span>
            </div>

            <div className="flex items-center justify-between bg-gradient-to-r  border-l border-t border-b border-[#FFD1BB] to-[#fff5ef] from-[#ffd9c7]  px-4 py-3">
              <span className="text-[#5A3726] font-medium">Sunday</span>
              <span className="text-[#5A3726]">6:00 PM — 8:00 PM</span>
            </div>
          </div>
          <button className="bg-[#5A3726] text-white text-sm px-6 py-2 rounded-md hover:bg-[#4B2F20]">
            Book Now
          </button>
        </div>

        <div className="flex-1 mt-6 md:mt-0 md:ml-8">
          <Image
            src={img}
            width={500}
            height={400}
            alt="Opening Hours Visual"
            className="rounded-lg object-cover shadow-md max-h-96"
          />
        </div>
      </div>
    </div>
  );
}
