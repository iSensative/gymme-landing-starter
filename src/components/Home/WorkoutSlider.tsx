"use client";

import React from "react";
import { workouts } from "../../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../app/assets/workoutslider.css";
import Image from "next/image";
import { Navigation } from "swiper/modules";

export default function WorkoutSlider() {
  const { programs } = workouts;

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="workoutSlider"
    >
      {programs.map((program, index) => {
        return (
          <SwiperSlide
            key={index}
            className="relative max-h-[320px] max-w-[320px]"
          >
            <Image
              src={program.image}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute bottom-[20px] left-[20px] flex h-[26px] items-center rounded-[1px] bg-white px-[14px]">
              <div className="font-primary text-sm font-semibold text-neutral-500">
                {program.name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
