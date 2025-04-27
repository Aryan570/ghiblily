import { connectToDatabase } from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, {params}: { params: { slug: string } }) {
    try {
        const {db} = await connectToDatabase();
        const { slug } = params;
        const blogPost = await db.collection('blogs').findOne({ title: slug });
        if (!blogPost) {
            return NextResponse.json(
                { error: 'Blog post not found' },
                { status: 404 }
            )
        }
        return NextResponse.json(blogPost)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch blog post' },
            { status: 500 }
        )
    }
}