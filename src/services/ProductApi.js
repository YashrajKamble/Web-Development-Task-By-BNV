import { BASE_URL } from '../../utils/config.js';

export async function fetchCategories() {
    const res = await fetch(`${BASE_URL}/categories`);
    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
}

export async function fetchProducts(limit = 50) {
    const res = await fetch(`${BASE_URL}/products?limit=${limit}`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}
