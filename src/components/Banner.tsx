import Image from 'next/image'
import React from 'react'
import banner from '@/../public/banner.jpg'

const Banner = ({ tog_ban }: { tog_ban: () => void }) => {
  return (
    <div className='h-screen w-full overflow-hidden pompiere-font'>
      <div className='absolute flex w-full h-full justify-around items-center'>
        <div className=''>
          <h1 className='text-5xl font-bold text-center hero_portfolio rounded-xl mb-2 p-2 -skew-2'>Welcome to my Ghiblily</h1>
          <button className='cursor-pointer hero_portfolio rounded-xl w-full text-2xl border-0 -skew-2' onClick={tog_ban}>Enter</button>
        </div>
        <div className='p-4 rounded-xl hero_portfolio w-fit m-2'>
          <p className='text-2xl text-wrap wrap-break-word relative max-w-sm'>Whenever someone creates something with all of their heart, then that creation is given a soul.<br></br> <span className='text-nowrap float-right'>- Hayao Miyazaki</span></p>
        </div>
      </div>
      <Image className='object-cover w-full h-full' placeholder='blur' src={banner} width={1000} height={1000} alt='banner_inage' />
    </div>
  )
}

export default Banner
