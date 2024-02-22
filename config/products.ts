import hoodPic from "../public/hoodie.png"
import crewPic from "../public/crew.png"
import fknife from "../public/fknife.png"
import fknife_s1 from "../public/fknife_s1.png"
import golf_1 from "../public/golf_1.png"
import golf_2 from "../public/golf_2.png"
import C111688_1 from "../public/4SkuC111688_1.png"
import C111688_2 from "../public/4SkuC111688_2.png"
import keyball1 from "../public/keyball1.png"
import keyball2 from "../public/keyball2.png"
import keyball3 from "../public/keyball3.png"
import umbrellaImage1 from "../public/umbrellaImage1.png"
import umbrellaImage2 from "../public/umbrellaImage2.png"
import umbrellaImage3 from "../public/umbrellaImage3.png"
import umbrellaImage4 from "../public/umbrellaImage4.png"
import umbrellaImageB1 from "../public/umbrellaImageB1.png"
import umbrellaImageB2 from "../public/umbrellaImageB2.png"
import divotToolImage1 from "../public/divotToolImage1.png"
import divotToolImage2 from "../public/divotToolImage2.png"
import divotToolImage3 from "../public/divotToolImage3.png"
import beanieImage1 from "../public/beanieImage1.png"
import beanieImage2 from "../public/beanieImage2.png"
import beanieImage3 from "../public/beanieImage3.png"
import beanieImage4 from "../public/beanieImage4.png"
import beanieImage5 from "../public/beanieImage5.png"
import bcaps1 from "../public/bcaps1.png"
import bcaps2 from "../public/bcaps2.png"
import bcaps3 from "../public/bcaps3.png"
import bcaps4 from "../public/bcaps4.png"
import bcaps5 from "../public/bcaps5.png"
import ballcapImage1 from "../public/ballcapImage1.png"
import ballcapImage2 from "../public/ballcapImage2.png"
import ballcapImage3 from "../public/ballcapImage3.png"
import tCapImage1 from "../public/tCapImage1.png"
import tCapImage2 from "../public/tCapImage2.png"
import tCapImage3 from "../public/tCapImage3.png"
import tCapImage4 from "../public/tCapImage4.png"
import wHatImage1 from "../public/wHatImage1.png"
import wHatImage2 from "../public/wHatImage2.png"
import wHatImage3 from "../public/wHatImage3.png"
import ss1 from "../public/ss1.png"
import ss2 from "../public/ss2.png"

import ls1 from "../public/ls1.png"
import ls2 from "../public/ls2.png"
import ls3 from "../public/ls3.png"

import sv1 from "../public/sv1.png"
import sv2 from "../public/sv2.png"
import sv3 from "../public/sv3.png"
import sv4 from "../public/sv4.png"

import st1 from "../public/st1.png"
import st2 from "../public/st2.png"
import st3 from "../public/st3.png"
import st4 from "../public/st4.png"

import penGiftSetImage1 from "../public/penGiftSetImage1.png"
import penGiftSetImage2 from "../public/penGiftSetImage2.png"
import penGiftSetImage3 from "../public/penGiftSetImage3.png"
import penGiftSetImage4 from "../public/penGiftSetImage4.png"

import sportpackImage1 from "../public/sportpackImage1.png"
import sportpackImage2 from "../public/sportpackImage2.png"

import knifeImage1 from "../public/knifeImage1.png"
import knifeImage2 from "../public/knifeImage2.png"

import huntingKnifeImage1 from "../public/huntingKnifeImage1.png"
import huntingKnifeImage2 from "../public/huntingKnifeImage2.png"
import huntingKnifeImage3 from "../public/huntingKnifeImage3.png"
import huntingKnifeImage4 from "../public/huntingKnifeImage4.png"

import workshopLevelImage1 from "../public/workshopLevelImage1.png"
import workshopLevelImage2 from "../public/workshopLevelImage2.png"

import safetyGlassesImage from "../public/safetyGlassesImage.png"
import tshirtImage from "../public/tshirtImage.png"
import abcap from "../public/abcap.png"
import whatsa from "../public/whatsa.png"


import { StaticImageData } from "next/image";

  const id = 1; 

  // Automated ID generator for Product array
  export function generateProductIds(products: Product[]): Product[] {
    return products.map((product, index) => ({
      ...product,
      id: index + 1,
    }));
  }
  
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



