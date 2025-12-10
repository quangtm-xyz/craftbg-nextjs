import type { Metadata } from 'next'
import { I18nProvider } from '../../../../../lib/i18n'
import Header from '../../../../../components/Header'
import Footer from '../../../../../components/Footer'
import ClientWrapper from '../../../../../components/ClientWrapper'
import BlogDetailContent from '../../../../../components/BlogDetailContent'
import posts from '../../../../../../public/data/blog-posts.json'
import { notFound } from 'next/navigation'

type Language = 'en' | 'vi' | 'hi' | 'id' | 'bn' | 'ur' | 'tl'
const languages: Language[] = ['en', 'vi', 'hi', 'id', 'bn', 'ur', 'tl']

const baseUrl = 'https://craftbg.com'

function slugify(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}

export async function generateStaticParams() {
    const params: { lang: Language; category: string; slug: string }[] = []
    languages.forEach(lang => {
        posts.forEach(post => {
            params.push({
                lang,
                category: slugify(post.category),
                slug: post.slug
            })
        })
    })
    return params
}

export async function generateMetadata({ params }: { params: { lang: Language; category: string; slug: string } }): Promise<Metadata> {
    const post = posts.find(p => p.slug === params.slug)
    if (!post) return {}

    const categorySlug = slugify(post.category)
    const canonicalUrl = params.lang === 'en'
        ? `${baseUrl}/en/blog/${categorySlug}/${params.slug}`
        : `${baseUrl}/${params.lang}/blog/${categorySlug}/${params.slug}`

    return {
        title: `${post.title} - CraftBG Blog`,
        description: post.excerpt,
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'x-default': `${baseUrl}/en/blog/${categorySlug}/${params.slug}`,
                'en': `${baseUrl}/en/blog/${categorySlug}/${params.slug}`,
                'vi': `${baseUrl}/vi/blog/${categorySlug}/${params.slug}`,
                'hi': `${baseUrl}/hi/blog/${categorySlug}/${params.slug}`,
                'id': `${baseUrl}/id/blog/${categorySlug}/${params.slug}`,
                'bn': `${baseUrl}/bn/blog/${categorySlug}/${params.slug}`,
                'ur': `${baseUrl}/ur/blog/${categorySlug}/${params.slug}`,
                'tl': `${baseUrl}/tl/blog/${categorySlug}/${params.slug}`,
            },
        },
    }
}

export default function BlogDetailPage({ params }: { params: { lang: Language; category: string; slug: string } }) {
    const post = posts.find(p => p.slug === params.slug)

    if (!post) {
        notFound()
    }

    return (
        <I18nProvider>
            <ClientWrapper>
                <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                    <Header />
                    <BlogDetailContent lang={params.lang} slug={params.slug} />
                    <Footer />
                </div>
            </ClientWrapper>
        </I18nProvider>
    )
}
