"use client";

import Image from "next/image";
import { Urbanist } from "next/font/google";
import localFont from "next/font/local";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

const nippo = localFont({
  src: "../../public/fonts/Nippo-Regular.otf",
  display: "swap",
});

export function HomeSection4() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRef = useRef<HTMLParagraphElement>(null);
  const howIHelpPRef = useRef<HTMLParagraphElement>(null);
  const trajectoryPRef = useRef<HTMLParagraphElement>(null);
  const collisionPRef = useRef<HTMLParagraphElement>(null);
  const momentumPRef = useRef<HTMLParagraphElement>(null);
  const howIHelpH2Ref = useRef<HTMLHeadingElement>(null);
  const trajectoryH2Ref = useRef<HTMLHeadingElement>(null);
  const collisionH2Ref = useRef<HTMLHeadingElement>(null);
  const momentumH2Ref = useRef<HTMLHeadingElement>(null);
  const howIHelpImgRef = useRef<HTMLSpanElement>(null);
  const trajectoryImgRef = useRef<HTMLSpanElement>(null);
  const collisionImgRef = useRef<HTMLSpanElement>(null);
  const momentumImgRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const number = numberRef.current;
    if (!section || !number) return;

    const ctx = gsap.context(() => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const h2FontSizeActive = isMobile ? "2.5rem" : "6rem";
      const h2FontSizeInactive = isMobile ? "1.25rem" : "2rem";

      const h2Elements = [
        {
          ref: trajectoryH2Ref,
          pRef: trajectoryPRef,
          imgRef: trajectoryImgRef,
          name: "Trajectory",
        },
        {
          ref: collisionH2Ref,
          pRef: collisionPRef,
          imgRef: collisionImgRef,
          name: "Collision",
        },
        {
          ref: momentumH2Ref,
          pRef: momentumPRef,
          imgRef: momentumImgRef,
          name: "Momentum",
        },
      ];

      // Set initial states
      h2Elements.forEach(({ ref, pRef, imgRef }) => {
        if (ref.current) {
          gsap.set(ref.current, {
            fontSize: h2FontSizeInactive,
            opacity: 0.5,
            x: 0,
          });
        }
        if (pRef.current) {
          gsap.set(pRef.current, {
            height: 0,
            overflow: "hidden",
            y: 20,
            x: 0,
          });
        }
        if (imgRef.current) {
          gsap.set(imgRef.current, { opacity: 0 });
        }
      });

      // Create timeline for sequential h2 font size animation with pinning
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%", // 4 sections - reduced for faster scroll-through
          pin: true,
          scrub: 1,
        },
      });

      // Animate each h2 sequentially
      h2Elements.forEach(({ ref, pRef, imgRef }, index) => {
        const startProgress = index / h2Elements.length;
        const endProgress = (index + 1) / h2Elements.length;

        // Get the actual height of the paragraph for proper animation
        let paragraphHeight = 0;
        if (pRef.current) {
          // Temporarily set to auto to measure
          gsap.set(pRef.current, { height: "auto" });
          paragraphHeight = pRef.current.scrollHeight;
          gsap.set(pRef.current, { height: 0 });
        }

        // Fade in image smoothly at middle of this section's animation
        if (imgRef.current) {
          tl.to(
            imgRef.current,
            { opacity: 1, duration: 0.12, ease: "power2.out" },
            startProgress + 0.05,
          ).to(
            imgRef.current,
            { opacity: 0, duration: 0.12, ease: "power2.in" },
            endProgress - 0.05,
          );
        }

        // Increase font size and move to left
        tl.to(
          ref.current,
          {
            fontSize: h2FontSizeActive,
            opacity: 1,
            x: isMobile ? -120 : -500,
            duration: 0.25,
            ease: "power2.out",
          },
          startProgress,
        )
          // Show paragraph text
          .to(
            pRef.current,
            {
              height: paragraphHeight,
              y: 0,
              x: isMobile ? -120 : -500,
              duration: 0.25,
              ease: "power2.out",
            },
            startProgress,
          )
          // Hide paragraph text
          .to(
            pRef.current,
            {
              height: 0,
              y: 20,
              x: 0,
              duration: 0.25,
              ease: "power2.in",
            },
            endProgress - 0.01,
          )
          // Decrease font size and move back to original position
          .to(
            ref.current,
            {
              fontSize: h2FontSizeInactive,
              opacity: 0.5,
              x: 0,
              duration: 0.25,
              ease: "power2.in",
            },
            endProgress - 0.01,
          );
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-x-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 md:translate-x-[35vw]">
        <Image
          src="/src/assets/ellipse.png"
          alt="Ellipse background"
          fill
          className="object-cover object-right -scale-x-100 md:scale-x-100"
        />
      </div>
      <div className="container mx-auto min-h-full flex items-center justify-center relative px-4 md:px-6">
        <div className="flex flex-row gap-6 md:gap-10 w-full overflow-hidden">
          <div className="w-full md:w-1/2 min-h-[200px] md:min-h-screen flex justify-start relative">
            <p
              ref={numberRef}
              className={`${urbanist.className} absolute top-10 left-2 md:top-1/2 md:left-0 md:right-0 md:-translate-y-1/2 text-[40px] md:text-[64px] leading-none tracking-normal text-start whitespace-nowrap`}
              style={{ fontWeight: 250 }}
            >
              <span className="inline-block">1</span>/1
            </p>
            <div
              className={`${nippo.className} absolute bottom-10 left-2 md:top-2/3 md:bottom-auto md:left-25 md:right-0 text-sm font-normal tracking-normal text-start`}
            >
              <p>keep</p>
              <p> scrolling...</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 gap-4 md:gap-2 flex flex-col justify-center items-start md:items-end min-h-[80vh] md:min-h-screen translate-x-0 md:translate-x-[25vw]">
            <div className="w-full text-right md:text-left pr-6 md:pr-0">
              <h2
                className={`${nippo.className} text-base md:text-lg tracking-normal flex flex-row items-center justify-end md:justify-start ml-0 md:ml-14 gap-2 whitespace-nowrap`}
              >
                <span className="inline-flex shrink-0"></span>
                How I help
              </h2>
              <p
                ref={howIHelpPRef}
                className={`${urbanist.className} ml-0 md:ml-18 w-full md:w-2xl text-[16px] md:text-[18px] font-normal tracking-normal`}
              >
                {/* Talented people often get overlooked because their work is misread or poorly framed. I help clarify what someone is really doing, what makes it distinct, and how to present it so the right people immediately get it. */}
              </p>
            </div>
            <div className="pl-25 md:pl-0">
              <h2
                ref={trajectoryH2Ref}
                className={`${urbanist.className} text-xl md:text-2xl tracking-normal flex flex-row items-center gap-2`}
              >
                <span ref={trajectoryImgRef} className="inline-flex shrink-0">
                  <Image
                    src="/src/assets/section4_trajectory.png"
                    alt="Trajectory"
                    width={100}
                    height={100}
                    className="h-[50px] md:h-[70px] w-auto object-contain"
                  />
                </span>
                Trajectory
              </h2>
              <p
                ref={trajectoryPRef}
                className={`${urbanist.className} ml-0 md:ml-38 w-[320px] md:w-2xl max-w-2xl text-[15px] md:text-[18px] font-normal tracking-normal text-justify hyphens-auto`}
              >
                Talented people often get overlooked because their work is
                misread or poorly framed. I help clarify what someone is really
                doing, what makes it distinct, and how to present it so the
                right people immediately get it.
              </p>
            </div>
            <div className="pl-25 md:pl-0 ml-2 md:ml-0">
              <h2
                ref={collisionH2Ref}
                className={`${urbanist.className} text-xl md:text-2xl tracking-normal flex flex-row items-center gap-2`}
              >
                <span
                  ref={collisionImgRef}
                  className="inline-flex shrink-0 ml-0 md:-ml-15"
                >
                  <Image
                    src="/src/assets/section4_collision.png"
                    alt="Collision"
                    width={100}
                    height={100}
                    className="h-[50px] md:h-[70px] w-auto object-contain"
                  />
                </span>
                Collision
              </h2>
              <p
                ref={collisionPRef}
                className={`${urbanist.className} ml-0 md:ml-25 w-[320px] md:w-2xl max-w-2xl text-[15px] md:text-[18px] font-normal tracking-normal`}
              >
                Most people don’t need more effort. They need the right
                collaborator, partner, or patron. I’m good at recognizing who
                would actually unlock someone’s work and bringing those two
                people together at the right moment.
              </p>
            </div>
            <div className="pl-25 md:pl-0">
              <h2
                ref={momentumH2Ref}
                className={`${urbanist.className} text-xl md:text-2xl tracking-normal flex flex-row items-center gap-2`}
              >
                <span ref={momentumImgRef} className="inline-flex shrink-0">
                  <Image
                    src="/src/assets/section4_momentum.png"
                    alt="Momentum"
                    width={100}
                    height={100}
                    className="h-[50px] md:h-[70px] w-auto object-contain"
                  />
                </span>
                Momentum
              </h2>
              <p
                ref={momentumPRef}
                className={`${urbanist.className} ml-0 md:ml-38 w-[320px] md:w-2xl max-w-2xl text-[15px] md:text-[18px] font-normal tracking-normal`}
              >
                When the right people meet and the story is clear, things start
                moving. I help accelerate that movement until it sustains
                itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
