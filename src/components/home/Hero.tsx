
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[400px] md:min-h-[771px] w-full text-[15px] text-white font-medium tracking-[-0.29px] pt-16 md:pt-[127px] pb-8 md:pb-[626px] px-4 md:px-[70px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/76d61da27a30b559524c555864210e9d4035d898?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0 rounded-lg"
      />
      <div className="relative flex items-center gap-2 mb-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/75393cbdf0f9d2ab2896a4948b65e71492b4e416?placeholderIfAbsent=true"
          alt="Year icon"
          className="w-[11px] h-[11px] object-contain"
        />
        <div>2025</div>
      </div>
      <div className="relative text-center mt-auto mb-8 md:hidden">
        <p className="text-white text-sm font-medium">
          A luxurious worth remembering
        </p>
      </div>
    </section>
  );
};

export default Hero;
