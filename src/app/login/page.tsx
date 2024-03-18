"use client";

import React from "react";
import logonieva from "../assets/img/logonieva.png";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="h-screen w-full bg-neutral-500 pt-[100px]">
      <div className=" h-full w-full">
        <div className="flex h-full w-full">
          {/* Image */}
          <div className=" hidden h-full w-4/6  bg-cover bg-center lg:block   "></div>
          {/* Login */}
          <section className=" h-full w-full bg-white lg:w-3/6">
            <div className="container mx-auto h-full w-full py-[40px]">
              <div className="h-full w-full py-20">
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                  <Image src={logonieva} alt="" className="h-[60px] w-[60px]" />
                </div>
                {/* Title */}
                <div className="mb-6 flex justify-center">
                  <h3 className="lg:h3 lg:font-secondary text-3xl lg:font-semibold">
                    Ingresar a mi cuenta
                  </h3>
                </div>
                {/* Form */}
                <div className="mx-auto h-full w-3/4">
                  <form className="flex flex-col ">
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
                    {/* Button */}
                    <div className="mx-auto flex w-3/4 flex-col py-5">
                      <button className="btn btn-secondary btn-sm lg:btn-lg mb-4 bg-blue-500  text-white">
                        Ingresar
                      </button>
                      <button className="btn btn-secondary btn-sm lg:btn-lg bg-blue-500 text-white ">
                        Ingresar con Google
                      </button>
                    </div>
                  </form>
                  {/* No recuerdas? */}
                  <div className="py-5">
                    <span className="font-primary pl-2 font-semibold">
                      No recuerdas tu contraseña?{" "}
                      <Link
                        href="/"
                        className="font-primary font-semibold text-red-500"
                      >
                        Click Aqui!
                      </Link>
                    </span>
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
