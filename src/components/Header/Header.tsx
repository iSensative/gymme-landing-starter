"use client";

import React, { useState, useEffect } from "react";
import { header } from "../../../data";
import Nav from "../Header/Nav";
import NavMobile from "../Header/NavMobile";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import logonieva from "../../app/assets/img/logonieva.png";
import { useDispatch, useSelector } from "react-redux";
import { changeNavMobileTrue } from "../../redux/slices/sliceNavMobile";
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

  const navMobile = useSelector((state: { navMobile: boolean }) => state.navMobile);
  const dispatch = useDispatch();

  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[30px]" : "bg-transparent py-[20px]"
      }
      fixed max-w-[1440px] z-30 left-0 right-0 flex items-center justify-between mx-auto px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      {/* Logo */}
      <a href="/">
        <Image src={logonieva} alt="" className="h-[50px] w-[50px]" />
      </a>
      {/* NAV INITIALLY HIDDEN ON DESKTOP */}
      <Nav />
      {/* Btns - initially hidden show on desktop */}
      <div className="hidden lg:flex space-x-4">
        <Link href="/register">
          <button className="btn btn-sm text-white hover:text-primary-200 transition">
            {btnLoginText}
          </button>
        </Link>
        <Link href="/login">
          <button className="btn btn-sm btn-primary">{btnSignupText}</button>
        </Link>
      </div>
      {/* Nav menu btn - hidden on desktop */}
      <div
        className="lg:hidden absolute right-4"
        onClick={() => dispatch(changeNavMobileTrue())}
      >
        {navMobile === false 
        ? (<RiCloseFill className="text-primary-200 text-3xl cursor-pointer" />) 
        : (<RiMenu4Fill className="text-primary-200 text-3xl cursor-pointer" />)}
      </div>
      {/* Nav mobile hide on desktop */}
      <NavMobile />
    </header>
  );
};

export default Header;
