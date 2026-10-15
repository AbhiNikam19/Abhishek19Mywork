
"use client";

import Link from "next/link";
import { useState } from "react";

const EMAIL = "info@bharticard.com";
const ENQUIRY_WHATSAPP = "918208583132";

const ADDRESS =
  "1087, B Bhave Natya Mandir, Harbhat Road, Sangli, Maharashtra, India - 416416";

const salesContacts = [
  { region: "Sales Head", phone: "+91 7982070678" },
  { region: "North India", phone: "+91 8888055553" },
  { region: "West India", phone: "+91 8888055554" },
  { region: "Central India", phone: "+91 7030939939" },
  { region: "South India", phone: "+91 9607995928" },
  { region: "East India", phone: "+91 9673665888" },
  { region: "International Enquiries", phone: "+91 8888055559" },
];

const supportContacts = [
  "+91 7030939931",
  "+91 9607995920",
];

const enquiryTypes = [
  "Product Enquiry",
  "LED Frames",
  "DTF Printing",
  "ID Cards",
  "UV DTF",
  "PVC Products",
  "Bulk Order",
  "Technical Support",
  "International Enquiry",
  "Other",
];

function cleanPhone(phone) {
  return phone.replace(/\D/g, "");
}

function ContactCard({ title, phone, description }) {
  return (
    <article className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-700">
        ☎
      </div>

      <h3 className="mt-5 text-lg font-extrabold">{title}</h3>

      {description && (
        <p className="mt-2 text-sm leading-6 text-gray-500">
          {description}
        </p>
      )}

      <a
        href={`tel:${cleanPhone(phone)}`}
        className="mt-3 break-words text-base font-semibold text-gray-800 hover:text-blue-700"
      >
        {phone}
      </a>

      <div className="mt-auto pt-5">
        <a
          href={`https://wa.me/${cleanPhone(phone)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
        >
          Contact Now <span className="ml-2">→</span>
        </a>
      </div>
    </article>
  );
}

export default function ContactPage() {
  const [enquiryType, setEnquiryType] = useState("Product Enquiry");
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      "NEW WEBSITE ENQUIRY",
      "",
      "Bharti Creations Private Limited",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Enquiry Type: ${enquiryType}`,
      `Subject: ${subject || "Not specified"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${ENQUIRY_WHATSAPP}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setFormMessage(
      "WhatsApp उघडल्यानंतर तुमची enquiry तपासा आणि Send दाबा."
    );
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

            <Link href="/careers" className="transition hover:text-blue-600">
              CAREER
            </Link>

            <Link href="/contact" className="text-blue-700">
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
            Contact Bharti Creations
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Get in Touch.
            <span className="mt-2 block text-blue-700">
              Let&apos;s Connect.
            </span>
          </h1>

          <div className="mx-auto mt-7 h-1.5 w-20 rounded-full bg-blue-600" />

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Connect with our regional sales teams, get customer support, or
            send us your business enquiry. We look forward to helping you.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#sales"
              className="inline-flex items-center justify-center rounded-full bg-blue-700 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-800"
            >
              Contact Sales <span className="ml-2">→</span>
            </a>

            <a
              href="#enquiry"
              className="inline-flex items-center justify-center rounded-full border-2 border-blue-700 px-8 py-4 text-sm font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
            >
              Send an Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* SALES CONTACTS */}
      <section
        id="sales"
        className="scroll-mt-28 px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
      >
        <div className="mx-auto max-w-[1350px]">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
              Sales Department
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Connect With Our Sales Team
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Contact the appropriate team for product enquiries, pricing,
              orders, and business opportunities.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 inline-block break-all text-base font-bold text-blue-700 hover:text-blue-900"
            >
              Sales Email: {EMAIL}
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {salesContacts.map((contact) => (
              <ContactCard
                key={contact.region}
                title={contact.region}
                phone={contact.phone}
                description="Sales enquiries and business opportunities"
              />
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section
        id="support"
        className="bg-[#edf5ff] px-6 py-16 sm:px-10 sm:py-20 lg:px-16"
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
              Customer Support
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              How Can We Help You?
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              For product assistance and customer support, contact our team.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 inline-block break-all text-base font-bold text-blue-700 hover:text-blue-900"
            >
              Support Email: {EMAIL}
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {supportContacts.map((phone, index) => (
              <ContactCard
                key={phone}
                title={`Support ${index + 1}`}
                phone={phone}
                description="Customer service and product assistance"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section
        id="enquiry"
        className="scroll-mt-28 px-6 py-16 sm:px-10 sm:py-24 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
              Business Enquiries
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Tell Us What You Need.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Looking for product information, customised solutions, bulk
              orders, or technical assistance? Send us your requirements
              through the enquiry form.
            </p>

            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-lg font-extrabold">
                Bharti Creations Private Limited
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-700">
                {ADDRESS}
              </p>

              <p className="mt-4 text-sm text-gray-600">
                GSTIN/UIN: 27AAMCB3776B1ZM
              </p>

              <p className="mt-4 text-sm font-semibold text-gray-700">
                Office Hours
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Monday to Saturday, 10:00 AM to 6:00 PM
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-9"
          >
            <h3 className="text-2xl font-extrabold">
              Send Us an Enquiry
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Fill in your details and continue through WhatsApp.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Full Name *
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold"
                >
                  Phone Number *
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="Enter phone number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email Address *
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="enquiry-type"
                  className="mb-2 block text-sm font-semibold"
                >
                  Enquiry Type *
                </label>

                <select
                  id="enquiry-type"
                  name="enquiryType"
                  required
                  value={enquiryType}
                  onChange={(event) => setEnquiryType(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Send Enquiry on WhatsApp <span>→</span>
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
              WhatsApp opens with your enquiry details. Press Send to deliver
              your message.
            </p>
          </form>
        </div>
      </section>

      {/* COMPANY ADDRESS */}
      <section className="bg-[#edf5ff] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-[1100px] rounded-2xl border border-blue-100 bg-white p-7 shadow-md sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
            Company Information
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Bharti Creations Private Limited
          </h2>

          <div className="mt-7 grid gap-7 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold text-gray-900">Address</p>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                {ADDRESS}
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-full border-2 border-blue-700 px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
              >
                Find Us on Google Maps ↗
              </a>
            </div>

            <div>
              <p className="text-sm font-bold text-gray-900">Email</p>

              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 inline-block break-all text-sm text-blue-700 hover:underline"
              >
                {EMAIL}
              </a>

              <p className="mt-5 text-sm font-bold text-gray-900">
                GSTIN/UIN
              </p>

              <p className="mt-2 text-sm text-gray-600">
                27AAMCB3776B1ZM
              </p>

              <p className="mt-5 text-sm font-bold text-gray-900">
                Office Hours
              </p>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Monday to Saturday
                <br />
                10:00 AM to 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#101827] px-6 py-10 text-center text-gray-300">
        <Link href="/" className="inline-block">
          <img
            src="/bharti-logo.png"
            alt="Bharti Creations"
            className="mx-auto h-14 w-auto rounded bg-white px-3 py-1 object-contain"
          />
        </Link>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400">
          Innovation, quality, and customer satisfaction — connecting ideas
          with solutions.
        </p>

        {/* FOOTER NAVIGATION: SAME ORDER */}
        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-semibold">
          <Link href="/" className="transition hover:text-white">
            HOME
          </Link>

          <Link href="/about" className="transition hover:text-white">
            ABOUT
          </Link>

          <Link href="/leadership" className="transition hover:text-white">
            OUR LEADERSHIP TEAM
          </Link>

          <Link href="/careers" className="transition hover:text-white">
            CAREER
          </Link>

          <Link href="/contact" className="text-white">
            CONTACT
          </Link>
        </div>

        <div className="mx-auto mt-7 max-w-4xl border-t border-white/10 pt-6">
          <p className="text-xs text-gray-500">
            © 2026 Bharti Creations Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
