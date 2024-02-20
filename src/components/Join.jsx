import React from 'react';
import { join } from '../data';



const Join = () => {


  const {image,title,subtitle,btnText} = join

  return(
    <section className='bg-neutral-500 min-h-[537px] '>
      <div className="container mx-auto">
        {/* Img y text wrapper */}
        <div className='flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0'>
          {/* Image */}
          <div
          className='-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full border border-black/40'
          // El -mt-[80px] Es el que provoca el efecto de la imagen fuera del contenedor
          data-aos='fade-left'
          data-aos-offset='100'
          data-aos-delay='200'
          >
            <img src={image} alt="" />
          </div>
          {/* Text */}
          <div
          className='max-w-[350px] z-10 lg:max-w-[492px] ml-[30px]'
          data-aos='fade-right'
          data-aos-offset='100'
          data-aos-delay='200'
          >
              <h2 className='h1 text-red-600 md:text-[60px] md:leading-[62px] mb-4 lg:mb-6'>{title}</h2>
              <p className='text-body-sm text-white font-bold md:text-body-md mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px]'>{subtitle}</p>
              <button className='btn btn-secondary btn-lg'>{btnText}</button>
            </div>
        </div>
      </div>
    </section>
  )
};

export default Join;
