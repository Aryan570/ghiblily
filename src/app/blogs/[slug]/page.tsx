import Footer from '@/components/Footer';
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
  return (
    <div className='flex min-h-screen w-full justify-center items-start hero quicksand'>
      <div className='hidden h-full md:flex sticky basis-1/2 overflow-hidden top-0 justify-end'>
        <div className='m-6  overflow-hidden p-4 border-2 rounded-lg backdrop-blur-3xl'>
          <div className='flex flex-col items-end'>
            <h1 className='text-2xl font-bold'>{data.title}</h1>
            <h2 className='float-right'>- {new Date(data.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h2>
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
          <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
          <h2 className='opacity-60 text-lg'> - {new Date(data.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h2>
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