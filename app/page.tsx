import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home - NextSEO",
  description: "Learn more about Next.js SEO techniques and best practices.",
  keywords: ["Next.js", "SEO", "Metadata", "Static Site", "Web Vitals"],
  openGraph: {
    title: "Next.js SEO",
    description: "Master metadata, robots, sitemaps, and more.",
    siteName: "nextjs-seo-x.vercel.app",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js SEO",
    description: "Master metadata, robots, sitemaps, and more.",
    creator: "@eneax",
    images: ["https://nextjs-seo-x.vercel.app/seo.png"],
  },
  robots: {
    index: true, // you want this page to appear in search results
    follow: true, // you want search engines to follow links on this page
    nocache: false, // prevent search engines from caching this page (no caching if page is dynamic and changes often)
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1, // how many characters of text to show in search results (-1 means no limit)
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://nextjs-seo-x.vercel.app/",
  },
};

export default function Home() {
  return (
    <main className="bg-white grid h-[calc()100vh-64px] place-content-center">
      <section className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Learn Next.js
            <strong className="text-indigo-600"> SEO </strong>
            techniques and best practices
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Get indexed faster on search engines and optimize for Core Web
            Vitals
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <Link
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="/about"
            >
              Get Started
            </Link>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="https://github.com/eneax/nextjs-seo"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
