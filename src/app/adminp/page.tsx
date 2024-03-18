"use client";

import React, { useState } from "react";
import logonieva from "../assets/img/logonieva.png";
import {
  RiCloseCircleFill,
  RiCloseLine,
  RiDashboardLine,
  RiMenu4Fill,
} from "react-icons/ri";

export default function AdminPages() {
  const [sideMenu, setSideMenu] = useState(false);

  const handleButtonBack = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <section className="h-screen w-full bg-neutral-500 pt-[90px]">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-5 ">
        {/* SideMenu */}
        <div
          className={`top-25 fixed z-50 col-span-1 h-[800px] w-[80%] border-r-2 border-white bg-slate-600 transition-all lg:static lg:h-full lg:w-full ${sideMenu ? "-left-0" : "-left-full"}`}
        >
          {/* TITLE */}
          <div className="mb-12 text-center">
            <h2 className="text-1xl pt-10 font-bold uppercase tracking-[4px] text-white">
              Nieva Admin Panel
            </h2>
          </div>

          {/* Menu */}
          <nav className="px-1">
            <ul>
              <li className="rounded-lg hover:bg-purple-500">
                <a
                  href="/"
                  className="flex items-center gap-x-2 p-5 font-primary font-bold text-gray-300"
                >
                  <RiDashboardLine className=" mb-[1px]" />
                  DashBoard
                </a>
              </li>
              <li className="rounded-lg hover:bg-purple-500">
                <a
                  href="/"
                  className="flex items-center gap-x-2 p-5 font-primary font-bold text-gray-300"
                >
                  <RiDashboardLine className=" mb-[1px]" />
                  DashBoard
                </a>
              </li>
              <li className="rounded-lg hover:bg-purple-500">
                <a
                  href="/"
                  className="flex items-center gap-x-2 p-5 font-primary font-bold text-gray-300"
                >
                  <RiDashboardLine className=" mb-[1px]" />
                  DashBoard
                </a>
              </li>
              <li className="rounded-lg hover:bg-purple-500">
                <a
                  href="/"
                  className="flex items-center gap-x-2 p-5 font-primary font-bold text-gray-300"
                >
                  <RiDashboardLine className=" mb-[1px]" />
                  DashBoard
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Button Back Movil */}
        <button
          onClick={handleButtonBack}
          className=" absolute bottom-6 right-4 rounded-full bg-purple-500 p-2 text-black lg:hidden"
        >
          {sideMenu ? (
            <RiMenu4Fill className="text-3xl " />
          ) : (
            <RiCloseLine className="text-3xl " />
          )}
        </button>
        {/* ContentAdmin */}
        <div className="bg-white lg:col-span-4 ">
          <h1 className="text-black">Hola</h1>
        </div>
      </div>
    </section>
  );
}
