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
        <div className='min-h-screen w-full flex flex-col justify-center items-center pompiere-font'>
            {blogs.map((blog) => (
                <Link className='w-1/2' key={blog._id} href={blog.link}>
                    <div className='flex border-1 rounded-4xl border-slate-400 max-h-1/12 h-[20vh] overflow-hidden'>
                        <div className='w-2/3 justify-center items-center flex flex-col '>
                            <div className='text-2xl font-bold'>{blog.title}</div>
                            <div className='font-semibold'>{blog.description}</div>
                        </div>
                        <div className='w-1/3 h-full flex justify-center items-center'>
                            <Image className='object-cover w-full [mask-image:linear-gradient(to_right,transparent,white_50%)] contrast-75' src={blog.banner_url} height={100} width={100} alt={blog.title} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Blogs