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
    <main className="bg-white pb-8">
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-8">
            <div className="max-w-prose">
              <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                About Next.js SEO
              </h1>

              <p className="mt-4 text-pretty text-gray-700">
                This project is designed to showcase how to improve your Next.js
                app so that it get indexed faster on search engines and optimize
                for Core Web Vitals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <span className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex items-center">
        <span className="h-px flex-1 bg-gray-300" />
      </span>

      {/* Rendering Strategies and Caching */}
      <section className="mx-auto max-w-7xl px-4 lg:py-16 sm:px-6 lg:px-8">
        <div className="max-w-prose">
          <h2 className="text-xl/tight font-bold text-gray-900 sm:text-2xl">
            Rendering Strategies and Caching
          </h2>

          <p className="mt-4 text-pretty text-gray-700">
            The most important thing for SEO is that page data and metadata is
            available on page load without JavaScript. Next.js allows you to
            choose different rendering methods on a per-page basis.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Static Generation (SSG)
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              Pre-renders pages at build time, resulting in fast load times and
              improved SEO. Ideal for pages with static content that does not
              change often (e.g., static marketing pages and blog posts).
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Incremental Static Regeneration (ISR)
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              Allows you to update static pages after the site has been built by
              specifying a revalidation time. This ensures that your content
              remains fresh without sacrificing performance (e.g., product
              listings with frequent price updates).
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Server Rendering (SSR)
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              Renders pages on each request, ensuring that users and search
              engine bots always receive the most up-to-date content. Suitable
              for dynamic content that changes frequently (e.g., news feed).
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Client Side Rendering (CSR)
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              It allows websites to be entirely rendered in the browser with
              JavaScript. On initial page load a single HTML file is generally
              served with little to no content until you fetch the JavaScript
              and the browser compiles everything (e.g., account dashboard). Not
              recommended for optimal SEO.
            </p>
          </div>
        </div>
      </section>

      <span className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex items-center">
        <span className="h-px flex-1 bg-gray-300" />
      </span>

      {/* Server Components */}
      <section className="mx-auto max-w-7xl px-4 lg:py-16 sm:px-6 lg:px-8">
        <div className="max-w-prose">
          <h2 className="text-xl/tight font-bold text-gray-900 sm:text-2xl">
            Server Components
          </h2>

          <p className="mt-4 text-pretty text-gray-700">
            Use server components whenever possible to ensure that search engine
            bots can easily access and index your content.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Individual client components
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              Do not turn the entire page into a client component. When you need
              to add some interactivity (buttons, hooks), use separate client
              components.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              &quot;use client&quot;
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              The{" "}
              <a
                href="https://github.com/eneax/nextjs-seo/blob/bdff7a193d79ecf4eb0b68ccfc1dabf7916cb29f/app/components/Navigation.tsx"
                className="underline"
              >
                `Navigation`
              </a>{" "}
              component is a client component because it uses the `usePathname`
              hook.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Client side rendering
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              When a search engine bot visits your page, it wants to see the
              static HTML with all the tags, headers, metadata, links, etc. If
              your page is client side rendered, the info needed by the bot is
              not there yet. It will be added later by making a JavaScript call.
            </p>
          </div>
        </div>
      </section>

      <span className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex items-center">
        <span className="h-px flex-1 bg-gray-300" />
      </span>

      {/* Static Metadata */}
      <section className="mx-auto max-w-7xl px-4 lg:py-16 sm:px-6 lg:px-8">
        <div className="max-w-prose">
          <h2 className="text-xl/tight font-bold text-gray-900 sm:text-2xl">
            Static Metadata
          </h2>

          <p className="mt-4 text-pretty text-gray-700">
            Metadata is info about your website that you provide in the `head`
            section of your page. It includes title, description, keywords, Open
            Graph tags, Twitter cards, robots instructions, and more. Static
            metadata ensures that search engine bots can easily access and index
            your content.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Metadata object
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              In Next.js, you can define metadata statically by exporting a{" "}
              <a
                href="https://github.com/eneax/nextjs-seo/blob/bdff7a193d79ecf4eb0b68ccfc1dabf7916cb29f/app/about/page.tsx"
                className="underline"
              >
                `metadata`
              </a>{" "}
              object from your page or layout file.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              `head` section
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              This `metadata` object is then automatically added to the `head`
              section of your page during server-side rendering.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Generate Open Graph Meta Tags
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              Preview and Generate Open Graph Meta Tags in{" "}
              <a href="https://www.opengraph.xyz" className="underline">
                OpenGraph.xyz
              </a>
            </p>
          </div>
        </div>
      </section>

      <span className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex items-center">
        <span className="h-px flex-1 bg-gray-300" />
      </span>

      {/* Dynamic Metadata */}
      <section className="mx-auto max-w-7xl px-4 lg:py-16 sm:px-6 lg:px-8">
        <div className="max-w-prose">
          <h2 className="text-xl/tight font-bold text-gray-900 sm:text-2xl">
            Dynamic Metadata
          </h2>

          <p className="mt-4 text-pretty text-gray-700">
            While static metadata is great for most use cases, sometimes you
            need dynamic metadata that changes based on the content of the page.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              `generateMetadata` function
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              In Next.js, you can create a{" "}
              <a
                href="https://github.com/eneax/nextjs-seo/blob/bdff7a193d79ecf4eb0b68ccfc1dabf7916cb29f/app/blog/%5Bslug%5D/page.tsx"
                className="underline"
              >
                `generateMetadata`
              </a>{" "}
              function that generates metadata dynamically based on the page
              `props`.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Dynamic routes
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              This is especially useful for pages with dynamic routes, such as
              product pages or blog posts.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Unique titles and descriptions
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              Dynamic metadata allows you to provide unique titles,
              descriptions, and Open Graph tags for each page, improving SEO and
              social media sharing.
            </p>
          </div>
        </div>
      </section>

      <span className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex items-center">
        <span className="h-px flex-1 bg-gray-300" />
      </span>

      {/* Robots */}
      <section className="mx-auto max-w-7xl px-4 lg:py-16 sm:px-6 lg:px-8">
        <div className="max-w-prose">
          <h2 className="text-xl/tight font-bold text-gray-900 sm:text-2xl">
            Robots
          </h2>

          <p className="mt-4 text-pretty text-gray-700">
            The `robots` field in the metadata object allows you to control how
            search engine bots interact with your page.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Custom robots rules
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              You can specify whether you want the page to be indexed, whether
              links should be followed, and provide specific instructions for
              each bot (e.g., Googlebot).
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Dynamic robots rules
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              This helps you manage your site presence in search engine results
              and optimize crawling behavior.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Global robots rules
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              In the{" "}
              <a
                href="https://github.com/eneax/nextjs-seo/blob/bdff7a193d79ecf4eb0b68ccfc1dabf7916cb29f/app/robots.ts"
                className="underline"
              >
                `app/robots.ts`
              </a>{" "}
              file, you can define global robots rules for your entire site.
            </p>
          </div>
        </div>
      </section>

      <span className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex items-center">
        <span className="h-px flex-1 bg-gray-300" />
      </span>

      {/* Sitemap */}
      <section className="mx-auto max-w-7xl px-4 lg:py-16 sm:px-6 lg:px-8">
        <div className="max-w-prose">
          <h2 className="text-xl/tight font-bold text-gray-900 sm:text-2xl">
            Sitemap
          </h2>

          <p className="mt-4 text-pretty text-gray-700">
            A sitemap is an XML file that lists all the important pages on your
            site.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Importance of sitemap
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              This ensures that search engines can easily find all the important
              pages on your site.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Dynamic sitemap
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              In Next.js, you can create a dynamic sitemap by generating the XML
              file based on your site routes and content.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              `app/sitemap.ts` file
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              The{" "}
              <a
                href="https://github.com/eneax/nextjs-seo/blob/bdff7a193d79ecf4eb0b68ccfc1dabf7916cb29f/app/sitemap.ts"
                className="underline"
              >
                `app/sitemap.ts`
              </a>{" "}
              file demonstrates how to create a sitemap that updates
              automatically as you add or remove pages.
            </p>
          </div>
        </div>
      </section>

      <span className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex items-center">
        <span className="h-px flex-1 bg-gray-300" />
      </span>

      {/* Canonical URLs */}
      <section className="mx-auto max-w-7xl px-4 lg:py-16 sm:px-6 lg:px-8">
        <div className="max-w-prose">
          <h2 className="text-xl/tight font-bold text-gray-900 sm:text-2xl">
            Canonical URLs
          </h2>

          <p className="mt-4 text-pretty text-gray-700">
            Canonical URLs help prevent duplicate content issues by specifying
            the preferred version of a page.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              `alternates` section
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              In Next.js, you can define canonical URLs in the `alternates`
              section of the `metadata` object.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Prevent duplicate content
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              This ensures that search engines understand which version of a
              page to index and display in search results.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Best practices
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              Always point the canonical URL to the main version of the page,
              without any query parameters or session IDs.
            </p>
          </div>
        </div>

        <div className="max-w-prose">
          <p className="mt-4 text-pretty text-gray-700">
            Example canonical URLs for a product page with different query
            parameters:
          </p>

          <ul className="list-disc pl-6 mb-4 text-pretty text-gray-700">
            <li>https://yoursite.com/products/laptop-pro</li>
            <li>https://yoursite.com/products/laptop-pro?color=black</li>
            <li>https://yoursite.com/products/laptop-pro?size=13</li>
            <li>
              https://yoursite.com/products/laptop-pro?color=black&size=13
            </li>
          </ul>

          <p className="mb-4 text-pretty text-gray-700">
            The canonical URL should always point to the main product page
            without any query parameters:
          </p>
          <ul className="list-disc pl-6 mb-4 text-pretty text-gray-700">
            <li>https://yoursite.com/products/laptop-pro</li>
          </ul>
        </div>
      </section>

      <span className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex items-center">
        <span className="h-px flex-1 bg-gray-300" />
      </span>

      {/* JSON-LD */}
      <section className="mx-auto max-w-7xl px-4 lg:py-16 sm:px-6 lg:px-8">
        <div className="max-w-prose">
          <h2 className="text-xl/tight font-bold text-gray-900 sm:text-2xl">
            JSON-LD
          </h2>

          <p className="mt-4 text-pretty text-gray-700">
            JSON-LD (JavaScript Object Notation for Linked Data) is a format for
            structuring data on the web.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Importance of JSON-LD
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              It helps search engines and LLMs understand the content and
              context of your pages better. It provides additional information
              about your content, such as products, reviews, events, blog posts,
              and more.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Adding JSON-LD
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              In Next.js, the best practice is to render structured data as a
              `script` tag in `layout.js` or `page.js` components.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Static and Dynamic Schema
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              You can use the{" "}
              <a
                href="https://technicalseo.com/tools/schema-markup-generator"
                className="underline"
              >
                JSON-LD Generator Tool
              </a>{" "}
              to generate the static schema for your website. For dynamic
              schema, use the{" "}
              <a
                href="https://github.com/garmeeh/next-seo"
                className="underline"
              >
                next-seo
              </a>{" "}
              library.
            </p>
          </div>
        </div>
      </section>

      <span className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex items-center">
        <span className="h-px flex-1 bg-gray-300" />
      </span>

      {/* Web Performance & Core Web Vitals */}
      <section className="mx-auto max-w-7xl px-4 lg:py-16 sm:px-6 lg:px-8">
        <div className="max-w-prose">
          <h2 className="text-xl/tight font-bold text-gray-900 sm:text-2xl">
            Web Performance & Core Web Vitals
          </h2>

          <p className="mt-4 text-pretty text-gray-700">
            Core Web Vitals are a set of performance metrics that measure user
            experience on your website. They measure loading, interactivity, and
            visual stability.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              `next/image`
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              Automatically serves correctly sized images for each device,
              prevents layout shift and only loads images when they enter the
              viewport using native browser lazy loading.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">`next/font`</h3>

            <p className="mt-2 text-pretty text-gray-700">
              Automatically optimizes your fonts and removes external network
              requests for improved privacy and performance.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">`next/link`</h3>

            <p className="mt-2 text-pretty text-gray-700">
              Automatically prefetches routes linked with the `Link` component
              when they enter the user viewport.
            </p>
          </div>
        </div>
      </section>

      <span className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex items-center">
        <span className="h-px flex-1 bg-gray-300" />
      </span>

      {/* Monitoring Tools */}
      <section className="mx-auto max-w-7xl px-4 lg:py-16 sm:px-6 lg:px-8">
        <div className="max-w-prose">
          <h2 className="text-xl/tight font-bold text-gray-900 sm:text-2xl">
            Monitoring Tools
          </h2>

          <p className="mt-4 text-pretty text-gray-700">
            Automate testing to catch problems before they reach production and
            monitor the performance of your site over time.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Lighthouse CI on every pull request
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              It automatically audits your pages in headless Chrome and fails
              builds when performance or SEO scores drop below your threshold.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              ESLint rules to prevent SEO mistakes
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              The{" "}
              <a
                href="https://nextjs.org/docs/app/api-reference/config/eslint#setup-eslint"
                className="underline"
              >
                `next/core-web-vitals`
              </a>{" "}
              preset blocks unoptimized images and synchronous script tags
              before they reach production.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Continuous SEO Health Monitoring
            </h3>

            <p className="mt-2 text-pretty text-gray-700">
              <a
                href="https://search.google.com/search-console/about"
                className="underline"
              >
                Google Search Console
              </a>{" "}
              provides real-time reports on crawl errors, Core Web Vitals
              trends, sitemap issues, and more.{" "}
              <a href="https://pagespeed.web.dev" className="underline">
                PageSpeed Insights
              </a>{" "}
              for suggestions on how to make your web site faster. Catch
              regressions faster by connecting the{" "}
              <a
                href="https://nextjs.org/docs/app/api-reference/functions/use-report-web-vitals#web-vitals"
                className="underline"
              >
                `next/web-vitals`
              </a>{" "}
              hook to your analytics.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
