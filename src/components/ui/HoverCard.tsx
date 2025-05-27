
import React, { useState } from "react";

interface HoverCardProps {
  children?: React.ReactNode;
  hoverText: string;
  className?: string;
  isVideo?: boolean;
  videoSrc?: string;
  imageSrc?: string;
  alt?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ 
  children, 
  hoverText, 
  className = "",
  isVideo = false,
  videoSrc,
  imageSrc,
  alt = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main content */}
      <div className={`transition-all duration-300 ${isHovered ? 'blur-sm scale-105' : ''}`}>
        {isVideo && videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
        ) : (
          children
        )}
      </div>

      {/* Hover overlay */}
      <div 
        className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-white text-xl md:text-2xl font-medium text-center px-6">
          {hoverText}
        </p>
      </div>
    </div>
  );
};

export default HoverCard;
