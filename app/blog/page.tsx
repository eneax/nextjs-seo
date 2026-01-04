import { Metadata } from "next";
import Link from "next/link";

import { posts } from "./data";

export const metadata: Metadata = {
  title: "Blog - NextSEO",
  description:
    "Discover insightful articles and updates on Next.js SEO best practices.",
  keywords: ["Next.js", "SEO", "Metadata", "Static Site", "Web Vitals", "Blog"],
  openGraph: {
    title: "Next.js SEO",
    description: "Master metadata, robots, sitemaps, and more.",
    siteName: "nextseo.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js SEO",
    description: "Master metadata, robots, sitemaps, and more.",
    creator: "@eneax",
    images: ["https://example.com/seo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://nextseo.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="bg-white grid h-screen place-content-top">
      <section>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-8">
            <div className="max-w-prose">
              <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Blog
              </h1>

              <p className="mt-4 text-pretty text-gray-700">
                This page demonstrates a static route with dynamic content that
                links to individual blog posts.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {posts.map((post) => (
              <article key={post.id}>
                <Link
                  href={`/blog/${post.id}`}
                  className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
                >
                  <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                    <div className="mt-4 sm:mt-0">
                      <h2 className="text-lg font-medium text-pretty text-gray-900">
                        {post.title}
                      </h2>

                      <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4 lg:gap-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-700">
                        By {post.author}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-700">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
