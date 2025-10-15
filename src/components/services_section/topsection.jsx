import React from 'react'
import Fonts from '../../utils/fonts'

const Topsection = () => {
  return (
    <div className='flex flex-1 items-center justify-between '>
        <div className='flex items-center justify-center flex-row gap-4'>
            <h1 style={{...Fonts.poppins.semiBold, fontSize: 48}} className='text-white'>My</h1>
            <h1 style={{...Fonts.poppins.semiBold, fontSize: 48}} className='text-[#FF411F]'>Services</h1>
        </div>
        <h2 style={{...Fonts.poppins.medium, fontSize: 20}} className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua. Ut </h2>
    </div>
  )
}

export default Topsection