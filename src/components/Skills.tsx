import Image from 'next/image'
import React from 'react'

export default function Skills() {
    return (
        <div className='w-screen flex flex-col items-center'>
            <h1 className='decoration-wavy underline decoration-1 underline-offset-2 text-3xl float-left max-w-6xl w-full font-bold'>skills</h1>
            <div className='max-w-6xl flex justify-center items-center w-full mt-8'>
                <div className='grid grid-cols-12 grid-rows-12 gap-4 w-full'>
                    <div className='row-start-1 col-start-5 row-span-4 col-span-4 rotate-2 relative hover:rotate-0 transition-transform duration-300'>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-emerald-600/80 rotate-6"></div>
                        <div className='flex flex-col rounded-2xl overflow-hidden bg-blue-500 border-4 border-white shadow-2xl shadow-emerald-400'>
                            <div className='w-full flex justify-center items-center bg-pink-400'>
                                <div className='flex gap-2'>
                                    <Image src='/vercel.svg' height={10} width={10} alt='vercellogo' />
                                    <p className='decoration-wavy underline decoration-1 underline-offset-2 text-2xl'>Core</p>
                                </div>
                            </div>
                            <div className='p-2 text-lg w-full'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, rerum quasi quo illum sed accusamus accusantium eum omnis odio quia debitis modi maxime ullam consequuntur doloremque dicta? Debitis ab aut iste voluptates!
                            </div>
                        </div>
                    </div>
                    <div className='row-start-5 col-start-1 row-span-4 col-span-4 -rotate-2 relative hover:rotate-0 transition-transform duration-300'>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-emerald-600/80 -rotate-4"></div>
                        <div className='flex flex-col rounded-2xl overflow-hidden bg-blue-500 border-4 border-white shadow-2xl shadow-emerald-400'>
                            <div className='w-full flex justify-center items-center bg-pink-400'>
                                <div className='flex gap-2'>
                                    <Image src='/vercel.svg' height={10} width={10} alt='vercellogo' />
                                    <p className='decoration-wavy underline decoration-1 underline-offset-2 text-2xl'>Web</p>
                                </div>
                            </div>
                            <div className='p-2 text-lg w-full'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, rerum quasi quo illum sed accusamus accusantium eum omnis odio quia debitis modi maxime ullam consequuntur doloremque dicta? Debitis ab aut iste voluptates!
                            </div>
                        </div>
                    </div>
                    <div className='row-start-5 col-start-9 row-span-4 col-span-4 rotate-2 relative hover:rotate-0 transition-transform duration-300'>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-emerald-600/80 rotate-6"></div>
                        <div className='flex flex-col rounded-2xl overflow-hidden bg-blue-500 border-4 border-white shadow-2xl shadow-emerald-400'>
                            <div className='w-full flex justify-center items-center bg-pink-400'>
                                <div className='flex gap-2'>
                                    <Image src='/vercel.svg' height={10} width={10} alt='vercellogo' />
                                    <p className='decoration-wavy underline decoration-1 underline-offset-2 text-2xl'>Others</p>
                                </div>
                            </div>
                            <div className='p-2 text-lg w-full'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, rerum quasi quo illum sed accusamus accusantium eum omnis odio quia debitis modi maxime ullam consequuntur doloremque dicta? Debitis ab aut iste voluptates!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
