"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function MerchSection1() {
  const [imageCount, setImageCount] = useState(25);
  const imageWidth = 70; // Width of each wave image

  useEffect(() => {
    const calculateImageCount = () => {
      // Calculate how many images needed to fill screen width with some buffer
      const screenWidth = window.innerWidth;
      const count = Math.ceil(screenWidth / imageWidth) + 2; // +2 for buffer to ensure coverage
      setImageCount(count);
    };

    // Calculate on mount
    calculateImageCount();

    // Recalculate on resize
    window.addEventListener("resize", calculateImageCount);
    return () => window.removeEventListener("resize", calculateImageCount);
  }, []);
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Red cloud shapes - scattered at top */}
      <div className="absolute top-17 left-1/2 -translate-x-1/2 z-10 flex gap-100 items-center">
        <Image
          src="/src/assets/cloud1.svg"
          alt="Red cloud shape"
          width={76}
          height={49}
          className="transform scale-y-[1.2] scale-x-[1.2]"
        />
        <Image
          src="/src/assets/cloud1.svg"
          alt="Red cloud shape"
          width={100}
          height={50}
          className="transform scale-x-[-1.5] -mt-8 -ml-8 scale-y-[1.5]"
        />
        <Image
          src="/src/assets/cloud1.svg"
          alt="Red cloud shape"
          width={68}
          height={44}
          className="transform scale-y-[-1.2] scale-x-[-1.2]"
        />
      </div>

      {/* Main content area */}
      <div className="relative flex items-center justify-between min-h-[870px]">
        {/* Left model - Black hoodie */}
        <div className="relative w-2/5 max-w-xl shrink-0 -ml-8">
          <div className="relative aspect-3/4">
            <Image
              src="/src/assets/merchleft.png"
              alt="Person wearing black hoodie with Japanese ukiyo-e print"
              fill
              className="object-contain scale-120 translate-x-20"
              priority
            />
          </div>
        </div>

        {/* Center text */}
        <div className="flex flex-col items-center justify-center mx-8 z-10 -mt-40 gap-5">
          <h2
            className="text-[clamp(1.25rem,2.5vw,2.4rem)] font-[1000] leading-[100%] tracking-normal text-center text-black"
            style={{ fontFamily: '"Druk Wide Trial", Impact, sans-serif' }}
          >
            UUu MERCH
          </h2>
          <p
            className={`${urbanist.className} text-[clamp(0.875rem,1.5vw,1.75rem)] font-medium leading-[100%] tracking-normal text-center text-[#D7495F]`}
          >
            carefree and without worry
          </p>
        </div>

        {/* Right model - Pink hoodie */}
        <div className="relative w-2/5 max-w-xl shrink-0 -mr-8">
          <div className="relative aspect-3/4">
            <Image
              src="/src/assets/merchright.png"
              alt="Person wearing pink hoodie with Japanese ukiyo-e print"
              fill
              className="object-contain scale-120 -translate-x-20"
              priority
            />
          </div>
        </div>
        <Image
          src="/src/assets/red_sun.png"
          alt="red sun decoration"
          width={200}
          height={200}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 object-contain shrink-0 z-6"
        />
      </div>
      {/* wave zigzag pattern at bottom */}
      <div className="-mt-50 z-7 relative">
        <div className="flex items-center justify-start overflow-x-hidden z-10">
          {Array.from({ length: imageCount }).map((_, i) => (
            <Image
              key={`row1-${i}`}
              src="/src/assets/wave.png"
              alt="wave decoration"
              width={300}
              height={300}
              className="shrink-0 w-[120px] h-[100px]"
            />
          ))}
        </div>

        {/* Row 2 - Right aligned (zigzag) */}
        <div className="flex items-center overflow-x-hidden -mx-15 z-10 -mt-16">
          {Array.from({ length: imageCount + 1 }).map((_, i) => (
            <Image
              key={`row2-${i}`}
              src="/src/assets/wave.png"
              alt="wave decoration"
              width={300}
              height={300}
              className="shrink-0 w-[120px] h-[100px]"
            />
          ))}
        </div>

        {/* Row 3 - Left aligned */}
        <div className="flex items-center justify-start overflow-x-hidden z-12 -mt-16">
          {Array.from({ length: imageCount }).map((_, i) => (
            <Image
              key={`row3-${i}`}
              src="/src/assets/wave.png"
              alt="Ellipse decoration"
              width={300}
              height={300}
              className="shrink-0 w-[120px] h-[100px]"
            />
          ))}
        </div>
        <div className="flex absolute bottom-16 left-0 right-0 z-10">
          <Image
            src="/src/assets/ninja.png"
            alt="wave decoration"
            width={100}
            height={100}
            className="w-[110px] h-[120px] shrink-0 translate-x-34"
          />
          <Image
            src="/src/assets/ninja1.png"
            alt="wave decoration"
            width={100}
            height={100}
            className="w-[100px] h-[100px] shrink-0 translate-x-395 translate-y-5"
          />
        </div>
        {/* Row 4 - Right aligned */}
        <div className="flex relative items-center overflow-x-hidden -mt-16 -mx-15 z-20">
          {Array.from({ length: imageCount + 1 }).map((_, i) => (
            <Image
              key={`row2-${i}`}
              src="/src/assets/wave.png"
              alt="wave decoration"
              width={300}
              height={300}
              className="shrink-0 w-[120px] h-[100px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
