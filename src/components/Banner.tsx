import React from 'react'

const Banner = ({ tog_ban }: { tog_ban: () => void }) => {
  return (
    <div>
        <button className='cursor-pointer' onClick={tog_ban}>Enter</button>
    </div>
  )
}

export default Banner
