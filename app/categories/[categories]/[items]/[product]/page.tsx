// pages/[category]/[item]/[product]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Product, products } from "@/config/products";
import ProductDetail from "@/components/product-detail";
import { TbLoader2 } from "react-icons/tb";
import useCustomBackButton from "@/app/_hooks/useCustomBackButton";

const ProductPage = () => {
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [productSKU, setProductSKU] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  useEffect(() => {
    const category = window.location.pathname.split("/")[2];
    const subCategory = window.location.pathname.split("/")[3];
    const sku = window.location.pathname.split("/")[4];

    setCategoryName(category);
    setSubCategoryName(subCategory);
    setProductSKU(sku);

    // Filter product based on category, subCategory, and SKU
    const filteredProduct = products.find(
      (product) =>
        product.category === category &&
        product.subCategory === subCategory &&
        product.sku === sku
    );

    setSelectedProduct(filteredProduct || null);
  }, []);

  const { handleBackButtonClick } = useCustomBackButton();


  return (
    <section className="body-font">
      <div className="container mx-auto">
        <div className="w-full py-10">
          <h1 className="text-left text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">
            <span className="text-gray-400">{categoryName.toUpperCase()}/</span>{" "}
            <span className="cursor-pointer text-gray-400" onClick={handleBackButtonClick}>{subCategoryName.toUpperCase()}</span>/ {productSKU}
          </h1>
        </div>
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} />
        ) : (
          <div className="flex w-full items-center justify-center">
            <TbLoader2 size={100} className="animate-spin" />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductPage;
export const runtime = "edge";
