import { useState, useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const ProductsListPage = () => {
  const { products, loading, error } = useProducts();
  const { categories } = useCategories();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    let result = products;

    if (searchTerm) {
      // title not category name
      result = result.filter((product) => {
        console.log(product);
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    if (selectedCategory) {
      // === instead of !==
      result = result.filter(
        (product) => product.category.id === selectedCategory
      );
    }

    setFilteredProducts(result);
  }, [products, searchTerm, selectedCategory]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Discover <span className="gradient-text">Amazing</span> Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our curated collection of {products.length} premium products
          </p>
        </div>

        <div className="mb-12 space-y-6 animate-slide-up">
          <div className="flex justify-center">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="flex justify-center">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in">
            {filteredProducts.map((product) => (
              // the console err was because absence of key prop
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <div className="inline-block p-6 bg-white rounded-2xl shadow-lg">
              <svg
                className="w-24 h-24 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-500 text-xl font-semibold">
                No products found
              </p>
              <p className="text-gray-400 mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsListPage;
