
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BLUE = "#2b6cb0";
const LIGHT_BLUE = "#6fa8e8";

const slides = [
  {
    title: "Where Innovation Meets Imagination.",
    subtitle: "BHARTI CREATIONS PRIVATE LIMITED",
    image: "/bharti-factory.jpeg",
  },
  {
    title: "Manufacturing. Innovation. Excellence.",
    subtitle: "BUILT FOR BUSINESS",
    image: "/second.jpeg",
  },
  {
    title: "Creating What Comes Next.",
    subtitle: "OUR JOURNEY",
    image: "/bharti-factory.jpeg",
  },
  {
    title: "Ideas Made Real.",
    subtitle: "DISCOVER BHARTI",
    image: "/second.jpeg",
  },
];

const businesses = [
  {
    title: "PVC Calendar Line",
    description:
      "PVC card materials and manufacturing solutions for ID cards and commercial card applications.",
    image: "/pvc.jpeg",
  },
  {
    title: "Lanyard Manufacturing",
    description:
      "Lanyard manufacturing solutions for identification, branding and events.",
    image: "/lanyards.jpeg",
  },
  {
    title: "DTF Roll Manufacturing",
    description:
      "DTF roll manufacturing solutions for modern direct-to-film printing.",
    image: "/dtf.jpeg",
  },
  {
    title: "LED Frame Manufacturing",
    description:
      "Illuminated LED display frames designed for impactful visual communication.",
    image: "/led.jpeg",
  },
];

const featuredServices = [
  {
    number: "01",
    title: "ID CARDS",
    subtitle: "IDENTIFICATION & CARD SOLUTIONS",
    description:
      "Professional ID card printing solutions for businesses, institutions and organisations.",
    image: "/idcards.jpg",
    link: "mailto:info@bharticard.com?subject=ID%20Cards%20Enquiry",
  },
  {
    number: "02",
    title: "DTF SERVICES",
    subtitle: "DIRECT-TO-FILM PRINTING",
    description:
      "DTF printing solutions, printing materials and equipment for custom printing requirements.",
    image: "/dtfservices.jpg",
    link: "mailto:info@bharticard.com?subject=DTF%20Services%20Enquiry",
  },
  {
    number: "03",
    title: "LED SERVICES",
    subtitle: "ILLUMINATED DISPLAY SOLUTIONS",
    description:
      "LED frames and illuminated display solutions for brands, products and businesses.",
    image: "/ledservices.jpg",
    link: "mailto:info@bharticard.com?subject=LED%20Services%20Enquiry",
  },
];

const products = [
  {
    title: "DTF Printers",
    description: "Printing equipment for detailed transfer designs.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "DTF Heat Press Machines",
    description: "Equipment for professional heat-transfer workflows.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Heat Press Solutions",
    description: "Equipment options for different production requirements.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "DTF Inks",
    description: "Printing consumables for transfer applications.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
  },
];

const services = [
  "PVC ID Cards Printing Services",
  "Lanyards Printing Services",
  "DTF Printing Services",
  "UV DTF Printing Services",
  "DTF Roll Manufacturing",
  "DTF Powder",
  "DTF Ink",
  "DTF Heat Press Machines",
  "DTF Printers",
  "UV Printers",
  "LED Frame Manufacturing",
  "Backlight UV Printing",
  "PVC Fabric Board Manufacturing",
  "Table Top Manufacturing",
];

