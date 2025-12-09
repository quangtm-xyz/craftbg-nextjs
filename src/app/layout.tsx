import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Background Remover AI - Remove Background from Image Free 2025',
    description: 'Remove image backgrounds instantly with AI. 100% Free, HD quality, no signup required. Best background remover tool 2025.',
    verification: {
        google: '6AzTJM60jDTgj_XspqhRf2jMeOVnN881jDA-weE32qI',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    manifest: '/manifest.json',
    icons: {
        icon: '/favicon.jpg',
        apple: '/favicon.jpg',
    },
    openGraph: {
        type: 'website',
        url: 'https://yourdomain.vercel.app/',
        title: 'Background Remover AI - Remove Background from Image Free 2025',
        description: 'Remove image backgrounds instantly with AI. 100% Free, HD quality, no signup required.',
        images: [
            {
                url: 'https://yourdomain.vercel.app/og-preview.jpg',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Background Remover AI - Remove Background from Image Free 2025',
        description: 'Remove image backgrounds instantly with AI. 100% Free, HD quality, no signup required.',
        images: ['https://yourdomain.vercel.app/og-preview.jpg'],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" dir="ltr">
            <head>
                <link rel="preconnect" href="https://project-bg-remover-1.onrender.com" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9947496746741557" crossOrigin="anonymous"></script>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Background Remover AI",
                            "description": "Remove image backgrounds instantly with AI. 100% Free.",
                            "publisher": {
                                "@type": "Organization",
                                "name": "Background Remover AI",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://yourdomain.vercel.app/logo.png"
                                }
                            }
                        })
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "How to remove background from images?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Just drag & drop or click to upload your image. AI will remove background in seconds."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What is this background remover?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "An AI-powered tool that automatically removes background from images in one click."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is this tool completely free?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes! Unlimited usage, no signup, no watermark on preview."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can I download in HD quality?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, click \"Download Image\" to get full HD PNG with transparent background."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How to process bulk images?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Currently one by one, but we're working on batch processing."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Does it support 4K / Ultra HD photos?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, up to 25 megapixels."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Why is this one of the best background removers?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Powered by remove.bg technology – the industry leader with perfect hair & edge detection."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can I use it on mobile?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, fully responsive on phone and tablet."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Which images work best?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Clear subject with defined edges (people, products, cars, animals)."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Which images may not work well?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Blurry edges, very complex hair, or subject color too similar to background."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What if the result is not perfect?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Try another photo or zoom in to check details."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Why does transparent background show black in some editors?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Some apps (like Canva) don't support transparency preview. Use Photoshop, Figma, or download and test."
                                    }
                                }
                            ]
                        })
                    }}
                />
            </head>
            <body style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif" }}>{children}</body>
        </html>
    )
}
