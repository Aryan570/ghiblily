"use client"
import React from 'react'
const AddBlog = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog`, {
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
        }
    };

    return (
        <div>
            <h1>Hey Aryan!! - Wanna add a blog?</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" required />
                <input type="text" name="banner_url" placeholder="Banner URL" required />
                <textarea name="content" placeholder="Content" required></textarea>
                <input type="text" name="description" placeholder="Description" required />
                <input type="text" name="secret" placeholder="Secret - Only Owner knows it!" required />
                <button type="submit">Add Blog</button>
            </form>
        </div>
    )
}

export default AddBlog
