import React, { useState, useEffect } from "react";
import { header } from "../data";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import logonieva from '../assets/emiassets/logonieva.png'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeNavMobileTrue } from "../redux/slice";


const Header = () => {
  const { logo, btnLoginText, btnSignupText } = header;

  const [isActive, setIsActive] = useState(false);


    // Scroll event

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
      })
    })


      const navMobile = useSelector(state=>state.navMobile)
      const dispatch =useDispatch()
      console.log(navMobile)

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
        <Link to='/register'><button className="btn btn-sm text-white hover:text-primary-200 transition">{btnLoginText}</button></Link>
        <Link to='/login'><button className="btn btn-sm btn-primary">{btnSignupText}</button></Link>
      </div>
      {/* Nav menu btn - hidden on desktop */}
      <div className="lg:hidden absolute right-4" onClick={()=>dispatch(changeNavMobileTrue())}>
        {
          navMobile === 'false'
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
