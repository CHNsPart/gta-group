// pages/[category]/[item]/page.tsx
"use client"

// import { useEffect, useState } from "react";
// import { products } from "@/config/products";

// interface Product {
//   id: number;
//   category: string;
//   subCategory: string;
//   title: string;
//   description: string;
// }

// const ItemPage = () => {
//   const [subCategoryName, setSubCategoryName] = useState("");
//   const [categoryName, setCategoryName] = useState("");
//   const [matchingProducts, setMatchingProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const category = window.location.pathname.split("/")[2];
//     const subCategory = window.location.pathname.split("/")[3];

//     setSubCategoryName(subCategory);
//     setCategoryName(category);

//     // Filter products based on both category and subCategory
//     const filteredProducts: Product[] = products.filter(
//       (product) => product.category === category && product.subCategory === subCategory
//     );
//     setMatchingProducts(filteredProducts);
//   }, []);

//   return (
//     <div>
//       <h1 className="w-full text-center text-2xl">{categoryName} - {subCategoryName}</h1>
//       <div className="container flex gap-5">
//         {matchingProducts.map((product) => (
//           <div className="border" key={product.id}>
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ItemPage;

// pages/[category]/[item]/page.tsx
"use client"

import { useEffect, useState } from "react";
import { products } from "@/config/products";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/product-card";

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

  return (
    <section className="body-font">
      <div className="container mx-auto">
        <div className="w-full py-10">
          <h1 className="text-left text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">
            <span className="text-gray-400">{categoryName.toUpperCase()}/</span> 
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