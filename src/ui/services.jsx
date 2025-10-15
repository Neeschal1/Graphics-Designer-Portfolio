import React from 'react'
import Topsection from '../components/services_section/topsection'
import Servicescards from '../components/services_section/servicescards'

const Services = () => {
  return (
    <div className='flex flex-1 flex-col justify-center bg-[#262626] mt-[-60px] rounded-tr-4xl py-20 px-10 rounded-tl-4xl gap-20'>
        <Topsection />
        <div className='flex items-center justify-center'>
            <div className='w-9/12 h-1 bg-[#4B4B4B] rounded-full' />
        </div>
        <Servicescards />
    </div>
  )
}

export default Services