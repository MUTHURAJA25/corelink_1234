import React, { useState, useEffect } from "react";
import { productOverviewData } from "./Data/productOverviewData";
import bgShape from "../../../images/productviewbg.png";
const AnimatedStatItem = ({ value, label, delayIndex = 0 }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delay = delayIndex * 150;

    const entranceTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
    const prefix = value.match(/^[^\d]+/)?.[0] || "";
    const suffix = value.replace(/^[^\d]+/, "").replace(/^\d+/, "") || "";

    let start = 0;
    const duration = 1400;
    const steps = 35;
    const increment = numericPart / steps;
    const stepTime = duration / steps;

    const countTimer = setTimeout(() => {
      const interval = setInterval(() => {
        start += increment;
        if (start >= numericPart) {
          setDisplayValue(`${prefix}${numericPart}${suffix}`);
          clearInterval(interval);
        } else {
          setDisplayValue(`${prefix}${Math.floor(start)}${suffix}`);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      clearTimeout(entranceTimer);
      clearTimeout(countTimer);
    };
  }, [value, delayIndex]);

  return (
    <div
      className={`flex flex-col transform transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >
      <p className="text-2xl sm:text-3xl font-bold text-[#653DE9] tracking-tight">
        {displayValue}
      </p>

      <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1">
        {label}
      </p>
    </div>
  );
};

export default function ProductView({ currentLayer = "bank-control-layer" }) {
  const [activeStep, setActiveStep] = useState(1);

  const product =
    productOverviewData[currentLayer] ||
    productOverviewData["bank-control-layer"];

  return (
    <section className="relative w-full bg-white pt-[110px] font-sans text-slate-900 overflow-hidden" id="bank-control-layer">
<div className="pointer-events-none absolute top-0 left-0 w-[450px] sm:w-[600px] lg:w-[700px] h-full overflow-hidden z-0 select-none">
  <img
    src={bgShape}
    alt=""
    aria-hidden="true"
    className="w-full h-auto object-cover object-left-top"
  />
</div>

      <div className="relative max-w-6xl mx-auto  sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        {/* Left Column Details */}
        <div className="lg:col-span-5 flex flex-col items-start">
          {product.tagText && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f3e8ff] border border-purple-200/60 text-[#653DE9] text-[10px] font-bold tracking-widest uppercase mb-4">
              {product.tagText}
            </div>
          )}

          {product.title && (
            <h2 className="text-[32px] sm:text-[36px] lg:text-[35px] font-extrabold tracking-[-1.2px] leading-[50px] mb-4">
              <span className="text-black">#1 </span>
              <span
                className="bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #00D68F, #52BC67, #1E7ACF, #11BCCB, #7DBBD7, #1CB522, #919E77)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {product.title.replace(/^#\d+\s*/, "")}
              </span>
            </h2>
          )}

          {product.description && (
            <p className="text-sm text-slate-500 font-normal leading-relaxed mb-10 max-w-md">
              {product.description}
            </p>
          )}
        </div>

        {/* Right Column Steps Timeline */}
        <div className="lg:col-span-7 relative">
          <div className="flex flex-col gap-12 relative">
            <div className="absolute left-3 -translate-x-1/2 top-3 bottom-[-30px] w-[1px] bg-slate-200 z-0 pointer-events-none" />

            {product.steps.map((step) => {
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(step.id)}
                  className="group flex items-start gap-6 cursor-pointer relative z-10"
                >
                  <div className="relative w-6 shrink-0 flex flex-col items-center">
                    <div
                      className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium transition-all duration-300 bg-white border ${isActive
                          ? "border-[#653DE9] text-[#653DE9] shadow-sm"
                          : "border-slate-200 text-slate-400 group-hover:border-[#653DE9] group-hover:text-[#653DE9]"
                        }`}
                    >
                      {step.id}
                    </div>

                    <div
                      className={`absolute top-6 left-1/2 -translate-x-1/2 w-[3px] rounded-full transition-all duration-300 z-10 ${isActive ? "h-[96px] opacity-100" : "h-0 opacity-0"
                        }`}
                      style={{
                        background:
                          "linear-gradient(to bottom, #734AE2, #878CC5, #8FA8B9, #92B1B5, #A3CC88, #B1E363)",
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-medium text-[#0f172a] tracking-tight leading-snug transition-colors duration-200 -mt-0.5">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-1.5 max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}