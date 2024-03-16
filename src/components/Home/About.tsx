import React from "react";
import { about } from "../../../data";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Image from "next/image";

export default function About() {
  const { title, subtitle1, subtitle2, icon, link } = about;

  return (
    <section className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px] border-b-2 border-b-gray-300">
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        {/* section title */}
        <div
          className="section-title-group justify-start space-x-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image src={icon} alt="" className="w-[150px] h-[150px] " />
          <h2 className="h2 section-title z-10">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        {/* Subtitle */}
        <p
          className="md:text-body-md mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle1}
        </p>
        {/* Subtitle2 */}
        <p
          className="md-text-body-md mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {subtitle2}
        </p>
        <div
          className="link flex items-center gap-x-2 hover:gap-x-4 transition-all duration-800"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a href="">{link}</a>
          <IoIosArrowDroprightCircle className="text-xl" />
        </div>
      </div>
    </section>
  );
}
