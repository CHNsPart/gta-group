// pages/[category]/page.tsx
"use client"
import ProductCard from "@/components/product-card";
import { Product, products } from "@/config/products";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  useEffect(() => {
    const category = window.location.pathname.split("/")[2];
    setCategoryName(category);

    const uniqueSkus = new Set<string>();
    const filteredProducts: Product[] = [];

    // Filter and add only unique products based on SKU
    products.forEach((product) => {
      if (product.category === category && !uniqueSkus.has(product.sku)) {
        uniqueSkus.add(product.sku);
        filteredProducts.push(product);
      }
    });

    setCategoryProducts(filteredProducts);
  }, []);

  return (
    <section className="body-font">
      <div className="container mx-auto">
        <div className="w-full py-10">
          <h1 className="text-left text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">{categoryName.toUpperCase()}</h1>
        </div>
        <div className="-m-4 flex flex-wrap">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
export const runtime = 'edge';
