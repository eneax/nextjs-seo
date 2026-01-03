import { Metadata } from "next";
import { posts } from "../data";

interface BlogPostPageProps {
  params: {
    slug: string;
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

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-6">
        <a
          href="/blog"
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          Back to Blog
        </a>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-4">
            <p>
              By {post.author} • {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
          <p className="text-lg text-gray-700">{post.excerpt}</p>
        </header>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
