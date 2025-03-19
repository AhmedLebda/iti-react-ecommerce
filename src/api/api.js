const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Function to get the products data
export async function getProducts(page) {
  const LIMIT = 8;
  const skip = page * LIMIT;
  try {
    const response = await fetch(`${BASE_URL}?limit=${LIMIT}&skip=${skip}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Function to get a single product by ID
export async function getProductById(productId) {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
}
