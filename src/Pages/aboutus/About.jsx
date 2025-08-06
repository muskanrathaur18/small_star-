import { motion } from "framer-motion";

const EmpowerSection = () => {
  return (
    <section
      className="bg-[#1C1C1C] text-white py-12 px-4 sm:px-6 md:px-16 lg:px-20"
      id="aboutus"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[30px]  sm:text-[47px] leading-tight mb-6" style={{ fontFamily: "Myanmar Khyay, sans-serif" }}>
            EMPOWER YOU TO <br />
            BUILD A{" "}
            <span className="text-blue-500">STRONGER</span>{" "}
            <span className="text-blue-400">FINANCIAL</span> FUTURE
          </h2>

          <p className="text-[21px] sm:text-[16px] text-gray-300  mb-6 leading-relaxed" style={{ fontFamily: "font-family: 'Montserrat" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold sm:text-[13px] px-6 py-2 rounded-full transition" style={{ fontFamily: "Myanmar Khyay, sans-serif" }}>
            Contact Us
          </button>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="w-full md:w-1/2 "
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/images/ABOUT-US.png"
            alt="Empower Person"
            className="rounded-2xl object-cover w-full max-w-[400px] mx-auto md:mx-0 "
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EmpowerSection;
