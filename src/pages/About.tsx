
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About: React.FC = () => {
  return (
    <div className="bg-[rgba(7,7,7,1)] min-h-screen">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-white text-5xl md:text-6xl font-normal tracking-[-0.96px] mb-8">
            About Eclypse
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Rooted in a philosophy of quiet luxury, we create garments that speak softly yet leave lasting impressions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-white text-3xl font-normal tracking-[-0.6px]">
              Our Philosophy
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Eclypse, we believe in the power of understated elegance. Our designs are crafted for those who understand that true luxury doesn't need to shout—it whispers with confidence.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Each piece is thoughtfully designed to move with you, creating a presence that is both modern and timeless.
            </p>
          </div>
          <div className="aspect-square bg-gray-800 rounded-lg"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="aspect-square bg-gray-800 rounded-lg md:order-1"></div>
          <div className="space-y-6 md:order-2">
            <h2 className="text-white text-3xl font-normal tracking-[-0.6px]">
              Craftsmanship
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every garment is meticulously crafted using premium materials sourced from ethical suppliers. Our attention to detail ensures each piece meets our exacting standards.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hand-cut and assembled in small batches, we maintain the highest quality while preserving the artisanal touch that makes each piece unique.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-white text-3xl font-normal tracking-[-0.6px] mb-8">
            Contact Us
          </h2>
          <div className="space-y-4">
            <p className="text-gray-300 text-lg">
              <a href="mailto:eclypse@gmail.com" className="hover:text-white transition-colors">
                eclypse@gmail.com
              </a>
            </p>
            <p className="text-gray-300 text-lg">
              <a href="tel:+911234567890" className="hover:text-white transition-colors">
                +91 123-456-7890
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
