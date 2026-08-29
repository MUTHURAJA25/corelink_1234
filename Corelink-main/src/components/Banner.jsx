import React from "react";
import bgGradient from "../images/whyCorelinks/bg-gradient-two.svg";

const Banner = ({ striptitle, heading, paragraph }) => {
  return (
    <section
      className="bg-gradient-to-br from-[#eef1fb] via-[#e9edfb] to-[#dbe4fb] py-[110px] sm:py-[90px] md:py-[120px] lg:py-[200px]"
      style={{
        backgroundImage: `url(${bgGradient})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F4FC] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#4A00BF]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#4A00BF]"
              aria-hidden="true"
            />
            {striptitle}
          </div>

          <h1 className="mt-4 text-[34px] font-bold leading-[1.06] text-gray-900 sm:text-[38px] md:text-[46px] lg:text-[48px]">
            {heading}
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-[1.64] text-[#1D192F] opacity-75 sm:text-base sm:leading-[1.7] md:text-[14px] md:leading-[1.76]">
            {paragraph}
          </p>

          {/* <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-slate-800"
            >
              Request a Demo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
