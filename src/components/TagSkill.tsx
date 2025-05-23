import Image from 'next/image'
import React from 'react'

export default function TagSkill({skill, url} : {skill : string, url : string}) {
  return (
    <div className='bg-emerald-700 rounded-2xl border-2 border-dotted'>
      <div className='space-x-1 flex py-1 px-2'>
        <Image src={url} alt={skill} height={20} width={20}/>
        <p>{skill}</p>
      </div>
    </div>
  )
}