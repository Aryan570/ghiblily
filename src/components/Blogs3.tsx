import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPost {
    id: number
    title: string
    description: string
    banner_url: string
    created_at: string
    read_time: string
    tags: string[]
    link: string
}
function get_url(){
    if(process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return process.env.NEXT_PUBLIC_URL;
}

export default async function BlogPort() {
    const base_url = get_url();
    const req = await fetch(`${base_url}/api/blog3`)
    if (!req.ok) {
        return <div className="text-center text-gray-500">No blog posts available</div>
    }
    const blogPosts: BlogPost[] = await req.json()
    if (!blogPosts || blogPosts.length === 0) {
        return <div className="text-center text-gray-500">No blog posts available</div>
    }
    const [featuredPost, ...otherPosts] = blogPosts
    return (
        <div className="bg-gray-900 text-white relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
            <div className="max-w-7xl mx-auto px-4 py-12 z-20 relative">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 flex justify-center items-center">
                        {/* <Sparkle className="text-emerald-500 mr-2 h-8 w-8"/>  */}
                        Latest <span className="decoration-wavy underline decoration-1 underline-offset-2 ml-2 bg-gradient-to-br from-emerald-600 to-teal-700 p-2 rounded-lg">stories</span>
                    </h2>
                    <p className="text-gray-200 text-xl max-w-2xl mx-auto">
                        {/* Sharing insights, experiences, and learnings from my development journey */}
                        Sharing things that I shouldn&apos;t be sharing, but I do anyway.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="overflow-hidden border-0 shadow-sm shadow-teal-200/20 bg-[#0D2C2C] transform-gpu rounded-lg">
                            <div className="relative">
                                <Image
                                    src={featuredPost.banner_url || "/shad.svg"}
                                    alt={featuredPost.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-80 object-cover"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-[#2E856E] text-white px-4 py-2 text-md font-medium rounded-md">Featured</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-6 text-sm mb-4 text-emerald-100">
                                    <div className="flex items-center gap-2 justify-center">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(featuredPost.created_at).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-2 justify-center">
                                        <Clock className="w-4 h-4" />
                                        <span>{featuredPost.read_time} minutes</span>
                                    </div>
                                </div>
                                <h3 className="text-3xl font-extrabold text-shadow-emerald-300 text-shadow-2xs mb-4 leading-tight uppercase">{featuredPost.title}</h3>
                                <p className="text-gray-200 text-lg leading-relaxed mb-6">{featuredPost.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {featuredPost.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 border border-gray-300 font-bold rounded-md text-sm text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={`${featuredPost.link}`}
                                    className="inline-flex items-center gap-2 bg-[#2E856E] hover:bg-[#375555] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
                                >
                                    Read Full Story
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">More Stories</h3>
                            <div className="w-12 h-1 bg-[#2E856E] rounded"></div>
                        </div>

                        {otherPosts.map((post) => (
                            <Link
                                href={`${post.link}`}
                                key={post.title}

                            >
                                <div className="overflow-hidden hover:shadow-lg shadow-emerald-700/100 transition-all duration-300 group rounded-lg bg-[#0D2C2C] transform-gpu mt-8">
                                    <div className="flex">
                                        <div className="w-full basis-1/4 aspect-video flex-shrink-0">
                                            <Image
                                                src={post.banner_url || "/shad.svg"}
                                                alt={post.title}
                                                width={300}
                                                height={300}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="p-4 flex-1">
                                            <div className="flex items-center gap-3 text-xs mb-2">
                                                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                                                <Clock className="w-4 h-4" />
                                                <span>{post.read_time} minutes</span>
                                            </div>

                                            <h4 className="font-semibold mb-2 group-hover:text-emerald-200 group-hover:text-shadow-emerald-600 transition-colors duration-200 leading-tight">
                                                {post.title}
                                            </h4>

                                            <p className="text-sm mb-3 line-clamp-2">{post.description}</p>

                                            <div className="flex flex-wrap gap-1">
                                                {post.tags.slice(0, 2).map((tag) => (
                                                    <span key={tag} className="bg-gray-100 font-bold text-gray-700 text-xs px-2 py-0.5 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link
                                href="/blogs"
                                className="flex font-bold items-center justify-center gap-2 w-full py-3 px-4 border-2 border-[#2E856E] text-[#2E856E] hover:bg-[#2E856E] hover:text-gray-200 rounded-lg transition-all duration-200"
                            >
                                View All Posts
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
