"use client";
import React, { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

interface AccordionData {
  question: string;
  answer: string;
}

interface AccordionProps {
  accordion: AccordionData;
}

export default function Accordion({ accordion }: AccordionProps) {
  const { question, answer } = accordion;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cursor-pointer rounded-lg border bg-white">
      <div
        className="flex min-h-[60px] items-center justify-between px-[30px]"
        onClick={handleToggle}
      >
        <h6 className="h6">{question}</h6>
        <div>
          {isOpen ? (
            <FaChevronCircleUp className="text-[20px] text-neutral-500" />
          ) : (
            <FaChevronCircleDown className="text-[20px]  text-neutral-500" />
          )}
        </div>
      </div>
      <div
        className={`${
          isOpen ? "min-h-[200px] lg:min-h-[160px]" : "min-h-0 "
        } flex max-h-0 justify-center overflow-hidden px-[30px] transition-all`}
      >
        <div className="mt-30">{answer}</div>
      </div>
    </div>
  );
}
