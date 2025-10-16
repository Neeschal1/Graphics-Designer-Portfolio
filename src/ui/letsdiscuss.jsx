import React from 'react'
import Toptitle from '../components/lets_discuss_section/toptitle'
import sticker from "../assets/images/sticker.png"

const Letsdiscuss = () => {
  return (
    <div className='flex flex-col items-center justify-center py-25 gap-30'>
        <Toptitle />
        <img src={sticker} />
    </div>
  )
}

export default Letsdiscuss