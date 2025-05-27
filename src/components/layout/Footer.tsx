
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[rgba(9,8,8,1)] text-[rgba(212,213,217,1)] p-6 md:p-6 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-2xl md:text-[32px] font-medium tracking-[-1px] md:tracking-[-1.28px] leading-none mb-8 md:mb-[67px]">
              <div>Eclypse</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/17a3a521c9e128251f29762b7e43c02459591983?placeholderIfAbsent=true"
                alt="Eclypse mark"
                className="w-1.5 h-1.5 object-contain"
              />
            </div>
            <div className="flex flex-col text-sm leading-[1.4] space-y-2 md:space-y-1">
              <div className="flex flex-wrap items-center gap-2 md:gap-4 font-medium">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <div className="font-normal">/</div>
                <Link to="/about" className="hover:text-white transition-colors">About</Link>
                <div className="font-normal">/</div>
                <Link to="/shop" className="hover:text-white transition-colors">Buy</Link>
                <div className="font-normal">/</div>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <Link to="/customers" className="font-medium hover:text-white transition-colors">Our Customers</Link>
                <div className="font-normal">/</div>
              </div>
              <div className="font-medium">
                <Link to="/contact" className="hover:text-white transition-colors">Contacts</Link>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-1 md:min-w-60 space-y-6 md:space-y-8">
            <div className="font-medium">
              <div className="text-[10px] leading-[1.3] tracking-[1.5px] uppercase mb-2">
                Contact
              </div>
              <a href="tel:+911234567890" className="text-lg md:text-xl leading-[1.2] tracking-[-0.4px] hover:text-white transition-colors block">
                +91 123-456-7890
              </a>
            </div>
            <div>
              <div className="text-[10px] font-medium leading-[1.3] tracking-[1.5px] uppercase mb-2">
                Email
              </div>
              <a href="mailto:eclypse@gmail.com" className="text-sm font-normal leading-[1.4] hover:text-white transition-colors block">
                eclypse@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:min-w-60 justify-between md:h-[167px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/a3fdbecda9169383fa2f256c9cc0fbcc108b4c0a?placeholderIfAbsent=true"
              alt="Social media"
              className="w-10 h-10 object-contain mb-8 md:mb-0"
            />
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-medium leading-[1.3]">
                <span style={{ fontFamily: "Neue Machina, -apple-system, Roboto, Helvetica, sans-serif", fontWeight: 400 }}>
                  ©
                </span>{" "}
                Eclypse 2025
              </div>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
