import React from 'react'
import './landing.css'
import Fonts from './utils/fonts'
import Hero from './ui/hero'
import Services from './ui/services'
import Experience from './ui/experience'
import Whyhireme from './ui/whyhireme'
import Testimonials from './ui/testimonials'
import Letsdiscuss from './ui/letsdiscuss'
import Footer from './constants/footer'

const Landing = () => {
  return (
    <div className='flex flex-1 flex-col bg-[#F2F1FF]'>
      <Hero />
      <Services />
      <Experience />
      {/* <Whyhireme /> */}
      <Testimonials />
      <Letsdiscuss />
      <Footer />
    </div>
  )
}

export default Landing