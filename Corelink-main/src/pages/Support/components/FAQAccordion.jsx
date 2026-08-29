import React, { useState } from "react";

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <div className="space-y-1">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[10px] bg-white shadow-[0_6px_16px_rgba(57,24,124,0.08)] transition-all duration-300 ease-out hover:shadow-[0_8px_20px_rgba(57,24,124,0.10)]"
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
            >
              <span className="text-lg font-semibold text-[#333] sm:text-xl">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#333] text-white text-lg  transition-all duration-300`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={`faq-panel-${index}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 py-5 text-[#5a5268] sm:px-8">
                  <p className="leading-8">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
