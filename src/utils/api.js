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
    // throw proper error
    const msg = `Error fetching products: ${error}`;
    console.error(msg);
    throw Error(msg);
  }
};

export const fetchProductById = async (id) => {
  // looking at the api docs, the endpoint is acutally /products not /product
  // adding try and catch
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    const msg = `Error fetching a product: ${error}`;
    console.error(msg);
    throw Error(msg);
  }
};

// Fetch all categories
export const fetchCategories = async () => {
  // adding try and catch
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    const msg = `Error fetching categories: ${error}`;
    console.error(msg);
    throw Error(msg);
  }
};

// Filter products by category
export const fetchProductsByCategory = async (categoryId) => {
  try {
    const response = await api.get(`/products/?categoryId=${categoryId}`);
    return response.data;
  } catch (error) {
    const msg = `Error fetching products by category: ${error}`;
    console.error(msg);
    throw Error(msg);
  }
};

export default api;
