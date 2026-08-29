import React from "react";
import bankIllustration from "../../images/whycorelink.png";

const items = [
  {
    number: "01",
    title: "Bank-Led",
    description:
      "Keep the institution at the centre of governance, control, and financial relationships.",
    indent: "none",
    onLine: true,
  },
  {
    number: "02",
    title: "Unified",
    description:
      "Bring fragmented financial operations, services, and data together through one connected platform.",
    indent: "sm",
    onLine: false,
  },
  {
    number: "03",
    title: "Layered",
    description:
      "Combine governance, operations, credit, experiences, and financial rails into a seamlessly connected architecture.",
    indent: "lg",
    onLine: false,
  },
  {
    number: "04",
    title: "Intelligent",
    description:
      "Turn connected data and financial activity into actionable insights and smarter decisions.",
    indent: "none",
    onLine: true,
  },
  {
    number: "05",
    title: "Integrated",
    description:
      "Connect with existing banking and financial infrastructure to modernise without unnecessary disruption.",
    indent: "sm",
    onLine: false,
  },
];

const indentClass = {
  none: "md:ml-0",
  sm: "md:ml-6",
  lg: "md:ml-12",
};

const WhatMakesUsDifferent = () => {
  return (
    <section className="relative overflow-hidden font-sans pt-12 sm:pt-16 lg:pt-20 pb-0 mb-0">
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pb-0">
        {/* Top Tag Badge */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/90 border border-slate-200/80 px-3.5 py-1 text-[11px] font-semibold leading-[16.5px] tracking-[2.2px] uppercase shadow-sm font-['Inter',sans-serif]">
          <span
            className="bg-clip-text text-transparent inline-block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #5B48EC 0%, #7656EB 30%, #8865EB 60%, #4634BE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BUILT FOR CONNECTED BANKING
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-[#081528] sm:text-4xl lg:text-[40px] leading-[50px] font-['Sora',sans-serif]">
          WHY{" "}
          <span
            className="bg-clip-text text-transparent inline-block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #00D68F 0%, #52BC67 32%, #1E7ACF 44%, #11BCCB 59%, #7DBBD7 75%, #1CB522 86%, #919E77 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CORELINK
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm">
          Our platform is purpose-built for modern banking — unifying payments, compliance, and
          data infrastructure so financial institutions can move faster without compromise.
        </p>

        {/* Content: List + Illustration */}
        <div className="mt-10 grid grid-cols-1 items-center gap-10 sm:mt-12 md:grid-cols-12 md:gap-8 pb-0 mb-0">
          {/* Vertical Track Line Container */}
          <div className="relative pl-6 sm:pl-7 md:pl-8 md:col-span-5 pb-0">
            <div
              className="absolute left-0 top-3 bottom-3 w-[1.5px] rounded-none pointer-events-none"
              style={{ backgroundColor: "rgba(44, 177, 46, 0.15)" }}
            />

            <div className="flex flex-col gap-8 sm:gap-10">
              {items.map((item) => (
                <div
                  key={item.number}
                  className={`group relative cursor-pointer ${indentClass[item.indent]}`}
                >
                  {/* Watermark Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-1 -top-6 select-none text-6xl font-black leading-none sm:-left-2 sm:-top-8 sm:text-7xl lg:-top-9 lg:text-8xl"
                    style={{ color: "rgba(44, 177, 46, 0.06)" }}
                  >
                    {item.number}
                  </span>

                  {/* Bullet Node */}
                  <span
                    className={`absolute top-2 h-2.5 w-2.5 rounded-full ring-4 ring-[#FAFCF8] transition-transform duration-300 group-hover:scale-125 ${item.onLine
                        ? "-left-[30px] sm:-left-[34px] md:-left-[38px]"
                        : "-left-[18px] sm:-left-[22px]"
                      }`}
                    style={{ backgroundColor: "#9CC820" }}
                  />

                  {/* Content */}
                  <div className="relative">
                    <div className="inline-block">
                      <h3 className="text-base font-bold text-[#0D1E32] sm:text-lg lg:text-xl">
                        {item.title}
                      </h3>
                      <span
                        className="mt-1.5 block h-[2px] w-12 rounded-full transition-all duration-300 ease-out group-hover:w-32"
                        style={{ backgroundColor: "rgba(44, 177, 46, 0.45)" }}
                      />
                    </div>
                    <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* 3D Bank Architecture Illustration */}
          <div className="order-first flex justify-center md:sticky md:top-12 md:order-last md:col-span-7 md:justify-end self-end">
            <img
              src={bankIllustration}
              alt="Why Corelink 3D Architectural Bank Infrastructure"
              className="w-72 sm:w-96 md:w-full md:max-w-[560px] lg:max-w-[620px] h-auto object-contain drop-shadow-[0_30px_45px_rgba(23,150,139,0.14)] transition-transform duration-300 hover:scale-105 block align-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;