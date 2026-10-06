import type { Metadata } from "next";
import { MerchSection1 } from "@/components/MerchSection1";
import { MerchSection2 } from "@/components/MerchSection2";
import { MerchSection3 } from "@/components/MerchSection3";

const merchDescription =
  'UUu is a clothing brand inspired by the J.Wu (吴绿) seal, meaning "carefree and without worry", and serves as a reminder to live without others\' expectations.';

export const metadata: Metadata = {
  title: "UUu Merch",
  description: merchDescription,
  openGraph: {
    title: "UUu Merch",
    description: merchDescription,
    url: "https://uuu.vip/merch",
    siteName: "UUu",
    images: [
      { url: "/og-merch.jpg", width: 1200, height: 630, alt: "UUu Merch" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UUu Merch",
    description: merchDescription,
    images: ["/og-merch.jpg"],
  },
};

export default function MerchPage() {
  return (
    <>
      <MerchSection1 />
      <div className="relative z-10 -mt-[71px] h-[100px] bg-white" />
      <MerchSection2 />
      <MerchSection3 />
    </>
  );
}
