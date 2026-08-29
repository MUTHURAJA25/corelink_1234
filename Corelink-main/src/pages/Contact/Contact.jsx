import React from 'react';
import ContactGradientBg from '../../images/contact/contactform-bg.svg';
import ContactForm from './components/ContactForm';
import SEO from '../../components/Seo';
import SeoData from '../../components/SeoData';
import SubBanner from './components/SubBanner';
import { motion } from 'framer-motion';
import FormBg from '../../images/contact/form-bg.svg';
import CardBg from '../../images/contact/contact-card-bg.png';
import MapBg from '../../images/contact/mapbg.png';

const Contact = () => {

  const mapCardFigmaStyle = {
    // Fill: Linear gradient (40% overall opacity) from Figma
    background:
      'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(190, 227, 200, 0.20) 50%, rgba(255, 255, 255, 0.40) 100%)',

    // 2px Inside Stroke: Linear gradient & #BEE3C8 at 20%
    border: '2px solid rgba(190, 227, 200, 0.20)',

    // Shadows & Blurs from Figma Specs
    boxShadow: `
    0px 2.54px 5.02px -26px rgba(190, 227, 200, 0.15),
    0px 20px 12px 0px rgba(190, 227, 200, 0.08),
    0px 35.86px 40.98px 0px rgba(236, 245, 206, 0.05),
    0px 4px 4px 0px rgba(176, 216, 194, 0.25),
    inset 0px 8.9px 8.9px 0px rgba(190, 227, 200, 0.13)
  `,

    // Background Blur
    backdropFilter: 'blur(9px)',
    WebkitBackdropFilter: 'blur(9px)',
  };

  return (
    <div className="relative w-full overflow-hidden font-sans text-slate-900 bg-white">
      <SEO {...SeoData.contact} />

      {/* SubBanner Top Section */}
      <div className="relative bg-gradient-to-b from-[#DAE6FD] via-[#EFE9FB] to-white">
        <SubBanner />
      </div>

      {/* ======================================================== */}
      {/* SECTION WRAPPER: RESTRICTED GRADIENT BG (CAPPED HEIGHT)  */}
      {/* ======================================================== */}
<section className="relative w-full overflow-hidden py-10 sm:py-14 lg:py-16">

        {/* Background Graphic Layer: Covers Top Form Grid & ~20% of Map Area */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[75%] sm:h-[78%] lg:h-[80%]"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
          }}
        >
          {/* Background Gradient SVG Image */}
          <div
            className="absolute inset-0 bg-cover bg-right sm:bg-center"
            style={{
              backgroundImage: `url(${ContactGradientBg})`,
              backgroundPosition: 'right top',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
        </div>

        {/* Main Content Container */}
        <main className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-8 mb-4 sm:mb-6">

          {/* ========================================== */}
          {/* GRID: FORM + CONTACT CARDS                */}
          {/* ========================================== */}
          <div className="mb-12 grid grid-cols-1 items-center gap-6 lg:mb-16 lg:grid-cols-12 lg:gap-8 xl:gap-12">

            {/* Left Column: Form Card with Full-Bleed FormBg */}
            <div className="relative isolate overflow-hidden rounded-[36px] border border-white/10 bg-[#031518] p-6 shadow-2xl sm:p-8 lg:col-span-7 lg:p-10 xl:p-12">

              {/* FormBg Layer (Fully responsive on all viewports) */}
              <img
                src={FormBg}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center select-none"
              />

              {/* Form Header */}
              <div className="relative z-10 mb-6">
                <motion.h3
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
                >
                  Send a{' '}
                  <span className="bg-gradient-to-r from-[#00A3FF] via-[#00D2C4] to-[#4ADE80] bg-clip-text text-transparent">
                    Message
                  </span>
                </motion.h3>
              </div>

              {/* Form Component */}
              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>

            {/* Right Column: Contact Information Cards */}
            <div className="flex h-full flex-col justify-center space-y-3.5 lg:col-span-5 lg:pl-2">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-[#0f1d40] transition-colors leading-tight sm:text-2xl lg:text-[26px]">
                Contact Information
              </h3>

              {/* 1. Email Card */}
              <div className="relative isolate flex w-full items-center gap-4 overflow-hidden rounded-[18px] px-4 py-4 transition-all duration-200 hover:scale-[1.01]">
                <img
                  src={CardBg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 h-[226px] w-full object-cover select-none"
                />
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] text-slate-800 shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, #dbe4ff 0%, #e0e7ff 35%, #d1fae5 100%)',
                  }}
                >
                  <svg className="h-5 w-5 stroke-[#1e293b]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="mb-0.5 text-[10px] font-bold tracking-widest text-slate-500 uppercase leading-tight">
                    EMAIL
                  </span>
                  <a
                    href="mailto:info@corelink.com"
                    className="truncate text-[13px] font-semibold text-[#0f1d40] transition-colors hover:text-[#5c20e5] leading-tight sm:text-sm"
                  >
                    info@corelink.com
                  </a>
                </div>
              </div>

              {/* 2. Website Card */}
              <div className="relative isolate flex w-full items-center gap-4 overflow-hidden rounded-[18px] px-4 py-4 transition-all duration-200 hover:scale-[1.01]">
                <img
                  src={CardBg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 h-[226px] w-full object-cover select-none"
                />
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] text-slate-800 shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, #dbe4ff 0%, #e0e7ff 35%, #d1fae5 100%)',
                  }}
                >
                  <svg className="h-5 w-5 stroke-[#1e293b]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="mb-0.5 text-[10px] font-bold tracking-widest text-slate-500 uppercase leading-tight">
                    WEBSITE
                  </span>
                  <a
                    href="https://www.corelink.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate text-[13px] font-semibold text-[#0f1d40] transition-colors hover:text-[#5c20e5] leading-tight sm:text-sm"
                  >
                    www.corelink.com
                  </a>
                </div>
              </div>

              {/* 3. Phone Card */}
              <div className="relative isolate flex w-full items-center gap-4 overflow-hidden rounded-[18px] px-4 py-4 transition-all duration-200 hover:scale-[1.01]">
                <img
                  src={CardBg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 h-[226px] w-full object-cover select-none"
                />
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] text-slate-800 shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, #dbe4ff 0%, #e0e7ff 35%, #d1fae5 100%)',
                  }}
                >
                  <svg className="h-5 w-5 stroke-[#1e293b]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="mb-0.5 text-[10px] font-bold tracking-widest text-slate-500 uppercase leading-tight">
                    PHONE
                  </span>
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="truncate text-[13px] font-semibold text-[#0f1d40] transition-colors hover:text-[#5c20e5] leading-tight sm:text-sm"
                  >
                    +91 XXX XXX XXXX
                  </a>
                </div>
              </div>

              {/* 4. Office Card */}
              <div className="relative isolate flex w-full items-center gap-4 overflow-hidden rounded-[18px] px-4 py-4 transition-all duration-200 hover:scale-[1.01]">
                <img
                  src={CardBg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 h-[226px] w-full object-cover select-none"
                />
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] text-slate-800 shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, #dbe4ff 0%, #e0e7ff 35%, #d1fae5 100%)',
                  }}
                >
                  <svg className="h-5 w-5 stroke-[#1e293b]" fill="none" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="mb-0.5 text-[10px] font-bold tracking-widest text-slate-500 uppercase leading-tight">
                    OFFICE
                  </span>
                  <p className="truncate text-[13px] font-semibold text-[#0f1d40] leading-tight sm:text-sm">
                    Corporate Office, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* MAP & OFFICE LOCATION CARD                 */}
          {/* ========================================== */}
          <div
            style={mapCardFigmaStyle}
            className="w-full rounded-[32px] p-3 sm:p-4 lg:p-5 transition-all duration-300"
          >
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
              {/* Map Side (Takes 8 Cols) */}
              <div className="relative h-[320px] w-full overflow-hidden rounded-[24px] border border-white/70 bg-[#eef1f4] shadow-sm sm:h-[400px] md:col-span-8 md:h-[460px]">
                <iframe
                  title="Office Location Map"
                  src="https://maps.google.com/maps?q=Agra,India&t=&z=10&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0 brightness-[1.02] contrast-[0.9] grayscale opacity-85 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Details Side (Takes 4 Cols) */}
              <div className="flex h-full min-h-[260px] flex-col justify-between py-3 px-2 sm:px-4 md:col-span-4 md:min-h-[440px]">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                    OFFICE
                  </span>
                  <h4 className="text-2xl font-bold tracking-tight text-[#0f1d40] sm:text-3xl">
                    Corporate Office
                  </h4>
                  <div className="space-y-1 pt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    <p>Corporate Office Address</p>
                    <p className="text-slate-500">Mon–Fri, 9:30–18:30</p>
                  </div>
                </div>

                {/* Purple-to-Indigo Pill Button */}
                <div className="pt-8">
                  <a
                    href="https://maps.google.com/?q=Agra,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#6366F1] via-[#5844D1] to-[#3B2874] px-7 py-3 text-xs font-medium tracking-wide text-white shadow-md shadow-indigo-950/20 transition-all duration-200 hover:opacity-95 hover:shadow-indigo-500/20 active:scale-[0.98] sm:text-sm"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Contact;