import React from "react";
import { faq } from "../../../data";
import Accordion from "./Accordion";
import Image from "next/image";

export default function Faq() {
  const { icon, title, accordions } = faq;

  return (
    <section className="section mb-[80px] pt-[200px] lg:mb-0  lg:pt-[30px]">
      <div className="lg:bg-faq bg-custom mx-auto max-w-[768px] bg-center  bg-no-repeat lg:h-[800px]">
        {/* Section Title */}
        <div className="section-title-group mx-auto justify-start space-x-1 px-4  lg:justify-center lg:space-x-1 lg:px-0">
          <Image className="lg:hidden" src={icon} alt="" />
          <h2 className="h2 section-title lg:mt-[100px]">{title}</h2>
        </div>
        {/* Accordion list */}
        <div
          className="flex flex-col gap-y-4 px-4"
          // data-aos="fade-up"
          // data-aos-offset="300"
          // datao-aos-delay="200"
        >
          {accordions.map((accordion, index) => {
            return <Accordion accordion={accordion} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
