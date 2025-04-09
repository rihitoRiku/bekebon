"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ThirdSection() {
  return (
    <div>
      <div className="py-20">
        <div
          data-aos="zoom-in"
          className="mx-auto mb-20 max-w-screen-xl px-4 text-center"
        >
          <div className="size-24 relative mx-auto mb-6">
            {/* Logo */}
            <Image
              src="/assets/logo.png"
              alt="logotext"
              fill
              className="object-contain"
            />
          </div>
          <div className="mb-6 text-3xl text-yellow-200 md:mb-8 md:text-4xl">
            Revolutionizing Planting: Effortless Gardening Made Possible
          </div>
          <div className="font-roboto text-sm text-neutral-400 md:text-base">
            Introducing a breakthrough in gardening! We've made the planting
            experience easier than ever before. Whether you're a seasoned
            gardener or just starting out, our innovative solutions streamline
            the process, so you can enjoy the therapeutic benefits of nurturing
            your plants without the hassle. Explore our tools and techniques
            designed to simplify planting, from seed to harvest. Get ready to
            grow with confidence!"
          </div>
        </div>
        <div className="">
          <div className="relative h-[44rem] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 h-full w-full">
              <Image
                src="/assets/hero2.jpg" // Place your image in the public/images folder
                alt="Beautiful garden background"
                fill
                priority
                className="object-cover object-center"
                quality={90}
              />
              {/* Optional overlay for better text readability */}
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/30 to-black/60"></div>
            </div>

            <div className="relative mx-auto max-w-screen-2xl px-4 md:px-8">
              {/* Content */}
              <div className="flex h-[44rem] flex-col justify-end gap-6 pb-[6rem] md:flex-row md:items-end md:justify-between">
                <div
                  data-aos="fade-right"
                  className="flex max-w-[48rem] flex-col gap-6"
                >
                  <div className="">
                    <div className="text-3xl text-yellow-200 md:text-4xl">
                      Start with smile and love
                    </div>
                  </div>
                  <div className="font-roboto text-sm text-neutral-300 md:text-base">
                    At Bekebon, our expertise nurtures both your garden and
                    plants, ensuring they flourish and thrive. Discover how we
                    bring green spaces to life.
                  </div>
                </div>

                <div data-aos="fade-left" className="">
                  <Button className="h-10 max-w-[12rem] rounded-full bg-yellow-200 text-base text-black transition-colors hover:bg-yellow-300 md:h-12 md:max-w-[14rem] lg:text-lg">
                    Collaborate with us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
