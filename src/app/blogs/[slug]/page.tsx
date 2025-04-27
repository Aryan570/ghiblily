import Image from 'next/image';
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
const ALLOWED_PROTOCOLS = ['http', 'https'];

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
    <div className="container mx-auto px-4 py-8">
      <Image
        className='w-full h-96 object-cover rounded-lg mb-8'
        src={data.banner_url}
        height={200}
        width={200}
        alt={data.title}
      />
      <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
      <div className="markdown">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkToc, [remarkEmoji, { emoticon: true }]]}
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
                  ['href', {
                    values: [/^(?!javascript:|data:|file:).+$/]
                  }],
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
                ]
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
              // Access properties directly from node
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
                    className="rounded-lg mx-auto"
                    loading="lazy"
                  />
                );
              } catch (error) {
                console.error('Error loading image:', error);
                return <span>Error loading image</span>;
              }
            }
          }}
        >
          {data.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Blog