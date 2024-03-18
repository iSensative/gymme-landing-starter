import React from "react";
import { join } from "../../../data";
import Image from "next/image";

export default function Join() {
  const { image, title, subtitle, btnText } = join;

  return (
    <section className="min-h-[537px] bg-neutral-500 ">
      <div className="container mx-auto">
        {/* Img y text wrapper */}
        <div className="flex flex-col -space-y-24 md:flex-row md:items-center md:-space-x-12 lg:-space-y-0">
          {/* Image */}
          <div
            className="border-1 -mt-[80px] max-w-[276px] rounded-lg border-black/40 md:max-w-[442px] lg:max-w-full"
            // El -mt-[80px] Es el que provoca el efecto de la imagen fuera del contenedor
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <Image src={image} alt="" className="rounded-lg" />
          </div>
          {/* Text */}
          <div
            className="z-10 ml-[30px] max-w-[350px] lg:max-w-[492px]"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <h2 className="h1 mb-4 text-red-600 md:text-[60px] md:leading-[62px] lg:mb-6">
              {title}
            </h2>
            <p className="text-body-sm md:text-body-md mb-4 max-w-[348px] font-bold text-white md:max-w-[470px] lg:mb-6 lg:max-w-[492px]">
              {subtitle}
            </p>
            <button className="btn btn-secondary btn-lg">{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
