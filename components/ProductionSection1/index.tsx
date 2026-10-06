"use client";

import Image from "next/image";
import { Urbanist, Archivo } from "next/font/google";
import localFont from "next/font/local";
import * as React from "react";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const nippo = localFont({
  src: "../../public/fonts/Nippo-Regular.otf",
  display: "swap",
});

const COLORS = [
  { name: "Black", value: "#000000" },
  { name: "Red", value: "#D7495F" },
  { name: "Pink", value: "#EC4899" },
] as const;

const PRODUCT_IMAGES = [
  { src: "/src/assets/production1.png", alt: "Black t-shirt from behind" },
  { src: "/src/assets/production2.png", alt: "Cream t-shirt" },
  null,
  null,
] as const;

export function ProductionSection1() {
  const [selectedColor, setSelectedColor] = React.useState<
    (typeof COLORS)[number]
  >(COLORS[0]);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  const mainImage = PRODUCT_IMAGES[selectedImageIndex] ?? PRODUCT_IMAGES[0];

  return (
    <section className="relative bg-white px-6 sm:px-10 lg:px-25 py-12">
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
        <div className="flex w-full md:w-1/2 shrink-0 flex-col">
          {/* Main product image - min-height on mobile so it doesn't collapse; flex-1 on desktop */}
          <div className="relative min-h-[50vh] md:min-h-0 flex-1 w-full overflow-hidden rounded-lg">
            {mainImage ? (
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : null}
          </div>
          {/* Thumbnail strip */}
          <div className="mt-4 flex shrink-0 gap-3 px-20">
            {PRODUCT_IMAGES.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                className={`relative aspect-square w-full flex-1 overflow-hidden rounded-lg transition-all ${
                  selectedImageIndex === index
                    ? "ring-2 ring-offset-2"
                    : "hover:opacity-90"
                }`}
              >
                {item ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#E5E5E5]" />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Category tag */}
          <span
            className={`${nippo.className} inline-block w-fit rounded-sm bg-[#F0F0F0] px-3 py-1.5 text-base font-medium text-[#D7495F]`}
          >
            Summer Cloth
          </span>

          {/* Product title */}
          <h1
            className={`${archivo.className} mt-4 text-2xl leading-tight tracking-normal text-black`}
          >
            UUu T-SHIRT <br /> (HOURS FEAT. HIROSHIGE)
          </h1>

          {/* Price */}
          <p
            className={`${urbanist.className} mt-2 text-3xl font-normal text-black`}
          >
            $42.99 (Live price)
          </p>

          {/* Description */}
          <p
            className={`${urbanist.className} mt-4 text-lg font-normal leading-relaxed text-black`}
          >
            UUu&apos;s signature t-shirt collection: Hours featuring art pieces
            by Hiroshige. <br /> The front and right sleeve designs are
            embroidered, the back design is DTG printed.
          </p>

          {/* Color selection */}
          <p
            className={`${urbanist.className} mt-6 text-lg font-normal text-black`}
          >
            Selected Color:{" "}
            <span className={`font-bold`}> {selectedColor.name} </span>
          </p>
          <div className="mt-2 flex gap-3">
            {COLORS.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => setSelectedColor(color)}
                className="cursor-pointer h-15 w-15 shrink-0 rounded-full transition-transform hover:scale-105"
                style={{
                  backgroundColor: color.value,
                  outline:
                    selectedColor.name === color.name
                      ? "2px solid black"
                      : "2px solid transparent",
                  outlineOffset: 2,
                }}
                aria-label={`Select color ${color.name}`}
                aria-pressed={selectedColor.name === color.name}
              />
            ))}
          </div>

          {/* Add to Cart */}
          {/* <button
            type="button"
            className={`${nippo.className} mt-6 w-full rounded-full bg-[#D7495F] px-6 py-4 text-lg font-medium text-white transition-opacity hover:opacity-90`}
          >
            Add to Cart
          </button> */}

          {/* Sizing information box */}
          <div className="mt-8 rounded-2xl border border-[#D7495F2E] px-8 py-8">
            <p
              className={`${urbanist.className} text-lg font-medium leading-normal text-[#D7495F]`}
            >
              Model is 5&apos;8&quot; and wearing L.
            </p>
            <p
              className={`${urbanist.className} mt-3 text-lg font-normal leading-normal text-black`}
            >
              These t-shirts are pretty true to size but run a little on the
              smaller end. I strongly recommend going 1 size up from your usual
              sizing for a loose fit (men).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
