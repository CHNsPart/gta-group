// components/product-detail.tsx
import React from "react";
import { Product } from "@/config/products";
import Image from "next/image";
import { Button } from "./ui/button";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-5">
      <div className="col-span-1">
        <Image height={500} width={500} quality={100} priority src={product.image} alt={product.title} className="w-full h-auto" />
      </div>
      <div className="col-span-1">
        <h2 className="text-4xl font-bold text-primary">{product.title}</h2>
        <h2 className="mb-4 text-lg font-bold">{product.sku}</h2>
        <p className="mb-4 text-gray-950 dark:text-white/50">{product.description}</p>
        <table className="table-auto w-full">
            <thead>
                <tr>
                <th className="border px-4 text-primary py-2">Quantity</th>
                <th className="border px-4 text-primary py-2">Rate</th>
                </tr>
            </thead>
            <tbody>
                {product.price.map((priceOption) => (
                <tr key={priceOption.quantity}>
                    <td className="border px-4 py-2">{priceOption.quantity} units</td>
                    <td className="border px-4 py-2">${priceOption.rate.toFixed(2)}</td>
                </tr>
                ))}
            </tbody>
        </table>
        <Button size={"lg"} className="font-bold text-white my-5 w-full">
            Call now to BUY
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;



