import Image from "next/image";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function HomeSection8() {
  return (
    <section
      className={`${urbanist.className} bg-[#F1F2F0] px-6 sm:px-10 lg:px-25`}
    >
      <div className="relative flex flex-row w-full gap-2 overflow-hidden lg:py-16 py-10 lg:pb-50 pb-25">
        {/* Decorative images */}
        <div className="pointer-events-none absolute top-4 md:top-0 left-0 block">
          <Image
            src="/src/assets/section8_left.png"
            alt=""
            width={200}
            height={200}
            className="h-auto lg:w-[200px] w-[80px]"
          />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-5xl place-items-center text-center text-[#07090F]">
          {/* Big quote marks */}
          <div className="pointer-events-none">
            <Image
              src="/src/assets/section8_quote.png"
              alt=""
              width={200}
              height={200}
              className="h-auto lg:w-[180px] w-[100px]"
            />
          </div>
          <p className="text-[clamp(0.875rem,1.5vw,1.75rem)] font-normal lg:leading-[100%] leading-[120%] tracking-normal text-center bg-[#F1F2F0] lg:-mt-10 -mt-7 lg:pt-5 pt-2">
            If you want something, seize it. The world won&apos;t wait for you,
            so take action while you can. Dread failure, but be motivated by it.
            You are what you make of your life, so be magnificent. And while
            doing so, be decent, be good, be virtuous, and above all else, be
            happy.
          </p>
          <p className="lg:px-30 px-0 lg:mt-10 mt-5 text-[clamp(0.875rem,1.5vw,1.75rem)] font-normal lg:leading-[100%] leading-[120%] tracking-normal text-center">
            Finally, don&apos;t forget to appreciate your family and friends for
            they&apos;re the ones that support you while you&apos;re becoming
            grand! <br />
            <span>Goodluck everyone.</span>
          </p>

          <p className="lg:mt-16 mt-5 text-[clamp(0.875rem,1.5vw,1.75rem)] font-normal leading-[100%] tracking-normal text-center">
            &apos;Happiness is only real when shared.&apos; - Christopher
            McCandless
          </p>

          <p className="lg:mt-10 mt-5 text-[clamp(0.75rem,1.25vw,1.5rem)] font-normal leading-[100%] tracking-normal text-center text-[#07090F]">
            Johnny Wu, 2014 Senior Yearbook Quote
          </p>
        </div>
        <div className="pointer-events-none absolute bottom-10 -right-3 block">
          <Image
            src="/src/assets/section8_right.png"
            alt=""
            width={300}
            height={200}
            className="h-auto lg:w-[250px] w-[90px]"
          />
        </div>
      </div>
    </section>
  );
}
