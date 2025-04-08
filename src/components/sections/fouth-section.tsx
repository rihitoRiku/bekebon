"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FouthSection() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="mb-16 max-w-screen-md">
          <div className="mb-6 text-2xl text-yellow-200 md:text-3xl">
            Dive into our curated collection of successfully completed
            agricultural projects
          </div>
          <div className="text-neutral-400">
            Discover the expertise, innovation, and dedication that went into
            making them flourish.
          </div>
        </div>
        <div className="flex flex-col items-end md:items-start gap-6 md:gap-16 lg:flex-row">
          <div className="flex w-full max-w-[48rem] gap-6">
            <div className="relative aspect-[3/4] w-full">
              <div className="absolute inset-0 z-0 h-full w-full">
                <Image
                  src="/assets/item4.jpg" // Place your image in the public/images folder
                  alt="alt-image4"
                  fill
                  priority
                  className="object-cover object-right"
                  quality={90}
                />
                {/* Optional overlay for better text readability */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/30 to-black/60"></div>
              </div>
            </div>
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/assets/item5.jpg" // Place your image in the public/images folder
                alt="alt-image5"
                fill
                priority
                className="object-cover object-center"
                quality={90}
              />
            </div>
          </div>
          <div className="w-full lg:max-w-[32rem] lg:min-w-[28rem]">
            <div className="mb-6 text-2xl text-white md:text-3xl">
              Bekebon Vertical Pots
            </div>
            <div className="mb-8 text-neutral-400">
              Elevate Your Green Space! Explore our innovative vertical pots to
              bring a touch of nature to your environment, even in limited
              spaces. Ideal for apartments, offices, or any area with minimal
              floor space. Discover a creative way to display your favorite
              plants and enhance your surroundings with Bekebon.
            </div>
            <Button className="h-10 max-w-[12rem] rounded-full bg-yellow-200 px-6 text-base text-black transition-colors hover:bg-yellow-300 md:h-12 md:max-w-[14rem] lg:text-lg">
              View Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
