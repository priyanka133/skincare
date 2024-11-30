import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <p className="text-base sm:text-lg font-bold">+33 40 7433 8442</p>
          <p className="mt-2 text-sm sm:text-base">info@glowflow.com</p>
          <p className="mt-2 text-sm sm:text-base">Main Street, London UK</p>
        </div>

        {/* About GlowFlow */}
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-4">GlowFlow</h3>
          <p className="text-sm">
            Discover Beauty: Ultimate Care and Wellness.
          </p>
          <p className="mt-4 text-sm font-medium">Open Hours</p>
          <p className="text-sm">Sunday to Friday: 08:00 - 20:00</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Pages and Utility Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Pages</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-gray-100">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4">Utility</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-gray-100">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Protected
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Not Found
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-4">Beauty Updates</h3>
          <p className="text-sm mb-4">
            Stay informed: Join our newsletter today!
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black font-bold rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-blue-600"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">
          Copyright © GlowFlow | Designed by VictorFlow - Powered by Webflow.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          {/* Uncomment the below if you have payment icons */}
          {/* <Image src="/images/payment-visa.png" alt="Visa" width={40} height={25} />
          <Image src="/images/payment-mastercard.png" alt="MasterCard" width={40} height={25} />
          <Image src="/images/payment-paypal.png" alt="PayPal" width={40} height={25} /> */}
        </div>
      </div>
    </footer>
  );
}
