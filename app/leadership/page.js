
"use client";

import Link from "next/link";

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
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
            <Link href="/" className="transition-colors hover:text-blue-600">
              HOME
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-blue-600"
            >
              ABOUT
            </Link>
            <Link
              href="/leadership"
              className="text-blue-600 transition-colors"
            >
              OUR LEADERSHIP
            </Link>
            <Link
              href="/careers"
              className="transition-colors hover:text-blue-600"
            >
              CAREER
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-blue-600"
            >
              CONTACT
            </Link>
          </div>
        </nav>
      </header>

      {/* SECTION 1: MANAGING DIRECTOR */}
      <section className="relative overflow-hidden bg-[#f5f8fc]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1600px] items-center gap-12 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-16 lg:py-24">
          <div className="mx-auto w-full max-w-[560px]">
            <div className="overflow-hidden rounded-2xl border border-white bg-white p-3 shadow-2xl shadow-blue-900/10">
              <img
                src="/sir.png"
                alt="Shreyash Shivaji Oulkar, Managing Director of Bharti Creations Pvt. Ltd."
                className="aspect-[3/4] w-full rounded-xl bg-gray-200 object-cover object-[center_25%]"
              />

              <div className="px-3 pb-4 pt-5 text-center sm:px-5">
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Shreyash Shivaji Oulkar
                </h2>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                  Managing Director
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Bharti Creations Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>

          <div className="py-3">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-blue-700">
              Our Leadership
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              From a ₹27,000 Beginning to a{" "}
              <span className="text-blue-700">
                Company Valued at ₹100+ Crore.
              </span>
            </h1>

            <div className="mt-7 h-1.5 w-20 rounded-full bg-blue-600" />

            <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
              What began with just ₹27,000 in initial capital has grown into
              a company valued at over ₹100 crore. Under the leadership of
              Shreyash Shivaji Oulkar, Managing Director of Bharti Creations
              Pvt. Ltd., the business has evolved through innovation, backward
              integration, and a commitment to building advanced manufacturing
              capabilities in India.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Recognising the power of innovation, he travelled to China to
              explore advanced technologies and manufacturing practices.
              Inspired by these experiences, he embraced backward integration,
              developing capabilities that extend from ID card raw materials
              to finished ID cards in India.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              His business has diversified into DTF printing services, DTF raw
              material manufacturing, UV DTF solutions, and LED frame
              manufacturing. These business verticals reflect a continued
              commitment to innovation, in-house manufacturing, and customer
              value.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Beyond business growth, Bharti Creations provides direct
              employment to over 200 people, with a focus on manufacturing
              excellence, skill development, and sustainable growth.
            </p>

            <div className="mt-7 rounded-r-xl border-l-4 border-blue-600 bg-white/80 px-5 py-4 shadow-sm">
              <p className="text-base font-bold leading-7 text-gray-800 sm:text-lg">
                A journey of bold beginnings, breakthrough innovation, and
                lasting impact.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-blue-100 bg-white px-4 py-5 shadow-sm">
                <p className="text-2xl font-black text-blue-700 sm:text-3xl">
                  ₹100+ Cr
                </p>
                <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-wider text-gray-500">
                  Company Valuation
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-white px-4 py-5 shadow-sm">
                <p className="text-2xl font-black text-blue-700 sm:text-3xl">
                  200+
                </p>
                <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-wider text-gray-500">
                  Direct Employment
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-white px-4 py-5 shadow-sm">
                <p className="text-2xl font-black text-blue-700 sm:text-3xl">
                  A to Z
                </p>
                <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-wider text-gray-500">
                  ID Card Manufacturing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR CORE TEAM VIDEO */}
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-gray-900 sm:min-h-[600px] lg:min-h-[680px]">
        <video
          src="https://res.cloudinary.com/nwl2znvj/video/upload/v1793359891/core.mp4"
          title="Bharti Creations Core Team"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="metadata"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute -z-20 border-0 object-cover"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "max(100%, 177.78vh)",
            height: "max(100%, 56.25vw)",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="pointer-events-none absolute inset-0 -z-10 bg-black/15" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-10 sm:py-28 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-blue-200">
              The People Behind Our Progress
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Our Core <span className="text-blue-200">Team.</span>
            </h2>

            <div className="mt-7 h-1.5 w-20 rounded-full bg-blue-300" />

            <p className="mt-7 max-w-2xl text-base leading-8 text-white sm:text-xl sm:leading-9">
              Great ideas become reality when talented people work together.
              Our team brings skill, dedication, and creativity to every
              project, helping us deliver innovative products and dependable
              solutions to our customers.
            </p>

            <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white sm:text-base">
              One team. One vision. A continuous drive to manufacture better,
              innovate faster, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: GROUP PHOTO */}
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-gray-950 sm:min-h-[650px] lg:min-h-[750px]">
        <img
          src="/team.png"
          alt="Bharti Creations team"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-5xl -translate-y-12 px-6 text-center sm:-translate-y-16 sm:px-10 lg:-translate-y-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-300 sm:text-sm">
            One Team. One Vision.
          </p>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Together We Build. Together We Grow.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white sm:text-lg">
            United by vision, driven by innovation, and committed to excellence.
          </p>
        </div>
      </section>

      {/* SECTION 4: A TRIBUTE TO HIS FATHER */}
      <section className="relative overflow-hidden bg-[#111827] text-white">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-900/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-700/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1450px] items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16 lg:py-24">
          <div className="mx-auto w-full max-w-[440px]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl">
              <img
                src="/inspiration.png"
                alt="A tribute to the father whose guidance helped shape Bharti Creations"
                className="aspect-[4/5] w-full rounded-xl object-cover object-center"
              />

              <div className="px-3 py-5 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                  Forever Remembered
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-amber-300">
              A Tribute of Gratitude
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The Man Behind the{" "}
              <span className="text-amber-300">Inspiration.</span>
            </h2>

            <div className="mt-7 h-1.5 w-20 rounded-full bg-amber-300" />

            <h3 className="mt-7 text-xl font-bold leading-8 text-white sm:text-2xl">
              A Father’s Guidance. A Legacy That Lives On.
            </h3>

            <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
              Behind every meaningful journey is someone who teaches us how
              to take the first step. Through his guidance, values, wisdom,
              and unwavering belief, he helped shape the person and the
              entrepreneurial spirit behind Bharti Creations.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
              He taught the importance of hard work, honesty, patience, and
              standing strong through challenges. His guidance helped light
              the way, his values became a compass, and his lessons continue
              to inspire every step of this journey.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
              Today, as Bharti Creations continues to grow and reach new
              milestones, his contribution remains an inseparable part of
              its story. The achievements of today carry forward the values
              he instilled and the belief he inspired.
            </p>

            <div className="mt-8 border-l-4 border-amber-300 bg-white/5 px-5 py-5 sm:px-7">
              <p className="text-lg font-semibold leading-8 text-white sm:text-xl">
                Your guidance showed the way. Your values shaped the journey.
                Your blessings remain our strength.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                With Eternal Gratitude and Respect
              </p>

              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                A Salute to a Father. A Guide. An Inspiration.
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                His lessons live on in the values, vision, and future of
                Bharti Creations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#101827] px-6 py-8 text-center text-sm text-gray-300">
        <Link
          href="/"
          aria-label="Bharti Creations home"
          className="inline-block"
        >
          <img
            src="/bharti-logo.png"
            alt="Bharti Creations"
            className="mx-auto h-14 w-auto max-w-[230px] rounded bg-white p-1 object-contain"
          />
        </Link>

        <p className="mt-5">
          © 2026 Bharti Creations Pvt. Ltd. All rights reserved.
        </p>

        <p className="mt-2 text-xs tracking-wide text-gray-400">
          Innovation • Manufacturing • Growth
        </p>

        <div className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-[10px] font-bold tracking-widest">
          <Link href="/" className="transition hover:text-blue-300">
            HOME
          </Link>
          <Link href="/about" className="transition hover:text-blue-300">
            ABOUT
          </Link>
          <Link href="/leadership" className="text-blue-300">
            OUR LEADERSHIP TEAM
          </Link>
          <Link href="/careers" className="transition hover:text-blue-300">
            CAREER
          </Link>
          <Link href="/contact" className="transition hover:text-blue-300">
            CONTACT
          </Link>
        </div>
      </footer>
    </main>
  );
}
