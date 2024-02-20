import React from 'react';
import { faq } from '../data';
import Accordion from '../components/Accordion'



const Faq = () => {

  const {icon,title,accordions} = faq

  return(
    <section className='section pt-[400px] lg:pt-[200px] mb-[80px]'>
      <div className='max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom  bg-center lg:h-[1160px]'>
        {/* Section Title */}
        <div className='section-title-group justify-start lg:justify-center space-x-1 lg:space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0'>
          <img className='lg:hidden' src={icon} alt="" />
          <h2 className='h2 section-title lg:mt-[100px]'>{title} <span className='text-primary-200'>.</span></h2>
        </div>
        {/* Accordion list */}
        <div
        className='flex flex-col gap-y-4 px-4'
        data-aos='fade-up'
        data-aos-offset='300'
        datao-aos-delay='200'
        >
          {
            accordions.map((accordion,index)=>{
              return <Accordion accordion={accordion} key={index}/>
            })
          }
        </div>
      </div>
    </section>
  )
};

export default Faq;
