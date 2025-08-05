import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      "We offer a wide range of financial services including SIP (Systematic Investment Plan), mutual fund investments, personal and education loans, retirement planning, and future financial goal setting.",
  },
  {
    question: "What is an SIP and why should I start one?",
    answer:
      "An SIP (Systematic Investment Plan) is a disciplined way to invest regularly in mutual funds. It helps build long-term wealth by averaging costs and harnessing compounding.",
  },
  {
    question: "How do I invest in mutual funds through your platform?",
    answer:
      "You can easily invest in mutual funds by signing up on our platform, completing KYC, and selecting from a wide range of top-rated funds based on your financial goals.",
  },
  {
    question: "Is there a minimum amount to start an SIP?",
    answer:
      "Yes, you can start an SIP with as low as ₹500 per month. It’s designed to encourage small but consistent investments.",
  },
  {
    question: "Can I change or stop my SIP anytime?",
    answer:
      "Absolutely! SIPs are flexible. You can modify or cancel them anytime through your investment dashboard without any penalties.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Text Column */}
        <div className="md:w-1/2">
          <h2 className="text-[32px] sm:text-[45px] md:text-[55px] Myanmar Khyay font-semibold mb-4 leading-tight">
            Any Questions? <br /> We Got You
          </h2>
          <p className="text-gray-600 mb-6 text-[15px] sm:text-[16px] Montserrat">
            We are here to answer all your queries regarding investments, SIPs,
            mutual funds, and financial planning. Explore our FAQs or contact
            our expert team directly.
          </p>
          <a
            href="#"
            className="text-blue-600 text-[18px] sm:text-[21px] Montserrat inline-flex items-center gap-1 hover:underline"
          >
            More FAQs <span className="ml-1">→</span>
          </a>
        </div>

        {/* Right FAQ Accordion */}
        <div className="md:w-1/2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-blue-500 py-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-[17px] sm:text-[18px] Myanmar Khyay text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-blue-600" size={20} />
                ) : (
                  <Plus className="text-blue-600" size={20} />
                )}
              </button>
              {openIndex === index && faq.answer && (
                <p className="mt-2 text-[14px] sm:text-[15px] Montserrat text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
