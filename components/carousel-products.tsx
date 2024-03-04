import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import keyball1 from "../public/keyball1.png"
import ballcapImage1 from "../public/ballcapImage1.png"
import knifeImage1 from "../public/knifeImage1.png"
import flashlightToolImage4 from "../public/flashlightToolImage4.png";
import initial from "../public/initial.png";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const images = [
    {img: initial, price: "$$"},
    {img: keyball1, price: "$4.25" },
    {img: ballcapImage1, price: "$24.47" },
    {img: knifeImage1, price: "$19.46" },
    {img: flashlightToolImage4, price: "$24.95" }
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-md"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-auto items-center justify-center p-6">

                    <Image
                      quality={100}
                      height={500}
                      width={500}                      
                      alt={"images"}
                      className="block size-full object-cover object-center transition-all hover:scale-105"
                      src={image.img}
                    />

                </CardContent>
              </Card>
              <span className="text-center text-lg">Price From: {image.price}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
