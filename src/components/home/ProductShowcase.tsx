
import React, { useState } from "react";
import SizeSelector from "./SizeSelector";

type Size = "XS" | "S" | "M" | "L" | "XL";

const ProductShowcase: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  
  const thumbnails = [
    "https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/f353b48dd0d07705ab5ac525aa8d679695d6ef2a?placeholderIfAbsent=true", 
    "https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/cf6270164d47793f41925d2f36382b13c41e8593?placeholderIfAbsent=true", 
    "https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/6115fc0666fa04ee0716c70eb0277c7cb65e80e1?placeholderIfAbsent=true"
  ];
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first");
      return;
    }
    alert(`Added to cart: Silhouette No. 1 – Vermilion, Size: ${selectedSize}`);
  };
  
  const handleBuy = () => {
    if (!selectedSize) {
      alert("Please select a size first");
      return;
    }
    alert(`Proceeding to checkout: Silhouette No. 1 – Vermilion, Size: ${selectedSize}`);
  };
  
  return (
    <section className="bg-[rgba(247,247,247,1)] w-full mt-12 md:mt-[184px] p-4 md:pr-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-5 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/bf0b3dfdddde174e14a32c9b9f4c604f3331dced?placeholderIfAbsent=true"
            alt="Product main image"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <p className="text-black text-sm md:text-[15px] font-medium tracking-[-0.3px] mb-6">
            A tailored composition in motion. Cut from structured wool with
            a sculpted shoulder and softened hem, this piece captures
            presence without force. Worn here in the stillness of a city in
            motion.
          </p>
          
          <div className="grid grid-cols-3 gap-3 md:gap-5 mb-6">
            {thumbnails.map((src, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-full ${activeImage === index ? 'ring-2 ring-black' : ''}`}
              >
                <img
                  src={src}
                  alt={`Product thumbnail ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </button>
            ))}
          </div>
          
          <div className="border-t border-[rgba(217,217,217,1)] pt-6 mb-6" />
          
          <div className="flex items-end gap-3 mb-6">
            <div className="text-[rgba(17,17,17,1)] text-2xl md:text-4xl font-medium tracking-[-0.5px] md:tracking-[-0.72px]">
              ₹ 7,999
            </div>
            <div className="text-[rgba(118,118,118,1)] text-sm md:text-[15px] font-normal tracking-[-0.3px]">
              MRP incl. of all taxes
            </div>
          </div>
          
          <SizeSelector onSizeSelect={setSelectedSize} />
          
          <div className="border-t border-[rgba(217,217,217,1)] pt-6 mt-6" />
          
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="w-full md:w-auto px-8 py-4 text-[rgba(13,13,13,1)] font-medium text-lg md:text-[19px] tracking-[-0.39px] rounded-[9px] border-2 border-[rgba(195,195,195,1)] hover:bg-gray-100 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuy}
              className="w-full md:flex-1 bg-black text-white font-medium text-lg md:text-[19px] tracking-[-0.39px] px-8 py-4 rounded-[9px] hover:bg-gray-800 transition-colors"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
