import { I18nProvider } from '../../../lib/i18n'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ClientWrapper from '../../../components/ClientWrapper'
import BlogContent from '../../../components/BlogContent'

type Language = 'en' | 'vi' | 'hi' | 'id' | 'bn' | 'ur' | 'tl'

const languages: Language[] = ['en', 'vi', 'hi', 'id', 'bn', 'ur', 'tl']

export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }))
}

export default function BlogPage({ params }: { params: { lang: Language } }) {
    return (
        <I18nProvider>
            <ClientWrapper>
                <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                    <Header />
                    <BlogContent lang={params.lang} />
                    <Footer />
                </div>
            </ClientWrapper>
        </I18nProvider>
    )
}
