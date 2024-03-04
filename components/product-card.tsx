// components/ProductCard.tsx
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: {
    id: number;
    category: string;
    subCategory: string;
    title: string;
    sku: string;
    image: StaticImageData;
    price: {
      quantity: number;
      rate: number;
    }[];
    secondImages?: StaticImageData[]
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="w-full p-4 md:w-1/2 lg:w-1/4">
    <a href={`/categories/${product.category}/${product.subCategory}/${product.sku}`} className="relative block h-56 overflow-hidden rounded hover:cursor-pointer">
      <Image
        quality={100}
        alt={product.title}
        className={product.subCategory==="hoodies" || "poloshirts" || "crewneck" || "tshirts" ? `block size-full object-cover object-top transition-all hover:scale-105` : `block size-full object-cover object-center transition-all hover:scale-105`}
        src={product.image}
      />
    </a>
    <div className="mt-4">
      <Badge variant={"secondary"} className="title-font mb-2 select-none text-xs tracking-widest text-gray-500">
        {product.subCategory}
      </Badge>
      <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">{product.sku}</h3>
      <h2 className="title-font text-lg font-medium text-primary">{product.title}</h2>
      <p className="mt-1 font-bold">{"From $" + product.price[product.price.length-1].rate}</p>
    </div>
  </div>
);

export default ProductCard;
