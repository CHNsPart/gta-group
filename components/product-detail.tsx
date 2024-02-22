// components/product-detail.tsx
import React from "react";
import { Product } from "@/config/products";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdOutlinePayments } from "react-icons/md";


interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  
  const handleCall = () => {
    const phoneNumber = '+14167991296';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="grid grid-cols-1 gap-8 pb-5 md:grid-cols-2">
      <div className="col-span-1">
        <Image height={500} width={500} quality={100} priority src={product.image} alt={product.title} className="h-auto w-full pb-2" />
        <div className="col-span-2 row-span-2 grid grid-cols-2 gap-2">
          {/* Render here the secondInages in a loop */}
          {product.secondImages &&
            product.secondImages?.map((secondImage, index) => (
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
        <Button size={"lg"} onClick={handleCall} className="my-5 w-full font-bold text-white">
            Call now to BUY
        </Button>
        <span className="flex w-full items-center justify-center gap-2 text-center italic text-primary">
          or call <span onClick={handleCall} className="rounded-full bg-primary/20 p-2 font-bold not-italic text-primary dark:text-white">+1-416-799-1296</span>
        </span>
        <Accordion className="mt-6" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <>
                <MdOutlinePayments/> 
                Payment Method
              </>
            </AccordionTrigger>
            <AccordionContent className="py-2">
              We are accepting e-transac at this mail <span className="rounded-full bg-primary/20 p-2 font-bold not-italic text-primary dark:text-white">easypaygtagroup@gmail.com</span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductDetail;

