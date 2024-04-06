import "@/styles/globals.css"
import localFont from "next/font/local"
import { ReactNode } from "react"
import { locales } from "@/config"
import { Inter as FontSans } from "next/font/google"
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/data/config/site"
import { getLocalePrimaryDialects } from "@/lib/locales"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Navbar } from "@/components/navbar/navbar"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})
const fontHeading = localFont({
  src: "../../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})
type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: t(siteConfig.title),
    description: t(siteConfig.description),
    keywords: t(siteConfig.keywords),
    authors: [
      {
        name: siteConfig.author,
        url: siteConfig.authorUrl,
      },
    ],
    openGraph: {
      title: t(siteConfig.title),
      description: t(siteConfig.description),
      url: "./",
      siteName: t(siteConfig.title),
      images: [siteConfig.socialBanner],
      locale: locale,
      type: "website",
    },
    alternates: {
      canonical: "./",
      types: {
        "application/rss+xml": `${siteConfig.siteUrl}/feed.xml`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: t(siteConfig.title),
      card: "summary_large_image",
      images: [siteConfig.socialBanner],
      description: siteConfig.description,
    },
    icons: {
      icon: "/favicons/favicon.ico",
      shortcut: "/favicons/favicon-16x16.png",
      apple: "/favicons/apple-touch-icon.png",
    },
    manifest: `${siteConfig.siteUrl}/site.webmanifest`,
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html
      lang={getLocalePrimaryDialects(locale)}
      className={`scroll-smooth`}
      suppressHydrationWarning
    >
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />

      <link rel="shortcut icon" href="/favicons/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicons/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />

      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              {children}
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}