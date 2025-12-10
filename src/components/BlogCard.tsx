type BlogPost = {
    id: string
    slug: string
    title: string
    excerpt: string
    tags: string[]
    date: string
    cover: string
    category: string
}

type Language = 'en' | 'vi' | 'hi' | 'id' | 'bn' | 'ur' | 'tl'

function slugify(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}

export default function BlogCard({ post, lang }: { post: BlogPost; lang: Language }) {
    const categorySlug = slugify(post.category)
    const blogUrl = `/${lang}/blog/${categorySlug}/${post.slug}`

    return (
        <a href={blogUrl}>
            <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                    <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                        {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-sm text-gray-500 dark:text-gray-500">{post.date}</span>
                        <div className="flex gap-2 flex-wrap">
                            {post.tags.slice(0, 2).map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </a>
    )
}
