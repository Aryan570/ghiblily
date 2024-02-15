'use client'
import Image from 'next/image'
import Link from 'next/link'
import Example from './Example'
// import profilepic from 'public/Movie.webp'
const Navbar = () => {
    const handleScroll = (e) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
      };
    
    return (
        <div className='relative min-h-screen'>
            <Image className='object-cover absolute' src="/chhiro.jpg" fill alt='Front picture' quality={99} />
            <div className='flex relative  md:justify-around md:flex-row flex-col items-center h-20'>
                <Link href={'/'}><Image className='saturate-200' src="/totoro_white.png" width={60} height={60} alt='totoro' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" /></Link>
                <div>
                    <ul className='flex justify-center  font-Pompiere bg-emerald-300 rounded-lg p-1 mt-2'>
                        <li className='mx-6 text-white  text-2xl font-Pompiere transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out'><Link href="/">Home</Link></li>
                        <li className='mx-6 text-white  text-2xl font-Pompiere transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out'><Link  href="#Skills" onClick={handleScroll} >Expertise</Link></li>
                        <li className='mx-6 text-white  text-2xl font-Pompiere transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out'><Link  href="#AboutSite" onClick={handleScroll}>About Site</Link></li>
                    </ul>
                </div>
            </div>
            <section className='leftSide flex md:flex-row flex-col font-Pompiere relative md:text-3xl text-2xl text-white md:justify-around justify-center md:items-start items-center mt-40'>
                <div className='md:w-96 w-72 md:h-auto h-28 pt-14'><p className='break-words'>Hey there, and welcome to my realm! I&apos;m delighted to have you here. I&apos;m a Web Developer and well-versed in <span className='text-green-300'><Example /></span> </p>
                </div>
                <div className='flex justify-center items-center my-24 transform  transition duration-300 ease-out'>
                <Link target='_blank' href="https://drive.google.com/file/d/12xlzu7UyBjPWYRuiHIVLhYRVdAPzexqk/view?usp=sharing"><button type='button' className='text-gray-900 shadow-lg shadow-lime-400 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200   rounded-2xl text-lg px-2 text-center'><p className='p-4'>Download Resume</p></button></Link>
                </div>
            </section>
        </div>
    )
}
export default Navbar