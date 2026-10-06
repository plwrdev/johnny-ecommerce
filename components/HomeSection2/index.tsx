"use client";
import { Archivo } from "next/font/google";
import { Urbanist } from "next/font/google";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export function HomeSection2() {
  const sectionRef = useRef<HTMLElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = sectionRef.current;
    const container = containerRef.current;
    if (!scope || !container) return;

    const ctx = gsap.context(() => {
      // First element: starts red, then turns back to normal when second turns red
      if (firstRef.current) {
        // Set initial state: first is red
        gsap.set(firstRef.current, {
          backgroundColor: "#D7495F",
          color: "#ffffff",
        });

        // First turns back to normal (red -> transparent)
        gsap.fromTo(
          firstRef.current,
          { backgroundColor: "#D7495F", color: "#ffffff" },
          {
            backgroundColor: "transparent",
            color: "#000000",
            overwrite: true,
            scrollTrigger: {
              trigger: container,
              start: "top 55%",
              end: "top 54%",
              scrub: true,
            },
          },
        );
      }

      // Second element: turns red when first turns back to normal
      if (secondRef.current) {
        // Turn red animation - extended range for longer animation time
        gsap.fromTo(
          secondRef.current,
          { backgroundColor: "transparent", color: "#000000" },
          {
            backgroundColor: "#D7495F",
            color: "#ffffff",
            overwrite: "auto",
            scrollTrigger: {
              trigger: container,
              start: "top 55%",
              end: "top 54%",
              scrub: true,
            },
          },
        );

        // Revert second element back to normal when third turns red
        gsap.fromTo(
          secondRef.current,
          { backgroundColor: "#D7495F", color: "#ffffff" },
          {
            backgroundColor: "transparent",
            color: "#000000",
            overwrite: "auto",
            immediateRender: false,
            scrollTrigger: {
              trigger: container,
              start: "top 25%",
              end: "top 24%",
              scrub: true,
            },
          },
        );
      }

      // Third element: turns red when second turns back to normal
      if (thirdRef.current) {
        gsap.fromTo(
          thirdRef.current,
          { backgroundColor: "transparent", color: "#000000" },
          {
            backgroundColor: "#D7495F",
            color: "#ffffff",
            overwrite: true,
            scrollTrigger: {
              trigger: container,
              start: "top 25%",
              end: "top 24%",
              scrub: true,
            },
          },
        );
      }
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${archivo.className} bg-white py-10 md:py-64 px-6 sm:px-10 lg:px-25`}
    >
      <div className="w-full flex flex-col items-start justify-center h-full">
        <ScrollReveal
          textClassName="text-balance text-start lg:text-[72px] md:text-[56px] text-[32px] font-light leading-none tracking-normal text-[#07090F]"
          mutedFrom="People often conflate"
          mutedClassName="text-[#07090F66]"
          enableBlur={true}
          baseOpacity={0.3}
          baseRotation={0.2}
          blurStrength={5}
        >
          I help underrecognized people earn the attention they deserve. People
          often conflate marketing and branding, but they&apos;re quite
          distinct:
        </ScrollReveal>

        <div
          ref={containerRef}
          className={`${urbanist.className} lg:mt-12 mt-6 w-full bg-white/60`}
        >
          <div
            ref={firstRef}
            className="md:px-8 px-4 md:py-6 py-4 text-[clamp(16px,12px+1.25vw,24px)] leading-[1.1] text-black transition-colors"
          >
            Your <span className="font-semibold">brand</span> is how people talk
            about you behind your back.
          </div>

          <div
            ref={secondRef}
            className="md:px-8 px-4 md:py-6 py-4 text-[clamp(16px,12px+1.25vw,24px)] leading-[1.1] text-black transition-colors"
          >
            Your <span className="font-semibold">customer experience</span>{" "}
            determines <span className="font-italic">what</span> people talk about.
          </div>

          <div
            ref={thirdRef}
            className="md:px-8 px-4 md:py-6 py-4 text-[clamp(16px,12px+1.25vw,24px)] leading-[1.1] text-black transition-colors"
          >
            <span className="font-semibold">Marketing</span> is how you get
            people talking in the first place.
          </div>
        </div>
      </div>
    </section>
  );
}
