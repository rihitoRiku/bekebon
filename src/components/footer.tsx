"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import MapComponent from "./mapcomponent";

export default function Footer() {
  interface MapProps {
    lat: number;
    lng: number;
  }
  return (
    <div>
      <Separator className="mt-20 bg-neutral-800" />
      <div className="mx-auto max-w-screen-2xl px-4 py-12">
        <div className="">
          <div className="relative mb-6 aspect-[3/1] w-48">
            {/* Logo */}
            <Image
              src="/assets/logotextpng.png"
              alt="logotext"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-12 text-sm md:text-base lg:flex-row lg:gap-0">
          <ul className="flex flex-wrap gap-4 text-neutral-300 lg:gap-8">
            <Link href="#">Project</Link>
            <Link href="#">Our Story</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Support</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Blog</Link>
          </ul>
          <div className="flex flex-row gap-4 lg:w-[24rem] lg:flex-col">
            <div className="mb-6 h-[14rem] w-full max-w-[20rem]">
              <MapComponent lat={-6.861940096619952} lng={107.59462764880793} />
            </div>
            <div className="flex flex-col gap-8 text-neutral-300 md:flex-row">
              <div className="">
                <p>Email</p>
                <p className="text-neutral-500">sales@bekebon.com</p>
              </div>
              <div className="">
                <p>Phone</p>
                <p className="text-neutral-500">+1 432 6636</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 text-center text-sm text-neutral-400 md:text-base lg:flex-row lg:text-start">
          <div className="flex-wrap">
            <Link href="#">Privacy Policy | </Link>
            <Link href="#">Terms of Use | </Link>
            <Link href="#">Sales and Refunds | </Link>
            <Link href="#">Legal | </Link>
            <Link href="#">Site Map</Link>
          </div>
          <div className="">Copyright © Bekebon. All rights reserved</div>
        </div>
      </div>
    </div>
  );
}
