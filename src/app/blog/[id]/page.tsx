'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import blogPosts from "../blog-posts";

export default function Page() {
    const pathname = usePathname();
    const id = pathname.split("/").pop() || "";

    if (!id) {
        return <p>Post not found</p>;
    }

    const post = blogPosts.find((post) => post.id === id);

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div className="flex flex-col outline-1 items-center min-h-screen ml-10 mr-10 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {/* Featured Image */}
            {post.featuredImage && (
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="rounded-lg object-cover w-full max-w-3xl mb-4"
                    priority
                />
            )}

            {/* Title */}
            <h2 className="text-3xl font-bold qalex-title text-center">{post.title}</h2>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl mb-4 gap-4">
                {/* Author */}
                <div className="flex items-center gap-3">
                    {post.author && (
                        <Image
                            src={post.author.image}
                            alt={post.author.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                    )}
                    <span className="font-semibold">{post.author.name}</span>
                </div>
                {/* Date */}
                <span className="text-gray-500">{post.date}</span>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {post.tags && post.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <p className="text-lg max-w-2xl">{post.content}</p>
        </div>
    );
}