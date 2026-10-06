import Image from "next/image";

export function ProductionSection2() {
  return (
    <section className="px-6 sm:px-10 lg:px-25 py-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden bg-[#F5F5F5]">
        {/* Left: large stacked text */}
        <div className="relative z-10 flex flex-1 flex-col justify-start md:justify-center items-start w-full md:w-auto px-4 py-12 sm:py-16 md:m-20 md:my-40">
          <h2
            className="text-[clamp(2.25rem,5vw+1.5rem,6rem)] font-[1000] uppercase leading-[0.9] tracking-tight text-[#0000001A] text-left"
            style={{ fontFamily: '"Druk Wide Trial", Impact, sans-serif' }}
          >
            <span className="block">DUAL</span>
            <span className="block">EXCELLE</span>
            <span className="block">NCE</span>
          </h2>
        </div>

        {/* Right: person in black hoodie from behind with ukiyo-e print */}
        <div className="relative min-h-[400px] w-full md:w-1/2 ">
          <div className="absolute -bottom-20 md:-bottom-50 right-5 md:right-10 aspect-3/4 w-full max-w-xl origin-bottom-right">
            <div className="relative size-full overflow-hidden rounded-lg">
              <Image
                src="/src/assets/merchleft.png"
                alt="Person wearing black hoodie with Japanese ukiyo-e winter landscape print"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
