
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import Gallery from "@/components/home/Gallery";
import ProductShowcase from "@/components/home/ProductShowcase";
import ProductDetails from "@/components/home/ProductDetails";
import Testimonials from "@/components/home/Testimonials";

const Index: React.FC = () => {
  return (
    <main className="bg-[rgba(7,7,7,1)] overflow-hidden">
      <Navbar />
      
      <div className="flex w-full flex-col mt-[150px] pl-[23px] pr-[46px] max-md:max-w-full max-md:mt-[120px] max-md:px-4">
        <Hero />
        <Philosophy />
        <Gallery />
      </div>
      
      <ProductShowcase />
      <ProductDetails />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
