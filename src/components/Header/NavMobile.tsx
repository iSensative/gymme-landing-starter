"use client";

import React from "react";
import { nav } from "../../../data";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { changeNavMobileFalse } from "@/redux/slices/sliceNavMobile";

const NavMobile = () => {
  const navMobile = useSelector((state: any) => state.navMobile);

  const dispatch = useDispatch();
  return (
    <nav
      className={`${navMobile.navMobile === true ? "min-h-screen" : " hidden"}
       -bottom-18 fixed left-0  right-0 top-0 -z-10  h-10 w-full overflow-hidden bg-neutral-500 transition-all lg:hidden `}
    >
      <ul className=" flex h-full w-full flex-col items-center justify-center gap-y-8">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <a className="text-body text-white" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      {/* Buttosn */}
      <div className="-mt-44 flex justify-center gap-x-8">
        <Link href="/login" onClick={() => dispatch(changeNavMobileFalse())}>
          <button className="btn btn-lg text-white">Log In</button>
        </Link>
        <Link href="/register" onClick={() => dispatch(changeNavMobileFalse())}>
          <button className="btn btn-lg btn-primary">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavMobile;
