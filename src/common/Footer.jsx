import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white pt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-10">
        {/* Logo & Address */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/Vector 2.png" alt="Logo" className="h-8" />
            <h2 className="text-lg font-semibold tracking-wide">WEALTH BUILDERS</h2>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Ashirwaad 153, MIG ADA Colony,<br />
            Near Mamta Bakery, Preetam Nagar - 211011
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="p-2 rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* Spacer for grid balance */}
        <div className="hidden lg:block"></div>

        {/* Quick Navigate */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Navigate</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300 mb-2">+91 97957 20319</p>
          <p className="text-sm text-gray-300">Example@123.gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black py-3 text-center text-xs text-gray-400">
        Copyright © 2025 All Right Reserved
      </div>
    </footer>
  );
}
