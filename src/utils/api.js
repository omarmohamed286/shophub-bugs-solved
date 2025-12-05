import axios from "axios";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  const response = await api.get(`/product/${id}`);
  return response.data;
};

// Fetch all categories
export const fetchCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

// Filter products by category
export const fetchProductsByCategory = async (categoryId) => {
  try {
    const response = await api.get(`/products/?categoryId=${categoryId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};

export default api;
