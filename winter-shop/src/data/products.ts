import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "parka-arctic",
    name: "Arctic Parka",
    price: 199.99,
    imageUrl: "https://source.unsplash.com/featured/400x300?parka,winter",
    description: "Ultra-warm parka built for sub-zero adventures.",
    category: "Jackets",
  },
  {
    id: "down-jacket",
    name: "Down Jacket",
    price: 159.0,
    imageUrl: "https://source.unsplash.com/featured/400x300?down,jacket",
    description: "Lightweight yet warm 700-fill down jacket.",
    category: "Jackets",
  },
  {
    id: "wool-coat",
    name: "Wool Coat",
    price: 179.5,
    imageUrl: "https://source.unsplash.com/featured/400x300?wool,coat",
    description: "Timeless wool coat for city winters.",
    category: "Coats",
  },
  {
    id: "thermal-hoodie",
    name: "Thermal Hoodie",
    price: 69.99,
    imageUrl: "https://source.unsplash.com/featured/400x300?hoodie,winter",
    description: "Cozy thermal-lined hoodie.",
    category: "Sweaters",
  },
  {
    id: "cable-knit-sweater",
    name: "Cable Knit Sweater",
    price: 74.99,
    imageUrl: "https://source.unsplash.com/featured/400x300?knit,sweater",
    description: "Soft cable-knit sweater made from merino wool.",
    category: "Sweaters",
  },
  {
    id: "fleece-lined-leggings",
    name: "Fleece Leggings",
    price: 39.99,
    imageUrl: "https://source.unsplash.com/featured/400x300?leggings,fleece",
    description: "Fleece-lined leggings for extra warmth.",
    category: "Bottoms",
  },
  {
    id: "snow-pants",
    name: "Snow Pants",
    price: 119.99,
    imageUrl: "https://source.unsplash.com/featured/400x300?snow,pants",
    description: "Waterproof snow pants for skiing and snowboarding.",
    category: "Bottoms",
  },
  {
    id: "leather-boots",
    name: "Leather Winter Boots",
    price: 129.99,
    imageUrl: "https://source.unsplash.com/featured/400x300?winter,boots",
    description: "Rugged leather boots with traction soles.",
    category: "Footwear",
  },
  {
    id: "wool-scarf",
    name: "Wool Scarf",
    price: 29.99,
    imageUrl: "https://source.unsplash.com/featured/400x300?wool,scarf",
    description: "Classic wool scarf with soft hand-feel.",
    category: "Accessories",
  },
  {
    id: "thermal-gloves",
    name: "Thermal Gloves",
    price: 24.99,
    imageUrl: "https://source.unsplash.com/featured/400x300?winter,gloves",
    description: "Touchscreen-friendly thermal gloves.",
    category: "Accessories",
  },
  {
    id: "beanie-hat",
    name: "Beanie Hat",
    price: 19.99,
    imageUrl: "https://source.unsplash.com/featured/400x300?beanie,hat",
    description: "Ribbed knit beanie with a snug fit.",
    category: "Accessories",
  },
  {
    id: "thermal-socks",
    name: "Thermal Socks (2-Pack)",
    price: 14.99,
    imageUrl: "https://source.unsplash.com/featured/400x300?winter,socks",
    description: "Extra-thick thermal socks for cold days.",
    category: "Accessories",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function filterProducts(query?: string): Product[] {
  if (!query) return products;
  const q = query.toLowerCase();
  return products.filter((p) =>
    [p.name, p.description, p.category].some((field) => field.toLowerCase().includes(q))
  );
}
