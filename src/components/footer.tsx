"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <div>
      <Separator className="mt-20 bg-neutral-800" />
      <div className="mx-auto max-w-screen-2xl px-4 py-12">
        <div className="">{/* Logo */}</div>
        <div className="flex flex-col justify-between text-sm md:text-base lg:flex-row gap-6 lg:gap-0">
          <ul className="flex flex-wrap lg:gap-8 gap-4 text-neutral-300">
            <li>Project</li>
            <li>Our Story</li>
            <li>About Us</li>
            <li>Support</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
          <div className="flex gap-8 text-neutral-300">
            <div className="">
              <p>Email</p>
              <p className="text-neutral-500">sales@bekebon.com</p>
            </div>
            <div className="">
              <div className="">
                <p>Phone</p>
                <p className="text-neutral-500">+1 432 6636</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between text-sm text-neutral-400 md:text-base lg:flex-row text-center lg:text-start gap-2">
          <div className="flex-wrap">
            <a href="#">Privacy Policy | </a>
            <a href="#">Terms of Use | </a>
            <a href="#">Sales and Refunds | </a>
            <a href="#">Legal | </a>
            <a href="#">Site Map</a>
          </div>
          <div className="">Copyright 2025. All rights reserved</div>
        </div>
      </div>
    </div>
  );
}
