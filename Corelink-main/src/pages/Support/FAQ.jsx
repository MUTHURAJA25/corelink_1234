import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import CustomButton from "../../components/common/Button";
import { Images } from "../../assets/images";
import FAQAccordion from "./components/FAQAccordion";
import ConnectTheCoreCTA from "../Home/components/ConnectTheCoreCTA";

const faqItems = [
  {
    question: "How long does implementation take?",
    answer:
      "6–12 weeks from pilot to full production. We start with Bank Control Layer (2–4 weeks), then roll out Ecosystem Operations, Credit & Intelligence, and Member Experience in phases.",
  },
  {
    question: "Do we have to use all four layers?",
    answer:
      "No. Start with Bank Control for visibility and governance. Add other layers as your needs evolve. All layers work independently or together.",
  },
  {
    question: "How does CoreLink integrate with our core banking system?",
    answer:
      "API-first architecture. We handle integrations with NPCI, payment gateways, identity providers (Aadhaar, eKYC), and your existing systems.",
  },
  {
    question: "What about data security?",
    answer:
      "AES-256 encryption (data at rest), TLS 1.3 (data in transit). ISO 27001, PCI-DSS, SOC 2 Type II certified. DPDP Act compliant.",
  },
  {
    question: "Can we customize workflows?",
    answer:
      "Yes. We provide pre-built workflows for common processes. Customize approval rules, billing cycles, credit policies, member communication—all via intuitive dashboards.",
  },
  {
    question: "What's the pricing model?",
    answer:
      "Per-ecosystem based on number of societies, member population, and layers deployed. Custom quotes based on your setup.",
  },
  {
    question: "Who can use CoreLink?",
    answer:
      "CoreLink is designed for Urban Banks, District & State Banks, and the societies and members within their ecosystem.",
  },
];

const FAQ = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white text-[#211d38]">
      <section
        className="relative px-4 pt-36 pb-14 sm:px-6 sm:pt-40 sm:pb-[72px] md:px-8 md:pt-44 md:pb-20 lg:px-10 lg:pt-[141px] lg:pb-24 xl:px-12"
        style={{
          background:
            "linear-gradient(124.99deg, #EDF7F3 6.18%, #F6FBF9 60.52%, #E2F1F0 93.82%), radial-gradient(90% 158% at 23% 17%, rgba(150, 239, 0, 0.129412) 0%, rgba(0, 0, 0, 0) 25%)",
        }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:gap-14 xl:gap-20">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="heading-xxl text-black"
            >
              Frequently Asked{" "}
              <span className="heading-xxl title-gradient">Questions</span>
            </motion.h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[rgba(107,101,128,1)] sm:mt-4 sm:text-base sm:leading-7 lg:text-[17px]">
              Explore CoreLink implementation, security, integrations,
              workflows, and pricing questions before taking your next step.
            </p>

            <div className="mt-6 sm:mt-7">
              <CustomButton link="/contact" variant="primary">
                <span>Contact Us</span>

                <span className="flex w-[17px] shrink-0 items-center justify-center opacity-100 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:opacity-0">
                  <ChevronRight size={17} />
                </span>
              </CustomButton>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none">
            <motion.img
              src={Images.Aboutus.faqbannerimg}
              alt="Digital banking ecosystem illustration"
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
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-12">
        <div className="radialBg radialBgTop" />
        <div className="radialBg radialBgRight" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="space-y-6 rounded-[2rem] p-4 sm:p-7 transition-all duration-300 ease-out">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
      <ConnectTheCoreCTA />
    </div>
  );
};

export default FAQ;
