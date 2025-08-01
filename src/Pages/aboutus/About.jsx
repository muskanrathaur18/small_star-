import React from "react";

const EmpowerSection = () => {
  return (
    <section className="bg-[#1C1C1C] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold leading-snug mb-6">
            EMPOWER YOU TO <br />
            BUILD A{" "}
            <span className="text-blue-500">STRONGER</span>{" "}
            <span className="text-blue-400">FINANCIAL</span> FUTURE
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
            vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-full transition">
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="public/images/Untitled design (8) 1.png" 
            alt="Empower Person"
            className="rounded-2xl object-cover w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
