import hoodPic from "../public/hoodie.png"
import crewPic from "../public/crew.png"

export const products = [
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
        sku:  "HOODIE001",
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
]