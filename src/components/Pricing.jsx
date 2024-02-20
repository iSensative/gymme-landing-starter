import React from 'react';
import { pricing } from '../data';
import PlanList from './PlanList'



const Pricing = () => {

  const {icon,title,plans} = pricing
  const {img} = plans
  return(
    <section>
      {/* Section title */}
      <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0 mt-[100px] lg:mt-0'>
        <img src={icon} alt="" />
        <h2 className='h2'>{title} <span className='text-primary-200'>.</span></h2>
      </div>

      <div className="container mx-auto  h-[600px] w-full relative">
        <div className=' lg:flex h-full w-full'>
          {/* Image */}
          <div className='hidden lg:flex 1 h-full w-full bg-center bg-cover translate-x-0 lg:translate-x-14'>
            <img src="https://images.pexels.com/photos/6203647/pexels-photo-6203647.jpeg" alt="" className='h-[550px] w-full' />
          </div>
          {/* Price */}
          <div className=' z-10  h-full lg:-translate-x-12' style={{ flexShrink: 2 }}>
            <PlanList plans={plans}/>
          </div>
        </div> 
      </div>
    </section>
  )
};

export default Pricing;
