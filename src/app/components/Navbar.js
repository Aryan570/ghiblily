import Image from 'next/image'
import Link from 'next/link'
import Example from './Example'
import profilepic from 'public/Movie.webp'
const Navbar = () => {
    return (
        <div className='relative min-h-screen'>
            <Image className='object-cover absolute' src={profilepic} fill alt='Front picture' quality={100} />
            <div className='flex relative  md:justify-around md:flex-row flex-col items-center h-20'>
                <Link href={'/'}><Image className='saturate-200' src="/../public/totoro_white.png" width={60} height={60} alt='totoro' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" /></Link>
                <div>
                    <ul className='flex justify-center  font-Pompiere'>
                        <li className='mx-6 text-white text-2xl font-Pompiere transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out'><Link href="/">Home</Link></li>
                        <li className='mx-6 text-white text-2xl font-Pompiere transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out '><Link  href="#Skills" >Expertise</Link></li>
                        <li className='mx-6 text-white text-2xl font-Pompiere transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out'><Link  href="#About">About Site</Link></li>
                    </ul>
                </div>
            </div>
            <section className='leftSide flex md:flex-row flex-col font-Pompiere relative md:text-3xl text-2xl text-white md:justify-around justify-center md:items-start items-center mt-40'>
                <div className='md:w-96 w-72 md:h-auto h-28 pt-14'><p className='break-words'>Hey there, and welcome to my realm! I&apos;m delighted to have you here. I&apos;m a Web Developer and well-versed in <span className='text-green-300'><Example /></span> </p>
                </div>
                <div className='flex justify-center items-center my-24 transform  transition duration-300 ease-out'>
                <Link target='_blank' href="https://drive.google.com/file/d/10CMzDqqYmyD5hgkstkjz64nqfcdIMHQE/view?usp=sharing"><button type='button' className='text-gray-900 shadow-lg shadow-lime-400 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200   rounded-2xl text-lg px-2 text-center'><p className='p-4'>Download Resume</p></button></Link>
                </div>
            </section>
        </div>
        // hover:scale-x-110 hover:scale-y-105
    )
}
export default Navbar
//I like to code things from scratch, and enjoy bringing ideas to life in the browser.
//changes
//height in line 20
//w-auto in line 20
//w-70 in line 20
//line 9 flex row flex col