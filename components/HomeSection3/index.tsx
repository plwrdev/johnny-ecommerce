"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { Urbanist } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const drukWideBold = localFont({
  src: "../../public/fonts/DrukWideBold.ttf",
  display: "swap",
});

const avantGarde = localFont({
  src: "../../public/fonts/AvantGardeLT-Book.otf",
  display: "swap",
});

export function HomeSection3() {
  const [activeSection, setActiveSection] = useState<0 | 1 | 2 | null>(0);
  const [isMobile, setIsMobile] = useState(false);
  const section0Ref = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const set = () => setIsMobile(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  useEffect(() => {
    const refs = [section0Ref, section1Ref, section2Ref] as const;
    const updateActiveSection = () => {
      const viewportCenterY = window.innerHeight / 2;
      let active: 0 | 1 | 2 | null = null;
      let minDistance = Infinity;
      refs.forEach((ref, index) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const sectionCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenterY - viewportCenterY);
        if (distance < minDistance) {
          minDistance = distance;
          active = index as 0 | 1 | 2;
        }
      });
      setActiveSection(active);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const toggleSection = (i: 0 | 1 | 2) => {
    if (isMobile) return;
    setActiveSection((prev) => (prev === i ? null : i));
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative w-full h-[170px] md:h-full">
        <Image
          src="/src/assets/section3.png"
          alt="Person wearing pink hoodie with Japanese ukiyo-e print"
          width={6000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col bg-white">
        <h2
          className="text-black mb-8 sm:mb-10 md:mb-12 text-center uppercase text-[24px] sm:text-[28px] md:text-[32px] font-[1000] leading-[100%] tracking-[0%] pt-12 sm:pt-16 md:pt-20"
          style={{ fontFamily: '"Druk Wide Trial", Impact, sans-serif' }}
        >
          MY PEOPLE
        </h2>
        <div className="relative">
          {/* Top Section - White Background */}
          <div
            ref={section0Ref}
            className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40"
          >
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleSection(0)}
              onKeyDown={(e) => e.key === "Enter" && toggleSection(0)}
              className={`cursor-pointer py-8 sm:py-12 md:py-16 lg:py-20 transition-colors duration-300 ${activeSection === 0 ? "bg-[#D7495F]" : "bg-white"}`}
            >
              <div
                className={`${drukWideBold.className} text-center uppercase text-3xl sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-bold leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[80px] xl:leading-[100px] tracking-[-5%] transition-colors duration-300 ${activeSection === 0 ? "text-white" : "text-[#0000001A]"}`}
              >
                <h3>Dual</h3>
                <h3>Excellence</h3>
              </div>
              <p
                className={`${urbanist.className} -mt-8 mx-auto w-fit text-lg bg-black text-white px-2 py-1 -rotate-3 transition-opacity duration-300 ${activeSection === 0 ? "opacity-100" : "opacity-0"}`}
              >
                双才
              </p>
              {/* Descriptive text - left aligned */}
              <div
                className={`${avantGarde.className} mt-5 text-center mx-auto space-y-4 text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] tracking-[0%] transition-all duration-300 ${activeSection === 0 ? "opacity-100 text-white" : "opacity-0 text-black"}`}
              >
                <p>
                  You take your profession seriously.
                  <br />
                  And you take your craft just as seriously.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Section - Red Background */}
          <div
            ref={section1Ref}
            className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40"
          >
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleSection(1)}
              onKeyDown={(e) => e.key === "Enter" && toggleSection(1)}
              className={`cursor-pointer py-8 sm:py-12 md:py-16 lg:py-20 transition-colors duration-300 ${activeSection === 1 ? "bg-[#D7495F]" : "bg-white"}`}
            >
              <div
                className={`${drukWideBold.className} text-center uppercase text-3xl sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-bold leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[80px] xl:leading-[100px] tracking-[-5%] transition-colors duration-300 ${activeSection === 1 ? "text-white" : "text-[#0000001A]"}`}
              >
                <h3>TASTEFUL</h3>
                <h3>STANDARDS</h3>
              </div>
              <p
                className={`${urbanist.className} -mt-8 mx-auto w-fit text-lg bg-black text-white px-2 py-1 -rotate-3 transition-opacity duration-300 ${activeSection === 1 ? "opacity-100" : "opacity-0"}`}
              >
                品质
              </p>
              {/* Descriptive text - left aligned */}
              <div
                className={`${avantGarde.className} mt-5 text-center mx-auto space-y-4 text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] tracking-[0%] transition-all duration-300 ${activeSection === 1 ? "opacity-100 text-white" : "opacity-0 text-black"}`}
              >
                <p>
                  You care about the details other people don&apos;t notice.
                  <br />
                  You&apos;d rather ship one thing you&apos;re proud of than ten
                  things you don&apos;t believe in.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section - White Background */}
          <div
            ref={section2Ref}
            className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40"
          >
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggleSection(2)}
              onKeyDown={(e) => e.key === "Enter" && toggleSection(2)}
              className={`cursor-pointer py-8 sm:py-12 md:py-16 lg:py-20 transition-colors duration-300 ${activeSection === 2 ? "bg-[#D7495F]" : "bg-white"}`}
            >
              <div
                className={`${drukWideBold.className} mt-5 text-center uppercase text-3xl sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-bold leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[80px] xl:leading-[100px] tracking-[-5%] transition-colors duration-300 ${activeSection === 2 ? "text-white" : "text-[#0000001A]"}`}
              >
                <h3>PLAYFUL</h3>
                <h3>DISCIPLINE</h3>
              </div>
              <p
                className={`${urbanist.className} -mt-8 mx-auto w-fit text-lg bg-black text-white px-2 py-1 -rotate-3 transition-opacity duration-300 ${activeSection === 2 ? "opacity-100" : "opacity-0"}`}
              >
                忍士
              </p>
              {/* Descriptive text - left aligned */}
              <div
                className={`${avantGarde.className} mt-5 text-center mx-auto space-y-4 text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] tracking-[0%] transition-all duration-300 ${activeSection === 2 ? "opacity-100 text-white" : "opacity-0 text-black"}`}
              >
                <p>
                  You&apos;re ambitious, but not joyless.
                  <br />
                  You can work hard without becoming boring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
