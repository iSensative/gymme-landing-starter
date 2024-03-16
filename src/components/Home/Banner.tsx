"use client";

import React from "react";
// Import data
import { banner } from "../../../data";
import { motion } from "framer-motion";

export default function Banner() {
  // Destructure data
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;

  return (
    <section className="h-[790px] bg-neutral-500">
      <div className="container mx-auto h-full">
        <div className="relative  flex h-full items-center -space-x-48 lg:-space-x-24">
          {/* Text */}
          <div className="z-10 flex-1 pl-6 text-white lg:pl-0">
            <motion.h1
              className="h1 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {titlePart1} <br />{" "}
              <span className="text-red-600">{titlePart2}</span>
            </motion.h1>
            <p
              className="text-body-md lg:text-body-lg mb-8 max-w-[415px]"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              {subtitle}
            </p>
            <motion.button
              className="btn btn-sm lg:btn-lg btn-secondary"
              //   variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              {textBtn}
            </motion.button>
          </div>
          {/* image */}
          <div
            className=' h-full flex-1 bg-[url("https://images.pexels.com/photos/6497254/pexels-photo-6497254.jpeg")] bg-cover  bg-center'
            // variants={fadeIn("up", 0.3)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.7 }}
          ></div>
        </div>
      </div>
    </section>
  );
}
