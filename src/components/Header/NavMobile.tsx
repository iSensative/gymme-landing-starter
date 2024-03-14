"use client";

import React from "react";
import { nav } from "../../../data";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const NavMobile = () => {
  const navMobile = useSelector((state: { navMobile: boolean }) => state.navMobile);
  const dispatch = useDispatch();

  return (
    <nav
      className={`${navMobile === false ? "min-h-screen" : " hidden"}
    lg:hidden w-full bg-neutral-500  fixed top-0 left-0  right-0 -bottom-18 -z-10 overflow-hidden transition-all h-10 `}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <a className="text-white text-body" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      {/* Buttosn */}
      <div className="-mt-44 flex justify-center gap-x-8">
        <Link href="/login">
          <button className="btn btn-lg text-white">Log In</button>
        </Link>
        <Link href="/register">
          <button className="btn btn-lg btn-primary">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavMobile;
