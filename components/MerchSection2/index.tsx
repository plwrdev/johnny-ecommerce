import Image from "next/image";

export function MerchSection2() {
  return (
    <section className="relative bg-white px-6 sm:px-10 lg:px-25 py-20 -mt-15 z-20">
      {/* Large header text */}
      <div className="top-16 z-0 px-0 sm:px-10 lg:px-15 xl:px-25 mb-10 lg:mb-0">
        <h2
          className="text-start text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] xl:text-[110px] font-[1000] uppercase leading-none tracking-normal text-[#0000001A] whitespace-nowrap select-none"
          style={{ fontFamily: '"Druk Wide Trial", Impact, sans-serif' }}
        >
          FEATURED
        </h2>
        <h2
          className="sm:pl-20 md:pl-30 lg:pl-30 xl:pl-50 text-start text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] xl:text-[110px] font-[1000] uppercase leading-none tracking-normal text-[#0000000D] whitespace-nowrap select-none"
          style={{ fontFamily: '"Druk Wide Trial", Impact, sans-serif' }}
        >
          PRODUCTS
        </h2>
      </div>

      {/* Merchandise grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2 lg:pb-24 pb-0">
        {/* Item 1 - Dark grey t-shirt from behind on red background */}
        <div className="rounded-xs relative bg-[#D7495F] flex items-center justify-center h-[200px] lg:h-[350px] max-w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10 cursor-pointer">
          <Image
            src="/src/assets/section7_item1.png"
            alt="Dark grey t-shirt from behind"
            width={400}
            height={600}
            className="h-full max-h-[350px] w-auto object-contain transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Item 2 - Cream t-shirt flat on grey background */}
        <div className="rounded-xs relative flex items-center justify-center bg-[#F1F2F0] h-[200px] lg:h-[350px] max-w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10 cursor-pointer">
          <Image
            src="/src/assets/section7_item2.png"
            alt="Cream t-shirt"
            width={400}
            height={600}
            className="h-full max-h-[350px] w-auto object-contain transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Item 3 - Dark grey t-shirt from front on red background - last on mobile */}
        <div className="rounded-xs relative order-4 md:order-3 bg-[#D7495F] flex items-center justify-center h-[200px] lg:h-[350px] max-w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10 cursor-pointer">
          <Image
            src="/src/assets/section7_item3.png"
            alt="Dark grey t-shirt from front"
            width={400}
            height={600}
            className="h-full max-h-[500px] w-auto object-contain scale-160 translate-y-15 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Item 4 - Black sweatshirt flat on grey background */}
        <div className="rounded-xs relative order-3 md:order-4 flex items-center justify-center bg-[#F1F2F0] h-[200px] lg:h-[350px] max-w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10 cursor-pointer">
          <Image
            src="/src/assets/section7_item4.png"
            alt="Cream t-shirt"
            width={400}
            height={600}
            className="h-full max-h-[350px] w-auto object-contain transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
