import Image from 'next/image'
import React from 'react'
import banner from '@/../public/banner.jpg'

const Banner = ({ tog_ban }: { tog_ban: () => void }) => {
  return (
    <div className='h-screen w-full overflow-hidden'>
      <Image className='object-cover w-full h-full' placeholder='blur' src={banner} width={1000} height={1000} alt='banner_inage'/>
        <button className='cursor-pointer' onClick={tog_ban}>Enter</button>
    </div>
  )
}

export default Banner
