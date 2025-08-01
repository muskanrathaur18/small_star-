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
      "We offer a wide range of financial services including SIP (Systematic Investment Plan), mutual fund investments, personal and education loans, retirement planning, and future financial goal setting.",
  },
  {
    question: "How do I invest in mutual funds through your platform?",
    answer: "We offer a wide range of financial services including SIP (Systematic Investment Plan), mutual fund investments, personal and education loans, retirement planning, and future financial goal setting.",
  },
  {
    question: "What is an SIP and why should I start one?",
    answer: "We offer a wide range of financial services including SIP (Systematic Investment Plan), mutual fund investments, personal and education loans, retirement planning, and future financial goal setting.",
  },
  {
    question: "What is an SIP and why should I start one?",
    answer: "We offer a wide range of financial services including SIP (Systematic Investment Plan), mutual fund investments, personal and education loans, retirement planning, and future financial goal setting.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Text Column */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 leading-snug">
            Any Questions? <br /> We Got You
          </h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
          >
            More FAQs <span className="ml-1">→</span>
          </a>
        </div>

        {/* Right FAQ Accordion */}
        <div className="md:w-1/2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-blue-500 py-4">
              <button
                className="flex justify-between w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-sm font-semibold font-bold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-blue-600" size={18} />
                ) : (
                  <Plus className="text-blue-600" size={18} />
                )}
              </button>
              {openIndex === index && faq.answer && (
                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
