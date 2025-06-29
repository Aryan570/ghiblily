"use client"
import React from 'react'
const AddBlog = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const res = await fetch('/api/add_blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!res.ok) {
            console.error('Error adding blog:', res.statusText);
        } else {
            console.log('Blog added successfully!');
            form.reset();
        }
    };

    return (
        <div className='w-full flex flex-col md:flex-row justify-around items-center inset-0 quicksand'>
            <div className='w-1/2 flex items-center justify-center'>
                <div className='w-1/2'>
                    <h1 className='text-4xl mb-4 font-bold'>Rules for writing content:</h1>
                    <ul className=' space-y-2 text-xl list-disc'>
                        <li>for markdown style bolding use #&lt;space&gt;content.</li>
                        <li>for images, use &lt;img&gt;tag instead of ![]</li>
                        <li>You can also give minimal style to image with attributes in tag itself.</li>
                        <li>BannerUrl will remain on the top of the article.</li>
                        <li>try to use &lt;a&gt; for links, just like in html</li>
                        <li>use &amp;apos; instead of &apos;.</li>
                        <li>tags should be added comma separated with no space; ex: Personal,Web,Rust</li>
                    </ul>
                </div>
            </div>
            <div className=' w-1/2 flex flex-col justify-center items-center mt-2'>
                <div className='w-1/2 border-1 rounded-2xl border-slate-600 p-6 text-xl backdrop-blur-3xl'>
                    <h1>Hey Aryan!! - Wanna add a blog?</h1>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <input className='border-slate-600 border-1 my-1 rounded-lg p-2' type="text" name="title" placeholder="Title" required maxLength={50} />
                        <input className='border-slate-600 border-1 my-1 rounded-lg p-2' type="text" name="banner_url" placeholder="Banner URL" required />
                        <textarea rows={10} className='border-slate-600 border-1 my-1 rounded-lg p-2 resize-none scrollbar-hide' name="content" placeholder="Content" required></textarea>
                        <input className='border-slate-600 border-1 my-1 rounded-lg p-2' type="text" name="description" placeholder="Description" required  maxLength={200} />
                        <input className='border-slate-600 border-1 my-1 rounded-lg p-2' type="text" name="tags" placeholder="Tags" required />
                        <input className='border-slate-600 border-1 my-1 rounded-lg p-2' type="password" name="secret" placeholder="Secret - Only Owner knows it!" required />
                        <button className='border-slate-600 border-1 my-1 rounded-lg p-2 cursor-pointer active:bg-slate-400 hover:bg-slate-500' type="submit">Add Blog</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
