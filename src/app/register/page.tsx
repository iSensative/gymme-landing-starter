"use client";
import React from "react";
import logonieva from "../assets/img/logonieva.png";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="h-screen w-full bg-neutral-500 pt-[100px]">
      <div className=" h-full w-full">
        <div className="flex h-full w-full">
          {/* Image */}
          <div className=" lg:bg-hockey hidden h-full  w-4/6 bg-cover bg-center lg:block  "></div>
          {/* Login */}
          <section className=" h-full w-full bg-white lg:w-3/6">
            <div className="container mx-auto h-full w-full py-[20px]">
              <div className="h-full w-full py-20">
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                  <Image src={logonieva} alt="" className="h-[60px] w-[60px]" />
                </div>
                {/* Title */}
                <div className="mb-6 flex justify-center">
                  <h3 className="lg:h3 lg:font-secondary text-3xl lg:font-semibold">
                    Registrate en nuestro Club
                  </h3>
                </div>
                {/* Form */}
                <div className="mx-auto h-full w-3/4">
                  <form className="flex flex-col ">
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="my-2 border-b bg-transparent py-3  font-semibold outline-none transition-all placeholder:text-gray-500"
                    />
                    <input
                      type="text"
                      placeholder="Apellido"
                      className="my-2 border-b bg-transparent py-3  font-semibold outline-none transition-all placeholder:text-gray-500"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="my-2 border-b bg-transparent py-3  font-semibold outline-none transition-all placeholder:text-gray-500"
                    />
                    <input
                      type="text"
                      placeholder="Contaseña"
                      className="my-2 border-b bg-transparent py-3  font-semibold outline-none transition-all placeholder:text-gray-500"
                    />
                    {/* Select Deporte */}
                    <div className="flex py-4">
                      <label
                        htmlFor="deportes"
                        className="font-semibold text-gray-500"
                      >
                        Selecciona un deporte:
                      </label>
                      <select id="deportes" className="ml-2">
                        <option value="futbol">Fútbol</option>
                        <option value="baloncesto">Baloncesto</option>
                        <option value="tenis">Tenis</option>
                        <option value="natacion">Natación</option>
                      </select>
                    </div>
                    {/* Button */}
                    <div className="mx-auto flex w-3/5 flex-col py-4">
                      <button className="btn btn-secondary btn-sm lg:btn-lg mb-4 bg-blue-500  text-white">
                        Registrar
                      </button>
                      {/* <button className='btn btn-secondary btn-sm lg:btn-lg bg-blue-500 text-white '>Ingresar con Google</button> */}
                    </div>
                  </form>
                  {/* Ya tienes cuenta? */}
                  <div className="flex items-center justify-center">
                    <span className="mr-2">Ya tienes cuenta?</span>{" "}
                    <Link href="/login">Click Aqui</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
