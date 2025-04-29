import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
interface Blog {
    _id: string;
    title: string;
    banner_url: string;
    created_at: string;
    link: string;
    description: string;
}
const Blogs = async () => {
    const blogs_metadata = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog_metadata`);
    if (!blogs_metadata.ok) {
        return notFound();
    }
    const blogs: Blog[] = await blogs_metadata.json();
    return (
        <div className='min-h-screen hero w-full flex flex-col justify-center items-center pompiere-font'>
            <div className='font-bold text-2xl mb-4'>Welcome to the rock</div>
            {blogs.map((blog) => (
                <Link className='w-1/2 hover:scale-[1.03] transition-transform duration-300 ease-out mb-2.5 backdrop-blur-xs' key={blog._id} href={blog.link}>
                    <div className='flex border-1 border-slate-400 max-h-1/12 h-[20vh] overflow-hidden'>
                        <div className='w-3/5 justify-center flex flex-col p-4'>
                            <div className='text-2xl font-bold overflow-clip underline underline-offset-2'>{blog.title}</div>
                            <div className=' overflow-clip'>{blog.description}</div>
                            <div>{new Date(blog.created_at).toLocaleDateString()}</div>
                        </div>
                        <div className='w-2/5 h-full flex justify-center items-center'>
                            <Image className='object-cover w-full mask-radial-[95%_100%] mask-radial-from-40% mask-radial-at-right contrast-75' src={blog.banner_url} height={100} width={100} alt={blog.title} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Blogs