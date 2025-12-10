'use client'

import { useState, useMemo, useEffect } from 'react'
import blogPosts from '../../public/data/blog-posts.json'
import BlogCard from './BlogCard'

type Language = 'en' | 'vi' | 'hi' | 'id' | 'bn' | 'ur' | 'tl'

export default function BlogContent({ lang }: { lang: Language }) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedCategory = sessionStorage.getItem('selectedBlogCategory')
            if (storedCategory) {
                setSelectedCategory(storedCategory)
                sessionStorage.removeItem('selectedBlogCategory')
            }
        }
    }, [])

    const allCategories = useMemo(() => {
        const categories = new Set<string>()
        blogPosts.forEach(post => {
            post.tags.forEach(tag => categories.add(tag))
        })
        return ['All', ...Array.from(categories).sort()]
    }, [])

    const filteredPosts = useMemo(() => {
        if (selectedCategory === 'All') return blogPosts
        return blogPosts.filter(post => post.tags.includes(selectedCategory))
    }, [selectedCategory])

    const homeUrl = lang === 'en' ? '/' : `/${lang}`

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="text-center mb-8">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 text-emerald-500">
                        Blog
                    </h1>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-4 md:mb-6">
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                                ? 'bg-blue-500 text-white shadow-md'
                                : 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {selectedCategory !== 'All' && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 md:mb-10 flex-wrap">
                        <button
                            onClick={() => setSelectedCategory('All')}
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Home
                        </button>
                        <span>{'>'}</span>
                        <span className="text-gray-800 dark:text-gray-300">{selectedCategory}</span>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <BlogCard key={post.id} post={post} lang={lang} />
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No posts found in this category.
                        </p>
                    </div>
                )}
            </div>
        </main>
    )
}
