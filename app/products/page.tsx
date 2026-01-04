import Link from "next/link";
import { Metadata } from "next";

import { products } from "./data";

export const metadata: Metadata = {
  title: "Products - NextSEO",
  description:
    "Explore our product range with detailed listings and SEO-optimized pages.",
  keywords: [
    "Next.js",
    "SEO",
    "Metadata",
    "Static Site",
    "Web Vitals",
    "Products",
  ],
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
    canonical: "https://nextseo.com/products",
  },
};

export default function ProductsPage() {
  return (
    <main className="bg-white grid h-screen place-content-top">
      <section>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-8">
            <div className="max-w-prose">
              <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Products
              </h1>

              <p className="mt-4 text-pretty text-gray-700">
                Discover our range of products! This page demonstrates a product
                listing with links to individual product pages.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
              >
                <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                  <div className="mt-4 sm:mt-0">
                    <h2 className="text-lg font-medium text-pretty text-gray-900">
                      {product.name}
                    </h2>

                    <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex gap-4 lg:gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-700">
                      ${product.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        product.inStock
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-xs text-gray-700">
                      {product.rating}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-700">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
