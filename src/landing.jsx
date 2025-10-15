import React from 'react'
import './landing.css'
import Fonts from './utils/fonts'
import Hero from './components/hero'
import Footer from './constants/footer'

const Landing = () => {
  return (
    <div className='flex flex-1 flex-col bg-[#F2F1FF]'>
      <Hero /> 
      <Footer />
    </div>
  )
}

export default Landing