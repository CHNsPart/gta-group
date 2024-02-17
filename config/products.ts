import hoodPic from "../public/hoodie.png"
import crewPic from "../public/crew.png"
import fknife from "../public/fknife.png"
import fknife_s1 from "../public/fknife_s1.png"
import golf_1 from "../public/golf_1.png"
import golf_2 from "../public/golf_2.png"


import { StaticImageData } from "next/image";
  
export interface Product {
    id: number;
    category: string;
    subCategory: string;
    title: string;
    sku: string;
    description: string;
    image: StaticImageData;
    price: {
      quantity: number | string;
      rate: number;
    }[];
    secondImages?: StaticImageData[]
}

export const products: Product[] = [
    {
        id: 1,
        category: "apparel",
        subCategory: "hoodies",
        title: "Hoodie",
        sku:  "HOODIE001",
        description: `
        Features:
            * Preshrunk fleece knit
            * Weight: 8.0 oz/sq yd
            * 50/50 cotton/polyester
            * Air jet yarns = softer feel and reduced pilling
            * Double-lined hood with colour-matched drawcord
            * Quarter-turned to eliminate centre crease
            * Double-needle stitching at waistband and cuffs
            * Pouch pocket
            * 1 x 1 rib with spandex
            * Satin label
        `,
        image: hoodPic,
        price: [
            {
                quantity: 20,
                rate:39.99
            },
            {
                quantity: 50,
                rate:89.99
            },
            {
                quantity: 99,
                rate:129.99
            },
        ],
    },
    {
        id: 2,
        category: "apparel",
        subCategory: "crewneck",
        title: "Crewneck Sweater",
        sku:  "CREW001",
        description: `
        Wordans is proud to present the Gildan 18000, the essential crewneck sweatshirt for all occasions! It is one of the most comfortable sweaters around, which is why it’s one of our bestsellers. Made from a 50/50 USA cotton/polyester blend, you can be sure the Gildan 18000 will keep its shape and feel long after you’ve bought it. As with many Gildan sweatshirts, the 18000 is perfect for daily wear, no matter the activity, whether you’re running errands or having a relaxing day on the sofa. With over 20 different colours available, there’s definitely a Gildan 18000 to go with every outfit, so get yours today at Wordans!
        `,
        image: crewPic,
        price: [
            {
                quantity: 20,
                rate:39.99
            },
            {
                quantity: 50,
                rate:89.99
            },
            {
                quantity: 99,
                rate:129.99
            },
        ],
    },
    {
        id: 3,
        category: "tools",
        subCategory: "knifes",
        title: "Folding Fillet Knife",
        sku:  "CM1222",
        description: `
        Folding Fillet knife comes in heavy duty pouch, with clip and belt loop. Fillet knife blade constructed of 440 stainless steel, folds into handle constructed of wood. Compact and durable, it makes a great addition to every tackle box. This knife can be further personalized on the blade, giving you the opportunity to make a truly unique promotion
        `,
        image: fknife,
        price: [
            {
                quantity: 25,
                rate:34.41
            },
            {
                quantity: 50,
                rate:32.35
            },
            {
                quantity: 100,
                rate:30.98
            },
            {
                quantity: 144,
                rate:28.47
            },
        ],
        secondImages: [fknife_s1],
    },
    {
        id: 4,
        category: "tools",
        subCategory: "others",
        title: "Golf Scorecard Holder",
        sku:  "C142199",
        description: `
        This bi-fold, faux leather scorecard holder securely holds midsized cards and closes neatly when not in use. An interior elastic-bound pencil loop can hold your on-course writing utensil. The compact design fits neatly into your golf bag.
        `,
        image: golf_1,
        price: [
            {
                quantity: 49,
                rate:16.23
            },
            {
                quantity: "50-99",
                rate:15.35
            },
            {
                quantity: "100-250",
                rate:14.68
            },
        ],
        secondImages: [golf_2],
    },
]













