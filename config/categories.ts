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
      menu: "Apparel",
      items: [
        {
          label: "All Product",
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
          label: "All Product",
          link: "/categories/drinkware/"
        },
        {
          label: "Tea Cups",
          link: "/categories/drinkware/teacups"
        },
        {
          label: "Coffee Mugs",
          link: "/categories/drinkware/coffeemugs"
        },
        {
          label: "Glasses",
          link: "/categories/drinkware/glasses"
        },
      ]
    },
    {
      menu: "Safety Gear",
      items: [
        {
          label: "All Product",
          link: "/categories/safetygear/"
        },
        {
          label: "Safety Glasses",
          link: "/categories/safetygear/safetyglasses"
        },
      ]
    },
    {
      menu: "Tools",
      items: [
        {
          label: "All Product",
          link: "/categories/tools/"
        },
        {
          label: "Flash Lights",
          link: "/categories/tools/flashlights"
        },
        {
          label: "Knifes",
          link: "/categories/tools/knifes"
        },
        {
          label: "Others",
          link: "/categories/tools/others"
        },
      ]
    },
  ];