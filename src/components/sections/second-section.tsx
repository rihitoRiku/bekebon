"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Autoplay from "embla-carousel-autoplay";

const PRODUCTS = [
  {
    id: 1,
    title: "",
    description: "",
    imageUrl: "/assets/item1.jpg",
    color: "bg-emerald-100",
  },
  {
    id: 2,
    title: "",
    description: "",
    imageUrl: "/assets/item2.jpg",
    color: "bg-amber-100",
  },
  {
    id: 3,
    title: "",
    description: "",
    imageUrl: "/assets/item3.jpg",
    color: "bg-rose-100",
  },
];

export default function SecondSection() {
  const [api, setApi] = useState<CarouselApi>();

  const onPrevClick = () => {
    api?.scrollPrev();
  };

  const onNextClick = () => {
    api?.scrollNext();
  };

  return (
    <div className="min-h-[48rem] px-4">
      <div className="mx-auto max-w-screen-2xl justify-between md:flex">
        <div data-aos="fade-right" className="pt-24 pb-10">
          <div className="max-w-screen-md text-3xl text-yellow-200 md:text-4xl">
            By combining technology and science, every small part is within your
            control.
          </div>
          <div className="md:text- font-roboto mt-4 max-w-screen-sm text-sm text-neutral-400 md:text-base">
            Unlock Precision Control: Seamlessly Manage Every Detail with the
            Fusion of Technology and Science.
          </div>
        </div>
        <div className="flex items-end justify-end pb-6 md:justify-normal md:bg-green-950 md:px-12">
          {/* Button */}
          <div
            data-aos="fade-left"
            className="flex items-center justify-center gap-4 md:gap-6"
          >
            <button
              onClick={onPrevClick}
              className="border-pallete-ternary flex size-14 cursor-pointer items-center justify-center rounded-full bg-white"
            >
              <FaArrowLeft className="text-pallete-ternary text-2xl" />
            </button>
            <button
              onClick={onNextClick}
              className="bg-pallete-main flex size-14 cursor-pointer items-center justify-center rounded-full bg-white"
            >
              <FaArrowRight className="text-pallete-ternary text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="mx-auto max-w-screen-2xl">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="select-none">
            {PRODUCTS.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2">
                <div className="">
                  <div
                    className={`relative flex aspect-[5/4] flex-col justify-between overflow-hidden p-4 md:p-3`}
                  >
                    {/* Image Background */}
                    <div className="absolute inset-0 h-full w-full">
                      <Image
                        src={product.imageUrl}
                        alt={`Product ${product.id}`}
                        fill
                        className="object-cover"
                        priority={product.id === 1}
                      />
                      {/* Optional overlay to retain some of the color styling */}
                      <div
                        className={`absolute inset-0 ${product.color} opacity-0`}
                      ></div>
                    </div>

                    {/* Content can be added here */}
                    <div className="relative z-10">
                      {product.title && (
                        <h3 className="text-xl font-semibold">
                          {product.title}
                        </h3>
                      )}
                    </div>

                    <div className="relative z-10 mt-auto">
                      {product.description && <p>{product.description}</p>}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
