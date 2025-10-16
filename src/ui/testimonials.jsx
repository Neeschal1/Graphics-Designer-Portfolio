import React from 'react'
import Topsection from '../components/testimonials_section/topsection'
import Cards from '../components/testimonials_section/cards'

const Testimonials = () => {
  return (
    <div className='bg-[#262626] py-25 px-10 flex flex-col flex-1 gap-30 items-center justify-center rounded-3xl'>
        <Topsection />
        <Cards />
    </div>
  )
}

export default Testimonials