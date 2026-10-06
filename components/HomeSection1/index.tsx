"use client";

import Image from "next/image";
import { useState } from "react";
import { Urbanist } from "next/font/google";
import localFont from "next/font/local";
import { MailIcon } from "../icons/MailIcon";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400"],
});

const nippo = localFont({
  src: "../../public/fonts/Nippo-Regular.otf",
  display: "swap",
});

export function HomeSection1() {
  const [showChinese, setShowChinese] = useState(false);
  return (
    <section className="bg-[#F3F3F2] flex flex-col md:flex-row relative overflow-hidden md:h-[700px]">
      <div className="grid md:w-1/2 w-full gap-10 justify-start px-6 sm:px-10 lg:px-25 relative z-10 mt-10 md:mt-0">
        <div className="flex flex-col justify-center items-start">
          <div className="w-full items-start">
            <div
              className="flex items-center gap-2 text-[clamp(0.875rem,1.25vw,1.75rem)] font-[1000] uppercase leading-[100%] tracking-normal text-black"
              style={{ fontFamily: '"Druk Wide Trial", Impact, sans-serif' }}
            >
              <span>Johnny</span>
              <span className="text-[#D7495F]">Wu</span>
            </div>

            <h1
              className="mt-5 text-balance text-[clamp(20px,14px+1.25vw,32px)] font-[1000] uppercase leading-[1.1] tracking-[0.02em] text-[#07090F]"
              style={{ fontFamily: '"Druk Wide Trial", Impact, sans-serif' }}
            >
              <span>People don’t </span><span className="text-[#e7000b]">fail</span>
              <br />
              <span>because they</span>
              <br />
              <span>lack talent.</span>
            </h1>

            <div
              className={`${urbanist.className} mt-5 h-fit text-base font-normal leading-[1.1] tracking-normal text-[#07090F]`}
            >
              <span>They fail because they never meet the right person.</span>
              <br />
              <br className="md:hidden block" />
              <span>I help make those collisions happen.</span>
            </div>

            <a
              href="https://forms.gle/AiihiSiPbjELbuFh6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                setShowChinese(true);
                setTimeout(() => {
                  setShowChinese(false);
                  window.open(
                    "https://forms.gle/AiihiSiPbjELbuFh6",
                    "_blank",
                    "noopener,noreferrer",
                  );
                }, 80);
              }}
              className={`${urbanist.className} group cursor-pointer inline-flex items-center gap-1.5 md:gap-2 relative md:mt-5 mt-8 rounded-sm px-5 py-4 md:px-7 md:py-5 text-base md:text-lg font-normal leading-none tracking-normal text-white transition-colors ${showChinese ? "bg-[#D7495F]" : "bg-black hover:bg-[#D7495F]"}`}
            >
              <MailIcon className="text-white w-[18px] h-[18px] md:w-5 md:h-5" />
              <span
                className={`transition-opacity ${showChinese ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}
              >
                Tap in
              </span>
              <span
                className={`${urbanist.className} left-7 md:left-8 pointer-events-none absolute inset-0 flex items-center justify-center text-base md:text-lg font-normal leading-none tracking-normal text-white transition-opacity ${showChinese ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                aria-hidden
              >
                见面
              </span>
            </a>
          </div>

          <div
            className={`${nippo.className} mt-8 sm:mt-16 text-base text-[#07090F]`}
          >
            <p className="font-medium">People unlock people.</p>
            <p className="mt-1 text-[#07090F80]">I bring them together.</p>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-[45vh] overflow-hidden pointer-events-none md:min-h-0 md:w-1/2 md:right-15 md:center">
        <Image
          src="/src/assets/section1_wu.png"
          alt="section1_wu"
          fill
          className="object-contain object-top scale-y-[1.8] -scale-x-[1.8] lg:translate-y-55 translate-y-20 md:scale-y-[2.2] md:-scale-x-[2.2]"
        />
      </div>
    </section>
  );
}
