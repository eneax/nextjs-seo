import { Metadata } from "next";
import Link from "next/link";

import { products } from "../data";

interface ProductPageProps {
  params: {
    id: string;
  };
}

interface ProductProps {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  inStock: boolean;
  rating: number;
  reviews: number;
  features: string[];
}

function getProductStructuredData(product: ProductProps) {
  const url = `https://nextjs-seo-x.vercel.app/products/${product.id}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Metadata Course Store",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
      bestRating: 5,
      worstRating: 1,
    },
    additionalProperty: product.features.map((feature) => ({
      "@type": "PropertyValue",
      name: "Feature",
      value: feature,
    })),
    url: url,
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((product) => product.id === id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
      alternates: {
        canonical: `https://nextjs-seo-x.vercel.app/products/${id}`,
      },
    };
  }

  return {
    title: `${product.name} - ${product.brand} | NextSEO`,
    description: `${product.description} Price: $${product.price}. ${
      product.inStock ? "In Stock" : "Out of Stock"
    }. Rating: ${product.rating}/5 stars.`,
    keywords: [product.category, product.brand, product.name.toLowerCase()],
    alternates: {
      canonical: `https://nextjs-seo-x.vercel.app/products/${id}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  const structuredData = getProductStructuredData(product);

  return (
    <main className="bg-white grid h-screen place-content-top">
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
                  href="/products"
                  className="block transition-colors hover:text-gray-900"
                >
                  Products
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
                  href={`/products/${product.id}`}
                  className="block transition-colors hover:text-gray-900"
                >
                  {product.name}
                </Link>
              </li>
            </ol>
          </nav>

          <div className="space-y-4 md:space-y-8">
            <div className="max-w-prose">
              <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                {product.name}
              </h1>

              <p className="mt-4 text-pretty text-gray-700">
                {product.description}
              </p>
            </div>

            <div className="flow-root">
              <dl className="-my-3 divide-y divide-gray-200 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Brand</dt>

                  <dd className="text-gray-700 sm:col-span-2">
                    {product.brand}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Category</dt>

                  <dd className="text-gray-700 sm:col-span-2">
                    {product.category}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Price</dt>

                  <dd className="text-gray-700 sm:col-span-2">
                    ${product.price}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Availability</dt>

                  <dd className="text-gray-700 sm:col-span-2">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Rating</dt>

                  <dd className="text-gray-700 sm:col-span-2">
                    {product.rating} / 5
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Reviews</dt>

                  <dd className="text-gray-700 sm:col-span-2">
                    {product.reviews}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Features</dt>

                  <dd className="text-gray-700 sm:col-span-2">
                    <ul className="list-disc pl-5 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
