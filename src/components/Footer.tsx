import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full flex justify-center items-center mx-auto max-w-full pompiere-font mb-4'>
            <div className='md:w-full justify-center items-center'>
                <div className='md:flex md:justify-around md:items-center mx-auto w-full'>
                    <span className="md:w-1/2 w-full text-base sm:text-center px-2">© 2025 <Link href="/">Ghiblily™</Link>. All Rights Reserved.</span>
                    <div className='md:w-1/2 w-full flex space-x-6 justify-between md:justify-center md:mt-0 mt-4 px-2'>
                        <Link className='hover:scale-110 transition-transform duration-300 ease-out' href="https://instagram.com/aryan_570?igshid=MzNlNGNkZWQ4Mg==" target='_blank'>
                            <Instagram className='w-5 h-5' />
                        </Link>
                        <Link className='hover:scale-110 transition-transform duration-300 ease-out' href="https://x.com/aryanma12485001" target='_blank'>
                            <Twitter className='w-5 h-5' />
                        </Link>
                        <Link className='hover:scale-110 transition-transform duration-300 ease-out' href="https://github.com/Aryan570" target='_blank'>
                            <Github className='w-5 h-5' />
                        </Link>
                        <Link className='hover:scale-110 transition-transform duration-300 ease-out' href="https://www.linkedin.com/in/aryan-malhotra-131989220/" target='_blank'>
                            <Linkedin className='w-5 h-5' />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
