import React from "react";
import Header from "../../components/Header";
import contactGif from "../../images/contactimg.gif";
import ConnectTheCoreCTA from "../Home/components/ConnectTheCoreCTA";
import { Images } from "../../assets/images";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Data We Collect",
    body: `CoreLink may collect personal and technical information when you interact with our website, submit an enquiry, request a product demonstration, or communicate with us. Personal information may include your name, work email address, phone number, organization or bank/society name, designation, and other information you voluntarily provide. We may also automatically collect technical and usage information such as your IP address, browser type, device information, operating system, referring pages, website activity, and information collected through cookies or similar technologies.`,
    points: [
      "Respond to enquiries and product demonstration requests.",
      "Provide relevant services and information.",
      "Improve our website and user experience.",
      "Maintain website security.",
      "Analyze website usage.",
      "Meet applicable legal and regulatory requirements.",
    ],
  },
  {
    title: "How We Protect It",
    body: `CoreLink takes reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, loss, or destruction. These measures may include secure systems and infrastructure, access controls, authorization mechanisms, restricted access to personal information, security monitoring, and confidentiality obligations for employees and relevant service providers.`,
    points: [
      "Use secure systems and infrastructure.",
      "Implement access controls and authorization mechanisms.",
      "Restrict access to personal information.",
      "Monitor systems for potential security risks.",
      "Maintain confidentiality obligations for employees and relevant service providers.",
      "Limit access to individuals who require information for legitimate business or operational purposes.",
      "Continuously review security practices and address potential risks.",
    ],
  },
  {
    title: "Your Rights",
    body: `Subject to applicable laws and regulations, you may have rights regarding the personal information we hold about you. These may include the right to access your information, request correction or updating of inaccurate or incomplete information, request deletion where legally permitted, object to or restrict certain processing activities, and withdraw consent where processing is based on consent.`,
    points: [
      "Access your personal information.",
      "Request correction or updating of inaccurate or incomplete information.",
      "Request deletion where legally permitted.",
      "Object to or restrict certain processing activities.",
      "Withdraw consent where processing is based on consent.",
      "Raise concerns about how your information is collected, used, or protected.",
      "Submit a privacy-related request using the contact details provided by CoreLink.",
      "Provide appropriate information to verify your identity when required.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white text-[#211d38]">
      {/* Header */}
      <div className="absolute left-0 top-0 z-50 w-full">
        <Header />
      </div>

      {/* Hero Section */}
      <section
        className="
          relative overflow-hidden
          bg-[#eef9f7]
          pt-32 pb-14
          sm:pt-32 sm:pb-18
          md:pt-36 md:pb-20
          lg:pt-40 lg:pb-28
        "
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute -left-32 top-20
              h-[260px] w-[260px]
              rounded-full bg-[#d9f7ed] blur-[80px]
              sm:h-[350px] sm:w-[350px]
              lg:h-[400px] lg:w-[400px]
            "
          />

          <div
            className="
              absolute -right-32 top-20
              h-[280px] w-[280px]
              rounded-full bg-[#e7e4ff] blur-[90px]
              sm:h-[380px] sm:w-[380px]
              lg:h-[450px] lg:w-[450px]
            "
          />

          <div
            className="
              absolute bottom-[-15%] left-[30%]
              h-[220px] w-[220px]
              rounded-full bg-[#edf9df] blur-[80px]
              sm:h-[280px] sm:w-[280px]
              lg:h-[300px] lg:w-[300px]
            "
          />
        </div>

        {/* Hero Container */}
        <div
          className="
            relative z-10
            mx-auto flex w-full max-w-[78rem]
            flex-col items-center gap-10
            px-5
            sm:px-6
            md:gap-12
            lg:flex-row lg:items-center lg:gap-14 lg:px-8
          "
        >
          {/* Hero Content */}
          <div className="relative z-10 w-full lg:w-[58%]">
            {/* Label */}
            <div
              className="
                mb-5 inline-flex items-center
                rounded-full border border-[#ddd6f4]
                bg-white/70 px-4 py-1.5
                text-[9px] font-bold uppercase
                tracking-[0.18em] text-[#5520d7]
                sm:text-[10px]
              "
            >
              Legal
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-2xl
                text-4xl font-extrabold
                leading-[1.05] tracking-tight
                text-[#090909]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Privacy{" "}
              <span className="title-gradient bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5 max-w-2xl
                text-[14px] leading-6 text-[#5a5268]
                sm:mt-6 sm:text-[15px] sm:leading-7
              "
            >
              Welcome to CoreLink ("Company," "we," "our," "us"). This Privacy
              Policy describes how we handle your personal information when you
              visit our website or interact with us regarding our products and
              services. By using our site, you agree to the terms outlined in
              this policy.
            </p>

            <p
              className="
                mt-3 max-w-2xl
                text-[14px] leading-6 text-[#5a5268]
                sm:text-[15px] sm:leading-7
              "
            >
              CoreLink is committed to protecting personal information and
              maintaining responsible data practices. This Privacy Policy
              explains what information we collect, why we collect it, how we
              protect it, and individuals' rights regarding their information.
            </p>
          </div>

          {/* Hero Image */}
          <div
            className="
              relative flex w-full
              items-center justify-center
              lg:w-[42%] lg:justify-end
            "
          >
            <motion.img
  src={Images.Legal.PrivacyPolicy}
  alt="Privacy Policy"
  initial={{
    opacity: 0,
    x: 70,
    y: 20,
    scale: 0.9,
    rotate: -8,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
  }}
  transition={{
    duration: 1.3,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true, amount: 0.25 }}
  className="
    h-auto w-[220px] object-contain
    sm:w-[280px]
    md:w-[330px]
    lg:w-[400px]
    xl:w-[430px]
  "
/>
            
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section
        className="
          relative overflow-hidden
          bg-white
          py-14
          sm:py-16
          md:py-20
          lg:pb-16 lg:pt-28
        "
      >
        {/* Background Glow */}
        <div
          className="
            pointer-events-none absolute
            -left-32 top-[15%]
            h-[300px] w-[300px]
            rounded-full bg-[#f6eaff] blur-[90px]
            sm:h-[400px] sm:w-[400px]
            lg:h-[450px] lg:w-[450px] lg:blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none absolute
            -right-32 top-[40%]
            h-[300px] w-[300px]
            rounded-full bg-[#e8faf7] blur-[90px]
            sm:h-[400px] sm:w-[400px]
            lg:h-[450px] lg:w-[450px] lg:blur-[120px]
          "
        />

        {/* Content Container */}
        <div
          className="
            relative z-10
            mx-auto w-full max-w-[78rem]
            px-5
            sm:px-6
            lg:px-8
          "
        >
          <div className="space-y-5 sm:space-y-6">
            {/* Legal Cards */}
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="
                  group w-full
                  rounded-2xl
                  border border-[#e6ddf5]
                  bg-white
                  p-5
                  shadow-[0_8px_25px_rgba(91,52,170,0.08)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#d8c9f2]
                  hover:shadow-[0_14px_35px_rgba(91,52,170,0.13)]
                  sm:p-6
                  md:p-7
                  lg:p-8
                "
              >
                {/* Card Header */}
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Number */}
                  <div
                    className="
                      flex h-8 w-8 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-[#e4d8f7]
                      bg-[#f8f3ff]
                      text-[10px] font-bold
                      text-[#7042d5]
                      sm:h-9 sm:w-9 sm:text-[11px]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h2
                    className="
                      min-w-0 pt-0.5
                      text-lg font-bold leading-6
                      text-[#211d38]
                      sm:text-xl sm:leading-7
                      md:text-2xl
                    "
                  >
                    {section.title}
                  </h2>
                </div>

                {/* Description */}
                <p
                  className="
                    mt-4
                    text-[13px] leading-6
                    text-[#625b70]
                    sm:mt-5 sm:text-sm sm:leading-7
                  "
                >
                  {section.body}
                </p>

                {/* Points */}
                <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="
                        flex items-start gap-2.5
                        text-[13px] leading-5
                        text-[#625b70]
                        sm:gap-3 sm:text-sm sm:leading-6
                      "
                    >
                      <span
                        className="
                          mt-[7px] h-1.5 w-1.5
                          shrink-0 rounded-full
                          bg-[#672ed1]
                        "
                      />

                      <span className="min-w-0 break-words">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Card */}
            <div
              className="
                w-full overflow-hidden
                rounded-2xl
                border border-[#e6ddf5]
                bg-white
                p-5
                shadow-[0_8px_25px_rgba(91,52,170,0.08)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_14px_35px_rgba(91,52,170,0.13)]
                sm:p-6
                md:p-7
                lg:p-8
              "
            >
              <div
                className="
                  grid items-center gap-8
                  md:gap-10
                  lg:grid-cols-[minmax(0,1fr)_280px]
                  xl:grid-cols-[minmax(0,1fr)_320px]
                "
              >
                {/* Contact Details */}
                <div className="min-w-0">
                  {/* Contact Header */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className="
                        flex h-8 w-8 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-[#e4d8f7]
                        bg-[#f8f3ff]
                        text-[10px] font-bold
                        text-[#7042d5]
                        sm:h-9 sm:w-9 sm:text-[11px]
                      "
                    >
                      04
                    </div>

                    <h2
                      className="
                        pt-0.5
                        text-lg font-bold
                        text-[#211d38]
                        sm:text-xl
                        md:text-2xl
                      "
                    >
                      Contact Us
                    </h2>
                  </div>

                  <p
                    className="
                      mt-4
                      text-[13px] leading-6
                      text-[#625b70]
                      sm:mt-5 sm:text-sm sm:leading-7
                    "
                  >
                    For any queries regarding this Privacy Policy, please
                    contact us:
                  </p>

                  {/* Contact Information */}
                  <div
                    className="
                      mt-6 grid gap-5
                      sm:grid-cols-2
                      lg:grid-cols-1
                      xl:grid-cols-2
                    "
                  >
                    {/* Company */}
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#5520d7] sm:text-[10px]">
                        Company Name
                      </p>

                      <p className="mt-1 break-words text-sm text-[#211d38]">
                        CoreLink
                      </p>
                    </div>

                    {/* Email */}
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#5520d7] sm:text-[10px]">
                        Email
                      </p>

                      <a
                        href="mailto:info@corelink.com"
                        className="
                          mt-1 inline-block max-w-full
                          break-all text-sm
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
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#5520d7] sm:text-[10px]">
                        Website
                      </p>

                      <a
                        href="https://corelink.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          mt-1 inline-block max-w-full
                          break-all text-sm
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
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#5520d7] sm:text-[10px]">
                        Phone
                      </p>

                      <p className="mt-1 text-sm text-[#211d38]">
                        Will be updated
                      </p>
                    </div>

                    {/* Office Address */}
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#5520d7] sm:text-[10px]">
                        Office Address
                      </p>

                      <p className="mt-1 break-words text-sm text-[#211d38]">
                        Will be updated
                      </p>
                    </div>

                    {/* Last Updated */}
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#5520d7] sm:text-[10px]">
                        Last Updated
                      </p>

                      <p className="mt-1 text-sm text-[#211d38]">
                        24/08/2026
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Illustration */}
                <div
                  className="
                    flex justify-center
                    md:justify-end
                    lg:justify-center
                    xl:justify-end
                  "
                >
                  <img
                    src={contactGif}
                    alt="Contact support illustration"
                    className="
                      h-auto w-[190px] object-contain
                      sm:w-[220px]
                      md:w-[240px]
                      lg:w-[250px]
                      xl:w-[280px]
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConnectTheCoreCTA />
    </div>
  );
};

export default PrivacyPolicy;