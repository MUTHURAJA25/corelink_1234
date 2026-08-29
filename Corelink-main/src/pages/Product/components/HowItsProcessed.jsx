import React from "react";

const HowItsProcessed = () => {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F4FC] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#4A00BF]">
        <span
          className="h-1.5 w-1.5 rounded-full bg-[#4A00BF]"
          aria-hidden="true"
        />
        Connected Workflows
      </div>

      <h1 className="mt-4 text-[34px] font-bold leading-[1.06] text-gray-900 sm:text-[38px] md:text-[46px] lg:text-[48px]">
        How it is Processed
      </h1>

      <p className="mt-4 max-w-xl text-sm leading-[1.64] text-[#1D192F] opacity-75 sm:text-base sm:leading-[1.7] md:text-[14px] md:leading-[1.76]">
        Captures operational data, automates approval workflows, monitors
        activities in real time, and provides centralized dashboards for faster
        decision-making.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
        <div className="space-y-3 mt-[60px] ">
          <div className="flex items-center gap-2">
            <div className="h-[12px] w-[13px] shrink-0 rounded-full bg-[#4A00BF] "></div>
            <div className="h-[1px] w-full bg-[#E3E4ED]"></div>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-[1.64] text-[#1D192F] opacity-75 sm:text-base sm:leading-[1.7] md:text-[14px] md:leading-[1.76]">
            Centralize governance by connecting banks, societies and operational
            activities within a single control framework.
          </p>
        </div>

        <div className="space-y-3 mt-[60px] ">
          <div className="flex items-center gap-2">
            <div className="h-[12px] w-[13px] shrink-0 rounded-full bg-[#4A00BF]"></div>
            <div className="h-[1px] w-full bg-[#E3E4ED]"></div>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-[1.64] text-[#1D192F] opacity-75 sm:text-base sm:leading-[1.7] md:text-[14px] md:leading-[1.76]">
            Centralize governance by connecting banks, societies and operational
            activities within a single control framework.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItsProcessed;
