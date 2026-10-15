
"use client";

import Link from "next/link";
import { useState } from "react";

const WHATSAPP_NUMBER = "918208583132";

const jobs = [
  {
    title: "Sales Executive",
    category: "SALES & BUSINESS DEVELOPMENT",
    description:
      "Build customer relationships, identify new business opportunities, and help our products reach more customers.",
    skills: "Communication, client relations and sales",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Graphics Designer / Video Editor / Motion Graphics",
    category: "CREATIVE & DIGITAL",
    description:
      "Create eye-catching designs, edit videos, and develop motion graphics for our products and campaigns.",
    skills: "Graphic design, video editing and creativity",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Production Worker",
    category: "MANUFACTURING",
    description:
      "Support daily production, handle materials carefully, and help maintain quality and manufacturing standards.",
    skills: "Teamwork, attention to detail and reliability",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Supervisor",
    category: "PRODUCTION & OPERATIONS",
    description:
      "Coordinate production activities, guide team members, monitor quality, and keep operations running smoothly.",
    skills: "Team leadership, quality and coordination",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Manager",
    category: "BUSINESS & OPERATIONS",
    description:
      "Lead teams, coordinate business operations, monitor performance, and support company growth.",
    skills: "Leadership, planning and decision-making",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
  },
];

const benefits = [
  {
    number: "01",
    title: "Learn & Grow",
    text: "Develop your skills through practical experience and new challenges.",
  },
  {
    number: "02",
    title: "Teamwork",
    text: "Work together with people who value collaboration and shared success.",
  },
  {
    number: "03",
    title: "Innovation",
    text: "Contribute ideas that improve products, processes, and customer experiences.",
  },
  {
    number: "04",
    title: "Make an Impact",
    text: "Take pride in quality work that helps build a stronger business.",
  },
];

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const fullName = String(formData.get("fullName") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const position = String(formData.get("position") || "").trim();
    const experience =
      String(formData.get("experience") || "").trim() || "Not provided";

    const message = [
      "NEW CAREER APPLICATION",
      "",
      "Bharti Creations Pvt. Ltd.",
      "",
      `Applicant Name: ${fullName}`,
      `Mobile Number: ${phone}`,
      `Email Address: ${email}`,
      `Position Applied For: ${position}`,
      `Experience / Skills: ${experience}`,
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setFormMessage(
      "WhatsApp उघडल्यानंतर application तपासून Send दाबा."
    );
  }

  function handleApply(jobTitle) {
    setSelectedPosition(jobTitle);
    setFormMessage("");
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="sticky top-0 z-[100] w-full border-b border-black/10 bg-white shadow-md">
        <nav className="mx-auto flex min-h-[90px] w-full max-w-[1720px] flex-wrap items-center justify-between gap-5 px-6 py-4 sm:px-8 md:px-12 lg:min-h-[100px] lg:px-16">
          <Link href="/" aria-label="Bharti Creations home">
            <img
              src="/bharti-logo.png"
              alt="Bharti Creations"
              className="h-14 w-auto max-w-[230px] object-contain sm:h-16 lg:h-[68px]"
            />
          </Link>

          {/* UPDATED NAVIGATION ORDER */}
          <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-3 text-[10px] font-bold tracking-wider sm:gap-x-6 sm:text-xs lg:gap-x-8">
            <Link href="/" className="transition hover:text-blue-600">
              HOME
            </Link>

            <Link href="/about" className="transition hover:text-blue-600">
              ABOUT
            </Link>

            <Link
              href="/leadership"
              className="transition hover:text-blue-600"
            >
              OUR LEADERSHIP 
            </Link>

            <Link href="/careers" className="text-blue-700">
              CAREER
            </Link>

            <Link href="/contact" className="transition hover:text-blue-600">
              CONTACT
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#edf5ff]">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 sm:py-28">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Careers at Bharti Creations
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Build Your Future.
            <span className="mt-2 block text-blue-700">
              Grow With Us.
            </span>
          </h1>

          <div className="mx-auto mt-7 h-1.5 w-20 rounded-full bg-blue-600" />

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Be part of a team driven by innovation, creativity, and
            manufacturing excellence. Discover opportunities to learn,
            contribute, and grow with Bharti Creations.
          </p>

          <a
            href="#openings"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-blue-700 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-800"
          >
            Explore Career Opportunities <span className="ml-3">↓</span>
          </a>
        </div>
      </section>

      {/* JOB OPENINGS */}
      <section
        id="openings"
        className="scroll-mt-28 bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
      >
        <div className="mx-auto max-w-[1450px]">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
              Find Your Role
            </p>

            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Explore Career Opportunities
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              Bring your skills, ideas, and ambition to a team that believes
              in building better products and a stronger future.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-6">
            {jobs.map((job, index) => (
              <article
                key={job.title}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-md shadow-blue-900/5 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  index < 3
                    ? "lg:col-span-2"
                    : "lg:col-span-3 lg:mx-auto lg:w-full lg:max-w-[560px]"
                }`}
              >
                <div className="relative h-56 overflow-hidden bg-blue-100 sm:h-64">
                  <img
                    src={job.image}
                    alt={`${job.title} workplace`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/65 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-5 rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-800">
                    Career Opportunity
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-blue-700">
                    {job.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold leading-tight">
                    {job.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                    {job.description}
                  </p>

                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <p className="text-xs leading-6 text-gray-500">
                      <span className="font-bold text-gray-700">
                        Key skills:{" "}
                      </span>
                      {job.skills}
                    </p>
                  </div>

                  {/* APPLY NOW: NATIVE LINK + SELECT POSITION */}
                  <a
                    href="#apply"
                    onClick={() => handleApply(job.title)}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
                  >
                    Apply Now <span className="ml-2">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#edf5ff] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-[1300px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
              More Than a Workplace
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Grow, Create, and Make an Impact
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-black tracking-widest text-blue-600">
                  {item.number}
                </p>

                <h3 className="mt-4 text-xl font-extrabold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section
        id="apply"
        className="scroll-mt-28 bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
              Take the Next Step
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Your Next Chapter Starts Here.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Interested in joining Bharti Creations? Share your details and
              select the role you want to apply for.
            </p>

            <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="font-bold text-gray-900">
                Apply with WhatsApp
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-blue-700 hover:underline"
              >
                +91 82085 83132
              </a>

              <p className="mt-3 text-sm leading-6 text-gray-700">
                Fill in your application details and send them to us through
                WhatsApp.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-9"
          >
            <h3 className="text-2xl font-extrabold">
              Apply for a Position
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Fill in your details below.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold"
                >
                  Full Name *
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  required
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold"
                >
                  Mobile Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter mobile number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="position"
                  className="mb-2 block text-sm font-semibold"
                >
                  Position Applying For *
                </label>

                <select
                  id="position"
                  name="position"
                  required
                  value={selectedPosition}
                  onChange={(event) => {
                    setSelectedPosition(event.target.value);
                    setFormMessage("");
                  }}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select a position
                  </option>

                  {jobs.map((job) => (
                    <option key={job.title} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="experience"
                  className="mb-2 block text-sm font-semibold"
                >
                  Experience / Skills
                </label>

                <textarea
                  id="experience"
                  name="experience"
                  rows={4}
                  placeholder="Briefly describe your experience and skills"
                  className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Apply Now <span>→</span>
            </button>

            {formMessage && (
              <p
                role="status"
                className="mt-4 rounded-lg bg-blue-50 p-4 text-sm leading-6 text-blue-900"
              >
                {formMessage}
              </p>
            )}

            <p className="mt-4 text-xs leading-5 text-gray-500">
              WhatsApp will open with your application details. Press Send to
              submit your application.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#101827] px-6 py-8 text-center text-sm text-gray-300">
        <Link href="/" aria-label="Bharti Creations home" className="inline-block">
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

        {/* FOOTER NAVIGATION: SAME ORDER */}
        <div className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-[10px] font-bold tracking-widest">
          <Link href="/" className="transition hover:text-blue-300">
            HOME
          </Link>

          <Link href="/about" className="transition hover:text-blue-300">
            ABOUT
          </Link>

          <Link href="/leadership" className="transition hover:text-blue-300">
            OUR LEADERSHIP TEAM
          </Link>

          <Link href="/careers" className="text-blue-300">
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
