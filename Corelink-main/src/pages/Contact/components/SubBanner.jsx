import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import CustomButton from "../../../components/common/Button";
import { Images } from "../../../assets/images";

const SubBanner = () => {
  return (
    <section
      className="relative px-4 pt-36 pb-5 sm:px-6 sm:pt-40 sm:pb-[55px] md:px-8 md:pt-44 md:pb-10 lg:px-10 lg:pt-[141px] lg:pb-6 xl:px-12"
      style={{
        background:
          "linear-gradient(124.99deg, #EDF7F3 6.18%, #F6FBF9 60.52%, #E2F1F0 93.82%), radial-gradient(90% 158% at 23% 17%, rgba(150, 239, 0, 0.129412) 0%, rgba(0, 0, 0, 0) 25%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:gap-14 xl:gap-20">
        {/* Copy */}
        <div className="max-w-xl lg:max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-xxl text-black"
          >
            Get in <span className="heading-xxl title-gradient">Touch</span>
          </motion.h1>
          <h4 className="font-['Inter'] text-[24px] font-semibold leading-[29.25px] tracking-[0px] text-[#6B6580]">
            Looking to modernize your banking operations?
          </h4>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[rgba(107,101,128,1)] sm:mt-4 sm:text-base sm:leading-7 lg:text-[17px]">
            Our specialists will help you explore how CoreLink fits your institution.
          </p>

          <div className="mt-6 sm:mt-7">
            <CustomButton link="contact" variant="primary">
              <span>Connect with CoreLink</span>

              <span className=" flex w-[17px] shrink-0 items-center justify-center opacity-100 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:opacity-0">
                <ChevronRight size={17} />
              </span>

            </CustomButton>
          </div>
        </div>

        {/* Illustration */}
        <div className="mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none">
          {/* <img
            src={Images.Contact.contactbanner}
            alt="Digital banking ecosystem illustration with shield, ledger, member ID and analytics"
            className="h-auto w-full object-contain"
          /> */}

          <motion.img
            src={Images.Contact.contactbanner}
            alt="Digital banking ecosystem illustration with shield, ledger, member ID and analytics"
            initial={{
              opacity: 0,
              x: 70,
              scale: 0.9,
              rotate: -8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SubBanner;
