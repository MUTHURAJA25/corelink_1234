import React from "react";
import Header from "../../components/Header";
import LegalSection from "./components/LegalSection";
import { motion } from "framer-motion";
import ConnectTheCoreCTA from "../Home/components/ConnectTheCoreCTA";

import termsImg from "../../images/TermsAndCondition/terms and conditions 1.svg";

const sections = [
  {
    title: "Website Use",
    body: `CoreLink’s website is provided for lawful, informational, and business purposes. Users must not misuse the website, attempt unauthorized access, disrupt its functionality, or use its content for unlawful activities.`,
  },

  {
    title: "Intellectual Property",
    body: `All CoreLink website content, including text, graphics, logos, product names, designs, and other materials, is owned by or licensed to CoreLink. No content may be copied, reproduced, modified, or distributed without prior written permission.`,
  },

  {
    title: "Product Information",
    body: `Product descriptions, features, capabilities, integrations, and specifications are provided for general informational purposes and may change without prior notice. Final product scope, pricing, and commercial terms are subject to separate agreements.`,
  },

  {
    title: "Demo Requests",
    body: `Submitting a demo or enquiry request does not create a contractual relationship with CoreLink. Information provided through demo requests may be used to respond, arrange discussions, and provide relevant product information.`,
  },

  {
    title: "Privacy",
    body: `CoreLink respects your privacy and handles personal information in accordance with its Privacy Policy. Information collected through the website is used for legitimate business, service, security, and compliance purposes.`,
  },

  {
    title: "Third-Party Services",
    body: `The website may contain links to or integrations with third-party websites and services. CoreLink is not responsible for their content, availability, security, or privacy practices, and users should review their respective terms and policies.`,
  },

  {
    title: "Disclaimer",
    body: `Website content is provided on an “as available” basis for general informational purposes. CoreLink does not guarantee that all information is complete, current, error-free, or continuously available.`,
  },

  {
    title: "Limitation of Liability",
    body: `To the extent permitted by applicable law, CoreLink shall not be liable for indirect, incidental, consequential, or other losses arising from the use of or inability to use the website or its information.`,
  },

  {
    title: "Governing Law",
    body: `These Terms and Conditions are governed by the applicable laws of India. Any disputes arising in connection with these terms shall be subject to the jurisdiction of the applicable courts in India.`,
  },

  {
    title: "Changes to These Terms",
    body: `CoreLink may update these Terms and Conditions periodically to reflect changes in its services, practices, or legal requirements. Updated terms will be published on this page with the revised “25 August 2026” date.`,
  },
];

