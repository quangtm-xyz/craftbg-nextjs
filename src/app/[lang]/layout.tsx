import type { Metadata } from 'next'

const languages = ['en', 'vi', 'hi', 'id', 'bn', 'ur', 'tl'] as const
type Language = typeof languages[number]

const baseUrl = 'https://craftbg.com'

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
    const { lang } = params
    const canonicalUrl = lang === 'en' ? baseUrl : `${baseUrl}/${lang}`

    return {
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'x-default': baseUrl,
                'en': baseUrl,
                'vi': `${baseUrl}/vi`,
                'hi': `${baseUrl}/hi`,
                'id': `${baseUrl}/id`,
                'bn': `${baseUrl}/bn`,
                'ur': `${baseUrl}/ur`,
                'tl': `${baseUrl}/tl`,
            },
        },
    }
}

export default function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { lang: Language }
}) {
    return children
}

export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }))
}
