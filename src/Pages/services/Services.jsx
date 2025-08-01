import React from "react";

const services = [
  {
    title: "Mutual Funds",
    desc: "A type of investment that pools money from many investors to purchase a variety of securities like stocks and bonds.",
    image: "/images/Remittance or international money transfer.svg",
    active: false,
  },
  {
    title: "Life Insurance",
    desc: "This life cover secures your loved ones' future by paying a lump sum amount in case of an unfortunate event.",
    image: "/images/Life Insaurance.png",
    active: true,
  },
  {
    title: "Child Education Plan",
    desc: "A child education plan is an insurance plan that helps you protect your savings and safeguard your child's future.",
    image: "/images/Group 1.svg",
    active: false,
  },
  {
    title: "Credit Card",
    desc: "A type of credit facility, provided by banks that allows a customer to borrow funds within a pre-approved credit limit.",
    image: "images/credit.jpeg",
    active: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-200 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <span className="inline-block bg-white text-gray-700 text-sm font-semibold px-8 py-2 rounded-full mb-10 shadow">
            Service
          </span>
          <h2 className="text-4xl font-bold mb-10 leading-snug">
            INVEST WITH THE <br />
            <span className="text-blue-600">CONFIDENCE</span> <br />
            SUCCEED WITH EASE
          </h2>
          <p className="text-md text-gray-600 leading-relaxed mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
            vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-3 rounded-full transition">
            Know More About Our Services
          </button>
        </div>

        {/* Right Feature Grid */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-md ${
                item.active
                  ? "bg-[#1C1C1C]  text-white hover:bg-white hover:text-black shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] transition duration-300 ease-in-out"
                  : "bg-white text-black hover:bg-black hover:text-white hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] transition duration-300 ease-in-out"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h4 className="text-md font-semibold text-center mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
