import { Metadata } from "next";
import Link from "next/link";

import { posts } from "../data";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

function getBlogPostStructuredData(post: BlogPostProps) {
  const url = `https://nextseo.com/blog/${post.id}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "NextSEO",
      url: "https://nextseo.com",
    },
    datePublished: post.date,
    dateModified: post.date,
    url: url,
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((post) => post.id === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for does not exist.",
      alternates: {
        canonical: `https://nextseo.com/blog/${slug}`,
      },
    };
  }

  return {
    title: `${post.title} | NextSEO Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    keywords: ["blog", "nextjs", "seo", post.title.toLowerCase()],
    alternates: {
      canonical: `https://nextseo.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((post) => post.id === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
      </div>
    );
  }

  const structuredData = getBlogPostStructuredData(post);

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1 text-sm text-gray-700">
              <li>
                <Link
                  href="/blog"
                  className="block transition-colors hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>

              <li className="rtl:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </li>

              <li>
                <Link
                  href={`/blog/${post.id}`}
                  className="block transition-colors hover:text-gray-900"
                >
                  {post.title}
                </Link>
              </li>
            </ol>
          </nav>

          <article>
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                {post.title}
              </h1>
              <p className="mt-4 text-pretty text-gray-600">
                By {post.author} • {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="mt-4 text-pretty text-gray-700">{post.excerpt}</p>
            </header>

            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </section>
    </main>
  );
}
