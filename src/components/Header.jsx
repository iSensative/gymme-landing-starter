import React, { useState, useEffect } from "react";
import { header } from "../data";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import logonieva from '../assets/emiassets/logonieva.png'

const Header = () => {
  const { logo, btnLoginText, btnSignupText } = header;

  const [isActive, setIsActive] = useState(false);

    // Nav mobile state
    const [navMobile, setNavMobile] = useState(false)

    // Scroll event

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
      })
    })


  return (
    <header
      className={`${isActive
      ? 'bg-neutral-500 py-[30px]': 'bg-transparent py-[20px]'}
      fixed max-w-[1440px] z-30 left-0 right-0 flex items-center justify-between mx-auto px-[20px] lg:px-[80px] transition-all duration-300`}
      >
      {/* Logo */}
      <a href="/">
        <img src={logonieva} alt="" className="h-[50px] w-[50px]" />
      </a>
      {/* NAV INITIALLY HIDDEN ON DESKTOP */}
      <Nav />
      {/* Btns - initially hidden show on desktop */}
      <div className="hidden lg:flex space-x-4">
        <button className="btn btn-sm text-white hover:text-primary-200 transition">{btnLoginText}</button>
        <button className="btn btn-sm btn-primary">{btnSignupText}</button>
      </div>
      {/* Nav menu btn - hidden on desktop */}
      <div className="lg:hidden absolute right-4" onClick={()=>setNavMobile(!navMobile)}>
        {
          navMobile
          ? <RiCloseFill className="text-primary-200 text-3xl cursor-pointer" />
          : <RiMenu4Fill className="text-primary-200 text-3xl cursor-pointer" />
        }
      </div>
      {/* Nav mobile hide on desktop */}
      <NavMobile navMobile={navMobile}/>
    </header>
  );
};

export default Header;
