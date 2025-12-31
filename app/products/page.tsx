import { products } from "./data";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Products</h1>
      <p className="text-lg mb-8">
        Discover our range of products! This page demonstrates a product listing
        with links to individual product pages.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-3">
              <a
                href={`/products/${product.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {product.name}
              </a>
            </h2>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="mb-4">
              <span className="text-2xl font-bold text-green-600">
                ${product.price}
              </span>
              <span
                className={`ml-3 px-2 py-1 rounded-full text-xs ${
                  product.inStock
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="text-sm text-gray-500 mb-4">
              <div className="flex items-center mb-1">
                <span className="text-yellow-500">★</span>
                <span className="ml-1">{product.rating}</span>
                <span className="ml-2">({product.reviews} reviews)</span>
              </div>
              <p>
                {product.brand} • {product.category}
              </p>
            </div>

            <a
              href={`/products/${product.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
