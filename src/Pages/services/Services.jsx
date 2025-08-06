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
    image: "/images/Credit-Card.png",
    active: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-20" id="services">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <span className="inline-block bg-white text-gray-700 text-[19px] sm:text-[17px] px-6 py-2 rounded-full mb-6 shadow">
            Service
          </span>
          <h2 className="text-[31px] sm:text-[47px] lg:text-[47px]  mb-6 leading-tight" style={{ fontFamily: "Myanmar Khyay, sans-serif" }}>
            INVEST WITH THE <br />
            <span className="text-blue-600">CONFIDENCE</span> <br />
            SUCCEED WITH EASE
          </h2>
          <p className="text-[18px] sm:text-[16px] text-gray-600 mb-10 leading-relaxed" style={{ fontFamily: "font-family: 'Montserrat" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
            felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-[13px] px-6 py-3 rounded-full transition" style={{ fontFamily: "font-family: 'Montserrat" }}>
            Know More About Our Services
          </button>
        </div>

        {/* Right Feature Grid */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {services.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 shadow-md transition duration-300 ease-in-out ${
                item.active
                  ? "bg-white text-black hover:bg-black hover:text-white hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]"
                  : "bg-white text-black hover:bg-black hover:text-white hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4"
              />
              <h4 className="text-[15px]  text-center mb-2" style={{ fontFamily: "Myanmar Khyay, sans-serif" }}>
                {item.title}
              </h4>
              <p className="text-center  text-[12px] sm:text-[13px] text-gray-600 hover:text-white" style={{ fontFamily: "font-family: 'Montserrat" }}>
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
