
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ProductDetails: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };
  
  const sections = [
    {
      id: "size",
      title: "Size & Fit",
      content: `
        <p class="mb-4">Our garments are designed with a relaxed fit that drapes elegantly on the body.</p>
        <ul class="mb-4 space-y-2">
          <li>XS: Chest 36", Length 28"</li>
          <li>S: Chest 38", Length 28.5"</li>
          <li>M: Chest 40", Length 29"</li>
          <li>L: Chest 42", Length 29.5"</li>
          <li>XL: Chest 44", Length 30"</li>
        </ul>
        <p>For detailed measurements, please refer to our size chart.</p>
      `
    },
    {
      id: "delivery",
      title: "Delivery & Returns",
      content: `
        <p class="mb-4">Free standard shipping on all orders over ₹5,000.</p>
        <p class="mb-4">Delivery within 3-5 business days.</p>
        <p>Returns accepted within 14 days of delivery. Items must be unworn, unwashed, and with all original tags attached.</p>
      `
    },
    {
      id: "made",
      title: "How This Was Made",
      content: `
        <p class="mb-4">Crafted from 100% premium wool sourced from ethical farms.</p>
        <p class="mb-4">Designed in our studio in Mumbai and handcrafted by skilled artisans.</p>
        <p class="mb-4">Each piece undergoes rigorous quality control to ensure longevity and durability.</p>
        <p>We use natural dyes and sustainable production methods to minimize environmental impact.</p>
      `
    }
  ];
  
  return (
    <section className="w-full mt-16 md:mt-[179px] px-4 md:px-[50px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-xl md:text-[32px] text-white font-normal tracking-[-0.5px] md:tracking-[-0.64px]">
          <div className="flex flex-col w-full">
            {sections.map((section, index) => (
              <div key={section.id} className="border-b border-gray-600 last:border-b-0">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full text-left py-6 md:py-8 hover:text-gray-300 transition-colors flex items-center justify-between"
                >
                  <span>{section.title}</span>
                  <ChevronDown 
                    className={`w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 ${
                      activeSection === section.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeSection === section.id ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'
                }`}>
                  <div 
                    className="text-white text-sm md:text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
