import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { configAr } from '@/config/professional-ar'
import { ConfigProvider } from '@/lib/config-context'
import '../globals.css'
import './arabic.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(configAr.meta.url),
  title: configAr.meta.title,
  description: configAr.meta.description,
  openGraph: {
    title: configAr.meta.title,
    description: configAr.meta.description,
    url: configAr.meta.url,
    siteName: configAr.meta.name,
    images: [{ url: configAr.meta.ogImage }],
    type: 'website',
  },
}

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="overflow-x-hidden">
        <ConfigProvider config={configAr as any}>{children}</ConfigProvider>
      </body>
    </html>
  )
}
