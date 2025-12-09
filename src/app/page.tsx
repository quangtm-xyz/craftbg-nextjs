import { I18nProvider } from '../lib/i18n'
import Header from '../components/Header'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import HomeClient from '../components/HomeClient'
import ClientWrapper from '../components/ClientWrapper'
import SEOLeft from '../components/SEOLeft'

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

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                                <div className="text-4xl mb-4">⚡</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
                                <p className="text-gray-600 dark:text-gray-400">Remove backgrounds in seconds with AI technology</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                                <div className="text-4xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Precise Results</h3>
                                <p className="text-gray-600 dark:text-gray-400">Advanced AI ensures accurate edge detection</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                                <div className="text-4xl mb-4">💯</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">100% Free</h3>
                                <p className="text-gray-600 dark:text-gray-400">No watermarks, no sign-up required</p>
                            </div>
                        </div>

                        <About />
                        <FAQ />
                    </main>

                    <Footer />
                </div>
            </ClientWrapper>
        </I18nProvider>
    )
}
