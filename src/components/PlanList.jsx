import React, { useState } from "react";

import { BsCheckCircleFill } from "react-icons/bs";

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4 gap-x-4 overflow-hidden">
      {/* Mapeo Plans */}
      {plans.map((plan, currentIndex) => {
        const { name, price, list, delay } = plan;
        return (
          <div
            onClick={() => setIndex(currentIndex)}
            className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm lg:min-h-[600px] lg:max-h-[550px] h-[550px]"
            key={currentIndex}
          >
            <div
              className={`${
                currentIndex === index
                  ? "bg-neutral-500 text-white"
                  : "bg-neutral-400/10 text-neutral-500"
              } flex items-center justify-center py-[40px] px-[30px] lg:min-h-[550px] h-[550px] transition duration-100 min-w-[270px]`}
            >
              <div className="flex flex-col lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 items-center">
                {/* Name y price wrapper */}
                <div>
                  {/* Name */}
                  <div
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500"
                        : "bg-neutral-500 text-white"
                    }     h-[26px] font-primary text-sm font-semibold min-w-min mx-auto px-[14px] flex items-center justify-center mb-8`}
                  >
                    {plan.name}
                  </div>
                  {/* Price */}
                  <div className=" text-[40px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center">
                    <div className="leading-none">
                      <span>{plan.price}</span>
                      <span className="text-sm font-medium">$</span>
                    </div>
                    <span className="text-sm font-medium">/Mes</span>
                  </div>
                </div>
                {/* List y btn wrapper */}
                <div>
                  {/* List */}
                  <ul className="flex flex-col gap-y-4 mb-8 items-start">
                    {list.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="text-lg flex items-center gap-x-3"
                        >
                          <BsCheckCircleFill className="mt-1" />
                          <span>{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                  {/* Btn */}
                  <button
                    className={`${
                      currentIndex === index
                        ? "bg-white text-neutral-500 "
                        : "border border-neutral-500"
                    }     btn btn-lg rounded-sm lg:mx-auto`}
                  >
                    Unete a Nosotros
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
