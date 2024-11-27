import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4 text-left text-gray-800 hover:text-purple-600 focus:outline-none"
          >
            <span className="font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 transform ${
                activeIndex === index ? 'rotate-180' : ''
              } transition-transform duration-300`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="py-2 px-4 text-gray-600">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
