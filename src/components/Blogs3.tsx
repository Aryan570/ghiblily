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

export default async function BlogPort() {
    console.log("where am i");
    const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog3`)
    if (!req.ok) {
        return <div className="text-center text-gray-500">No blog posts available</div>
    }
    const blogPosts: BlogPost[] = await req.json()
    if (!blogPosts || blogPosts.length === 0) {
        return <div className="text-center text-gray-500">No blog posts available</div>
    }
    //   const blogPosts = [
    //     {
    //       id: 1,
    //       title: "Building My First React Native App",
    //       description:
    //         "A journey through mobile development, from concept to app store. Learn about the challenges I faced and how I overcame them, including state management, navigation, and deployment strategies.",
    //       banner_url: "/shad.svg?height=400&width=600",
    //       date: "Dec 15, 2024",
    //       read_time: "5 min read",
    //       tags: ["React Native", "Mobile", "JavaScript"],
    //       link: "building-first-react-native-app",
    //     },
    //     {
    //       id: 2,
    //       title: "The Art of Clean Code",
    //       description:
    //         "Exploring best practices for writing maintainable and readable code that your future self will thank you for.",
    //       banner_url: "/shad.svg?height=200&width=300",
    //       date: "Dec 8, 2024",
    //       read_time: "8 min read",
    //       tags: ["Clean Code", "Best Practices", "Development"],
    //       link: "art-of-clean-code",
    //     },
    //     {
    //       id: 3,
    //       title: "My Journey into Web3",
    //       description:
    //         "Diving deep into blockchain technology and decentralized applications. What I learned and what surprised me.",
    //       banner_url: "/shad.svg?height=200&width=300",
    //       date: "Nov 28, 2024",
    //       read_time: "12 min read",
    //       tags: ["Web3", "Blockchain", "DApps"],
    //       link: "journey-into-web3",
    //     },
    //   ]

    const [featuredPost, ...otherPosts] = blogPosts

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                    Latest <span className="text-purple-600">Stories</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Sharing insights, experiences, and learnings from my development journey
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Featured Post */}
                <div className="lg:col-span-2">
                    <div className="overflow-hidden border-0 shadow-2xl bg-white rounded-lg">
                        <div className="relative">
                            <Image
                                src={featuredPost.banner_url || "/placeholder.svg"}
                                alt={featuredPost.title}
                                width={600}
                                height={400}
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute top-6 left-6">
                                <span className="bg-purple-600 text-white px-4 py-2 text-sm font-medium rounded-md">Featured</span>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(featuredPost.created_at).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{featuredPost.read_time}</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{featuredPost.title}</h3>

                            <p className="text-gray-600 text-lg leading-relaxed mb-6">{featuredPost.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {featuredPost.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href={`${featuredPost.link}`}
                                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
                            >
                                Read Full Story
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Other Posts Sidebar */}
                <div className="space-y-8">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">More Stories</h3>
                        <div className="w-12 h-1 bg-purple-600 rounded"></div>
                    </div>

                    {otherPosts.map((post) => (
                        <Link
                            href={`${post.link}`}
                            key={post.id}
                            
                        >
                            <div className="overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group rounded-lg bg-white">
                                <div className="flex">
                                    <div className="w-24 h-full flex-shrink-0">
                                        <Image
                                            src={post.banner_url || "/shad.svg"}
                                            alt={post.title}
                                            width={300}
                                            height={300}
                                            className="w-full h-full object-cover rounded-l-lg"
                                        />
                                    </div>

                                    <div className="p-4 flex-1">
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                                            <span>{new Date(post.created_at).toLocaleDateString()}</span>
                                            <span>•</span>
                                            <span>{post.read_time}</span>
                                        </div>

                                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200 leading-tight">
                                            {post.title}
                                        </h4>

                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.description}</p>

                                        <div className="flex flex-wrap gap-1">
                                            {post.tags.slice(0, 2).map((tag) => (
                                                <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">
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
                            className="flex items-center justify-center gap-2 w-full py-3 px-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-lg font-medium transition-all duration-200"
                        >
                            View All Posts
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
