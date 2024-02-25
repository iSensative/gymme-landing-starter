import React from 'react';
import { nav } from '../data';
import { Link } from 'react-router-dom';



const NavMobile = ({navMobile}) => {
  return(
    <nav className={`${navMobile
    ?'min-h-screen'
    :'min-h-4 hidden'}
    lg:hidden w-full bg-neutral-500  fixed top-0 left-0  right-0 -bottom-18 -z-10 overflow-hidden transition-all h-10 `}>
      <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
        {nav.map((item,index)=>{
          return(
          <li key={index}>
            <a className='text-white text-body' href={item.href}>{item.name}</a>
          </li>
        )})}
      </ul>
      {/* Buttosn */}
      <div className='-mt-44 flex justify-center gap-x-8'>
      <button className='btn btn-lg text-white'>Log In</button>
      <button className='btn btn-lg btn-primary'>Sign Up</button>
      </div>
    </nav>
  )
};

export default NavMobile;