const productsDatabase: Product[] = [
    {
        id,
        category: "apparel",
        subCategory: "hoodies",
        title: "GILDAN 18500 Hoodie",
        sku:  "WSkuG185,G18500",
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
                rate:69.99
            },
            {
                quantity: 24,
                rate:64.99
            },
            {
                quantity: 36,
                rate:59.99
            },
            {
                quantity: 48,
                rate:54.99
            },
            {
                quantity: 72,
                rate:49.99
            },
            {
                quantity: 144,
                rate:45.99
            },
        ],
    },
    {
        id,
        category: "apparel",
        subCategory: "crewneck",
        title: "GILDAN G180 Crewneck Sweater",
        sku:  "WSku18000",
        description: `
            Wordans is pThe Gildan G180 - The Only Crewneck Sweatshirt You’ll Ever Need
            In need of a comfortable and stylish crewneck sweatshirt that is sure to last countless wears and washes? Well, look no further than the Gildan G180. Part of the extensive Gildan selection of high-quality apparel, the G180 is great for keeping you warm on those chilly spring nights or layering under your coat in the colder months. Designed with a timeless, classic fit the Gildan Heavy Blend™ sweatshirt is ideal for any purpose, from relaxing at home to running errands like doing the shopping. You won’t find this item anywhere cheaper than here at Wordans, where you can find it in sizes from S to 5XL and in over 20 colours, so why not try it in a few different shades?
            
            -13.3 oz./lin.yd., 50% USA cotton, 50% polyester
            
            -Pill-resistant air jet yarn
            
            -Made with 50% sustainably and fairly grown USA cotton
            
            -Double-needle stitching throughout
            
            -Set-in sleeves
            
            -1x1 ribbed collar, cuffs and waistband with spandexroud to present the Gildan 18000, the essential crewneck sweatshirt for all occasions! It is one of the most comfortable sweaters around, which is why it’s one of our bestsellers. Made from a 50/50 USA cotton/polyester blend, you can be sure the Gildan 18000 will keep its shape and feel long after you’ve bought it. As with many Gildan sweatshirts, the 18000 is perfect for daily wear, no matter the activity, whether you’re running errands or having a relaxing day on the sofa. With over 20 different colours available, there’s definitely a Gildan 18000 to go with every outfit, so get yours today at Wordans!        `,
        image: crewPic,
        price: [
            {
                quantity: 12,
                rate:49.99
            },
            {
                quantity: 24,
                rate:47.99
            },
            {
                quantity: 36,
                rate:42.99
            },
            {
                quantity: 48,
                rate:42.99
            },
            {
                quantity: 72,
                rate:39.99
            },
            {
                quantity: 144,
                rate:35.99
            },
        ],
    },
    {
        id,
        category: "tools",
        subCategory: "knives",
        title: "Folding Fillet Knife",
        sku: "ComdSKU:CM1222",
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
        id,
        category: "tools",
        subCategory: "others",
        title: "Golf Scorecard Holder",
        sku:  "4SkuC142199",
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
    {
        id,
        category: "tools",
        subCategory: "others",
        title: "Golf Towel",
        sku:  "4SkuC111688",
        description: `
            These golf towels at your next golf outing! Towels are made from cotton velour, and have hemmed edges for added durability.`,
        image: C111688_1,
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
        secondImages: [C111688_2],
    },
    {
        id,
        category: "homeAndlifestyle",
        subCategory: "travel",
        title: "Poncho Ball Keychain",
        sku:  "4SkuC130479",
        description: `
        Be prepared for scattered showers and unexpected storms with this poncho ball key chain, shaped like a billiard ball. Inside the key chain carrying ball is a PE poncho to help keep its wearer dry. Easily slips over clothing and is a one size fits most design.
Size: 25 x 19mm (1" x 3/4").
        `,
        image: keyball1,
        price: [
            {
                quantity: 100,
                rate:6.99
            },
            {
                quantity: 250,
                rate:6.35
            },
            {
                quantity: 500,
                rate:5.98
            },
            {
                quantity: 1000,
                rate:4.25
            },
        ],
        secondImages: [keyball2, keyball3],
    },
    {
        id,
        category: "homeAndlifestyle",
        subCategory: "umbrellas",
        title: "Oversize Golf Umbrella - 64\"",
        sku: "4SkuC111901-24HR",
        description: `
            This promotional umbrella features a manual-open design with a durable fiberglass frame and shaft. Umbrella is designed with a soft vinyl grip handle.
        `,
        image: umbrellaImage1,
        price: [
            {
                quantity: 25,
                rate: 59.99
            },
            {
                quantity: "26-50",
                rate: 57.35
            },
            {
                quantity: "51-72",
                rate: 55.98
            },
            {
                quantity: "73-144",
                rate: 49.99
            }
        ],
        secondImages: [umbrellaImage2, umbrellaImage3, umbrellaImage4],
    },
    {
        id, // You may need to decide how to generate the ID
        category: "homeAndlifestyle",
        subCategory: "umbrellas",
        title: "Windproof Golf Umbrella - 54\" Arc",
        sku: "4SkuC100224",
        description: `
            This promotional umbrella features a windproof spring mechanism to endure strong gusts. The two-tone canopy and wooden handle give this umbrella a traditional design.
        `,
        image: umbrellaImageB1,
        price: [
            {
                quantity: "1-11",
                rate: 38.41
            },
            {
                quantity: "12-71",
                rate: 36.35
            },
            {
                quantity: "72-100",
                rate: 34.98
            },
            {
                quantity: 288,
                rate: 29.87
            }
        ],
        secondImages: [umbrellaImageB2],
    },
    {
        id,
        category: "tools",
        subCategory: "others",
        title: "Spring Action Divot Tool",
        sku: "4SkuC146420",
        description: `
            This compact, hard plastic divot tool features a push button release, similar to switchblade technology. Tool includes a removable, magnetic ball marker for on-course convenience. Includes a black belt pouch for storage.
        `,
        image: divotToolImage1,
        price: [
            {
                quantity: "75-150",
                rate: 18.41
            },
            {
                quantity: 250,
                rate: 17.35
            },
            {
                quantity: 500,
                rate: 14.98
            }
        ],
        secondImages: [divotToolImage2, divotToolImage3],
    },
    {
        id, // You may need to decide how to generate the ID
        category: "apparel",
        subCategory: "winterhats",
        title: "Radsow Apparel KS12 - 100% Acrylic Beanie",
        sku: "WSkuRadsowApparelKS12",
        description: `
            100% Acrylic. Knitted. 12" One Size.
            Every Color in stock.
        `,
        image: beanieImage1,
        price: [
            {
                quantity: "12-35",
                rate: 24.41
            },
            {
                quantity: "36-71",
                rate: 22.35
            },
            {
                quantity: "72-143",
                rate: 20.98
            },
            {
                quantity: 288,
                rate: 17.47
            }
        ],
        secondImages: [beanieImage2, beanieImage3, beanieImage4, beanieImage5],
    },    
    {
        id, // You may need to decide how to generate the ID
        category: "apparel",
        subCategory: "ballcaps",
        title: "Flexfit FF110C - Flexfit Cool & Dry Pro-formance",
        sku: "WSkuFlexfitFF110C",
        description: `
            97% Polyester/3% Spandex, Structured, mid-profile, 3½” crown, six-panel, Permacurve® visor, Moisture-wicking, Pioneered FLEXFIT technology, Velcro® closure, One Size.
        `,
        image: bcaps1,
        price: [
            {
                quantity: "1-11",
                rate: 59.41
            },
            {
                quantity: "12-35",
                rate: 56.35
            },
            {
                quantity: "36-71",
                rate: 52.98
            },
            {
                quantity: 72,
                rate: 48.47
            }
        ],
        secondImages: [bcaps2, bcaps3, bcaps4, bcaps5],
    },
    {
        id,
        category: "apparel",
        subCategory: "ballcaps",
        title: "Flexfit YP180 - Adult Delta X-Cap",
        sku: "WSkuFlexfitYP180",
        description: `
            92% polyester, 8% PU Spandex; 6-panel, mid-profile, structured; 3-layered sweatband and patented Stain-Block technology for moisture-wicking; Flexfit bond taping for thermal regulation, anti-bacteria, and odor resistance; Permacurv visor; Black undervisor, 1-row stitching on visor; Closed back, stretch fitted.
        `,
        image: ballcapImage1,
        price: [
            {
                quantity: "12-35",
                rate: 33.41
            },
            {
                quantity: "36-71",
                rate: 31.35
            },
            {
                quantity: "72-287",
                rate: 29.98
            },
            {
                quantity: "288-500",
                rate: 24.47
            }
        ],
        secondImages: [ballcapImage2, ballcapImage3],
    },
    {
        id,
        category: "apparel",
        subCategory: "ballcaps",
        title: "Yupoong 6006 - Five-Panel Classic Trucker Cap",
        sku: "WSkuYupoong6006",
        description: `
            The Yupoong 6006 is a Five-Panel Classic Trucker Cap made of 47/28/25 cotton/nylon/polyester. It has a flat bill and a snapback closure.
        `,
        image: tCapImage1,
        price: [
            {
                quantity: "12-34",
                rate: 29.41
            },
            {
                quantity: "36-71",
                rate: 27.35
            },
            {
                quantity: "72-144",
                rate: 24.68
            },
            {
                quantity: 250,
                rate: 19.99
            }
        ],
        secondImages: [tCapImage2, tCapImage3, tCapImage4],
    },
    {
        id,
        category: "apparel",
        subCategory: "winterhats",
        title: "Yupoong 1500 - Knit Cap",
        sku: "WSkuYupoong1500",
        description: `
            100% turbo spun acrylic knit, hypoallergenic, tight knit allows for easy embroidery, hand washable, approximately 8½” length.
        `,
        image: wHatImage1,
        price: [
            {
                quantity: "12-35",
                rate: 24.41
            },
            {
                quantity: "36-71",
                rate: 22.35
            },
            {
                quantity: "72-288",
                rate: 19.98
            },
            {
                quantity: 500,
                rate: 16.47
            }
        ],
        secondImages: [wHatImage2, wHatImage3],
    },
    {
        id,
        category: "safetygear",
        subCategory: "safetycloths",
        title: "Berne HVF024T - Men's Safety Tall Striped Thermal Lined Sweatshirt",
        sku: "WSkuBerneHVF024T",
        description: `
            Fabric: 9 oz. polyester fleece; Liner: 5 oz. polyester polar fleece; Orange: Fully compliant to CSA Z96-15 Class 2 Level 2; Black: Fully compliant to CSA Z96-15 Class 1 Level 2; Double layered three-piece hood with drawstring; Rib knit cuffs and waistband keep out the cold; Large front pockets easily store everyday items and keep hands warm; Durable nylon front zipper provides easy off and on; 2” reflective tape and X-back design help to increase visibility.
        `,
        image: ss1,
        price: [
            {
                quantity: "12-36",
                rate: 144.83
            },
            {
                quantity: "37-72",
                rate: 140.35
            },
            {
                quantity: 144,
                rate: 138.98
            },
            {
                quantity: 288,
                rate: 129.54
            }
        ],
        secondImages: [ss2],
    },
    {
        id,
        category: "safetygear",
        subCategory: "safetycloths",
        title: "CX2 S05970 - Lookout Hi-Vis Safety Long Sleeve Shirt",
        sku: "WSkuCX2S05970",
        description: `
            130 gsm \– 3.8 oz./yd2 \– 6.5 oz./lin. yd 100% polyester birdseye mesh with wicking finish. Chest pocket. 4” hi-vis contrast band with 2” reflective tape on front and back body and sleeves. Meets CSA standards.
        `,
        image: ls1,
        price: [
            {
                quantity: "12-35",
                rate: 44.41
            },
            {
                quantity: "35-72",
                rate: 42.35
            },
            {
                quantity: 100,
                rate: 40.98
            },
            {
                quantity: 144,
                rate: 38.47
            }
        ],
        secondImages: [ls2, ls3],
    },
    {
        id,
        category: "safetygear",
        subCategory: "safetycloths",
        title: "CX2 L01170 - Protector One Size High Vis Safety Vest",
        sku: "WSkuCX2L01170",
        description: `
            130 gsm \– 3.8 oz./yd2 \– 6.5 oz./lin. yd 100% polyester tricot knit. Upper left badge holder. 5 point tape fastener tear away safety design. 4 front storage pockets. durable binding. D ring access slot on back. 4” hi-vis contrast band with 2” reflective tape on front and back body. Meets CSA standards.
        `,
        image: sv1,
        price: [
            {
                quantity: "12-24",
                rate: 35.41
            },
            {
                quantity: "36-72",
                rate: 33.35
            },
            {
                quantity: 100,
                rate: 31.98
            },
            {
                quantity: 144,
                rate: 29.87
            }
        ],
        secondImages: [sv2, sv3, sv4],
    },
    {
        id,
        category: "safetygear",
        subCategory: "safetycloths",
        title: "CX2 S05960 - Watchman Hi-Vis Safety T-Shirt",
        sku: "WSkuCX2S05960",
        description: `
            130 gsm \– 3.8 oz./yd2 \– 6.5 oz./lin. yd 100% polyester birdseye mesh with wicking finish. Chest pocket. 4” hi-vis contrast band with 2” reflective tape on front and back body. Meets CSA standards.
        `,
        image: st1,
        price: [
            {
                quantity: "12-23",
                rate: 39.99
            },
            {
                quantity: "24-37",
                rate: 37.84
            },
            {
                quantity: "48-72",
                rate: 35.98
            },
            {
                quantity: 144,
                rate: 31.47
            }
        ],
        secondImages: [st2, st3, st4],
    },
    {
        id,
        category: "tools",
        subCategory: "pens",
        title: "Maxfield Stylus/Litewell Gift Set",
        sku: "Amster#85792",
        description: `
            We took two customer favorites, the Maxfield Stylus and the Litewell keychain and paired them together for an irresistible promotion. The pen features a comfort-inlay grip and a stylus that can be used with any smartphone or touchscreen device. The Litewell keychain features push button activating LED lights. Both pieces come in a nice gift box and can be professionally engraved with your custom message.
        `,
        image: penGiftSetImage1,
        price: [
            {
                quantity: 25,
                rate: 22.96
            },
            {
                quantity: 50,
                rate: 19.86
            },
            {
                quantity: 100,
                rate: 17.51
            },
            {
                quantity: 144,
                rate: 14.88
            }
        ],
        secondImages: [penGiftSetImage2, penGiftSetImage3, penGiftSetImage4],
    },
    {
        id,
        category: "tools",
        subCategory: "bags",
        title: "Mesh Pocket Sportpack",
        sku: "4SkuC104602",
        description: `
            These customizable Sportpacks are great for toting a change of clothes for the gym, a few buys from the store, or a few items to and from the office.
        `,
        image: sportpackImage1,
        price: [
            {
                quantity: 50,
                rate: 19.48
            },
            {
                quantity: 72,
                rate: 18.28
            },
            {
                quantity: 144,
                rate: 17.57
            },
            {
                quantity: 288,
                rate: 15.46
            }
        ],
        secondImages: [sportpackImage2],
    },
    {
        id,
        category: "tools",
        subCategory: "knives",
        title: "Carbine Tactical Knife",
        sku: "4SkuC122672",
        description: `
            This custom rugged knife is an essential tool for fishing, camping, hiking, and an assortment of other outdoor activities. Features a stainless steel black blade and black aluminum handle with a plastic textured zigzag pattern.
        `,
        image: knifeImage1,
        price: [
            {
                quantity: 25,
                rate: 29.48
            },
            {
                quantity: 72,
                rate: 26.28
            },
            {
                quantity: 144,
                rate: 24.57
            },
            {
                quantity: 288,
                rate: 19.46
            }
        ],
        secondImages: [knifeImage2],
    },
    {
        id,
        category: "tools",
        subCategory: "knives",
        title: "Camouflage Hunting Knife",
        sku: "4SkuC129629",
        description: `
            An easy-to-clean, sleek knife, a great gift to give to the outdoorsmen in the office. A camouflage blade and handle give it a rugged look and prevent glare. The smooth blade and grooved area in the handle allow the user to easily cut fishing line, loose threads, and more! A black metal pocket clip allows for easy access to the knife. Features textured black grips on the handle for a more secure hold. Thumb stud and lock-back construction ensure safe and stable use. The blade is retracted with a trigger mechanism. Size, closed: 34 x 114mm (1-3/8" x 4-1/2").
        `,
        image: huntingKnifeImage1,
        price: [
            {
                quantity: 48,
                rate: 24.95
            },
            {
                quantity: 72,
                rate: 22.28
            },
            {
                quantity: 100,
                rate: 20.57
            },
            {
                quantity: 144,
                rate: 18.46
            }
        ],
        secondImages: [huntingKnifeImage2, huntingKnifeImage3, huntingKnifeImage4],
    },
    {
        id,
        category: "tools",
        subCategory: "others",
        title: "Workshop Level - 9\"",
        sku: "4SkuC165063",
        description: `
            Your employees can make sure pictures and structures are plumb and square with this construction level. Also features a 6" ruler and magnetic edge.
        `,
        image: workshopLevelImage1,
        price: [
            {
                quantity: 50,
                rate: 20.48
            },
            {
                quantity: 72,
                rate: 19.28
            },
            {
                quantity: 144,
                rate: 18.57
            },
            {
                quantity: 288,
                rate: 16.46
            }
        ],
        secondImages: [workshopLevelImage2],
    },
    {
        id,
        category: "safetygear",
        subCategory: "eyewear",
        title: "Lightweight Safety Glasses",
        sku: "4SkuC161874",
        description: `
            Material: Plastic frame and lenses. Impact-resistant frame lenses. Scratch-resistant coating. UV Protection. Size: One size fits most.
    
            Glasses comply with the CSA Z94.3 and ANSI/ISEA Z87.1-2020 standards with the following markings:
            - Clear glasses are marked '+' for high impact and 'U6' for UV filtration.
            - Mirror glasses are marked '+' for high impact, 'U6' for UV filtration, 'L1.7' for visible light filtration.
            - Black glasses are marked '+' for high impact, 'U6' for UV filtration, 'L3' for visible light filtration.
        `,
        image: safetyGlassesImage,
        price: [
            {
                quantity: 50,
                rate: 19.99
            },
        ],
    },
    {
        id,
        category: "apparel",
        subCategory: "tshirts",
        title: "Gildan G640 - A Classic T-shirt with a Modern Feel",
        sku: "WSku64000",
        description: `
            The Gildan G640 is one of the most popular products in the Gildan Softstyle® t-shirt range and with good reason! Made from 100% ringspun cotton, this t-shirt is one of the softest and most comfortable options on the market. What’s more, you won’t find bulk deals for the Gildan G640 cheaper than right here at Wordans and with over 20 colour options to choose from in sizes S to 3XL, why not make a wholesale order today?
    
            - Seamless double-needle 3/4" collar
            - Taped neck and shoulders
            - Rolled forward shoulder
            - Double-needle sleeve and bottom hem
            - Tubular fit for minimal torque
            - 7.5 oz./lin.yd., 100% preshrunk ringspun cotton jersey
            - Sport Grey and Antique Colours: 90% cotton, 10% polyester
            - Graphite Heather: 50% cotton, 50% polyester
            - All other Heather Colours: 65% polyester, 35% cotton
        `,
        image: tshirtImage,
        price: [
            { quantity: 12, rate: 34.99 },
            { quantity: 24, rate: 32.99 },
            { quantity: 36, rate: 29.99 },
            { quantity: 48, rate: 27.99 },
            { quantity: 72, rate: 24.99 },
            { quantity: 144, rate: 22.00 },
        ],
    },
    {
        id,
        category: "apparel",
        subCategory: "ballcaps",
        title: "Flexfit FF110C - 97% Polyester/3% Spandex",
        sku: "WSkuFlexfitFF110C",
        description: `
            97% polyester, 3% spandex. 6-panel, structured, mid-profile. Moisture-wicking fabric. 3¼" crown shaped for fashion. Patented 110 Flexfit® Tech design. Hook and loop closure. Matching undervisor.
        `,
        image: abcap,
        price: [
            { quantity: 12, rate: 49.99 },
            { quantity: 24, rate: 45.99 },
            { quantity: 36, rate: 42.99 },
            { quantity: 48, rate: 39.99 },
            { quantity: 72, rate: 34.99 },
            { quantity: 144, rate: 29.99 },
        ],
    },
    {
        id,
        category: "apparel",
        subCategory: "winterhats",
        title: "Yupoong 1501 - 100% Turbo Spun Acrylic Knit",
        sku: "WSkuYupoong1501",
        description: `
            100% turbo spun acrylic knit. Hypoallergenic. Tight knit allows for easy embroidery. Hand washable.
        `,
        image: whatsa,
        price: [
            { quantity: 12, rate: 34.99 },
            { quantity: 24, rate: 32.99 },
            { quantity: 36, rate: 29.99 },
            { quantity: 48, rate: 26.99 },
            { quantity: 72, rate: 24.99 },
            { quantity: 144, rate: 18.99 },
        ],
    }
    
    
]



export const products = generateProductIds(productsDatabase);







  