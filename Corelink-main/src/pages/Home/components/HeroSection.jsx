import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import CustomButton from "../../../components/common/Button";
import { Images } from "../../../assets/images";
import CircularCarousel from "./Rotaryanimtion";

const HeroSection = () => {
  const videoRef = useRef(null);

  return (
    <section
      className="section relative overflow-x-hidden py-10 sm:py-14 md:pt-10"
      style={{
        backgroundImage: `url(${Images.landingpagehero.Herobackground})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-20 mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 md:px-6 md:py-20 lg:px-8 lg:py-20">
        {/* 
          Mobile: Single column
          Tablet: Text 75% + Carousel 25%
          Desktop: Text 8 cols + Carousel 4 cols
        */}
        <div className="md:grid md:grid-cols-12 md:items-center md:gap-8 lg:gap-12">

          {/* =========================
              TEXT CONTENT - 75% TABLET
          ========================= */}

          <div className="md:col-span-9 md:pr-6 lg:col-span-8 lg:pr-10">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="hero-title"
            >
              One Platform for Banks
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="heading-xxl title-gradient text-[32px] leading-[1.1] sm:text-[38px] md:text-[48px] lg:text-[58px] xl:text-[64px]"
            >
              Societies & Members
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="body-md my-6 max-w-[650px] text-[15px] leading-[1.6] text-[#6B6580] sm:my-8 sm:text-[16px] md:my-10 md:text-[17px]"
            >
              A unified, bank-led operating platform that brings governance,
              operations, credit intelligence, and member services into a single
              connected ecosystem.
            </motion.p>

            <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-8">
              <CustomButton link="contact" variant="primary">
                <span>Connect with CoreLink</span>

                <span className="button-animation">
                  <ChevronRight size={17} />
                </span>
              </CustomButton>
            </div>
          </div>

          {/* =========================
              CIRCULAR CAROUSEL - 25% TABLET
          ========================= */}

          <div className="md:col-span-3 lg:col-span-4">
            <div
              className="
                relative
                top-0
                right-0
                h-[560px]
                w-[540px]
               min-[1024px]:top-[80px]
                overflow-hidden
                min-[768px]:overflow-visible
                lg:overflow-hidden
                lg:absolute
              "
            >
              <div
                className="
                  relative
                  top-[30px]
                  left-[-210px]
                  md:left-[-310px]
                  lg:absolute
                  lg:left-0
                "
              >
                <CircularCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;