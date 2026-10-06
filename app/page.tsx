"use client";

import { HomeSection1 } from "@/components/HomeSection1";
import { HomeSection2 } from "@/components/HomeSection2";
import { HomeSection3 } from "@/components/HomeSection3";
import { HomeSection4 } from "@/components/HomeSection4";
import { HomeSection5 } from "@/components/HomeSection5";
import { HomeSection6 } from "@/components/HomeSection6";
import { HomeSection7 } from "@/components/HomeSection7";
import { HomeSection8 } from "@/components/HomeSection8";

export default function Home() {
  return (
    <>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      {/* Section5 will be pinned and mask will expand to reveal Section6 */}
      <HomeSection5 />
      {/* Section6 positioned to scroll behind Section5 when it's pinned */}
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
    </>
  );
}
