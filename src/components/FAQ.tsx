"use client";

import { useState } from "react";
import JsonLd from "@/components/JsonLd";
import { FAQItem, HOME_FAQS, getFaqSchema } from "@/lib/site";

interface FAQProps {
  faqs?: FAQItem[];
  subtitle?: string;
  title?: string;
}

const FAQ = ({
  faqs = HOME_FAQS,
  subtitle = "Dúvidas Frequentes",
  title = "Tire suas dúvidas antes de viajar",
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <JsonLd data={getFaqSchema(faqs)} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-bold uppercase tracking-widest mb-4">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-zinc-800 rounded-2xl bg-black overflow-hidden transition-all duration-300 hover:border-gold-400/30"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full px-6 sm:px-8 py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-gold-400 text-xl flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-8 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
