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

        <h2 className="text-2xl font-semibold mb-3">Dynamic Metadata</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            While static metadata is great for most use cases, sometimes you
            need dynamic metadata that changes based on the content of the page.
          </li>
          <li>
            In Next.js, you can create a `generateMetadata` function that
            generates metadata dynamically based on the page `props`.
          </li>
          <li>
            This is especially useful for pages with dynamic routes, such as
            product pages or blog posts.
          </li>
          <li>
            Dynamic metadata allows you to provide unique titles, descriptions,
            and Open Graph tags for each page, improving SEO and social media
            sharing.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Robots</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            The `robots` field in the metadata object allows you to control how
            search engine bots interact with your page.
          </li>
          <li>
            You can specify whether you want the page to be indexed, whether
            links should be followed, and provide specific instructions for each
            bot (e.g., Googlebot).
          </li>
          <li>
            This helps you manage your site presence in search engine results
            and optimize crawling behavior.
          </li>
          <li>
            In the `app/robots.ts` file, you can define global robots rules for
            your entire site.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Sitemap</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            A sitemap is an XML file that lists all the important pages on your
            site.
          </li>
          <li>
            This ensures that search engines can easily find all the important
            pages on your site.
          </li>
          <li>
            In Next.js, you can create a dynamic sitemap by generating the XML
            file based on your site routes and content.
          </li>
          <li>
            The `app/sitemap.ts` file demonstrates how to create a sitemap that
            updates automatically as you add or remove pages.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Canonical URLs</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Canonical URLs help prevent duplicate content issues by specifying
            the preferred version of a page.
          </li>
          <li>
            In Next.js, you can define canonical URLs in the `alternates`
            section of the metadata object.
          </li>
          <li>
            This ensures that search engines understand which version of a page
            to index and display in search results.
          </li>
          <li>
            Always point the canonical URL to the main version of the page,
            without any query parameters or session IDs.
          </li>
        </ul>

        <p className="mb-4">
          Example canonical URLs for a product page with different query
          parameters:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>https://yoursite.com/products/laptop-pro</li>
          <li>https://yoursite.com/products/laptop-pro?color=black</li>
          <li>https://yoursite.com/products/laptop-pro?size=13</li>
          <li>https://yoursite.com/products/laptop-pro?color=black&size=13</li>
        </ul>

        <p className="mb-4">
          The canonical URL should always point to the main product page without
          any query parameters:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>https://yoursite.com/products/laptop-pro</li>
        </ul>
      </div>
    </div>
  );
}
