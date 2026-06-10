export interface StoreInfo {
  id: string;
  slug: string;
  name: string;
  description?: string;
  logo_url?: string;
  theme_config?: string;
  payment_config?: string;
  shipping_config?: string;
  seo_config?: string;
  is_published: boolean;
}

export interface Product {
  id: string;
  store_id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  is_active: boolean;
  category?: string;
  category_id?: string | null;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

const API_KEY = process.env.VITE_TOKOVIO_API_KEY || process.env.NEXT_PUBLIC_TOKOVIO_API_KEY || "";
const BASE_URL = process.env.VITE_TOKOVIO_BASE_URL || process.env.NEXT_PUBLIC_TOKOVIO_BASE_URL || "http://localhost:8080";
const STORE_SLUG = process.env.VITE_TOKOVIO_STORE_SLUG || process.env.NEXT_PUBLIC_TOKOVIO_STORE_SLUG || "xpeng-alam-sutera";

export async function getStore(): Promise<StoreInfo | null> {
  if (!STORE_SLUG) return null;
  try {
    const res = await fetch(`${BASE_URL}/stores/${STORE_SLUG}`, {
      headers: {
        "X-API-Key": API_KEY,
      },
      next: { revalidate: 60 }, // Cache on Next.js server for 60 seconds
      signal: AbortSignal.timeout(5000), // Timeout after 5 seconds to prevent hanging on Vercel builds
    });
    if (!res.ok) {
      console.error(`Failed to fetch store details: status ${res.status}`);
      return null;
    }
    return res.json() as Promise<StoreInfo>;
  } catch (error) {
    console.error("Error fetching store details from Tokovio:", error);
    return null;
  }
}

export async function getStoreProducts(): Promise<Product[]> {
  if (!STORE_SLUG) return [];
  try {
    const res = await fetch(`${BASE_URL}/stores/${STORE_SLUG}/products`, {
      headers: {
        "X-API-Key": API_KEY,
      },
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(5000), // Timeout after 5 seconds
    });
    if (!res.ok) {
      console.error(`Failed to fetch store products: status ${res.status}`);
      return [];
    }
    return res.json() as Promise<Product[]>;
  } catch (error) {
    console.error("Error fetching store products from Tokovio:", error);
    return [];
  }
}
