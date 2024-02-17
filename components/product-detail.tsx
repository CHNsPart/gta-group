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
    <div className="grid grid-cols-1 gap-8 pb-5 md:grid-cols-2">
      <div className="col-span-1">
        <Image height={500} width={500} quality={100} priority src={product.image} alt={product.title} className="h-auto w-full pb-2" />
        <div className="col-span-2 row-span-2 grid grid-cols-2 gap-2">
          {/* Render here the secondInages in a loop */}
          {product.secondImages &&
            product.secondImages.map((secondImage, index) => (
              <Image
                key={index}
                height={500}
                width={500}
                quality={100}
                priority
                src={secondImage}
                alt={`${product.title} - Image ${index + 2}`}
                className="h-auto w-full"
              />
            ))}
        </div>
      </div>
      <div className="col-span-1">
        <h2 className="text-4xl font-bold text-primary">{product.title}</h2>
        <h2 className="mb-4 text-lg font-bold">{product.sku}</h2>
        <p className="mb-4 text-gray-950 dark:text-white/50">{product.description}</p>
        <table className="w-full table-auto">
            <thead>
                <tr>
                <th className="border px-4 py-2 text-primary">Quantity</th>
                <th className="border px-4 py-2 text-primary">Rate</th>
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
        <Button size={"lg"} className="my-5 w-full font-bold text-white">
            Call now to BUY
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
