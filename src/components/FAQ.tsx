"use client";

import { useState } from "react";
import JsonLd from "@/components/JsonLd";
import { IconChevronDown } from "@/components/Icons";
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
    <section
      id="faq"
      className="py-14 sm:py-20 lg:py-24 bg-[#070708] border-t border-white/10"
    >
      <JsonLd data={getFaqSchema(faqs)} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-gold-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            {subtitle}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {title}
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border rounded-2xl bg-[#0e0e11] overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? "border-gold-400/40"
                    : "border-white/10 hover:border-gold-400/30"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 sm:px-7 sm:py-5 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-gold-400 text-black rotate-180"
                        : "bg-white/5 text-gold-400"
                    }`}
                  >
                    <IconChevronDown className="w-4 h-4" />
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 sm:px-7 sm:pb-6 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5 pt-3">
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
