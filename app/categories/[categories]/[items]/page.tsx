// pages/[category]/[item]/page.tsx
"use client"

import { useEffect, useState } from "react";
import { Product, products } from "@/config/products";
import ProductCard from "@/components/product-card";
import useCustomBackButton from "@/app/_hooks/useCustomBackButton";


const ItemPage = () => {
  const [subCategoryName, setSubCategoryName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [matchingProducts, setMatchingProducts] = useState<Product[]>([]);

  useEffect(() => {
    const category = window.location.pathname.split("/")[2];
    const subCategory = window.location.pathname.split("/")[3];

    setSubCategoryName(subCategory);
    setCategoryName(category);

    // Filter products based on both category and subCategory
    const filteredProducts: Product[] = products.filter(
      (product) => product.category === category && product.subCategory === subCategory
    );
    setMatchingProducts(filteredProducts);
  }, []);

  const { handleBackButtonClick } = useCustomBackButton();

  return (
    <section className="body-font">
      <div className="container mx-auto">
        <div className="w-full py-10">
          <h1 className="text-left text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">
            <span onClick={handleBackButtonClick} className="cursor-pointer text-gray-400">{categoryName.toUpperCase()}/</span> 
            {" "}
            {subCategoryName.toUpperCase()}
          </h1>
        </div>
        <div className="-m-4 flex flex-wrap">
          {matchingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemPage;
export const runtime = 'edge';