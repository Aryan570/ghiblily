import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

const Blog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    return notFound();
  }
  const data = await res.json();
  return (
    <div>
      <Image
        className='w-full h-96 object-cover rounded-lg'
        src={data.banner_url}
        height={200}
        width={200}
        alt={data.title}
      />
      <h1>{data.title}</h1>
      <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
        {data.content}
      </ReactMarkdown>
    </div>
  )
}

export default Blog