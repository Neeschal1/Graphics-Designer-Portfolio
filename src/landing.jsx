import React from 'react'
import './landing.css'
import Fonts from './utils/fonts'
import Hero from './ui/hero'
import Services from './ui/services'
import Experience from './ui/experience'

const Landing = () => {
  return (
    <div className='flex flex-1 flex-col bg-[#F2F1FF]'>
      <Hero />
      <Services />
      <Experience />
    </div>
  )
}

export default Landing