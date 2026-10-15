
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const BUNNY_LIBRARY_ID = "780194";

const sections = [
  {
    no: "02",
    label: "PVC CALENDAR LINE",
    title: "India's First PVC Calendar Line",
    videoId: "403a104f-09bb-462c-9fc0-106c1d70e1ee",
    description:
      "PVC calendar line manufacturing focused on precision, modern production and consistent quality.",
  },
  {
    no: "03",
    label: "SATIN LANYARDS",
    title: "India's Largest Satin Lanyard Manufacturing Factory",
    videoId: "461a685c-36cd-44b1-8c23-902aad5bfa6d",
    description:
      "Satin lanyard manufacturing with quality finishes and solutions for branding and business requirements.",
  },
  {
    no: "04",
    label: "METAL CAPS & HOLDERS",
    title: "India's Best & Largest Metal Cap & Holder Manufacturing Factory",
    videoId: "eee31bcd-fe36-4f3d-8b0b-6a571ce24f29",
    description:
      "Metal cap and holder manufacturing focused on precision, dependable production and product quality.",
  },
  {
    no: "05",
    label: "DTF ROLL MANUFACTURING",
    title: "India's First DTF Roll Manufacturing Plant",
    videoId: "5b1368ab-ee6d-48f4-b056-a2a333e86c09",
    description:
      "DTF roll manufacturing capabilities designed to support printing businesses and their production needs.",
  },
  {
    no: "06",
    label: "LED FRAMES",
    title: "India's Biggest LED Frame Manufacturing Capacity",
    videoId: "a54794fb-7d67-4447-986e-fce5d9e05aa0",
    description:
      "LED frame manufacturing for professional displays, business branding and commercial presentation.",
  },
  {
    no: "07",
    label: "PVC FABRIC",
    title: "India's Best PVC Fabric Manufacturing Unit",
    videoId: "a4d94e4b-c4af-415c-9743-06e42730bbda",
    description:
      "PVC fabric manufacturing focused on material quality, consistent production and commercial applications.",
  },
  {
    no: "08",
    label: "BACKLIGHT UV PRINTING",
    title: "India's Biggest 10-Foot Backlight UV Printer",
    videoId: "5dde6008-747e-4dd5-8c18-2722856ac4fb",
    description:
      "Advanced 10-foot backlight UV printing for illuminated displays, vibrant graphics and professional large-format print production.",
  },
];

let playerJsPromise;

function loadPlayerJs() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Browser environment required"));
  }

  if (window.playerjs?.Player) {
    return Promise.resolve(window.playerjs);
  }

  if (!playerJsPromise) {
    playerJsPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://assets.mediadelivery.net/playerjs/player-0.1.0.min.js";
      script.async = true;

      script.onload = () => {
        if (window.playerjs?.Player) {
          resolve(window.playerjs);
        } else {
          playerJsPromise = null;
          reject(new Error("Bunny Player.js failed to initialize."));
        }
      };

      script.onerror = () => {
        playerJsPromise = null;
        reject(new Error("Unable to load Bunny Player.js."));
      };

      document.head.appendChild(script);
    });
  }

  return playerJsPromise;
}