const TermsAndConditions = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white text-[#211d38]">
      {/* =========================================================
          HEADER
      ========================================================== */}
      <div className="absolute left-0 top-0 z-50 w-full">
        <Header />
      </div>

      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section
        className="
          relative
          overflow-hidden
          px-4
          pt-36
          pb-14
          sm:px-6
          sm:pt-40
          sm:pb-[72px]
          md:px-8
          md:pt-44
          md:pb-20
          lg:px-10
          lg:pt-[141px]
          lg:pb-24
          xl:px-12
        "
        style={{
          background:
            "linear-gradient(124.99deg, #EDF7F3 6.18%, #F6FBF9 60.52%, #E2F1F0 93.82%), radial-gradient(90% 158% at 23% 17%, rgba(150, 239, 0, 0.129412) 0%, rgba(0, 0, 0, 0) 25%)",
        }}
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#d9f7ed] blur-[90px] sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

          <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#e7e4ff] blur-[100px] sm:h-96 sm:w-96 lg:h-[450px] lg:w-[450px]" />

          <div className="absolute bottom-[-15%] left-[30%] h-56 w-56 rounded-full bg-[#edf9df] blur-[90px] sm:h-72 sm:w-72 lg:h-80 lg:w-80" />
        </div>

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-6xl
            grid-cols-1
            items-center
            gap-8
            sm:gap-10
            md:gap-12
            lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* Hero Content */}
          <div className="w-full max-w-xl lg:max-w-2xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                mb-5
                inline-flex
                items-center
                rounded-full
                border
                border-[#ddd6f4]
                bg-white/70
                px-4
                py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#5520d7]
                sm:text-[10px]
              "
            >
              Legal
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="
                heading-xxl
                text-black
              "
            >
              Terms{" "}
              <span className="heading-xxl title-gradient">
                & Conditions
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-[rgba(107,101,128,1)]
                sm:mt-5
                sm:text-base
                sm:leading-7
                lg:text-[17px]
              "
            >
             Welcome to CoreLink ("Company," "we," "our," "us"). This Privacy Policy describes how we handle your personal information when you visit our website or interact with us regarding our products and services. By using our site, you agree to the terms outlined in this policy.
            </motion.p>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              mx-auto
              w-full
              max-w-[320px]
              sm:max-w-[380px]
              md:max-w-[420px]
              lg:mx-0
              lg:max-w-none
            "
          >
            <img
              src={termsImg}
              alt="Terms and Conditions"
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          TERMS CONTENT
      ========================================================== */}
      <section
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          overflow-hidden
          px-4
          py-16
          sm:px-6
          sm:py-20
          md:px-8
          lg:px-8
          lg:pt-20
          lg:pb-0
          xl:px-10
        "
      >
        {/* Background Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -left-[200px]
            top-[100px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#d9f5e9]
            opacity-30
            blur-[100px]
            sm:h-[450px]
            sm:w-[450px]
            sm:blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-[200px]
            top-[35%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#e0dcff]
            opacity-25
            blur-[110px]
            sm:h-[500px]
            sm:w-[500px]
            sm:blur-[130px]
          "
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Terms Sections */}
          <div className="space-y-5 sm:space-y-6">
            {sections.map((section, index) => (
              <LegalSection
                key={section.title}
                index={String(index + 1).padStart(2, "0")}
                title={section.title}
                body={section.body}
                points={section.points || []}
                variant="privacy"
              />
            ))}
          </div>

          {/* =====================================================
              CONTACT CARD
          ====================================================== */}
          <div
            className="
              relative
              mt-8
              overflow-hidden
              rounded-2xl
              border
              border-[#e5dffa]
              bg-white/90
              p-5
              shadow-[0_12px_28px_rgba(57,24,124,0.08)]
              backdrop-blur-sm
              transition-all
              duration-300
              ease-out
              hover:-translate-y-1
              hover:shadow-[0_18px_40px_rgba(57,24,124,0.14)]
              sm:mt-10
              sm:rounded-3xl
              sm:p-7
              md:p-8
              lg:mt-12
            "
          >
            {/* Top Gradient Line */}
            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-[3px]
                rounded-full
                bg-gradient-to-r
                from-[#35B87A]
                via-[#159ED9]
                to-[#6846E8]
              "
            />

            <div
              className="
                grid
                items-start
                gap-8
                md:gap-10
                lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.7fr)]
                    lg:items-center
              "
            >
              {/* Contact Introduction */}
              <div className="min-w-0">
                {/* Badge */}
                <div
                  className="
                    mb-3
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-[#dcd5f7]
                    bg-[#f8f6ff]
                    px-4
                    py-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#5520d7]
                    sm:text-xs
                  "
                >
                  Get In Touch
                </div>

                {/* Heading */}
                <h2
                  className="
                    mb-4
                    text-2xl
                    font-bold
                    leading-tight
                    text-[#211d38]
                    sm:text-3xl
                  "
                >
                  Questions about{" "}
                  <span
                    className="
                      bg-gradient-to-r
                      from-[#35B87A]
                      via-[#159ED9]
                      to-[#6846E8]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    these Terms?
                  </span>
                </h2>

                <p
                  className="
                    max-w-xl
                    text-sm
                    leading-6
                    text-[#5a5268]
                    sm:text-base
                    sm:leading-7
                  "
                >
                  For any questions, concerns, or feedback about these Terms &
                  Conditions, please contact us using the details provided.
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {/* Company */}
                <div className="min-w-0">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#5520d7]
                      sm:text-xs
                    "
                  >
                    Company Name
                  </p>

                  <p className="mt-1 break-words text-sm text-[#211d38]">
                    CoreLink
                  </p>
                </div>

                {/* Email */}
                <div className="min-w-0">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#5520d7]
                      sm:text-xs
                    "
                  >
                    Email
                  </p>

                  <a
                    href="mailto:info@corelink.com"
                    className="
                      mt-1
                      inline-block
                      max-w-full
                      break-all
                      text-sm
                      text-[#211d38]
                      transition-colors
                      hover:text-[#5520d7]
                    "
                  >
                    info@corelink.com
                  </a>
                </div>

                {/* Website */}
                <div className="min-w-0">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#5520d7]
                      sm:text-xs
                    "
                  >
                    Website
                  </p>

                  <a
                    href="https://www.corelink.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-1
                      inline-block
                      max-w-full
                      break-all
                      text-sm
                      text-[#211d38]
                      transition-colors
                      hover:text-[#5520d7]
                    "
                  >
                    www.corelink.com
                  </a>
                </div>

                {/* Phone */}
                <div className="min-w-0">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#5520d7]
                      sm:text-xs
                    "
                  >
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-[#211d38]">
                    To be updated
                  </p>
                </div>

                {/* Office Address */}
                <div className="min-w-0">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#5520d7]
                      sm:text-xs
                    "
                  >
                    Office Address
                  </p>

                  <p className="mt-1 break-words text-sm text-[#211d38]">
                    To be updated
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-8 text-center sm:mt-10">
            <p className="text-xs text-[#7a728a] sm:text-sm">
              Last Updated: 25 August 2026
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <ConnectTheCoreCTA />
    </div>
  );
};

export default TermsAndConditions;