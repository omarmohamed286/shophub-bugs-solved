const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg ${
          selectedCategory === null
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white scale-105"
            : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
        }`}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg ${
            selectedCategory === category.id
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white scale-105"
              : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
