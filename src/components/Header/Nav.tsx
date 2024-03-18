"use client";

import React from "react";
import { nav } from "../../../data";
import { useDispatch } from "react-redux";
import { changeNavMobileFalse } from "@/redux/slices/sliceNavMobile";
import Link from "next/link";

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <nav className="hidden lg:flex">
      <ul className="ml-[200px] flex items-center gap-x-6 text-white">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="hover:text-primary-200"
                href={item.href}
                onClick={() => dispatch(changeNavMobileFalse())}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
