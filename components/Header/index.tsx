"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import localFont from "next/font/local";
import { X } from "lucide-react";
import { MusicIcon } from "@/components/icons/MusicIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nippo = localFont({
  src: "../../public/fonts/Nippo-Regular.otf",
  display: "swap",
});

export function Header() {
  // Always start with false to match server render (avoids hydration mismatch).
  // Sync from localStorage in useEffect after mount.
  const [musicOn, setMusicOn] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isMerch = pathname === "/merch" || pathname?.startsWith("/merch/");
  const isProduct =
    pathname === "/product" || pathname?.startsWith("/product/");
  const isHome = pathname === "/";
  const [merchHovered, setMerchHovered] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isMenuExiting, setIsMenuExiting] = React.useState(false);

  const closeMobileMenu = React.useCallback(() => {
    if (!mobileMenuOpen) return;
    setIsMenuExiting(true);
    setMobileMenuOpen(false);
  }, [mobileMenuOpen]);

  React.useEffect(() => {
    if (!mobileMenuOpen && isMenuExiting) {
      const t = setTimeout(() => setIsMenuExiting(false), 250);
      return () => clearTimeout(t);
    }
  }, [mobileMenuOpen, isMenuExiting]);

  // Sync musicOn from localStorage after mount (client-only)
  React.useEffect(() => {
    const saved = localStorage.getItem("musicOn");
    setMusicOn(saved !== null ? saved === "true" : false);
    setIsMounted(true);
  }, []);

  // Save music state to localStorage whenever it changes (only after mount to avoid overwriting)
  React.useEffect(() => {
    if (isMounted) {
      localStorage.setItem("musicOn", musicOn.toString());
    }
  }, [musicOn, isMounted]);

  // On refresh (full reload): clear saved position so music starts from the beginning.
  // beforeunload does NOT fire on client-side navigation, so position stays when moving between pages.
  React.useEffect(() => {
    const clearPositionOnRefresh = () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("audioPosition");
      }
    };
    window.addEventListener("beforeunload", clearPositionOnRefresh);
    return () =>
      window.removeEventListener("beforeunload", clearPositionOnRefresh);
  }, []);

  // Restore audio position on mount (after in-app navigation). On refresh we have no saved position, so start from 0.
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const restorePosition = () => {
      if (typeof window === "undefined") return;
      const savedPosition = localStorage.getItem("audioPosition");
      if (savedPosition) {
        const position = parseFloat(savedPosition);
        if (!isNaN(position) && position > 0) {
          audio.currentTime = position;
          return;
        }
      }
      // No saved position (e.g. after refresh): play from start
      audio.currentTime = 0;
    };

    if (audio.readyState >= 1) {
      restorePosition();
    } else {
      audio.addEventListener("loadedmetadata", restorePosition, { once: true });
    }

    return () => {
      audio.removeEventListener("loadedmetadata", restorePosition);
    };
  }, []);

  // Save audio position so it can be restored when navigating to another page.
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const savePosition = () => {
      if (typeof window !== "undefined" && audio.currentTime > 0) {
        localStorage.setItem("audioPosition", audio.currentTime.toString());
      }
    };

    const interval = setInterval(savePosition, 1000);
    audio.addEventListener("timeupdate", savePosition);

    return () => {
      clearInterval(interval);
      audio.removeEventListener("timeupdate", savePosition);
    };
  }, []);

  // Play music when site loads (when musicOn is true) and when user toggles
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      if (musicOn) {
        audio.play().catch((error) => {
          console.log("Autoplay blocked:", error);
        });
      } else {
        audio.pause();
      }
    };

    // Attempt play immediately on load
    tryPlay();

    // Retry when audio is ready (in case play() ran before file loaded)
    audio.addEventListener("canplay", tryPlay, { once: true });
    audio.addEventListener("loadeddata", tryPlay, { once: true });

    return () => {
      audio.removeEventListener("canplay", tryPlay);
      audio.removeEventListener("loadeddata", tryPlay);
    };
  }, [musicOn]);

  // Browsers block autoplay until user interaction. Resume on first click/tap/keypress.
  // Note: scroll/wheel do NOT count as user gestures—browsers block audio.play() for those.
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const resumeOnInteraction = () => {
      if (musicOn && audio.paused) {
        audio.play().catch(() => { });
      }
    };

    const events = ["click", "touchstart", "keydown"];
    events.forEach((e) =>
      window.addEventListener(e, resumeOnInteraction, {
        once: true,
        passive: true,
      }),
    );

    return () => {
      events.forEach((e) => window.removeEventListener(e, resumeOnInteraction));
    };
  }, [musicOn]);

  // Lock body scroll when mobile menu is open or exiting
  React.useEffect(() => {
    const locked = mobileMenuOpen || isMenuExiting;
    if (locked) {
      document.body.style.overflow = "hidden";
      window.dispatchEvent(new Event("scroll-lock"));
    } else {
      document.body.style.overflow = "";
      window.dispatchEvent(new Event("scroll-unlock"));
    }
    return () => {
      document.body.style.overflow = "";
      window.dispatchEvent(new Event("scroll-unlock"));
    };
  }, [mobileMenuOpen, isMenuExiting]);

  const merchHref = isProduct ? "/merch" : isMerch ? "/" : "/merch";
  const merchLabel = isProduct
    ? "Back to Shop"
    : isMerch
      ? "Return Home"
      : "Merch";

  // Kill all ScrollTriggers before nav so pin spacers are removed and DOM matches React tree (avoids removeChild error)
  const handleMerchNav = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      requestAnimationFrame(() => {
        router.push(merchHref);
      });
    },
    [merchHref, router],
  );

  return (
    <header className={isHome ? "bg-[#F3F3F2]" : "bg-white"}>
      <audio
        ref={audioRef}
        src="/src/assets/background.mp3"
        loop
        preload="auto"
      />
      {/* Mobile: black bar with logo + hamburger */}
      <div className="relative flex lg:h-30 h-25 w-full items-center justify-between px-6 md:bg-transparent md:px-10 lg:px-13">
        <Link
          href="/"
          className="inline-flex items-center"
          onClick={closeMobileMenu}
        >
          <Image
            src="/src/assets/icon/navicon.png"
            alt="Johnny"
            width={70}
            height={70}
            className="h-12 w-12 md:h-[70px] md:w-[70px]"
            priority
          />
          <span className="sr-only">Home</span>
        </Link>

        {/* Mobile: music icon only (center) */}
        <button
          type="button"
          onClick={() => setMusicOn((v) => !v)}
          className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full p-2 text-zinc-800 transition-colors hover:bg-[#D7495F] hover:text-white md:hidden"
          aria-pressed={musicOn}
          aria-label={`Music is ${musicOn ? "on" : "off"}`}
        >
          <span
            className={`text-lg transition-colors ${musicOn ? "text-red-600" : "text-black"}`}
            aria-hidden="true"
          >
            <MusicIcon muted={musicOn} />
          </span>
        </button>

        {/* Desktop: center music + right merch */}
        <button
          type="button"
          onClick={() => setMusicOn((v) => !v)}
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 cursor-pointer md:inline-flex items-center gap-3 rounded-full px-4 py-2 text-md font-medium text-zinc-800 transition-colors"
          aria-pressed={musicOn}
        >
          <span
            className={`text-lg transition-colors ${musicOn ? "text-red-600" : "text-black"}`}
            aria-hidden="true"
          >
            <MusicIcon muted={musicOn} />
          </span>
          <span className={`${nippo.className} text-lg hover:text-black ${musicOn ? "text-red-600" : "text-black"}`}>
            Music: <span>{musicOn ? "ON" : "OFF"}</span>
          </span>
        </button>

        {/* Mobile: hamburger / close */}
        <button
          type="button"
          onClick={() =>
            mobileMenuOpen ? closeMobileMenu() : setMobileMenuOpen(true)
          }
          className="relative inline-flex h-12 w-12 items-center justify-center rounded-sm bg-black px-3 py-3 text-white md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <X
            className={`absolute h-6 w-6 transition-opacity duration-200 ${mobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            strokeWidth={2}
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute h-6 w-6 transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
          >
            <rect
              x="4"
              y="6"
              width="16"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="4"
              y="11"
              width="16"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="4"
              y="16"
              width="16"
              height="2"
              rx="1"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* Desktop: merch link - kill ScrollTriggers then nav to avoid removeChild (pin spacer) */}
        <a
          href={merchHref}
          onClick={handleMerchNav}
          className={`${nippo.className} relative hidden md:inline-flex items-center gap-2 rounded-sm px-7 py-[18px] text-lg text-white transition-colors`}
          style={{
            backgroundColor: isHome && merchHovered ? "#D7495F" : "black",
          }}
          onMouseEnter={() => isHome && setMerchHovered(true)}
          onMouseLeave={() => isHome && setMerchHovered(false)}
        >
          <span
            className={isMerch || isProduct ? "hidden" : "inline-block"}
            aria-hidden="true"
          >
            <Image
              src="/src/assets/icon/shopping-cart.png"
              alt=""
              width={20}
              height={20}
            />
          </span>
          <span className={isHome && merchHovered ? "invisible" : ""}>
            {merchLabel}
          </span>
          <span
            className={`${nippo.className} pointer-events-none absolute inset-0 flex items-center justify-start pl-16 text-xl text-white transition-opacity ${isHome
              ? merchHovered
                ? "opacity-100"
                : "opacity-0"
              : "opacity-0"
              } ${!isHome ? "invisible" : ""}`}
            aria-hidden
          >
            商品
          </span>
        </a>
      </div>

      {/* Mobile menu overlay + panel - full screen below header */}
      <div
        className={`fixed top-25 left-0 right-0 bottom-0 z-50 overflow-hidden md:hidden ${mobileMenuOpen || isMenuExiting ? "visible" : "invisible"
          } ${!mobileMenuOpen && !isMenuExiting ? "pointer-events-none" : ""}`}
        aria-hidden={!mobileMenuOpen && !isMenuExiting}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-250 ease-out ${mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={closeMobileMenu}
          aria-hidden
        />
        <div
          className={`absolute left-0 right-0 top-0 w-full border-t-2 border-black bg-[#F3F3F2] shadow-xl transition-transform duration-250 ease-in-out ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          {/* Menu items */}
          <nav
            className={`${nippo.className} relative flex flex-col items-center justify-center px-6 pb-2 pt-2`}
          >
            <a
              href={merchHref}
              className="flex items-center justify-center gap-3 px-8 py-4 text-lg text-black transition-colors hover:bg-black/5"
              onClick={(e) => {
                handleMerchNav(e);
                closeMobileMenu();
              }}
            >
              <Image
                src="/src/assets/icon/shopping-cart.png"
                alt=""
                width={20}
                height={20}
                className="brightness-0"
                aria-hidden
              />
              <span>{merchLabel}</span>
            </a>
            {/* <button
              type="button"
              onClick={() => setMusicOn((v) => !v)}
              className="flex items-center justify-center gap-3 px-8 py-4 text-lg text-black transition-colors hover:bg-black/5"
              aria-pressed={musicOn}
            >
              <span className="text-red-600" aria-hidden>
                <MusicIcon />
              </span>
              <span>Music: {musicOn ? "ON" : "OFF"}</span>
            </button> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
