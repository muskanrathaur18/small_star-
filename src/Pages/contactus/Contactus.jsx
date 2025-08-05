import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12" id="contact">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-[33px] sm:text-[60px] Myanmar Khyay mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-[13px] sm:text-[16px] Montserrat mb-8">
            Empowering your journey toward a secure and successful financial future.
          </p>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-blue-600 text-2xl mr-3">📍</span>
              <p className="text-[14px] sm:text-[17px] Myanmar Khyay">OFFICE</p>
            </div>
            <p className="text-gray-700 text-[12px] sm:text-[15px] Montserrat ml-9">
              Ashirwaad 153, MIG ADA Colony, Near Mamta Bakery, Preetam Nagar - 211011
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <span className="text-blue-600 text-2xl mr-3">💬</span>
              <p className="sm:text-[17px] text-[14px] Myanmar Khyay">GET IN TOUCH</p>
            </div>
            <p className="ml-9 text-gray-700 sm:text-[15px] text-[12px] Montserrat">+91 97957 20319</p>
            <p className="ml-9 text-gray-700 sm:text-[15px] text-[12px] Montserrat">Example@123.gmail.com</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-[#3B3B3B] p-6 sm:p-8 rounded-xl shadow-md w-full">
          <div className="text-white font-bold text-lg mb-6 flex justify-center items-center gap-2">
            <img src="/images/Vector 2.png" alt="Wealth Builders" className="h-6" />
            <span>WEALTH BUILDERS</span>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-[#4D4D4D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="tel"
                placeholder="Phone No."
                className="w-full sm:w-1/2 p-3 rounded bg-[#4D4D4D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:w-1/2 p-3 rounded bg-[#4D4D4D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 rounded bg-[#4D4D4D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
