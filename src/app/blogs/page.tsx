import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface Blog {
    id: string;
    title: string;
    banner_url: string;
    created_at: string;
    link: string;
    description: string;
}
const Blogs = async () => {
    const blogs_metadata = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog_metadata`);
    const blogs: Blog[] = await blogs_metadata.json();
    return (
        <div>
            {blogs.map((blog) => (
                <Link key={blog.id} href={blog.link}>
                    <div>
                        <div>
                            <div>{blog.title}</div>
                            <div>{blog.description}</div>
                        </div>
                        <div>
                            <Image src={blog.banner_url} height={200} width={200} alt={blog.title} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Blogs