import Image from 'next/image'
import React from 'react'
import banner from '@/../public/banner.jpg'
import { ArrowBigRight } from 'lucide-react'

const Banner = ({ tog_ban }: { tog_ban: () => void }) => {
  return (
    <div className='h-dvh w-full overflow-hidden pompiere-font'>
      <div className='absolute flex flex-col-reverse lg:flex-row w-full h-full justify-around items-center'>
        <div className='mx-2'>
          <h1 className='text-5xl font-bold text-center hero_portfolio rounded-xl mb-2 p-2 -rotate-2'>Welcome to <span className='decoration-wavy underline decoration-2 underline-offset-4'>Ghiblily</span></h1>
          <button className='cursor-pointer hero_portfolio rounded-xl w-full text-2xl border-0 -rotate-1 flex justify-center items-center' onClick={tog_ban}>Enter <ArrowBigRight className=''/></button>
        </div>
        <div className='p-4 rounded-xl hero_portfolio w-fit m-2'>
          <p className='text-2xl text-wrap wrap-break-word relative max-w-sm animate-in'>Whenever someone creates something with all of their <span className='decoration-wavy underline decoration-1 underline-offset-2'>heart</span>, then that creation is given a <span className='decoration-wavy underline decoration-1 underline-offset-2'>soul</span>.<br></br> <span className='text-nowrap float-right'>- &quot;The Cat Returns (2002)&quot;</span>
          </p>
        </div>
      </div>
      <Image className='object-cover w-full h-full' placeholder='blur' src={banner} width={1000} height={1000} alt='banner_inage' />
    </div>
  )
}

export default Banner