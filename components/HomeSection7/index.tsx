"use client";

import Image from "next/image";
import localFont from "next/font/local";

const nippo = localFont({
  src: "../../public/fonts/Nippo-Regular.otf",
  display: "swap",
});

export function HomeSection7() {
  return (
    <section className="relative bg-[#F1F2F0] px-6 sm:px-10 lg:px-25 lg:py-20 py-15">
      {/* Large header text */}
      <div className="top-16 z-0 px-0 sm:px-10 lg:px-15 xl:px-25 mb-10 lg:mb-0">
        <h2
          className="text-start text-4xl md:text-6xl xl:text-[110px] font-[1000] uppercase leading-none tracking-normal text-[#0000001A] whitespace-nowrap select-none"
          style={{ fontFamily: '"Druk Wide Trial", Impact, sans-serif' }}
        >
          EXPLORE
        </h2>
        <h2
          className="pl-20 md:pl-30 lg:pl-30 xl:pl-50 text-start text-4xl md:text-6xl xl:text-[110px] font-[1000] uppercase leading-none tracking-normal text-[#0000000D] whitespace-nowrap select-none"
          style={{ fontFamily: '"Druk Wide Trial", Impact, sans-serif' }}
        >
          MY Merch
        </h2>
      </div>

      {/* Merchandise grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:pb-24 pb-0">
        {/* Item 1 - Dark grey t-shirt from behind on red background */}
        <div className="relative bg-[#D7495F] flex items-center justify-center h-[200px] lg:h-[350px] max-w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
          <Image
            src="/src/assets/section7_item1.png"
            alt="Dark grey t-shirt from behind"
            width={400}
            height={600}
            className="h-full max-h-[350px] w-auto object-contain transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Item 2 - Cream t-shirt flat on grey background */}
        <div className="relative flex items-center justify-center h-[200px] lg:h-[350px] max-w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
          <Image
            src="/src/assets/section7_item2.png"
            alt="Cream t-shirt"
            width={400}
            height={600}
            className="h-full max-h-[350px] w-auto object-contain transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Item 3 - Dark grey t-shirt from front on red background - last on mobile */}
        <div className="relative order-4 md:order-3 bg-[#D7495F] flex items-center justify-center h-[200px] lg:h-[350px] max-w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
          <Image
            src="/src/assets/section7_item3.png"
            alt="Dark grey t-shirt from front"
            width={400}
            height={600}
            className="h-full max-h-[500px] w-auto object-contain scale-160 translate-y-15 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Item 4 - Black sweatshirt flat on grey background */}
        <div className="relative order-3 md:order-4 flex items-center justify-center h-[200px] lg:h-[350px] max-w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
          <Image
            src="/src/assets/section7_item4.png"
            alt="Cream t-shirt"
            width={400}
            height={600}
            className="h-full max-h-[350px] w-auto object-contain transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Bottom navigation - hidden on mobile */}
      <div className="relative z-10 hidden md:flex items-center justify-between pb-10">
        {/* Merch button */}
        <a
          href="/merch"
          className={`${nippo.className} group inline-flex items-center gap-2 rounded-sm bg-black px-7 py-5 text-lg font-light text-white transition-colors hover:bg-[#D7495F]`}
        >
          <Image
            src="/src/assets/icon/shopping-cart.png"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
          <span className="relative inline-block">
            <span className="opacity-100 transition-opacity group-hover:opacity-0">
              Merch
            </span>
            <span className="pointer-events-none absolute inset-0 left-2 opacity-0 transition-opacity group-hover:opacity-100">
              商品
            </span>
          </span>
        </a>

        {/* Brand name */}
        <p
          className={`${nippo.className} text-[clamp(0.75rem,1.25vw,1.25rem)] font-light leading-[100%] tracking-normal text-right text-[#07090F]`}
        >
          UUu
        </p>
      </div>
    </section>
  );
}
