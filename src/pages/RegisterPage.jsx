import React from 'react'
import logonieva from '../assets/emiassets/logonieva.png'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <section className='bg-neutral-500 h-screen pt-[100px] w-full'>
      <div className=" h-full w-full">
        <div className='flex w-full h-full'>
          {/* Image */}
          <div className=' hidden lg:block lg:bg-[url("https://scontent.fjuj3-1.fna.fbcdn.net/v/t39.30808-6/251525972_2136025259887944_6062043460392916213_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHtyR80A0I-lsBbY08K5GdgRh6IYc2qQyhGHohhzapDKL7IEHFV34YBpDMSiJE1nEg14wZ9tawjWn2ZkpO-7NIz&_nc_ohc=GD6AxSzJWzoAX-aLcfB&_nc_ht=scontent.fjuj3-1.fna&oh=00_AfBsbQSspk_Cs7hkNth6bZJ7GMtvMJXc4_UJhg6xotdlMw&oe=65DC9F91")]  w-4/6 h-full bg-center bg-cover  '>

          </div>
          {/* Login */}
          <container className=' bg-white w-full lg:w-3/6 h-full'>
            <div className="container mx-auto w-full h-full py-[20px]">
              <div className='w-full h-full py-20'>
                {/* Logo */}
                <div className='flex justify-center mb-6'>
                  <img src={logonieva} alt="" className='w-[60px] h-[60px]' />
                </div>
                {/* Title */}
                <div className='flex justify-center mb-6'>
                  <h3 className='text-3xl lg:h3 lg:font-semibold lg:font-secondary'>Registrate en nuestro Club</h3>
                </div>
                {/* Form */}
                <div className='w-3/4 h-full mx-auto'>
                  <form className='flex flex-col '>
                    <input type="text" placeholder='Nombre' className='bg-transparent border-b py-3 my-2  outline-none placeholder:text-gray-500 transition-all font-semibold' />
                    <input type="text" placeholder='Apellido' className='bg-transparent border-b py-3 my-2  outline-none placeholder:text-gray-500 transition-all font-semibold' />
                    <input type="text" placeholder='Email' className='bg-transparent border-b py-3 my-2  outline-none placeholder:text-gray-500 transition-all font-semibold' />
                    <input type="text" placeholder='Contaseña' className='bg-transparent border-b py-3 my-2  outline-none placeholder:text-gray-500 transition-all font-semibold' />
                    {/* Select Deporte */}
                    <div className='flex py-4'>
                      <label htmlFor="deportes" className='font-semibold text-gray-500'>Selecciona un deporte:</label>
                      <select id="deportes" className='ml-2'>
                        <option value="futbol">Fútbol</option>
                        <option value="baloncesto">Baloncesto</option>
                        <option value="tenis">Tenis</option>
                        <option value="natacion">Natación</option>
                      </select>
                    </div>
                    {/* Button */}
                    <div className='flex flex-col w-3/5 mx-auto py-4'>
                      <button className='btn btn-secondary btn-sm lg:btn-lg bg-blue-500 text-white  mb-4'>Registrar</button>
                      {/* <button className='btn btn-secondary btn-sm lg:btn-lg bg-blue-500 text-white '>Ingresar con Google</button> */}
                    </div>
                  </form>
                  {/* Ya tienes cuenta? */}
                  <div className='flex items-center justify-center'>
                        <span className='mr-2'>Ya tienes cuenta?</span> <Link to='/login'>Click Aqui</Link>
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