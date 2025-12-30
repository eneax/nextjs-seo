import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - NextSEO",
  description: "Learn more about Next.js SEO techniques and best practices.",
  keywords: ["Next.js", "SEO", "Metadata", "Static Site", "Web Vitals"],
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
    canonical: "https://nextseo.com/about",
  },
};

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

        <h2 className="text-2xl font-semibold mb-3">Static Metadata</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Metadata is info about your app that you provide in the `head`
            section of your page.
          </li>
          <li>
            It includes title, description, keywords, Open Graph tags, Twitter
            cards, robots instructions, and more.
          </li>
          <li>
            In Next.js, you can define metadata statically by exporting a
            `metadata` object from your page or layout file.
          </li>
          <li>
            This metadata is then automatically added to the `head` section of
            your page during server-side rendering.
          </li>
          <li>
            Static metadata ensures that search engine bots can easily access
            and index your content.
          </li>
          <li>
            Preview and Generate Open Graph Meta Tags in{" "}
            <a href="https://www.opengraph.xyz" className="underline">
              OpenGraph.xyz
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
