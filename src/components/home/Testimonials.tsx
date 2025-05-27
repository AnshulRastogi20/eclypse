
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Understated, but unforgettable. It feels like it was made for me",
      name: "Random Woman",
      location: "NY, USA",
      avatar: "https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/6963858d80022e2c610282c05e9cb634cb26ed74?placeholderIfAbsent=true"
    },
    {
      quote: "The quality is exceptional. Worth every penny.",
      name: "John Smith",
      location: "London, UK", 
      avatar: "https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/c4a337a4a32c34399c9c4fda5c82b486996153af?placeholderIfAbsent=true"
    },
    {
      quote: "Elegant simplicity that stands out in a crowd.",
      name: "Priya Sharma",
      location: "Mumbai, India",
      avatar: "https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/620eb276165e41315503a4d4e211849cfe466aba?placeholderIfAbsent=true"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const current = testimonials[activeIndex];
  
  return (
    <section className="mt-16 md:mt-[153px] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-sm md:text-base font-medium tracking-[3px] md:tracking-[5.12px] mb-8 md:mb-0 pl-4 md:pl-0">
          OUR CUSTOMERS
        </h2>
        
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-5 justify-between mt-8 md:mt-[73px]">
          <div className="flex flex-col md:max-w-4xl">
            <div className="flex items-start gap-4 md:gap-[22px] font-normal">
              <div className="text-[rgba(247,247,247,1)] text-4xl md:text-[119px] leading-none">
                "
              </div>
              <div className="text-[rgba(210,210,210,1)] text-lg md:text-5xl leading-tight md:leading-[52px] flex-1">
                {current.quote}
              </div>
            </div>
            <div className="flex flex-col ml-8 md:ml-[66px] mt-6 md:mt-[69px]">
              <div className="text-[rgba(196,196,196,1)] text-lg md:text-2xl font-normal">
                {current.name}
              </div>
              <div className="text-[rgba(83,83,83,1)] text-sm md:text-base font-medium mt-2 md:mt-3">
                {current.location}
              </div>
            </div>
          </div>
          
          <div className="flex md:flex-col items-center md:items-end gap-6 md:gap-[49px] mt-4 md:mt-[5px]">
            <div className="flex md:flex-col items-center gap-4 md:gap-4 order-2 md:order-1">
              {testimonials.map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className={`object-contain rounded-full cursor-pointer transition-all hover:scale-105 ${
                    index === 0 
                      ? "w-16 h-16 md:w-[126px] md:h-[126px]" 
                      : "w-12 h-12 md:w-[69px] md:h-[69px]"
                  } ${
                    activeIndex === index 
                      ? "ring-2 ring-white opacity-100" 
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            
            <div className="flex md:flex-col gap-4 md:gap-4 order-1 md:order-2">
              <button 
                onClick={prevTestimonial}
                className="hover:opacity-70 transition-all p-2 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="hover:opacity-70 transition-all p-2 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgba(61,61,61,1)] mt-12 md:mt-[100px] max-w-7xl mx-auto" />
    </section>
  );
};

export default Testimonials;
