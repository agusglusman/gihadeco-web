export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  color: string;
  size: string;
  price: number | null;
  available: number;
  image: string;
  dimensions: { label: string; value: number }[];
};

export type CatalogProduct = {
  id: string;
  name: string;
  category: string;
  variants: Product[];
};

export type SelectionItem = Product & { quantity: number };
