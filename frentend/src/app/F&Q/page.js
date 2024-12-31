"use client"

import React, { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";

export default function Page() {
  const [openIndex, setOpenIndex] = useState(-1); // Removed the type definition
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur",
      answer: (
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <ul className="space-y-2 list-inside">
            <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
            <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
            <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
            <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="py-8 px-16">
      <div className="container mx-auto px-16 py-8 grid md:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-medium mb-8">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
<button
  className={`w-full flex items-center justify-between p-4 text-left focus:outline-none ${openIndex === index ? 'bg-red-500' : ''}`}
  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
>
  <span className="font-medium">{faq.question}</span>
  {openIndex === index ? (
    <Minus className="h-5 w-5 text-white flex-shrink-0" />
  ) : (
    <Plus className="h-5 w-5 text-white flex-shrink-0" />
  )}
</button>


                {openIndex === index && <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#FFF9E5] p-6 rounded-lg h-fit">
          <h2 className="text-xl font-medium mb-4">Don't find your answer, Ask for support.</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 rounded border bg-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded border bg-white"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
            <textarea
              placeholder="Message (Optional)"
              className="w-full p-3 rounded border bg-white h-32 resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded flex items-center justify-center gap-2 hover:bg-red-600 transition-colors w-full"
            >
              SEND MESSAGE
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
