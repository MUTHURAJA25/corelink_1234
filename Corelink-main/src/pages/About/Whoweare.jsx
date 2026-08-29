import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import CustomButton from "../../components/common/Button";
import { Images } from "../../assets/images";

const ArrowIcon = () => (
  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const WhoWeAre = () => {
  return (
    <section
      className="relative px-4 pt-28 pb-8 sm:px-6 sm:pt-32 sm:pb-10 md:px-8 md:pt-28 md:pb-12 lg:px-10 lg:pt-28 lg:pb-10 xl:px-12 xl:pb-8"
      style={{
        background:
          "linear-gradient(124.99deg, #EDF7F3 6.18%, #F6FBF9 60.52%, #E2F1F0 93.82%), radial-gradient(90% 158% at 23% 17%, rgba(150, 239, 0, 0.129412) 0%, rgba(0, 0, 0, 0) 25%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:gap-14 xl:gap-20">
        {/* Copy */}
        <div className="max-w-xl lg:max-w-2xl">
          {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5B45E0] shadow-sm ring-1 ring-black/[0.04] sm:mb-5 sm:px-4 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6C4CE0]" />
            Platform Pioneers
          </div> */}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-xxl text-black"
          >
            Who <span className="heading-xxl title-gradient">We Are</span>
          </motion.h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[rgba(107,101,128,1)] sm:mt-4 sm:text-base sm:leading-7 lg:text-[17px]">
            CoreLink is a bank-led digital infrastructure platform that connects
            governance, financial operations, credit, payments, and services
            through one intelligent ecosystem—giving banks greater visibility,
            control, and trust.
          </p>
          <div className="mt-6 sm:mt-7">
            <CustomButton link="contact" variant="primary">
              <span>Connect with CoreLink</span>

              <span
                className="
      flex
      w-[17px]
      shrink-0
      items-center
      justify-center
      opacity-100
      transition-all
      duration-300
      ease-in-out
      group-hover:translate-x-2
      group-hover:opacity-0
    "
              >
                <ChevronRight size={17} />
              </span>
            </CustomButton>
          </div>
        </div>

        {/* Illustration */}
        <div className="mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none">
          <motion.img
  src={Images.Aboutus.aboutusbanner}
  alt="Digital banking ecosystem illustration with shield, ledger, member ID and analytics"
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
  );
};

export default WhoWeAre;
