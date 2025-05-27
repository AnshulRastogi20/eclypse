
import React from "react";

const Philosophy: React.FC = () => {
  return (
    <section className="mt-12 md:mt-[114px]">
      <h2 className="text-white text-2xl md:text-5xl font-normal tracking-[-0.5px] md:tracking-[-0.96px] max-w-full md:w-[800px] md:ml-[27px] leading-tight">
        Rooted in a philosophy of quiet luxury, our garments are designed to
        speak softly in cut, in movement, in presence.
      </h2>
      <div className="flex flex-col md:ml-[27px] mt-8 md:mt-[81px]">
        <a href="/about" className="text-[rgba(227,227,227,1)] text-lg md:text-2xl font-normal tracking-[-0.3px] md:tracking-[-0.48px] hover:text-white transition-colors">
          Learn more about Eclypse
        </a>
        <div className="border w-full max-w-[301px] h-px mt-2 border-[rgba(227,227,227,1)] border-solid" />
      </div>
    </section>
  );
};

export default Philosophy;
