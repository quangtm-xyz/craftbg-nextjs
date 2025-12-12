import type { Metadata } from 'next'

const languages = ['en', 'vi', 'hi', 'id', 'bn', 'ur', 'tl'] as const
type Language = typeof languages[number]

const baseUrl = 'https://craftbg.com'

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
    const { lang } = params
    const canonicalUrl = lang === 'en' ? baseUrl : `${baseUrl}/${lang}`

    return {
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
            url: canonicalUrl,
            title: 'Background Remover AI - Remove Background from Image Free 2025',
            description: 'Remove image backgrounds instantly with AI. 100% Free, HD quality, no signup required.',
            images: [
                {
                    url: `${baseUrl}/og-preview.jpg`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Background Remover AI - Remove Background from Image Free 2025',
            description: 'Remove image backgrounds instantly with AI. 100% Free, HD quality, no signup required.',
            images: [`${baseUrl}/og-preview.jpg`],
        },
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
    return (
        <>
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
                                "url": `${baseUrl}/logo.png`
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "CraftBG - Background Remover AI",
                        "url": baseUrl,
                        "logo": `${baseUrl}/logo.png`,
                        "description": "AI-powered background removal tool. Remove image backgrounds instantly with professional quality.",
                        "foundingDate": "2024",
                        "sameAs": [
                            "https://www.facebook.com/craftbg",
                            "https://twitter.com/craftbg",
                            "https://www.linkedin.com/company/craftbg"
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "Customer Support",
                            "email": "support@craftbg.com",
                            "availableLanguage": ["English", "Vietnamese", "Hindi", "Indonesian", "Bengali", "Urdu", "Tagalog"]
                        }
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "CraftBG Background Remover",
                        "applicationCategory": "MultimediaApplication",
                        "operatingSystem": "Web Browser",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "ratingCount": "15420",
                            "bestRating": "5",
                            "worstRating": "1"
                        },
                        "description": "Free AI-powered background remover. Remove backgrounds from images instantly with HD quality. No signup required.",
                        "screenshot": `${baseUrl}/og-preview.jpg`,
                        "featureList": [
                            "AI-powered background removal",
                            "HD quality output",
                            "No signup required",
                            "Free unlimited usage",
                            "Support up to 25MP images",
                            "Mobile responsive",
                            "Instant processing"
                        ],
                        "browserRequirements": "Requires JavaScript. Modern browser recommended."
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Remove Background from Images with AI",
                        "description": "Step-by-step guide to remove background from any image using CraftBG AI tool",
                        "image": `${baseUrl}/og-preview.jpg`,
                        "totalTime": "PT30S",
                        "estimatedCost": {
                            "@type": "MonetaryAmount",
                            "currency": "USD",
                            "value": "0"
                        },
                        "tool": {
                            "@type": "HowToTool",
                            "name": "CraftBG Background Remover"
                        },
                        "step": [
                            {
                                "@type": "HowToStep",
                                "position": 1,
                                "name": "Upload Image",
                                "text": "Click the upload area or drag and drop your image. Supports JPG, PNG, and WebP formats up to 25MP.",
                                "image": `${baseUrl}/step1.jpg`
                            },
                            {
                                "@type": "HowToStep",
                                "position": 2,
                                "name": "AI Processing",
                                "text": "Wait a few seconds while our AI automatically detects and removes the background from your image.",
                                "image": `${baseUrl}/step2.jpg`
                            },
                            {
                                "@type": "HowToStep",
                                "position": 3,
                                "name": "Preview Result",
                                "text": "Review the result with transparent background. Use the before/after slider to compare.",
                                "image": `${baseUrl}/step3.jpg`
                            },
                            {
                                "@type": "HowToStep",
                                "position": 4,
                                "name": "Download",
                                "text": "Click 'Download Image' button to save your image with transparent background in HD PNG format.",
                                "image": `${baseUrl}/step4.jpg`
                            }
                        ]
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": baseUrl
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Background Remover",
                                "item": `${baseUrl}/remove-background`
                            }
                        ]
                    })
                }}
            />
            {children}
        </>
    )
}

export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }))
}
