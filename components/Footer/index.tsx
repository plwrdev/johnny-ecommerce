"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Urbanist } from "next/font/google";

import { ThreadsIcon } from "@/components/icons/ThreadsIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { SpotifyIcon } from "@/components/icons/SpotifyIcon";
import { YoutubeIcon } from "@/components/icons/YoutubeIcon";
import { MailIcon } from "@/components/icons/MailIcon";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const FORM_URL = "https://forms.gle/AiihiSiPbjELbuFh6";

type SocialKey = "mind" | "body" | "heart" | "spirit" | null;

export function Footer() {
  const year = new Date().getFullYear();
  const router = useRouter();
  const [showChinese, setShowChinese] = useState(false);
  const [activeSocial, setActiveSocial] = useState<SocialKey>(null);

  const handleSocialClick =
    (key: SocialKey, href: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      setActiveSocial(key);
      setTimeout(() => {
        setActiveSocial(null);
        if (href && href !== "#") {
          if (href.startsWith("http"))
            window.open(href, "_blank", "noopener,noreferrer");
          else router.push(href);
        } else {
          window.location.href = href || "#";
        }
      }, 80);
    };

  return (
    <footer className={`${urbanist.className} w-full bg-black text-white`}>
      <div className="w-full px-6 pb-10 lg:pt-32 pt-16 sm:px-10 lg:px-16">
        <header className="grid place-items-center gap-8 text-center">
          <h2 className="text-center text-[clamp(35px,5vw,56px)] font-normal leading-none tracking-normal">
            Are you <br /> underrecognized?
          </h2>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              setShowChinese(true);
              setTimeout(() => {
                setShowChinese(false);
                window.open(FORM_URL, "_blank", "noopener,noreferrer");
              }, 90);
            }}
            className={`${urbanist.className} group cursor-pointer inline-flex items-center gap-1.5 md:gap-2 relative md:mt-5 mt-8 rounded-sm px-5 py-4 md:px-7 md:py-5 text-base md:text-lg font-normal leading-none tracking-normal transition-colors ${showChinese ? "bg-[#D7495F] text-white" : "bg-white text-black hover:bg-[#D7495F] hover:text-white"}`}
          >
            <MailIcon
              className={`w-5 h-5 scale-120 ${showChinese ? "text-white" : "text-black group-hover:text-white"}`}
            />
            <span
              className={`transition-opacity ${showChinese ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}
            >
              Tap in
            </span>
            <span
              className={`${urbanist.className} left-7 md:left-8 pointer-events-none absolute inset-0 flex items-center justify-center text-base md:text-lg font-normal leading-none tracking-normal text-white transition-opacity ${showChinese ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              aria-hidden
            >
              见面
            </span>
          </a>
        </header>

        <section className="mt-14 grid items-center gap-12 md:grid-cols-[220px_500px_220px] md:justify-center md:gap-x-6 md:gap-y-2">
          <div className="text-center text-xs text-white/60 md:text-right">
            <p className="mb-2 text-center text-[18px] font-normal leading-none tracking-normal text-white/50">
              Based in
            </p>
            <p className="text-center text-[14px] font-normal leading-none tracking-normal text-white/85">
              Manhattan, New York City
            </p>
          </div>

          <div className="mx-auto w-full max-w-[500px] md:w-[500px]">
            <div className="relative aspect-4/3 overflow-hidden bg-white/5">
              <Image
                src="/src/assets/footer_wu.jpg"
                alt="Johnny Wu"
                fill
                className="object-cover"
              />
            </div>

            <nav className="mt-6 flex items-center justify-around gap-10 text-center text-[18px] font-normal leading-none tracking-normal text-white/85">
              <Link
                href="https://www.threads.com/@jaywuzer"
                onClick={handleSocialClick("mind", "#")}
                className={`group inline-flex items-center gap-2 transition-colors hover:text-[#D7495F] ${activeSocial === "mind" ? "text-[#D7495F]" : ""}`}
              >
                <ThreadsIcon className="shrink-0 transition-colors w-5 h-5 scale-120" />
                <span className="relative inline-block">
                  <span
                    className={`transition-opacity ${activeSocial === "mind" ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}
                  >
                    Mind
                  </span>
                  <span
                    className={`pointer-events-none absolute inset-0 transition-opacity ${activeSocial === "mind" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  >
                    意
                  </span>
                </span>
              </Link>
              <Link
                href="http://instagram.com/jaywuzer"
                onClick={handleSocialClick("body", "#")}
                className={`group inline-flex items-center gap-2 transition-colors hover:text-[#D7495F] ${activeSocial === "body" ? "text-[#D7495F]" : ""}`}
              >
                <InstagramIcon className="shrink-0 transition-colors w-5 h-5 scale-120 translate-y-0.5" />
                <span className="relative inline-block">
                  <span
                    className={`transition-opacity ${activeSocial === "body" ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}
                  >
                    Body
                  </span>
                  <span
                    className={`pointer-events-none absolute inset-0 transition-opacity ${activeSocial === "body" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  >
                    气
                  </span>
                </span>
              </Link>
              <Link
                href="http://youtube.com/@jaywuzer"
                onClick={handleSocialClick("heart", "#")}
                className={`group inline-flex items-center gap-2 transition-colors hover:text-[#D7495F] ${activeSocial === "heart" ? "text-[#D7495F]" : ""}`}
              >
                <SpotifyIcon className="shrink-0 transition-colors w-5 h-5 scale-120" />
                <span className="relative inline-block">
                  <span
                    className={`transition-opacity ${activeSocial === "heart" ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}
                  >
                    Heart
                  </span>
                  <span
                    className={`pointer-events-none absolute inset-0 transition-opacity ${activeSocial === "heart" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  >
                    心
                  </span>
                </span>
              </Link>
            </nav>
            <div className="mt-6 flex w-full justify-center">
              <Link
                href="#"
                onClick={handleSocialClick("spirit", "#")}
                className={`group inline-flex items-center gap-2 transition-colors hover:text-[#D7495F] ${activeSocial === "spirit" ? "text-[#D7495F]" : ""}`}
              >
                <YoutubeIcon className="shrink-0 transition-colors w-6 h-6 scale-120 opacity-85" />
                <span className="relative inline-block">
                  <span
                    className={`transition-opacity ${activeSocial === "spirit" ? "opacity-0" : "opacity-85 group-hover:opacity-0"}`}
                  >
                    Spirit
                  </span>
                  <span
                    className={`pointer-events-none absolute inset-0 left-2 transition-opacity ${activeSocial === "spirit" ? "opacity-85" : "opacity-0 group-hover:opacity-100"}`}
                  >
                    神
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="text-center text-xs text-white/60 md:text-left">
            <p className="mb-2 text-center text-[18px] font-normal leading-none tracking-normal text-white/50">
              Expertise in:
            </p>
            <p className="text-center text-[14px] font-normal leading-none tracking-normal text-white/85">
              Connecting people
            </p>
          </div>
        </section>

        <div className="mt-16 w-full overflow-hidden text-center">
          <div
            className="inline-flex max-w-full items-baseline justify-center gap-2 sm:gap-4 md:gap-6 select-none font-black leading-none tracking-tight"
            style={{ fontFamily: '"Druk Wide Trial", Impact, sans-serif' }}
          >
            <span className="text-[clamp(35px,7vw,136px)] text-white">
              JOHNNY
            </span>
            <span className="text-[clamp(35px,7vw,136px)] text-red-600">
              WU
            </span>
          </div>
          <p className="mt-6 text-[16px] font-normal leading-none tracking-widest text-white">
            © {year} UUu LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
