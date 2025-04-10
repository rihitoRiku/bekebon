"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FifthSection() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-20">
      <div
        data-aos="fade-up"
        className="relative h-[40rem] w-full overflow-hidden"
      >
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/assets/hero3.jpg" // Place your image in the public/images folder
            alt="Beautiful garden background"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/30 to-black/60"></div>
        </div>
      </div>
      <div data-aos="fade-up" className="mt-8">
        <div className="mb-6 text-2xl text-white md:text-3xl">
          Bekebon RoboSpray
        </div>
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <div className="font-roboto flex-1/2 text-sm text-neutral-400 md:text-base">
            In the dynamic world of agriculture, efficiency and precision are
            paramount. The Bekebon RoboSpray stands at the forefront of
            agricultural innovation, offering a cutting-edge solution that
            transforms the way we approach crop management. With the Bekebon
            RoboSpray, precision spraying is redefined.
          </div>
          <div className="font-roboto flex-1/2 text-sm text-neutral-400 md:text-base">
            This state-of-the-art robotic system is engineered to optimize the
            application of fertilizers, pesticides, and other essential
            agricultural inputs with unparalleled accuracy. Designed to work
            tirelessly in various field conditions, it offers farmers a level of
            precision that was once unimaginable.
          </div>
        </div>
        <Button className="h-10 max-w-[12rem] rounded-full bg-yellow-200 px-6 text-base text-black transition-colors hover:bg-yellow-300 md:h-12 md:max-w-[14rem] lg:text-lg">
          View Project
        </Button>
      </div>
    </div>
  );
}
