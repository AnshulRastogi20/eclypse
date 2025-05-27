
import React from "react";
import HoverCard from "@/components/ui/HoverCard";

const Gallery: React.FC = () => {
  return (
    <section className="mt-[149px] max-md:mt-10">
      <div className="self-center w-full max-w-[1338px] mx-auto max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[68%] max-md:w-full max-md:ml-0">
            <HoverCard
              hoverText="Elegant movement in the city"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/d6e2b9ef8424768b2c6841d74b0e313a461bb52f?placeholderIfAbsent=true"
              alt="Fashion showcase 1"
              className="aspect-[1.81] w-full max-md:max-w-full max-md:mt-[31px]"
            />
          </div>
          <div className="w-[32%] ml-5 max-md:w-full max-md:ml-0">
            <HoverCard
              hoverText="Premium fabric details"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/60eed3d1ff0c803034cbb453e6c2dd64fff64529?placeholderIfAbsent=true"
              alt="Fashion showcase 2"
              className="aspect-[0.87] w-full max-md:max-w-full max-md:mt-[31px]"
            />
          </div>
        </div>
      </div>
      
      <div className="self-center w-full max-w-[1338px] mx-auto mt-7 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <HoverCard
              hoverText="Structured elegance"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/34715fa721e03afa0853b1dcd495a929ab21788a?placeholderIfAbsent=true"
              alt="Fashion showcase 3"
              className="aspect-[1.07] w-full max-md:max-w-full max-md:mt-[33px]"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <HoverCard
              hoverText="Hand-cut and assembled in small batches"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/fb3b3d92857d6fc80045dd722afe9425c1ac3295?placeholderIfAbsent=true"
              alt="Fashion showcase 4"
              className="aspect-[1.07] w-full max-md:max-w-full max-md:mt-[33px]"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <HoverCard
              hoverText="Quiet luxury redefined"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/f204dcdd7006297340f66be40e41000b37a10715?placeholderIfAbsent=true"
              alt="Fashion showcase 5"
              className="aspect-[1.07] w-full max-md:max-w-full max-md:mt-[33px]"
            />
          </div>
        </div>
      </div>
      
      <div className="text-center max-w-[1338px] mx-auto">
        <h2 className="text-white text-5xl font-normal tracking-[-0.96px] mt-[184px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
          Silhouette No. 1 – Vermilion
        </h2>
      </div>
    </section>
  );
};

export default Gallery;
