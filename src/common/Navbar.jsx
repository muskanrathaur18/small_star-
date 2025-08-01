import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100/50 fixed z-50 w-full px-4 py-4 shadow-sm rounded-b-3xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
  <div className="flex items-center">
    <div className="w-8 h-8  rounded-sm flex items-center justify-center mr-2">
      {/* <span className="text-white font-bold text-lg"></span> */}
      <img src='/images/Vector 2.svg'></img>
    </div>
    <span className="text-gray-900 font-semibold text-xl">WEALTH BUILDERS</span>
  </div>
</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            About
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Services
          </Link>
          <Link to="/testimonial" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Testimonial
          </Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
              Services
            </Link>
            <Link to="/testimonial" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
              Testimonial
            </Link>
            <div className="px-4 pt-2">
              <Link to="/contact">
                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
