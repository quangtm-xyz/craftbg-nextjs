import { I18nProvider } from '../lib/i18n'
import Header from '../components/Header'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import HomeClient from '../components/HomeClient'
import ClientWrapper from '../components/ClientWrapper'
import SEOLeft from '../components/SEOLeft'
import FeaturesSection from '../components/FeaturesSection'

export default function Home() {
    return (
        <I18nProvider>
            <ClientWrapper>
                <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                    <Header />

                    <main className="max-w-7xl mx-auto px-4 py-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6">
                            <SEOLeft />
                            <HomeClient />
                        </div>

                        <FeaturesSection />

                        <About />
                        <FAQ />
                    </main>

                    <Footer />
                </div>
            </ClientWrapper>
        </I18nProvider>
    )
}
