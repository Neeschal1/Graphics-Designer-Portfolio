import React from 'react'
import Fonts from '../utils/fonts'
import Progressline from '../components/work_experience/progressline'

const Experience = () => {
  return (
    <div className='flex flex-1 flex-col gap-15 py-25 px-10 items-center justify-center'>
        <div className='flex items-center justify-center flex-row gap-4'>
            <h1 style={{...Fonts.poppins.semiBold, fontSize: 48}} className='text-[#2B2B2B]'>My</h1>
            <h1 style={{...Fonts.poppins.semiBold, fontSize: 48}} className='text-[#FF411F]'>Work Experience</h1>
        </div>
        <Progressline />
    </div>
  )
}

export default Experience