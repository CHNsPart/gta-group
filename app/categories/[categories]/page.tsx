// pages/[category]/page.tsx
"use client"
import ProductCard from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/config/products";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  category: string;
  subCategory: string;
  title: string;
  sku: string;
  description: string;
  image: StaticImageData;
  price: {
    quantity: number;
    rate: number;
  }[];
}

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