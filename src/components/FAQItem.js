// FAQItem.js
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-4 border-blue-500 ">
      <button
        className="flex justify-between items-left w-full py-4 px-6 text-left focus:outline-none"
        onClick={toggleFAQ}
      >
        <span className="font-medium text-white ">{question}</span>
        <span className="text-white pl-72 max-md:pl-40">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="py-2 pb-4 px-6 text-white text-left max-md:text-sm max-md:w-80 h-auto">
          <p >{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;