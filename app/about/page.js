
"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "ID CARDS",
    subtitle: "IDENTIFICATION & CARD SOLUTIONS",
    description:
      "Professional ID card printing solutions for businesses, institutions, offices and organisations.",
    videoUrl: "https://res.cloudinary.com/nwl2znvj/video/upload/v1793359891/idsubhash.mp4",
    subject: "ID Cards Enquiry",
  },
  {
    number: "02",
    title: "DTF SERVICES",
    subtitle: "DIRECT-TO-FILM PRINTING",
    description:
      "DTF printing solutions, printing materials and equipment for modern custom printing requirements.",
    videoUrl: "https://res.cloudinary.com/nwl2znvj/video/upload/v1793359886/dtfsubhash.mp4",
    subject: "DTF Services Enquiry",
  },
  {
    number: "03",
    title: "LED SERVICES",
    subtitle: "ILLUMINATED DISPLAY SOLUTIONS",
    description:
      "LED frames and illuminated display solutions designed to make brands, products and messages stand out.",
    videoUrl: "https://res.cloudinary.com/nwl2znvj/video/upload/v1793359893/ledsubhash.mp4",
    subject: "LED Services Enquiry",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#171717]">
      {/* STICKY HEADER */}
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

          {/* NAVIGATION */}
          <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-3 text-[10px] font-bold tracking-wider sm:gap-x-6 sm:text-xs lg:gap-x-8">
            <Link href="/" className="transition hover:text-[#2b6cb0]">
              HOME
            </Link>

            <Link href="/about" className="text-[#2b6cb0]">
              ABOUT
            </Link>

            <Link
              href="/leadership"
              className="transition hover:text-[#2b6cb0]"
            >
              OUR LEADERSHIP
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

      {/* ABOUT HERO */}
      <section className="relative flex min-h-[450px] items-center justify-center overflow-hidden bg-[#111315] px-6 py-20 text-center text-white md:min-h-[510px] lg:min-h-[540px]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full border border-blue-400/20" />
        <div className="pointer-events-none absolute -right-5 -top-5 h-[220px] w-[220px] rounded-full border border-blue-400/20" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
          <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-blue-300">
            ABOUT BHARTI CREATIONS
          </p>

          <h1 className="text-center text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Ideas made real.
            <span className="block text-[#8fc4ff]">
              Impact made lasting.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-white/85 md:text-base">
            Bharti Creations brings together manufacturing capabilities,
            printing solutions and product innovation to help businesses
            communicate, create and grow.
          </p>

          <a
            href="#sales-team"
            className="mt-8 inline-flex bg-[#2b6cb0] px-6 py-4 text-[10px] font-bold tracking-widest text-white transition hover:bg-[#1e4e85]"
          >
            MEET OUR SALES TEAM ↓
          </a>
        </div>
      </section>

      {/* SALES TEAM VIDEO */}
      <section
        id="sales-team"
        className="relative isolate flex min-h-[380px] scroll-mt-24 items-center overflow-hidden bg-neutral-950 text-white md:min-h-[440px] lg:min-h-[470px]"
      >
        <video
          src="https://res.cloudinary.com/nwl2znvj/video/upload/v1793359894/sales-ready.mp4"
          title="Bharti Creations Sales Team"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="metadata"
          disablePictureInPicture
          tabIndex={-1}
          className="pointer-events-none absolute -z-20 border-0 object-cover"
          style={{
            top: "50%",
            left: "50%",
            width: "max(100%, 177.78vh)",
            height: "max(100%, 56.25vw)",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-black/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

        <div className="mx-auto w-full max-w-[1720px] px-6 py-8 sm:px-8 md:px-12 md:py-9 lg:px-16">
          <div className="flex items-center justify-between gap-4 border-b border-white/40 pb-3 text-[9px] font-semibold tracking-widest text-white md:text-[10px]">
            <span>BHARTI CREATIONS / OUR PEOPLE</span>
            <span>01 / SALES TEAM</span>
          </div>

          <div className="max-w-3xl py-9 md:py-10">
            <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-[#8fc4ff] md:text-xs">
              THE PEOPLE BEHIND OUR PROMISE
            </p>

            <h2 className="text-left text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Our Fantastic
              <span className="block text-[#8fc4ff]">
                Sales Team.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-left text-sm leading-7 text-white/95 md:text-base">
              Great partnerships start with great people. Our sales team
              works closely with customers to understand their requirements,
              recommend the right solutions and build lasting business
              relationships.
            </p>

            <p className="mt-3 max-w-2xl text-left text-sm leading-7 text-white/85 md:text-base">
              From the first enquiry to ongoing support, we believe in
              responsive communication, dependable service and helping every
              customer find the right solution.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex bg-[#2b6cb0] px-6 py-4 text-[10px] font-bold tracking-widest text-white transition hover:bg-[#1e4e85]"
            >
              CONNECT WITH OUR TEAM ↗
            </a>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-white/40 pt-3 text-[8px] tracking-widest text-white md:text-[10px]">
            <span>PEOPLE · PARTNERSHIPS · POSSIBILITIES</span>
            <span className="text-[#8fc4ff]">
              BUILDING RELATIONSHIPS THAT LAST
            </span>
          </div>
        </div>
      </section>

      {/* OUR CORE SERVICES */}
      <section
        id="featured-services"
        className="scroll-mt-24 bg-[#f5f7fa] px-6 py-16 md:px-10 md:py-20 lg:px-16"
      >
        <div className="mx-auto max-w-[1560px]">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#2b6cb0]">
            WHAT WE OFFER
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Our Core Services
            <span className="text-[#2b6cb0]">.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            Explore our three key service categories and discover the right
            solution for your business.
          </p>

          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex min-w-0 flex-col overflow-hidden border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  {/* Cloudinary video with automatic muted looping playback */}
                  <video
                    src={service.videoUrl}
                    title={`${service.title} video`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    preload="metadata"
                    disablePictureInPicture
                    tabIndex={-1}
                    className="pointer-events-none absolute border-0 object-cover"
                    style={{
                      width: "max(100%, 177.78%)",
                      height: "max(100%, 133.33%)",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] font-bold tracking-widest text-black">
                    SERVICE {service.number}
                  </span>

                  <span className="absolute bottom-4 left-4 text-[9px] font-bold tracking-widest text-white drop-shadow">
                    {service.subtitle}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(service.subject)}`}
                    className="mt-6 flex w-fit items-center gap-3 border-b border-[#2b6cb0] pb-2 text-[10px] font-bold tracking-widest text-[#2b6cb0]"
                  >
                    ENQUIRE NOW <span>↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contact"
        className="scroll-mt-24 px-6 py-16 text-center md:px-10 md:py-20"
      >
        <p className="text-[10px] font-bold tracking-[0.3em] text-[#2b6cb0]">
          LET&apos;S CONNECT
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          Let&apos;s create something great.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600">
          Get in touch with Bharti Creations to discuss your requirements.
        </p>

        <Link
          href="/contact"
          className="mt-7 inline-flex bg-[#2b6cb0] px-6 py-4 text-[10px] font-bold tracking-widest text-white transition hover:bg-[#1e4e85]"
        >
          CONTACT OUR TEAM ↗
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-white px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1560px] flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <Link href="/" aria-label="Bharti Creations home">
            <img
              src="/bharti-logo.png"
              alt="Bharti Creations"
              className="h-14 w-auto max-w-[230px] object-contain"
            />
          </Link>

          <p className="text-[10px] leading-6 text-black/50">
            © 2026 Bharti Creations Pvt. Ltd. All rights reserved.
          </p>

          <Link
            href="/"
            className="text-xs font-bold text-[#2b6cb0] transition hover:text-[#1e4e85]"
          >
            BACK TO HOME ↑
          </Link>
        </div>

        {/* FOOTER NAVIGATION */}
        <div className="mx-auto mt-6 flex max-w-[1560px] flex-wrap gap-x-6 gap-y-3 border-t border-black/10 pt-5 text-[10px] font-bold tracking-widest">
          <Link href="/" className="hover:text-[#2b6cb0]">
            HOME
          </Link>

          <Link href="/about" className="text-[#2b6cb0]">
            ABOUT
          </Link>

          <Link href="/leadership" className="hover:text-[#2b6cb0]">
            OUR LEADERSHIP TEAM
          </Link>

          <Link href="/careers" className="hover:text-[#2b6cb0]">
            CAREER
          </Link>

          <Link href="/contact" className="hover:text-[#2b6cb0]">
            CONTACT
          </Link>
        </div>
      </footer>
    </main>
  );
}
