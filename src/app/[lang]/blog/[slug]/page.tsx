import type { Metadata } from 'next'
import { I18nProvider } from '../../../../lib/i18n'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import ClientWrapper from '../../../../components/ClientWrapper'
import posts from '../../../../../public/data/blog-posts.json'
import { notFound } from 'next/navigation'

type Language = 'en' | 'vi' | 'hi' | 'id' | 'bn' | 'ur' | 'tl'
const languages: Language[] = ['en', 'vi', 'hi', 'id', 'bn', 'ur', 'tl']

const baseUrl = 'https://craftbg.com'

export async function generateStaticParams() {
    const params: { lang: Language; slug: string }[] = []
    languages.forEach(lang => {
        posts.forEach(post => {
            params.push({ lang, slug: post.slug })
        })
    })
    return params
}

export async function generateMetadata({ params }: { params: { lang: Language; slug: string } }): Promise<Metadata> {
    const post = posts.find(p => p.slug === params.slug)
    if (!post) return {}

    const canonicalUrl = params.lang === 'en'
        ? `${baseUrl}/blog/${params.slug}`
        : `${baseUrl}/${params.lang}/blog/${params.slug}`

    return {
        title: `${post.title} - CraftBG Blog`,
        description: post.excerpt,
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'x-default': `${baseUrl}/blog/${params.slug}`,
                'en': `${baseUrl}/blog/${params.slug}`,
                'vi': `${baseUrl}/vi/blog/${params.slug}`,
                'hi': `${baseUrl}/hi/blog/${params.slug}`,
                'id': `${baseUrl}/id/blog/${params.slug}`,
                'bn': `${baseUrl}/bn/blog/${params.slug}`,
                'ur': `${baseUrl}/ur/blog/${params.slug}`,
                'tl': `${baseUrl}/tl/blog/${params.slug}`,
            },
        },
    }
}

export default function BlogDetailPage({ params }: { params: { lang: Language; slug: string } }) {
    const post = posts.find(p => p.slug === params.slug)

    if (!post) {
        notFound()
    }

    const homeUrl = params.lang === 'en' ? '/blog' : `/${params.lang}/blog`
    const categoryUrl = `${homeUrl}?category=${encodeURIComponent(post.category)}`

    return (
        <I18nProvider>
            <ClientWrapper>
                <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                    <Header />

                    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
                        <article className="max-w-4xl mx-auto px-6">
                            {/* Breadcrumbs */}
                            <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 flex-wrap">
                                <a href={homeUrl} className="text-blue-600 dark:text-blue-400 hover:underline">
                                    Home
                                </a>
                                <span>{'>'}</span>
                                <a href={categoryUrl} className="text-blue-600 dark:text-blue-400 hover:underline">
                                    {post.category}
                                </a>
                                <span>{'>'}</span>
                                <span className="text-gray-800 dark:text-gray-300">{post.title}</span>
                            </nav>

                            {/* Cover Image */}
                            <div className="mb-8 rounded-2xl overflow-hidden">
                                <img
                                    src={post.cover}
                                    alt={post.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                                {post.title}
                            </h1>

                            {/* Meta */}
                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                                <span>By {post.author}</span>
                                <span>•</span>
                                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                                <span>•</span>
                                <span>{post.category}</span>
                            </div>

                            {/* Content */}
                            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                                {post.content.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

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
                    </main>

                    <Footer />
                </div>
            </ClientWrapper>
        </I18nProvider>
    )
}
