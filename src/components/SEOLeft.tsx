'use client'

import { useTranslation } from '../lib/i18n'
import BeforeAfterToggle from './BeforeAfterToggle'

export default function SEOLeft() {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col items-center justify-center">
            <BeforeAfterToggle />
            <h1 className="mt-8 text-5xl md:text-6xl font-black leading-tight text-center">
                {t("hero_title_1")}<br />
                <span className="text-primary">{t("hero_title_2")}</span><br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600">{t("hero_title_3")}</span>
            </h1>
        </div>
    )
}
