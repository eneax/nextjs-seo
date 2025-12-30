export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          This project is designed to showcase how to improve your Next.js app
          so that it get indexed faster on search engines and optimize for Core
          Web Vitals.
        </p>
        <p className="mb-4">
          This page demonstrates how Next.js handles static routes and how you
          can add metadata like title, description, and Open Graph tags to
          improve search engine optimization.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Server Components</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Use server components whenever possible.</li>
          <li>
            When you need to add some interactivity (buttons, hooks), use
            separate client components.
          </li>
          <li>
            Do not turn the entire page into a client component. Create a new
            component and make it a client component by adding `use client` at
            the top of the file.
          </li>
          <li>
            The `Navigation` component is a client component because it uses the
            `usePathname` hook.
          </li>
          <li>
            Keep in mind that when a search engine bot visits your app, it wants
            to see the static HTML with all the tags, headers, metadata, links,
            etc.
          </li>
          <li>
            If your page is client side rendered, the info needed by the bot is
            not there yet. It will be added later by making a JavaScript call.
          </li>
        </ul>
      </div>
    </div>
  );
}
