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

    const filteredProducts: Product[] = products.filter((product) => product.category === category);
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
export const runtime = 'edge';