import { redirect } from 'next/navigation'

export default function RemoveBackgroundPage({ params }: { params: { lang: string } }) {
    redirect(`/${params.lang}`)
}
