import Footer from '@/components/Footer';
import { BookOpen, Calendar, Clock, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import Genshin from '@/../public/jiji_s.jpg';

const ALLOWED_STYLE_PROPERTIES = [
  'color',
  'background-color',
  'font-size',
  'font-weight',
  'text-align',
  'margin',
  'padding',
  'text-decoration'
];
const ALLOWED_PROTOCOLS = ['http', 'https', null];
function get_url() {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return process.env.NEXT_PUBLIC_URL;
}
const Blog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const base_url = get_url();
  const res = await fetch(`${base_url}/api/blog/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    return notFound();
  }
  const data = await res.json();
  const wordsPerMinute = 200
  const wordCount = data.content.split(" ").length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  return (
    <div className='flex min-h-screen w-full justify-center items-start hero quicksand'>
      <div className='hidden h-full md:flex sticky basis-1/2 overflow-hidden top-0 justify-end'>
        <div className='m-6 overflow-hidden p-4 border-b-1 border-r-1 dark:shadow-gray-300 shadow-gray-500 shadow rounded-lg backdrop-blur-3xl float-right'>
          <Link href={'/'} className='w-full flex justify-center mb-4'>
            <Image
              className='rounded-full aspect-square object-cover border-3 border-emerald-100 hover:border-emerald-500'
              src={Genshin}
              height={30}
              width={70}
              alt='Author Image'
            />
          </Link>
          <div className='flex flex-col items-end gap-2 mb-3'>
            <h1 className='text-3xl font-extrabold font-right'>{data.title}</h1>
            <h2 className='flex items-center gap-2 opacity-70'><Calendar className='w-4 h-4' /> {new Date(data.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h2>
            <div className="flex items-center gap-2 opacity-70">
              <Clock className="w-4 h-4" />
              {readingTime} min read
            </div>
            <div className="flex items-center gap-2 opacity-70">
              <BookOpen className="w-4 h-4" />
              {wordCount.toLocaleString()} words
            </div>
          </div>
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag : string) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs hover:bg-emerald-200 transition-colors flex gap-1"
                >
                  <Tag className="w-4 h-4" /> {tag}
                </span>
              ))}
            </div>
          </div>
          <hr className='my-3'></hr>
          <div className='flex flex-col gap-2'>
            <div>
              Wanna see more <Link href={'/blogs'} className='hover:underline hover:decoration-wavy hover:underline-offset-4 text-emerald-600 font-bold'>blogs</Link>?
            </div>
            <div>
              Check out my <Link href={'/'} className='hover:underline hover:decoration-wavy hover:underline-offset-4 text-emerald-600 font-bold'>portfolio.</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='min-h-screen w-full flex flex-col justify-center items-center md:items-end  '>
        <Image
          className='w-full max-w-6xl h-[40vh] object-cover -mb-16 brightness-90'
          src={data.banner_url}
          height={200}
          width={200}
          alt={data.title}
          quality={100}
        />
        <div className="w-full max-w-6xl h-full flex flex-col justify-center border-0 backdrop-blur-3xl p-8">
          <h1 className="text-4xl font-bold mb-8 font-right">{data.title}</h1>
          <h2 className='opacity-60 text-lg text-right'> - {new Date(data.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h2>
          <div className="markdown w-full">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkToc, remarkEmoji]}
              rehypePlugins={[
                rehypeRaw,
                [rehypeSanitize, {
                  ...defaultSchema,
                  attributes: {
                    ...defaultSchema.attributes,
                    img: [
                      'src',
                      'alt',
                      'width',
                      'height',
                      ['style', {
                        properties: ['width', 'height', 'object-fit'],
                        values: [/^(?!javascript:|data:|file:).+$/]
                      }]
                    ],
                    a: [
                      'href',
                      ['target', {
                        values: ['_blank', '_self']
                      }],
                      ['rel', {
                        values: ['noopener', 'noreferrer']
                      }]
                    ],
                    span: [
                      ['style', {
                        properties: ALLOWED_STYLE_PROPERTIES,
                        values: [/^(?!javascript:|data:|file:|expression|url).+$/]
                      }]
                    ],
                  },
                  protocols: {
                    href: ALLOWED_PROTOCOLS,
                    src: ALLOWED_PROTOCOLS
                  }
                }],
                rehypeKatex
              ]}
              components={{
                img: ({ node, ...props }) => {
                  const src = node?.properties?.src;
                  const alt = node?.properties?.alt || props.alt || 'Blog image';
                  const width = node?.properties?.width ? parseInt(node.properties.width as string) : 400;
                  const height = node?.properties?.height ? parseInt(node.properties.height as string) : 300;
                  if (!src || typeof src !== 'string') {
                    console.warn('Missing or invalid image source');
                    return null;
                  }

                  try {
                    return (
                      <Image
                        src={src}
                        alt={alt as string}
                        width={width}
                        height={height}
                        className="mx-auto lg:w-full"
                        loading="lazy"
                      // quality={100}
                      />
                    );
                  } catch (error) {
                    console.error('Error loading image:', error);
                    return <span>Error loading image</span>;
                  }
                },
                a: ({ node, ...props }) => {
                  const href = node?.properties?.href;
                  if (!href || typeof href !== 'string') {
                    console.warn('Missing or invalid link href');
                    return null;
                  }
                  return <Link href={href} target="_blank" rel="noopener noreferrer" {...props} />;
                },
              }}
            >
              {data.content}
            </ReactMarkdown>
          </div>
          <hr className='mb-12'></hr>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Blog