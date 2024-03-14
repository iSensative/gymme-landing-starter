import React from 'react';
import { nav } from '../data';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



const NavMobile = () => {


  const navMobile = useSelector(state=>state.navMobile)
  const dispatch =useDispatch()
  console.log(navMobile)

  return(
    <nav className={`${ navMobile ==='false'
    ?'min-h-screen'
    :' hidden'}
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
      <Link to='/login'><button     className='btn btn-lg text-white'>Log In</button></Link>
      <Link to='/register'><button  className='btn btn-lg btn-primary'>Sign Up</button></Link>
      </div>
    </nav>
  )
};

export default NavMobile;
