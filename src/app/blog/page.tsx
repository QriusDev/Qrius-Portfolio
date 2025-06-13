import Link from "next/link";
import blogPosts from "./blog-posts";
import Image from "next/image";

export default function Blog() {
    return (
        <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h2 className="text-3xl font-bold qalex-title">Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8 w-full max-w-7xl">
                {blogPosts.map((post) => (
                    <div key={post.id} className="outline-1 p-5 border-b pb-4 rounded-lg shadow flex flex-col transform transition-transform hover:scale-105 hover:shadow-lg">
                        <Link href={`/blog/${post.id}`} className="block flex-1">
                            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                            <hr/>
                            <p className="text-sm text-gray-500 mb-2 mt-2">{post.date}</p>
                            <div className="w-full aspect-square mb-4 relative">
                                <Image
                                    src={post.featuredImage}
                                    alt={post.title}
                                    fill
                                    className="rounded-lg object-cover"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
