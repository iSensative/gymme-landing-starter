import React from 'react'
import { Link } from 'react-router-dom'

export const VoleyPage = () => {
  return (
    <section className='bg-neutral-500 h-screen pt-[100px] w-full'>
      <div className=" h-full w-full">
        <div className='flex w-full h-full'>
          {/* Image */}
          <div className=' hidden lg:block lg:bg-[url("https://scontent.fjuj3-1.fna.fbcdn.net/v/t39.30808-6/251525972_2136025259887944_6062043460392916213_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHtyR80A0I-lsBbY08K5GdgRh6IYc2qQyhGHohhzapDKL7IEHFV34YBpDMSiJE1nEg14wZ9tawjWn2ZkpO-7NIz&_nc_ohc=GD6AxSzJWzoAX-aLcfB&_nc_ht=scontent.fjuj3-1.fna&oh=00_AfBsbQSspk_Cs7hkNth6bZJ7GMtvMJXc4_UJhg6xotdlMw&oe=65DC9F91")]  w-4/6 h-full bg-center bg-cover  '>

          </div>
          {/* Login */}
          <container className=' bg-white w-full lg:w-3/6 h-full'>
            <div className="container mx-auto  w-[450px] h-full">
              <div className='flex flex-col w-full h-full lg:justify-center mt-[50px] items-start '>
                {/* Texts */}
                <div className='mx-auto'>
                  <h3 className='h3 font-primary font-semibold mb-4'>Crear una cuenta</h3>
                  <span className='lg:mx-2  font-semibold text-gray-500 font-primary'>Lets get started with your 30 day free trial.</span>
                </div>
                {/* Form */}
                <div className=' w-full flex flex-col mt-10 '>
                  <form className='w-full h-full font-semibold mx-auto '>
                    <input type="text" placeholder='Name' className='w-full bg-transparent border-b py-3 my-2  outline-none placeholder:text-gray-500 transition-all' />
                    <input type="text" placeholder='Email' className='w-full bg-transparent border-b py-3 my-8  outline-none placeholder:text-gray-500 transition-all' />
                    <input type="password" placeholder='Password' className='w-full bg-transparent border-b py-3 my-2  outline-none placeholder:text-gray-500 transition-all' />
                    <div className='flex flex-col mt-6   '>
                      <button className='btn btn-secondary  lg:mr-0 w-[300px] lg:w-full mx-auto btn-sm lg:btn-lg bg-blue-500 text-white '>Create account</button>
                      <button className='btn btn-secondary  lg:mr-0 w-[300px] lg:w-full lg mx-auto btn-sm lg:btn-lg bg-blue-500 text-white mt-4'>Sign up with Google</button>
                    </div>
                  </form>
                </div>
                  {/* Already account? */}
                  <div className='mx-auto mt-6'>
                  <span className='font-secondary font-bold'>Already have an account? <Link className='text-red-500 font-bold font-primary' to={'/login'}>Log In</Link></span>
                  </div>
              </div>
            </div>
          </container>
        </div>
      </div>
    </section>
  )
}
