"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Urbanist } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "900"],
});

export function HomeSection5() {
  const sectionRef = useRef<HTMLElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const whiteOverlayRef = useRef<HTMLDivElement>(null);
  const merchTextRef = useRef<HTMLHeadingElement>(null);
  const plusIconRef = useRef<HTMLDivElement>(null);
  const redSealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mask = maskRef.current;
    const whiteOverlay = whiteOverlayRef.current;
    const merchText = merchTextRef.current;
    const plusIcon = plusIconRef.current;
    const redSeal = redSealRef.current;
    if (
      !section ||
      !mask ||
      !whiteOverlay ||
      !merchText ||
      !plusIcon ||
      !redSeal
    )
      return;

    const ctx = gsap.context(() => {
    // Use section/mask dimensions so MERCH position is correct for any height (not just viewport)
    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight;

    // Initial window size (centered grey rectangle) - smaller on mobile
    const isNarrow = sectionWidth < 768;
    const maxWidth = Math.min(
      isNarrow ? 360 : 768,
      sectionWidth * (isNarrow ? 0.9 : 0.9),
    );
    // Taller aspect on mobile (5/4), standard 16/9 on desktop
    const aspectRatio = isNarrow ? 6 / 4 : 16 / 9;
    const initialWindowWidth = maxWidth;
    const initialWindowHeight = maxWidth / aspectRatio;

    // Calculate center position for the initial window (based on section)
    const centerX = sectionWidth / 2;
    const centerY = sectionHeight / 2;

    // Calculate initial clip-path values (centered window)
    // clip-path: inset(top right bottom left) - this creates a hole in the white overlay
    const initialTop = centerY - initialWindowHeight / 2;
    const initialRight = sectionWidth - (centerX + initialWindowWidth / 2);
    const initialBottom = sectionHeight - (centerY + initialWindowHeight / 2);
    const initialLeft = centerX - initialWindowWidth / 2;

    // Set initial clip-path on white overlay to create a window
    gsap.set(whiteOverlay, {
      clipPath: `inset(${initialTop}px ${initialRight}px ${initialBottom}px ${initialLeft}px)`,
    });

    // Set initial clip-path on grey mask to show only the window area
    gsap.set(mask, {
      clipPath: `inset(${initialTop}px ${initialRight}px ${initialBottom}px ${initialLeft}px)`,
    });

    // Final position: bottom-left of section (same offset from edge regardless of height)
    const bottomOffset = isNarrow ? 100 : 150;
    const finalTopPx = sectionHeight - bottomOffset;
    const finalLeftPx = isNarrow ? 24 : 70;

    // Center position in pixels (section-based so always true center for any height)
    const centerTopPx = sectionHeight / 2;
    const centerLeftPx = sectionWidth / 2;

    // Set initial position for MERCH text (centered in section)
    gsap.set(merchText, {
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
    });

    // Pin the section and animate the mask expansion
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=70%", // Scroll distance for the animation
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        // Interpolate clip-path values from initial window to full screen
        const top = gsap.utils.interpolate(initialTop, 0, progress);
        const right = gsap.utils.interpolate(initialRight, 0, progress);
        const bottom = gsap.utils.interpolate(initialBottom, 0, progress);
        const left = gsap.utils.interpolate(initialLeft, 0, progress);

        // Expand both the white overlay window and the grey mask
        gsap.set(whiteOverlay, {
          clipPath: `inset(${top}px ${right}px ${bottom}px ${left}px)`,
        });
        gsap.set(mask, {
          clipPath: `inset(${top}px ${right}px ${bottom}px ${left}px)`,
        });

        // Animate MERCH text from center to bottom-left (section-based so consistent for any height)
        const merchTopPx = gsap.utils.interpolate(
          centerTopPx,
          finalTopPx,
          progress,
        );
        const merchLeftPx = gsap.utils.interpolate(
          centerLeftPx,
          finalLeftPx,
          progress,
        );

        // Transform: interpolate from -50% (centered) to 0 (left-aligned)
        const xPercent = gsap.utils.interpolate(-50, 0, progress);
        const yPercent = gsap.utils.interpolate(-50, 0, progress);

        gsap.set(merchText, {
          top: `${merchTopPx}px`,
          left: `${merchLeftPx}px`,
          right: "auto", // Ensure right is not set
          x: `${xPercent}%`,
          y: `${yPercent}%`,
        });

        // Fade out Plus icon and Red seal as mask expands
        // Start fading at 30% progress, fully faded by 70% progress
        const fadeStart = 0.3;
        const fadeEnd = 0.7;
        let opacity = 1;

        if (progress >= fadeStart) {
          if (progress >= fadeEnd) {
            opacity = 0;
          } else {
            // Interpolate opacity between fadeStart and fadeEnd
            const fadeProgress = (progress - fadeStart) / (fadeEnd - fadeStart);
            opacity = gsap.utils.interpolate(1, 0, fadeProgress);
          }
        }

        gsap.set(plusIcon, {
          opacity: opacity,
        });

        gsap.set(redSeal, {
          opacity: opacity,
        });
      },
    });

    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 z-20"
    >
      {/* White overlay that covers everything except the window */}
      <div ref={whiteOverlayRef} className="absolute inset-0 bg-white" />

      {/* Grey mask overlay - starts as small window, expands to full screen */}
      <div
        ref={maskRef}
        className="absolute inset-0 bg-[#F1F2F0] flex items-center justify-center"
      >
        {/* MERCH text - starts centered, animates to bottom-left */}
        <h2
          ref={merchTextRef}
          className={`${urbanist.className} absolute text-[clamp(50px,12vw,120px)] font-black uppercase leading-none tracking-normal text-[#07090F]`}
        >
          MERCH
        </h2>

        {/* Double arrow down icon - white circle with black chevrons */}
        <div
          ref={plusIconRef}
          className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-1/3 md:translate-y-0"
        >
          <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path
                d="M6 8l6 6 6-6M6 14l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Red seal at bottom left */}
      <div
        ref={redSealRef}
        className="absolute bottom-0 left-0 z-30 bg-[#D7495F] py-5 px-2 flex items-center justify-center"
      >
        <p
          className={`${urbanist.className} text-[20px] font-medium leading-[24px] tracking-normal text-white [writing-mode:vertical-rl]`}
        >
          吴绿
        </p>
      </div>
    </section>
  );
}
