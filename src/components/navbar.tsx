import React from 'react'

export default function Navbar() {
  return (
    <nav className="hidden md:block fixed top-0 left-0 w-full z-20 bg-custom-background/20">
      <div className="mx-auto max-w-screen-2xl px-4">
        <ul className="flex items-center gap-8 md:gap-12 p-8 font-medium text-white">
          <li className="text-xl font-bold">Logo</li>
          <li className="cursor-pointer transition-colors hover:text-yellow-200">
            Home
          </li>
          <li className="cursor-pointer transition-colors hover:text-yellow-200">
            Project
          </li>
          <li className="cursor-pointer transition-colors hover:text-yellow-200">
            Blog
          </li>
          <li className="cursor-pointer transition-colors hover:text-yellow-200">
            About Us
          </li>
          <li className="cursor-pointer transition-colors hover:text-yellow-200">
            Support
          </li>
        </ul>
      </div>
    </nav>
  );
}
