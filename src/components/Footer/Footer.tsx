"use client";
import MapaFooter from "./MapaFooter";
import logonieva from "../../app/assets/img/logonieva.png";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="overflow-hidden h-[470px] w-full bg-black/90">
      {/* Parte Superior */}
      <div className=" flex items-center  justify-center lg:justify-between w-full h-[150px]  gap-x-6 lg:px-32">
        {/* Logo */}
        <div className="lg:overflow-hidden">
          <Image
            src={logonieva}
            alt=""
            className=" h-[50px] w-[70px] lg:h-[70px] "
          />
        </div>
        {/* Social Media */}
        <div className="text-black">
          <nav className="lg:ml-40 ">
            <ul className="flex gap-x-4 lg:gap-x-12  ml-6 lg:ml-20">
              <li>
                <FaFacebookSquare className="w-[40px] h-[40px] cursor-pointer text-white" />
              </li>
              <li>
                <GrInstagram className="w-[40px] h-[40px] cursor-pointer text-white" />
              </li>
              <li>
                <FaTwitterSquare className="w-[40px] h-[40px] cursor-pointer text-white" />
              </li>
            </ul>
          </nav>
        </div>
        {/* NavFooter*/}
        <div>
          <nav>
            <ul className=" hidden lg:flex lg:text-lg lg:font-bold lg:gap-x-3">
              <li className="font-primary text-white">About</li>
              <li className="font-primary text-white">Nosotros</li>
              <li className="font-primary text-white">Tienda</li>
              <li className="font-primary text-white">Deportes</li>
              <li className="font-primary text-white">Contacto</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mapa */}
      <section className="border border-white">
        <MapaFooter />
      </section>

      {/* Parte Inferior */}
      <section className="w-full h-full">
        <div className="w-full h-[100px] flex items-center justify-center gap-x-3">
          <h3 className="font-bold text-[23px] text-white">Suscribete</h3>
          <input
            className="w-[250px] rounded-[7px] border border-red-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal  outline outline-0 transition-all  placeholder-shown:border-t-blue-gray-200"
            placeholder=" "
          />
          <button className="p-3 border border-black rounded-lg bg-white text-primary font-bold px-8">
            Mandar
          </button>
        </div>
      </section>
    </section>
  );
};

export default Footer;
