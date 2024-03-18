"use client";

import React, { useState, useEffect } from "react";
import { header } from "../../../data";
import Nav from "../Header/Nav";
import NavMobile from "../Header/NavMobile";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import logonieva from "../../app/assets/img/logonieva.png";
import { useDispatch, useSelector } from "react-redux";
import {
  changeNavMobileFalse,
  activeNavMobile,
  navMobileState,
} from "../../redux/slices/sliceNavMobile";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { btnLoginText, btnSignupText } = header;

  const [isActive, setIsActive] = useState(false);

  // Scroll event

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  const navMobile = useSelector(
    (state: { navMobile: navMobileState }) => state.navMobile,
  );
  const dispatch = useDispatch();

  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[30px]" : "bg-transparent py-[20px]"
      }
      fixed left-0 right-0 z-30 mx-auto flex max-w-[1440px] items-center justify-between px-[20px] transition-all duration-300 lg:px-[80px]`}
    >
      {/* Logo */}
      <a href="/">
        <Image src={logonieva} alt="" className="h-[50px] w-[50px]" />
      </a>
      {/* NAV INITIALLY HIDDEN ON DESKTOP */}
      <Nav />
      {/* Btns - initially hidden show on desktop */}

      <div className="hidden space-x-4 lg:flex">
        <Link href="/register">
          <button className="btn btn-sm text-white transition hover:text-primary-200">
            {btnLoginText}
          </button>
        </Link>
        <Link href="/login">
          <button className="btn btn-sm btn-primary">{btnSignupText}</button>
        </Link>
      </div>
      
      {/* Nav menu btn - hidden on desktop */}
      <div
        className="absolute right-4 p-10 lg:hidden"
        onClick={() => dispatch(activeNavMobile())}
      >
        {navMobile.navMobile === true ? (
          <RiCloseFill className="cursor-pointer  text-3xl text-primary-200" />
        ) : (
          <RiMenu4Fill className="cursor-pointer text-3xl text-primary-200" />
        )}
      </div>
      {/* Nav mobile hide on desktop */}
      <NavMobile />
    </header>
  );
};

export default Header;
