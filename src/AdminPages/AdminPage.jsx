import { Menu, Space } from 'antd'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import logonieva from '../assets/emiassets/logonieva.png'
import { RiCloseCircleFill, RiCloseLine, RiDashboardLine, RiMenu4Fill } from 'react-icons/ri';

export const AdminPage = () => {

  const navigate = useNavigate();
  const [sideMenu, setSideMenu] = useState(false)


  const handleButtonBack = () => {
    setSideMenu(!sideMenu)
  }

  return (
    <section className='bg-neutral-500 h-screen pt-[90px] w-full'>
      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-5 ">

        { /* SideMenu */}
        <div className={`fixed z-50 w-[80%] lg:static top-25 col-span-1 border-r-2 border-white h-[800px] lg:h-full lg:w-full bg-slate-600 transition-all ${sideMenu ? '-left-0' : '-left-full'}`}>

          {/* TITLE */}
          <div className='text-center mb-12'>
            <h2 className='uppercase text-white text-1xl font-bold tracking-[4px] pt-10'>Nieva Admin Panel</h2>
          </div>

          {/* Menu */}
          <nav className='px-1'>
            <ul>
              <li className='hover:bg-purple-500 rounded-lg'>
                <a href='/' className='flex items-center font-bold p-5 gap-x-2 text-gray-300 font-primary'>
                  <RiDashboardLine className=' mb-[1px]' />
                  DashBoard
                </a>
              </li>
              <li className='hover:bg-purple-500 rounded-lg'>
                <a href='/' className='flex items-center font-bold p-5 gap-x-2 text-gray-300 font-primary'>
                  <RiDashboardLine className=' mb-[1px]' />
                  DashBoard
                </a>
              </li>
              <li className='hover:bg-purple-500 rounded-lg'>
                <a href='/' className='flex items-center font-bold p-5 gap-x-2 text-gray-300 font-primary'>
                  <RiDashboardLine className=' mb-[1px]' />
                  DashBoard
                </a>
              </li>
              <li className='hover:bg-purple-500 rounded-lg'>
                <a href='/' className='flex items-center font-bold p-5 gap-x-2 text-gray-300 font-primary'>
                  <RiDashboardLine className=' mb-[1px]' />
                  DashBoard
                </a>
              </li>
            </ul>
          </nav>

        </div>
        {/* Button Back Movil */}
        <button
          onClick={handleButtonBack}
          className=' lg:hidden absolute text-black bottom-6 right-4 p-2 bg-purple-500 rounded-full'
        >
          {
            sideMenu
              ? <RiMenu4Fill className='text-3xl ' />
              : <RiCloseLine className='text-3xl ' />
          }
        </button>
        {/* ContentAdmin */}
        <div className='bg-white lg:col-span-4 '>
          <h1 className='text-black'>Hola</h1>
        </div>
      </div>
    </section>
  )
}