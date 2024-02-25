import React from 'react'
import { Link } from 'react-router-dom'
import logonieva from '../assets/emiassets/logonieva.png'

export const LoginPage = () => {
    return (
        <section className='bg-neutral-500 h-screen pt-[100px] w-full'>
            <div className=" h-full w-full">
                <div className='flex w-full h-full'>
                    {/* Image */}
                    <div className=' hidden lg:block lg:bg-[url("https://images.pexels.com/photos/15129800/pexels-photo-15129800/free-photo-of-deporte-otono-caer-actividad.jpeg")]  w-4/6 h-full bg-center bg-cover  '>

                    </div>
                    {/* Login */}
                    <container className=' bg-white w-full lg:w-3/6 h-full'>
                        <div className="container mx-auto w-full h-full py-[40px]">
                            <div className='w-full h-full py-20'>
                                {/* Logo */}
                                <div className='flex justify-center mb-6'>
                                    <img src={logonieva} alt="" className='w-[60px] h-[60px]' />
                                </div>
                                {/* Title */}
                                <div className='flex justify-center mb-6'>
                                    <h3 className='text-3xl lg:h3 lg:font-semibold lg:font-secondary'>Ingresar a mi cuenta</h3>
                                </div>
                                {/* Form */}
                                <div className='w-3/4 h-full mx-auto'>
                                    <form className='flex flex-col '>
                                        <input type="text" placeholder='Email' className='bg-transparent border-b py-3 my-2  outline-none placeholder:text-gray-500 transition-all font-semibold' />
                                        <input type="text" placeholder='Contaseña' className='bg-transparent border-b py-3 my-2  outline-none placeholder:text-gray-500 transition-all font-semibold' />
                                        {/* Button */}
                                        <div className='flex flex-col w-3/4 mx-auto py-5'>
                                            <button className='btn btn-secondary btn-sm lg:btn-lg bg-blue-500 text-white  mb-4'>Ingresar</button>
                                            <button className='btn btn-secondary btn-sm lg:btn-lg bg-blue-500 text-white '>Ingresar con Google</button>
                                        </div>
                                    </form>
                                    {/* No recuerdas? */}
                                    <div className='py-5'>
                                        <span className='font-primary font-semibold pl-2'>No recuerdas tu contraseña? <Link className='text-red-500 font-primary font-semibold'>Click Aqui!</Link></span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </container>
                </div>
            </div>
        </section>
    )
}