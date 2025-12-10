'use client'

import { useState, useMemo } from 'react'
import blogPosts from '../../public/data/blog-posts.json'

type Language = 'en' | 'vi' | 'hi' | 'id' | 'bn' | 'ur' | 'tl'

type BlogPost = {
    id: string
    slug: string
    title: string
    excerpt: string
    content: string
    tags: string[]
    date: string
    cover: string
    category: string
    author: string
}

export default function BlogDetailContent({ lang, slug }: { lang: Language; slug: string }) {
    const post = blogPosts.find(p => p.slug === slug) as BlogPost
    const [selectedCategory, setSelectedCategory] = useState<string>(post.category)

    const allCategories = useMemo(() => {
        const categories = new Set<string>()
        blogPosts.forEach(p => {
            p.tags.forEach(tag => categories.add(tag))
        })
        return ['All', ...Array.from(categories).sort()]
    }, [])

    const homeUrl = lang === 'en' ? '/en/blog' : `/${lang}/blog`

    const handleCategoryClick = (category: string) => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('selectedBlogCategory', category)
        }
        window.location.href = homeUrl
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                {/* Blog Title */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 text-emerald-500">
                        Blog
                    </h1>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-4 md:mb-6">
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                                ? 'bg-blue-500 text-white shadow-md'
                                : 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 md:mb-10 flex-wrap">
                    <a href={homeUrl} className="text-blue-600 dark:text-blue-400 hover:underline">
                        Home
                    </a>
                    <span>{'>'}</span>
                    <button
                        onClick={() => handleCategoryClick(post.category)}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {post.category}
                    </button>
                    <span>{'>'}</span>
                    <span className="text-gray-800 dark:text-gray-300">{post.title}</span>
                </div>

                {/* Blog Content */}
                <article className="max-w-4xl mx-auto">
                    {/* Cover Image */}
                    <div className="mb-8 rounded-2xl overflow-hidden">
                        <img
                            src={post.cover}
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                        {post.title}
                    </h2>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                        <span>•</span>
                        <span>{post.category}</span>
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none mb-12 blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-200 dark:border-gray-700">
                        {post.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </article>
            </div>
        </main>
    )
}