function VideoSection({
  videoId,
  label,
  title,
  description,
  number,
  isRight = false,
  isHero = false,
}) {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const iframe = iframeRef.current;

    if (!section || !iframe) return;

    let player = null;
    let observer = null;
    let isVisible = false;
    let isReady = false;
    let cancelled = false;

    const syncPlayback = () => {
      if (cancelled || !player || !isReady) return;

      try {
        if (isVisible) {
          player.play();
        } else {
          player.pause();
        }
      } catch (error) {
        console.warn("Bunny playback control:", error);
      }
    };

    async function initialize() {
      try {
        const playerjs = await loadPlayerJs();
        if (cancelled) return;

        player = new playerjs.Player(iframe);

        player.on("ready", () => {
          if (cancelled) return;
          isReady = true;
          syncPlayback();
        });

        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.target !== section) continue;
              isVisible = entry.isIntersecting;
              syncPlayback();
            }
          },
          {
            rootMargin: "-35% 0px -35% 0px",
            threshold: 0,
          }
        );

        observer.observe(section);
      } catch (error) {
        console.error(`Bunny video ${number} failed:`, error);
      }
    }

    initialize();

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();

      try {
        if (player && isReady) player.pause();
      } catch {
        // Player may already be removed.
      }
    };
  }, [videoId, number]);

  const embedUrl =
    `https://player.mediadelivery.net/embed/${BUNNY_LIBRARY_ID}/${videoId}` +
    "?autoplay=true&muted=true&loop=true&preload=true&responsive=true&showControls=false";

  return (
    <section
      ref={sectionRef}
      id={isHero ? "home-hero" : `facility-${number}`}
      className="relative isolate flex min-h-[540px] items-center overflow-hidden border-b border-white/20 bg-neutral-950 text-white md:min-h-[620px] lg:min-h-[680px]"
    >
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title={`${label} background video`}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        loading="eager"
        tabIndex={-1}
        className="pointer-events-none absolute -z-20 border-0"
        style={{
          top: "50%",
          left: "50%",
          width: "max(100%, 177.78vh)",
          height: "max(100%, 56.25vw)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Lighter overlays: brighter video, readable white text */}
      <div className="absolute inset-0 -z-10 bg-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

      <div className="mx-auto w-full max-w-[1720px] px-6 py-8 sm:px-8 md:px-12 md:py-10 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between gap-4 border-b border-white/40 pb-4 text-[9px] font-semibold tracking-widest text-white sm:text-[10px]">
          <span>
            {isHero
              ? "BHARTI CREATIONS PRIVATE LIMITED"
              : `BHARTI CREATIONS / ${label}`}
          </span>
          <span>{number} / 08</span>
        </div>

        <div className="flex w-full py-14 md:py-20 lg:py-24">
          <div
            className={`w-full ${
              isHero
                ? "mx-auto max-w-4xl text-center"
                : isRight
                  ? "ml-auto max-w-3xl text-right"
                  : "mr-auto max-w-3xl text-left"
            }`}
          >
            <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-blue-300 sm:text-xs">
              {isHero
                ? "BHARTI CREATIONS PRIVATE LIMITED"
                : `MANUFACTURING CAPABILITY / ${number}`}
            </p>

            <h1
              className={`font-bold leading-[1.12] tracking-tight ${
                isHero
                  ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                  : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              }`}
            >
              {title}
            </h1>

            <p
              className={`mt-6 text-sm leading-7 text-white md:text-base ${
                isHero ? "mx-auto max-w-2xl" : "max-w-2xl"
              } ${isRight ? "ml-auto" : ""}`}
            >
              {description}
            </p>

            <div
              className={`mt-8 flex flex-wrap gap-3 ${
                isHero
                  ? "justify-center"
                  : isRight
                    ? "justify-end"
                    : "justify-start"
              }`}
            >
              {isHero ? (
                <>
                  <a
                    href="#manufacturing"
                    className="bg-[#2b6cb0] px-6 py-4 text-[10px] font-bold tracking-widest text-white transition hover:bg-[#1e4e85]"
                  >
                    EXPLORE MANUFACTURING ↘
                  </a>
                  <Link
                    href="/about"
                    className="border border-white/80 px-6 py-4 text-[10px] font-bold tracking-widest text-white transition hover:bg-white hover:text-black"
                  >
                    DISCOVER BHARTI ↗
                  </Link>
                </>
              ) : (
                <Link
                  href="/contact"
                  className="bg-[#2b6cb0] px-5 py-3.5 text-[10px] font-bold tracking-widest text-white transition hover:bg-[#1e4e85]"
                >
                  ENQUIRE ABOUT THIS ↗
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-white/40 pt-4 text-[8px] font-semibold tracking-widest text-white sm:text-[10px]">
          <span>INDIA · MANUFACTURING · PRINTING</span>
          <a
            href="#manufacturing"
            className="text-blue-300 transition hover:text-white"
          >
            {isHero
              ? "INNOVATION / PRECISION / QUALITY"
              : "ALL CAPABILITIES ↑"}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#171717]">
      <header className="sticky top-0 z-[100] w-full border-b border-black/10 bg-white shadow-md">
        <nav className="mx-auto flex min-h-[90px] w-full max-w-[1720px] flex-wrap items-center justify-between gap-5 px-6 py-4 sm:px-8 md:px-12 lg:min-h-[100px] lg:px-16">
          <Link
            href="/"
            aria-label="Bharti Creations home"
            className="flex shrink-0 items-center"
          >
            <img
              src="/bharti-logo.png"
              alt="Bharti Creations"
              className="h-14 w-auto max-w-[230px] object-contain sm:h-16 lg:h-[68px]"
            />
          </Link>

          <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-3 text-[10px] font-bold tracking-wider sm:gap-x-6 sm:text-xs lg:gap-x-8">
            <Link href="/" className="text-[#2b6cb0] transition hover:text-[#1e4e85]">
              HOME
            </Link>
            <Link href="/about" className="transition hover:text-[#2b6cb0]">
              ABOUT
            </Link>
            <Link href="/leadership" className="transition hover:text-[#2b6cb0]">
              OUR LEADERSHIP TEAM
            </Link>
            <Link href="/careers" className="transition hover:text-[#2b6cb0]">
              CAREER
            </Link>
            <Link href="/contact" className="transition hover:text-[#2b6cb0]">
              CONTACT
            </Link>
          </div>
        </nav>
      </header>

      <VideoSection
        videoId="1b80dae1-ddbd-4e73-85e3-62e25bd5e36c"
        label="MAIN INTRODUCTION"
        title="Manufacturing. Innovation. Excellence."
        description="Innovative manufacturing, creative possibilities and solutions designed to support the changing needs of businesses."
        number="01"
        isHero={true}
      />

      <div id="manufacturing" className="scroll-mt-24 space-y-3 py-3">
        {sections.map((section, index) => (
          <VideoSection
            key={section.no}
            videoId={section.videoId}
            label={section.label}
            title={section.title}
            description={section.description}
            number={section.no}
            isRight={index % 2 === 0}
          />
        ))}
      </div>

      <section className="bg-[#f5f7fa] px-6 py-16 sm:px-8 md:px-12 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1560px]">
          <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-[#2b6cb0]">
            DISCOVER BHARTI
          </p>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            More than manufacturing.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600 md:text-base">
            Learn more about our businesses, printing services and solutions.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex bg-[#2b6cb0] px-6 py-4 text-[10px] font-bold tracking-widest text-white transition hover:bg-[#1e4e85]"
          >
            ABOUT BHARTI ↗
          </Link>
        </div>
      </section>

      <footer className="bg-neutral-950 px-6 py-9 text-white sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1560px]">
          <img
            src="/bharti-logo.png"
            alt="Bharti Creations"
            className="h-14 w-auto max-w-[230px] bg-white p-1 object-contain"
          />
          <p className="mt-5 text-xs text-neutral-400">
            © {new Date().getFullYear()} Bharti Creations Private Limited. All rights reserved.
          </p>
          <div className="mt-5 flex flex-wrap justify-start gap-x-6 gap-y-3 text-[10px] font-bold tracking-widest">
            <Link href="/" className="hover:text-blue-300">HOME</Link>
            <Link href="/about" className="hover:text-blue-300">ABOUT</Link>
            <Link href="/leadership" className="hover:text-blue-300">OUR LEADERSHIP TEAM</Link>
            <Link href="/careers" className="hover:text-blue-300">CAREER</Link>
            <Link href="/contact" className="hover:text-blue-300">CONTACT</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
