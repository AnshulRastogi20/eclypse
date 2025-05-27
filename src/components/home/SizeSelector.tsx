
import React, { useState } from "react";

type Size = "XS" | "S" | "M" | "L" | "XL";

interface SizeSelectorProps {
  onSizeSelect: (size: Size) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ onSizeSelect }) => {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  
  const handleSizeClick = (size: Size) => {
    setSelectedSize(size);
    onSizeSelect(size);
  };
  
  const sizes: Size[] = ["XS", "S", "M", "L", "XL"];
  
  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6 text-[rgba(118,118,118,1)] font-medium mb-6">
        <div className="text-lg md:text-xl tracking-[-0.4px]">
          Please select a size
        </div>
        <button 
          className="text-sm md:text-[15px] tracking-[-0.3px] underline hover:text-black transition-colors text-left md:text-right"
          onClick={() => window.open('/size-chart', '_blank')}
        >
          Size chart
        </button>
      </div>
      
      <div className="grid grid-cols-5 gap-2 md:gap-5 max-w-full">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`w-full h-12 md:h-[49px] text-sm md:text-[15px] font-medium tracking-[-0.3px] rounded transition-colors ${
              selectedSize === size 
                ? "bg-black text-white" 
                : "bg-[rgba(217,217,217,1)] text-[rgba(118,118,118,1)] hover:bg-gray-300"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
