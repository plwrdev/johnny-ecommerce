"use client";

import Image from "next/image";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import localFont from "next/font/local";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const nippo = localFont({
  src: "../../public/fonts/Nippo-Regular.otf",
  display: "swap",
});

export function MerchSection3() {
  const [sortValue, setSortValue] = useState("best-selling");

  // Product data - 9 identical items
  const products = Array(9).fill({
    name: "UUu T-Shirt (Hours feat. Hiroshige)",
    price: "$34.78",
    image: "/src/assets/section7_item2.png", // Using existing cream t-shirt image
  });

  const sortOptions = [
    { value: "best-selling", label: "Sort By: Best Selling" },
    { value: "price-low", label: "Sort By: Price: Low to High" },
    { value: "price-high", label: "Sort By: Price: High to Low" },
    { value: "newest", label: "Sort By: Newest" },
  ];

  return (
    <section className="bg-white min-h-screen px-6 sm:px-10 lg:px-25 py-12">
      {/* Top section with button and sort dropdown */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-0 p-1.5 bg-[#F0F0F133]">
        {/* UUu Collection button */}
        <button
          className={`${nippo.className} w-full md:w-auto text-left md:text-center bg-[#D7495F] text-white px-8 py-3 rounded-sm text-lg font-normal hover:opacity-90 transition-opacity`}
        >
          UUu Collection
        </button>

        {/* Sort dropdown */}
        <Select.Root value={sortValue} onValueChange={setSortValue}>
          <Select.Trigger
            className={`${nippo.className} w-full md:w-auto md:min-w-[200px] bg-[#52565305] text-black px-4 py-2 rounded cursor-pointer inline-flex items-center justify-between gap-2 text-base font-normal outline-none hover:opacity-90 transition-opacity`}
          >
            <Select.Value placeholder="Sort By: Best Selling" />
            <Select.Icon className="text-black shrink-0">
              <ChevronDown className="h-4 w-4" />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              className={`${nippo.className} select-dropdown-content overflow-hidden bg-white rounded shadow-lg z-50 w-[var(--radix-select-trigger-width)] min-w-[200px]`}
              position="popper"
              sideOffset={4}
            >
              <Select.Viewport className="p-1">
                {sortOptions.map((option) => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className="text-black px-4 py-2 rounded cursor-pointer outline-none hover:bg-[#f3f4f6] focus:bg-[#f3f4f6] data-highlighted:bg-[#f3f4f6] flex items-center justify-between"
                  >
                    <Select.ItemText>{option.label}</Select.ItemText>
                    <Select.ItemIndicator className="ml-2">
                      <Check className="h-4 w-4" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      {/* Product grid - 3x3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {products.map((product, index) => (
          <Link
            key={index}
            href="/product"
            className="block rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            {/* Product image */}
            <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center p-15">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product info */}
            <div className="p-4 bg-[#52565305]">
              <h3
                className={`${urbanist.className} text-black text-base font-normal mb-2`}
              >
                {product.name}
              </h3>
              <p
                className={`${nippo.className} text-black text-base font-bold`}
              >
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
