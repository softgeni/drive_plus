"use client";

import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { dataBrands } from "@/constants";
import { Reveal } from "../shared";
import Autoplay from "embla-carousel-autoplay";

export const SliderBrands = () => {
  return (
    <>
      <Reveal
        position={"bottom"}
        className="flex gap-x-20 justify-center lg:pb-20 mt-5 mb-10"
      >
        <Carousel
          className=" w-full max-w-6xl mx-auto"
          plugins={[
            Autoplay({
              delay: 4500,
            }),
          ]}
        >
          <CarouselContent>
            {dataBrands.map((url, index) => (
              <CarouselItem
                key={index}
                className="basis-4/4 md:basis-2/4 lg:basis-1/6"
              >
                <Image
                  src={`/images/brands/${url.url}`}
                  alt={"Brands"}
                  width={90}
                  height={90}
                  className="aspect-3/2 object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Reveal>
    </>
  );
};
