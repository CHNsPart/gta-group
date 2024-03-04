interface ProductCategory {
    menu: string;
    items: Items[];
  }

  interface Items {
    label:  string,
    link: string
  }

export const productCategory: ProductCategory[] = [
    {
      menu: "Best Seller",
      items: [
        {
          label: "Apparel",
          link: "/categories/apparel/"
        },
        {
          label: "Pens",
          link: "/categories/tools/pens"
        },
        {
          label: "Flash Lights",
          link: "/categories/tools/flashlights"
        },
        {
          label: "Hoodies",
          link: "/categories/apparel/hoodies"
        },
        {
          label: "Polo Shirts",
          link: "/categories/apparel/poloshirts"
        },
        {
          label: "Golf",
          link: "/categories/homeAndlifestyle/golf"
        },
        {
          label: "Bags",
          link: "/categories/tools/bags"
        },
        {
          label: "Knives/MultiTools",
          link: "/categories/tools/knives"
        },
      ]
    },
    {
      menu: "Apparel",
      items: [
        {
          label: "All Products",
          link: "/categories/apparel/"
        },
        {
          label: "Hoodies",
          link: "/categories/apparel/hoodies"
        },
        {
          label: "Crewneck",
          link: "/categories/apparel/crewneck"
        },
        {
          label: "Polo Shirts",
          link: "/categories/apparel/poloshirts"
        },
        {
          label: "Leggings",
          link: "/categories/apparel/leggings"
        },
        {
          label: "Jackets",
          link: "/categories/apparel/jackets"
        },
        {
          label: "T-Shirts",
          link: "/categories/apparel/tshirts"
        },
        {
          label: "Ball Caps",
          link: "/categories/apparel/ballcaps"
        },
        {
          label: "Winter hats",
          link: "/categories/apparel/winterhats"
        },
      ]
    },
    {
      menu: "Drinkware",
      items: [
        {
          label: "All Products",
          link: "/categories/drinkware/"
        },
        {
          label: "Tumblers",
          link: "/categories/drinkware/tumblers"
        },
        {
          label: "Coffee Mugs",
          link: "/categories/drinkware/coffeemugs"
        },
        {
          label: "Glasses",
          link: "/categories/drinkware/glasses"
        },
        {
          label: "Flasks",
          link: "/categories/drinkware/flasks"
        },
        {
          label: "Wine",
          link: "/categories/drinkware/wine"
        }
      ]
    },
    {
      menu: "Home & Lifestyle",
      items: [
        {
          label: "All Products",
          link: "/categories/homeAndlifestyle/"
        },
        {
          label: "Cutting Boards",
          link: "/categories/homeAndlifestyle/cuttingboards"
        },
        {
          label: "Sun Glasses",
          link: "/categories/homeAndlifestyle/sunglasses"
        },
        {
          label: "Barbeque",
          link: "/categories/homeAndlifestyle/barbeque"
        },
        {
          label: "Kitchenware",
          link: "/categories/homeAndlifestyle/kitchenware"
        },
        {
          label: "Umbrellas",
          link: "/categories/homeAndlifestyle/umbrellas"
        },
        {
          label: "Golf",
          link: "/categories/homeAndlifestyle/golf"
        },
        {
          label: "Travel",
          link: "/categories/homeAndlifestyle/travel"
        },
      ]
    },
    {
      menu: "Safety Gear",
      items: [
        {
          label: "All Products",
          link: "/categories/safetygear/"
        },
        {
          label: "Safety Glasses",
          link: "/categories/safetygear/safetyglasses"
        },
        {
          label: "Safety Clothes",
          link: "/categories/safetygear/safetycloths"
        },
      ]
    },
    {
      menu: "Tools",
      items: [
        {
          label: "All Products",
          link: "/categories/tools/"
        },
        {
          label: "Key Chains",
          link: "/categories/tools/keychains"
        },
        {
          label: "Pens",
          link: "/categories/tools/pens"
        },
        {
          label: "Bags",
          link: "/categories/tools/bags"
        },
        {
          label: "Flash Lights",
          link: "/categories/tools/flashlights"
        },
        {
          label: "Knives/MultiTools",
          link: "/categories/tools/knives"
        },
        {
          label: "Others",
          link: "/categories/tools/others"
        },
      ]
    }, 
  ];