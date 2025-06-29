import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

interface BlogPost {
    title: string;
    content: string;
    banner_url: string;
    description: string;
    tags : string;
    secret : string;
}

export async function POST(request: Request) {
    try {
        const body: BlogPost = await request.json();
        const { title, content, banner_url, description, tags, secret } = body;
        if (secret !== process.env.THE_SECRET) {
            console.error('Invalid secret provided');
            return NextResponse.json(
                { error: 'Invalid secret' },
                { status: 403 }
            );
        }
        if (!title || !content || !banner_url || !description || !tags) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { db } = await connectToDatabase();
        const date = new Date().toISOString();

        const existingPost = await db.collection('blogs').findOne({ title });
        if (existingPost) {
            return NextResponse.json(
                { error: 'Blog post with this title already exists' },
                { status: 409 }
            );
        }
        const tag_array = tags.split(',').map(tag => tag.trim());
        await db.collection('blogs').insertOne({
            title,
            content,
            banner_url,
            tags: tag_array,
            created_at: date
        });

        await db.collection('blogs_meta').insertOne({
            title,
            banner_url,
            description,
            tags: tag_array,
            created_at: date,
            link: `/blogs/${encodeURIComponent(title)}`
        });

        return NextResponse.json(
            { message: 'Blog post created successfully' },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error creating blog post:', error);
        return NextResponse.json(
            { error: 'Failed to create blog post' },
            { status: 500 }
        );
    }
}