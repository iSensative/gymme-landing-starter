import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Workouts from '../components/Workouts'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import Join from '../components/Join'

export const Home = () => {
  return (
    <>
        <Banner/>
        <About/>
        <Workouts/>
        <Pricing/>
        <Faq/>
        <Join/>
    </>
  )
}
