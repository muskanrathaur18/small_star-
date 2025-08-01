import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Empowering your journey toward a secure and successful financial future.
          </p>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-blue-600 text-2xl mr-3">📍</span>
              <p className="text-lg font-semibold">OFFICE</p>
            </div>
            <p className="text-gray-700 ml-9">
              Ashirwaad 153, MIG ADA Colony, Near Mamta Bakery, Preetam Nagar - 211011
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <span className="text-blue-600 text-2xl mr-3">💬</span>
              <p className="text-lg font-semibold">GET IN TOUCH</p>
            </div>
            <p className="ml-9 text-gray-700">+91 97957 20319</p>
            <p className="ml-9 text-gray-700">Example@123.gmail.com</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-xl shadow-md w-full">
          <div className="text-white font-bold text-lg mb-6 flex justify-center">
            <img src="/images/Vector 2.png" alt="Wealth Builders" className="h-6 mr-2" />
            <span>WEALTH BUILDERS</span>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex space-x-4">
              <input
                type="tel"
                placeholder="Phone No."
                className="w-1/2 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
