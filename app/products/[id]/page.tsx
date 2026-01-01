import { Metadata } from "next";
import { products } from "../data";

interface ProductPageProps {
  params: {
    id: string;
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
    };
  }

  return {
    title: `${product.name} - ${product.brand} | NextSEO`,
    description: `${product.description} Price: $${product.price}. ${
      product.inStock ? "In Stock" : "Out of Stock"
    }. Rating: ${product.rating}/5 stars.`,
    keywords: [product.category, product.brand, product.name.toLowerCase()],
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

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-6">
        <a
          href="/products"
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          Back to Products
        </a>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <div className="mb-6">
            <span className="text-3xl font-bold text-green-600">
              ${product.price}
            </span>
            <span
              className={`ml-4 px-3 py-1 rounded-full text-sm ${
                product.inStock
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 font-semibold">{product.rating}</span>
              <span className="ml-2 text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-gray-600">Brand: {product.brand}</p>
            <p className="text-gray-600">Category: {product.category}</p>
          </div>

          <p className="text-lg mb-6">{product.description}</p>

          <button
            className={`px-6 py-3 rounded-lg font-semibold ${
              product.inStock
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
