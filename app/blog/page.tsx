import { posts } from "./data";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-lg mb-8">
        This page demonstrates a static route with dynamic content that links to
        individual blog posts.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-3">
              <a
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {post.title}
              </a>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="text-sm text-gray-500">
              <p>By {post.author}</p>
              <p>{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