const navigation = [
  ["HOME", "#home"],
  ["ABOUT", "/about"],
  ["OUR LEADERSHIP TEAM", "/leadership"],
  ["CAREER", "/careers"],
  ["CONTACT", "/contact"],
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#171717]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 110px;
        }

        .business-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 700ms ease,
            transform 700ms ease;
        }

        .business-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .business-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-[#171717] px-5 py-3 text-[10px] tracking-widest text-white sm:px-10">
        <span>BHARTI CREATIONS PRIVATE LIMITED</span>
        <a href="mailto:info@bharticard.com">
          INFO@BHARTICARD.COM
        </a>
      </div>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-10">
          <a
            href="#home"
            aria-label="Bharti Creations home"
            className="relative block h-[62px] w-[190px] shrink-0 sm:h-[76px] sm:w-[260px]"
          >
            <Image
              src="/bharti-logo.png"
              alt="Bharti Creations Private Limited"
              fill
              priority
              sizes="260px"
              className="object-contain object-left"
            />
          </a>

          <button
            type="button"
            className="text-sm font-semibold md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "CLOSE ✕" : "MENU ☰"}
          </button>

          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-0 right-0 top-full flex-col gap-5 border-b border-black/10 bg-white px-6 py-6 text-xs font-semibold md:static md:flex md:flex-row md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0`}
          >
            {navigation.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="whitespace-nowrap transition hover:text-[#2b6cb0]"
              >
                {label}
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="w-fit bg-[#2b6cb0] px-5 py-3 text-white transition hover:bg-[#1e4e85]"
            >
              LET&apos;S CONNECT ↗
            </a>
          </div>
        </nav>
      </header>

      {/* HERO SLIDESHOW */}
      <section
        id="home"
        className="relative flex min-h-[620px] items-center bg-black text-white sm:min-h-[740px]"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${slide.image}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ))}

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-12 lg:px-20">
          <p
            className="mb-7 text-xs font-semibold tracking-[0.25em]"
            style={{ color: LIGHT_BLUE }}
          >
            {slides[activeSlide].subtitle}
          </p>

          <h1 className="max-w-4xl text-5xl font-medium leading-tight tracking-tight sm:text-7xl lg:text-[88px]">
            {slides[activeSlide].title}
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
            Innovative manufacturing, creative possibilities and solutions
            designed for a changing world.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#businesses"
              className="px-7 py-4 text-[10px] font-bold tracking-widest text-white transition hover:bg-[#1e4e85]"
              style={{ backgroundColor: BLUE }}
            >
              EXPLORE OUR BUSINESS ↗
            </a>

            <a
              href="/about"
              className="border border-white/60 px-7 py-4 text-[10px] font-bold tracking-widest transition hover:bg-white hover:text-black"
            >
              DISCOVER BHARTI
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 right-6 z-10 flex items-center justify-between sm:left-12 sm:right-12 lg:left-20 lg:right-20">
          <span className="text-[9px] tracking-widest text-white/80 sm:text-[10px]">
            INDIA · MANUFACTURING · PRINTING
          </span>

          <div className="flex items-center gap-2">
            <span className="mr-2 text-xs">
              0{activeSlide + 1} / 04
            </span>

            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                className={`h-1.5 transition-all ${
                  activeSlide === index ? "w-8" : "w-3 bg-white/50"
                }`}
                style={
                  activeSlide === index
                    ? { backgroundColor: LIGHT_BLUE }
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-[1500px] px-6 py-24 sm:px-12 sm:py-32 lg:px-20"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.25em]"
              style={{ color: BLUE }}
            >
              WHO WE ARE
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              Ideas made real.{" "}
              <span style={{ color: BLUE }}>Impact made lasting.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-600">
              Bharti Creations brings together manufacturing capabilities,
              printing solutions and product innovation to help businesses
              communicate, create and grow.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              From identification solutions to DTF printing and illuminated
              displays, our focus is on practical products, consistent quality
              and long-term partnerships.
            </p>

            <a
              href="/about"
              className="mt-7 inline-block border-b pb-2 text-xs font-bold tracking-widest"
              style={{ borderColor: BLUE, color: BLUE }}
            >
              READ MORE ABOUT US ↗
            </a>
          </div>
        </div>
      </section>

      {/* COMPANY CAPABILITIES */}
      <section className="border-y border-black/10 bg-[#f7f6f3] py-7">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-6 px-6 sm:px-12 md:grid-cols-4 lg:px-20">
          {[
            ["01", "MANUFACTURING"],
            ["02", "PRINTING SOLUTIONS"],
            ["03", "PRODUCT INNOVATION"],
            ["04", "BUSINESS PARTNERSHIPS"],
          ].map(([number, label]) => (
            <div key={number} className="flex items-center gap-3">
              <span className="text-xs" style={{ color: BLUE }}>
                {number}
              </span>
              <span className="text-[9px] font-bold tracking-widest sm:text-[10px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* OUR BUSINESSES */}
      <section
        id="businesses"
        className="bg-[#171717] py-24 text-white sm:py-32"
      >
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <p
            className="text-[10px] font-bold tracking-[0.25em]"
            style={{ color: LIGHT_BLUE }}
          >
            WHAT WE DO
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-6xl">
            Our Businesses
            <span style={{ color: LIGHT_BLUE }}>.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Manufacturing and printing capabilities, connected by a commitment
            to quality and innovation.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {businesses.map((business, index) => (
              <article key={business.title} className="group min-w-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#252525]">
                  <Image
                    src={business.image}
                    alt={business.title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span
                    className="absolute left-5 top-5 text-sm font-medium"
                    style={{ color: LIGHT_BLUE }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-medium leading-snug sm:text-2xl">
                  {business.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {business.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section
        id="featured-services"
        className="bg-[#f7f6f3] px-6 py-24 sm:px-12 sm:py-32 lg:px-20"
      >
        <div className="mx-auto max-w-[1500px]">
          <p
            className="text-[10px] font-bold tracking-[0.25em]"
            style={{ color: BLUE }}
          >
            WHAT WE OFFER
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Our Core Services
            <span style={{ color: BLUE }}>.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Explore our key service categories and discover the right solution
            for your business.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <article
                key={service.number}
                className="group flex min-w-0 flex-col overflow-hidden border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#e8e6e1] sm:aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                  <span className="absolute left-5 top-5 bg-white px-4 py-2 text-[10px] font-bold tracking-[0.15em] text-[#171717]">
                    SERVICE {service.number}
                  </span>

                  <span className="absolute bottom-5 left-5 text-xs font-semibold tracking-[0.12em] text-white/90">
                    {service.subtitle}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                    {service.description}
                  </p>

                  <a
                    href={service.link}
                    className="mt-6 inline-flex w-fit items-center gap-3 text-[10px] font-bold tracking-widest"
                    style={{ color: BLUE }}
                  >
                    ENQUIRE NOW <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section
        id="services"
        className="mx-auto max-w-[1500px] px-6 py-24 sm:px-12 sm:py-32 lg:px-20"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.25em]"
              style={{ color: BLUE }}
            >
              OUR EXPERTISE
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              Solutions for every stage of creation.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
              Explore our printing services, equipment and manufacturing
              capabilities.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-block px-6 py-4 text-[10px] font-bold tracking-widest text-white transition hover:bg-[#1e4e85]"
              style={{ backgroundColor: BLUE }}
            >
              DISCUSS YOUR REQUIREMENTS ↗
            </a>
          </div>

          <div>
            {services.map((service, index) => (
              <a
                href="/contact"
                key={service}
                className="group flex items-center justify-between gap-4 border-b border-black/10 py-5 transition hover:border-[#2b6cb0]"
              >
                <span className="flex items-center gap-5">
                  <span className="text-[10px]" style={{ color: BLUE }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium sm:text-base">
                    {service}
                  </span>
                </span>

                <span
                  className="text-lg transition group-hover:translate-x-1"
                  style={{ color: BLUE }}
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-[#f7f6f3] py-24 sm:py-28">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-12 lg:px-20">
          <p
            className="text-[10px] font-bold tracking-[0.25em]"
            style={{ color: BLUE }}
          >
            OUR PRODUCTS
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-6xl">
            Designed to deliver
            <span style={{ color: BLUE }}>.</span>
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <article key={product.title} className="group bg-white">
                <div className="relative h-[250px] overflow-hidden bg-[#e8e6e1]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[9px] font-bold tracking-widest">
                    PRODUCT 0{index + 1}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{product.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {product.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-5 inline-block text-[10px] font-bold tracking-widest"
                    style={{ color: BLUE }}
                  >
                    ENQUIRE NOW ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 sm:px-12 sm:py-28 lg:px-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.25em]"
              style={{ color: BLUE }}
            >
              OUR APPROACH
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              Built around your business.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "Customer-focused solutions",
              "Manufacturing expertise",
              "Quality-minded processes",
              "Long-term partnerships",
            ].map((item, index) => (
              <div key={item} className="border-t border-black/15 pt-5">
                <span className="text-xs" style={{ color: BLUE }}>
                  0{index + 1}
                </span>
                <p className="mt-4 text-sm font-semibold leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section
        id="careers"
        className="bg-[#171717] px-6 py-20 text-white sm:px-12 sm:py-24 lg:px-20"
      >
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.25em]"
              style={{ color: LIGHT_BLUE }}
            >
              BUILD THE FUTURE WITH US
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
              Your next opportunity starts here.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
              Interested in working with Bharti Creations? Explore career
              opportunities and connect with our team.
            </p>
          </div>

          <a
            href="/careers"
            className="w-fit px-7 py-4 text-[10px] font-bold tracking-widest text-white transition hover:bg-white hover:text-black"
            style={{ backgroundColor: BLUE }}
          >
            EXPLORE CAREERS ↗
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#f7f6f3] px-6 py-24 sm:px-12 sm:py-28 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-2">
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.25em]"
              style={{ color: BLUE }}
            >
              GET IN TOUCH
            </p>

            <h2 className="mt-5 text-5xl font-medium leading-tight tracking-tight sm:text-7xl">
              Let&apos;s create something meaningful.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
              Tell us what you are looking for. Our team can discuss your
              product, printing or manufacturing requirements.
            </p>
          </div>

          <div className="flex flex-col justify-center border-t border-black/10 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <span className="text-[10px] font-bold tracking-widest text-gray-500">
              EMAIL
            </span>

            <a
              href="mailto:info@bharticard.com"
              className="mt-3 break-words text-2xl font-medium transition sm:text-3xl"
              style={{ color: BLUE }}
            >
              info@bharticard.com
            </a>

            <span className="mt-10 text-[10px] font-bold tracking-widest text-gray-500">
              BUSINESS ENQUIRIES
            </span>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Products · Printing · Manufacturing · Partnerships
            </p>

            <a
              href="/contact"
              className="mt-8 w-fit border border-black/20 px-6 py-4 text-[10px] font-bold tracking-widest transition hover:bg-black hover:text-white"
            >
              CONTACT OUR TEAM ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-white px-6 py-8 text-[#171717] sm:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <a
            href="#home"
            aria-label="Bharti Creations home"
            className="relative block h-[64px] w-[220px] shrink-0 sm:h-[72px] sm:w-[270px]"
          >
            <Image
              src="/bharti-logo.png"
              alt="Bharti Creations Private Limited"
              fill
              sizes="270px"
              className="object-contain object-left"
            />
          </a>

          <p className="text-[10px] leading-6 text-black/50">
            © 2026 Bharti Creations Private Limited. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-xs font-semibold transition hover:text-[#2b6cb0]"
            style={{ color: BLUE }}
          >
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
