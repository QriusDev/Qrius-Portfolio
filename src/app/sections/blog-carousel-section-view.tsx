import blogPosts from "app/blog/blog-posts";
import Image from "next/image";
import Link from "next/link";

export default function BlogCarousel() {
    const postIds = [0, 1, 2]; // Add more post IDs as needed
    return (
        <>
            <h1 className="text-5xl font-bold mb-6 text-black">Blog Posts</h1>
            <p className="text-lg text-gray-700 mb-12">
                Check out my latest blog posts below!
            </p>
            <div className="flex flex-row items-center">
                {/* Carousel or grid of blog posts will go here */}
                { postIds.map((id) => {
                    const post = blogPosts[id];
                    if (!post) return null; // Skip if post not found

                    return (
                        <div key={post.id} className="flex flex-col outline-1 p-5 mr-8 bg-black border-b pb-4 rounded-lg shadow transform transition-transform hover:scale-105 hover:shadow-lg">
                            <Link href={`/blog/${post.id}`} className="block flex-1 max-w-[200px]">
                                <h3 className="text-2xl font-semibold mb-2 truncate" title={post.title}>{post.title}</h3>
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
                    );
                })}
            </div>
            <div className="flex justify-center mt-8">
                <Link href="/blog" className="px-4 py-2 outline-1 outline-black text-black rounded-lg transform transition-transform hover:scale-105 hover:bg-black hover:text-white">
                    View All Blog Posts
                </Link>
            </div>
        </>
    );
}