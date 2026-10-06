"use client";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "900"],
});

export function HomeSection6() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const imageRef3 = useRef<HTMLDivElement>(null);
  const imageRef4 = useRef<HTMLDivElement>(null);
  const imageRef5 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = sectionRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      const imageContainer = imageRef.current;
      const imageContainer2 = imageRef2.current;
      const imageContainer3 = imageRef3.current;
      const imageContainer4 = imageRef4.current;
      const imageContainer5 = imageRef5.current;

      // Wait for next frame to ensure layout is complete and HomeSection5's pinning has settled
      requestAnimationFrame(() => {
        const isMobile =
          typeof window !== "undefined" && window.innerWidth < 768;

        // Refresh ScrollTrigger to recalculate positions after HomeSection5's pinning
        ScrollTrigger.refresh();

        // On mobile: show images fully visible, no animation
        if (isMobile) {
          [
            imageContainer,
            imageContainer2,
            imageContainer3,
            imageContainer4,
            imageContainer5,
          ]
            .filter(Boolean)
            .forEach((el) => gsap.set(el, { clipPath: "inset(0% 0% 0% 0%)" }));
          ScrollTrigger.refresh();
          return;
        }

        // Animation for first image
        if (imageContainer) {
          // Set initial clip-path to hide the image (reveal from top)
          gsap.set(imageContainer, {
            clipPath: "inset(0% 0% 100% 0%)",
          });

          // Animate clip-path to reveal image from top to bottom
          gsap.to(imageContainer, {
            clipPath: "inset(0% 0% 0% 0%)", // End with image fully visible
            ease: "none",
            scrollTrigger: {
              trigger: imageContainer,
              start: "top 100%",
              end: "top 20%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        }

        // Animation for second image (same as first)
        if (imageContainer2) {
          // Set initial clip-path to hide the image (reveal from top)
          gsap.set(imageContainer2, {
            clipPath: "inset(0% 0% 100% 0%)",
          });

          // Animate clip-path to reveal image from top to bottom
          gsap.to(imageContainer2, {
            clipPath: "inset(0% 0% 0% 0%)", // End with image fully visible
            ease: "none",
            scrollTrigger: {
              trigger: imageContainer2,
              start: "top 100%",
              end: "top 20%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        }

        // Animation for third image (art2 - reveal from bottom to top)
        if (imageContainer3) {
          // Set initial clip-path to hide the image (reveal from bottom)
          gsap.set(imageContainer3, {
            clipPath: "inset(100% 0% 0% 0%)",
          });

          // Animate clip-path to reveal image from bottom to top
          gsap.to(imageContainer3, {
            clipPath: "inset(0% 0% 0% 0%)", // End with image fully visible
            ease: "none",
            scrollTrigger: {
              trigger: imageContainer3,
              start: "top 100%",
              end: "top 40%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        }

        // Animation for fourth image (art4 - reveal from bottom to top)
        if (imageContainer4) {
          // Set initial clip-path to hide the image (reveal from bottom)
          gsap.set(imageContainer4, {
            clipPath: "inset(100% 0% 0% 0%)",
          });

          // Animate clip-path to reveal image from bottom to top
          gsap.to(imageContainer4, {
            clipPath: "inset(0% 0% 0% 0%)", // End with image fully visible
            ease: "none",
            scrollTrigger: {
              trigger: imageContainer4,
              start: "top 100%",
              end: "top 40%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        }

        // Animation for fifth image (art3 - reveal from top to bottom)
        if (imageContainer5) {
          // Set initial clip-path to hide the image (reveal from top)
          gsap.set(imageContainer5, {
            clipPath: "inset(0% 0% 100% 0%)",
          });

          // Animate clip-path to reveal image from top to bottom
          gsap.to(imageContainer5, {
            clipPath: "inset(0% 0% 0% 0%)", // End with image fully visible
            ease: "none",
            scrollTrigger: {
              trigger: imageContainer5,
              start: "top 100%",
              end: "top 40%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        }

        // Refresh again after creating all triggers to ensure proper positioning
        ScrollTrigger.refresh();
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F1F2F0] px-6 lg:py-20 py-10 sm:px-10 lg:px-25 lg:pb-25 pb-10"
    >
      <div>
        {/* Japanese art images row */}
        <div className="mb-10 lg:mb-20 grid gap-0.5 md:gap-4 grid-cols-4">
          <div
            ref={imageRef}
            className="relative aspect-square overflow-hidden"
          >
            <Image
              src="/src/assets/section6_art1.png"
              alt="Cat on window ledge"
              fill
              className="object-cover -translate-y-5 md:-translate-y-20"
            />
          </div>
          <div
            ref={imageRef3}
            className="relative aspect-square overflow-hidden"
          >
            <Image
              src="/src/assets/section6_art2.png"
              alt="Whale in waves"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex flex-row items-end gap-0.5 md:gap-3 aspect-square overflow-hidden">
            <div ref={imageRef5} className="relative w-1/2 overflow-hidden">
              <Image
                src="/src/assets/section6_art3.png"
                alt="Waterfall scene"
                width={500}
                height={500}
                className="object-contain w-full"
              />
            </div>
            <div ref={imageRef4} className="relative w-1/2 overflow-hidden">
              <Image
                src="/src/assets/section6_art4.png"
                alt="Cherry blossom landscape"
                width={500}
                height={500}
                className="object-contain w-full"
              />
            </div>
          </div>
          <div
            ref={imageRef2}
            className="relative aspect-square overflow-hidden"
          >
            <Image
              src="/src/assets/section6_art5.png"
              alt="Skeleton figure scene"
              fill
              className="object-cover -translate-y-5 md:-translate-y-20"
            />
          </div>
        </div>
      </div>

      {/* Bottom section with seal and text */}
      <div className="flex flex-col gap-0 md:gap-10 pt-0 lg:pt-22">
        <p
          className={`${urbanist.className} font-normal leading-[120%] tracking-normal pr-0 lg:pr-20 text-[clamp(1.45rem,4.375vw,5.2rem)]`}
        >
          You&apos;ll notice that every UUu piece carries a red seal of{" "}
          <span className="text-[#D7495F]">吴绿</span>, my full name that means{" "}
          <br />
          &quot;
          <span
            className={`${urbanist.className} text-[#D7495F] font-medium leading-[100%] tracking-normal text-[clamp(1.75rem,4.375vw,5.2rem)]`}
          >
            carefree and without worry
          </span>
          &quot;
        </p>

        <div className="flex flex-col lg:flex-row gap-10 px-0 lg:px-40 justify-between">
          {/* Red seal */}
          <div className="w-full lg:w-1/3 lg:p-4 px-15 pt-10">
            <Image
              src="/src/assets/section6_seal.jpg"
              alt="Red seal with Chinese characters"
              width={700}
              height={350}
              className="w-auto h-auto object-contain"
            />
          </div>

          {/* Explanatory text */}
          <div
            className={`${urbanist.className} w-full lg:w-2/3 px-0 lg:px-20 space-y-6 leading-[1.3] lg:text-[19px] text-[16px]  font-normal tracking-normal text-black`}
          >
            <p>
              My mom likes to joke that putting <span>吴绿</span> on my clothing
              is like a school kid scribbling their name on their backpack, but
              that&apos;s kinda the entire vibe: it represents the same carefree
              energy kids have before they&apos;re worried about what other
              people expect of them.
            </p>

            <p>
              UUu is about reclaiming that feeling. It&apos;s a reminder to
              carry yourself without the weight of other people&apos;s
              expectations and to move through the world unapologetically
              yourself.
            </p>

            <p>Carefree, and without worry.</p>

            <p>
              P.S. Wu (<span>吴</span>) spelled out is &quot;double-U, u&quot; =
              UUu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
