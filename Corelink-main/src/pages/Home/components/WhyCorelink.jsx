import React, { useState } from "react";

import imageOne from "../../../images/whyCorelinks/why-core-link-img-one.svg";
import imageTwo from "../../../images/whyCorelinks/why-core-link-img-two.png";
import imageThree from "../../../images/whyCorelinks/why-core-link-img-three.svg";
import whycorelinkbg from "../../../images/whyCorelinks/whycorelinkbg.jpg";
import { Images } from "../../../assets/images";

const tabs = [
  {
    id: 1,
    heading: "Centralized Governance",
    tabLabel: "Centralized Governance",
    para: "Structured around the bank's mandate, with societies and members operating inside a governed perimeter.",
    icon: Images.whyCorelinkSection.iconone,
    image: Images.whyCorelinkSection.centeliasedgoverment,
  },
  {
    id: 2,
    heading: "Complete Operational Visibility",
    tabLabel: "Operational Visibility",
    para: "One workflow spine replaces disconnected registers, spreadsheets and manual reconciliations.",
    icon: Images.whyCorelinkSection.icontwo,
    image: Images.whyCorelinkSection.operationalVis,
  },
  {
    id: 3,
    heading: "Smarter Credit Decisions",
    tabLabel: "Smarter Credit Decisions",
    para: "Portfolio, exposure and repayment behaviour surfaced as decision-ready signals, not reports.",
    icon: Images.whyCorelinkSection.iconthree,
    image: Images.whyCorelinkSection.smartercreditDec,
  },
  {
    id: 4,
    heading: "Integrated Ecosystem",
    tabLabel: "Integrated Ecosystem",
    para: "Role-based access, auditability and policy enforcement applied consistently across the ecosystem.",
    icon: Images.whyCorelinkSection.iconfour,
    image: Images.whyCorelinkSection.integratedEco,
  },
];

const WhyCorelink = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");
  const active = tabs[activeTab];

  const selectTab = (index) => {
    if (index === activeTab) return;
    setSlideDirection(index > activeTab ? "right" : "left");
    setActiveTab(index);
  };

  return (
    <section
      className="relative z-10 w-full overflow-hidden bg-[#041020] py-20"
      style={{
        backgroundImage: `url(${Images.whyCorelinkSection.whycorelinkbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`
        @keyframes corelink-tab-slide-right {
          from { transform: translateX(32px); }
          to { transform: translateX(0); }
        }
        @keyframes corelink-tab-slide-left {
          from { transform: translateX(-32px); }
          to { transform: translateX(0); }
        }
      `}</style>
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e0f4] bg-[#f8f5fc] px-4 py-2 text-[10px]  uppercase tracking-[0.16em] text-[#5520d7]">
              Why CoreLink
            </div>
            <h1
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[40px] font-bold text-white mt-[24px]"
              style={{ lineHeight: "1.2" }}
            >
              Financial Infrastructure Built
              <span className="title-gradient-two">
                Around Your Institution
              </span>
            </h1>
            <p
              className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] text-[rgba(217,217,217,1)] mt-[28px]"
              style={{
                fontWeight: "400",
                lineHeight: "1.6",
              }}
            >
              Unlike disconnected software solutions, CoreLink keeps the bank at
              the center while digitally connecting societies, members,
              operations, and financial services through one integrated
              platform.
            </p>
          </div>
          <div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#071a2d]/90 p-2 shadow-2xl shadow-black/20 backdrop-blur-sm">
                <div
                  className="relative grid grid-cols-2 gap-1 lg:grid-cols-4"
                  role="tablist"
                  aria-label="Corelink capabilities"
                >
                  <span
                    className="pointer-events-none absolute inset-y-0 z-0 hidden rounded-xl transition-[left] duration-500 ease-out lg:block"
                    style={{
                      width: "calc((100% - 12px) / 4)",
                      left: `calc(${activeTab * 25}% + ${activeTab}px)`,
                      background:
                        "linear-gradient(140deg, #6A44F2 0%, #5B3CCA 22.1%, #8961CE 46.6%, #342964 78.4%, #25223D 100%)",

                      backgroundImage:
                        "linear-gradient(140deg, #6A44F2 0%, #5B3CCA 22.1%, #8961CE 46.6%, #342964 78.4%, #25223D 100%), linear-gradient(180deg, #E8DAFF 0%, #270F7F 100%)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }}
                    aria-hidden="true"
                  />
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === index}
                      onClick={() => selectTab(index)}
                      className={`relative z-10 flex min-h-14 items-center gap-2 rounded-xl px-3 py-2 text-left text-xs transition-colors duration-300 md:px-4 ${
                        activeTab === index
                          ? "bg-[linear-gradient(110deg,#5733D8_0%,#9A6DE0_55%,#38236F_100%)] text-white lg:bg-none"
                          : "text-white hover:text-white"
                      }`}
                    >
                      {/* Individual gradient border */}
                      <span
                        className="pointer-events-none absolute inset-0 rounded-xl p-[1px]"
                        style={{
                          background:
                            "linear-gradient(175.48deg, #E8DAFF 10.05%, #270F7F 96.61%)",
                          WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                        aria-hidden="true"
                      />

                      {/* Button content */}
                      <span className="relative z-10 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[rgba(51,41,98,0.5)] font-medium text-white">
                        0{tab.id}
                      </span>

                      <span className="relative z-10 leading-tight">
                        {tab.tabLabel}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <span
                className="pointer-events-none absolute top-full z-20 h-7 w-px -translate-x-1/2 bg-[linear-gradient(180deg,#16D6FF_0%,#5836D8_100%)] lg:hidden"
                style={{ left: `${(activeTab % 2) * 50 + 25}%` }}
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute top-full z-20 hidden h-7 w-px -translate-x-1/2 bg-[linear-gradient(180deg,#16D6FF_0%,#5836D8_100%)] lg:block"
                style={{
                  left: `calc(${activeTab * 25 + 12.5}% + ${activeTab - 1.5}px)`,
                }}
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute top-full z-10 h-7 w-5 -translate-x-1/2 bg-[rgba(72,54,141,0.1)] lg:hidden"
                style={{ left: `${(activeTab % 2) * 50 + 25}%` }}
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute top-full z-10 hidden h-7 w-5 -translate-x-1/2 bg-[rgba(72,54,141,0.1)] lg:block"
                style={{
                  left: `calc(${activeTab * 25 + 12.5}% + ${activeTab - 1.5}px)`,
                }}
                aria-hidden="true"
              />
            </div>

            <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#071a2d]/90 shadow-xl shadow-black/20">
              <span
                className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(167, 240, 0, 0.1)" }}
                aria-hidden="true"
              />
              <div
                key={active.id}
                className="relative z-10 grid min-h-[300px] grid-cols-1 items-center gap-8 p-7 md:grid-cols-2 md:p-10"
                style={{
                  animation: `corelink-tab-slide-${slideDirection} 450ms cubic-bezier(0.22, 1, 0.36, 1)`,
                }}
              >
                <div>
                  <div
                    className="relative mb-5 flex h-[50px] w-[50px] p-[15px] items-center justify-center rounded-full bg-[rgba(25,66,68,0.42)] backdrop-blur-[15px]"
                    style={{
                      boxShadow:
                        "-1px 3px 6px rgba(0, 0, 0, 0.08), -3px 11px 11px rgba(0, 0, 0, 0.07), -7px 24px 15px rgba(0, 0, 0, 0.04), -13px 43px 18px rgba(0, 0, 0, 0.01), -20px 68px 20px rgba(0, 0, 0, 0)",
                    }}
                  >
                    <span
                      className="pointer-events-none absolute inset-0 rounded-full p-px"
                      style={{
                        background:
                          "conic-gradient(from 102.21deg at 52.75% 38.75%, rgba(249, 249, 249, 0.5) -32.95deg, rgba(64, 64, 64, 0.5) 10.52deg, rgba(64, 64, 64, 0.35) 32.12deg, rgba(255, 255, 255, 0.5) 60.28deg, rgba(255, 255, 255, 0.5) 107.79deg, rgba(64, 64, 64, 0.35) 187.59deg, #F9F9F9 207.58deg, rgba(255, 255, 255, 0.5) 287.31deg, rgba(249, 249, 249, 0.5) 327.05deg, rgba(64, 64, 64, 0.5) 370.52deg)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                      aria-hidden="true"
                    />
                    <img
                      src={active.icon}
                      alt=""
                      className="relative z-10 h-9 w-9"
                    />
                  </div>
                  <h3 className="max-w-sm text-[20px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[28px] font-semibold leading-tight text-[rgba(156,200,32,1)]">
                    {active.heading}
                  </h3>
                  <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white">
                    {active.para}
                  </p>
                </div>
                <div className="relative flex min-h-48 items-center justify-center overflow-hidden rounded-xl border border-cyan-200/30 bg-[radial-gradient(circle_at_center,rgba(101,173,189,0.3),rgba(30,63,81,0.32))] p-5">
                  <img
                    key={active.id}
                    src={active.image}
                    alt=""
                    className="relative z-10 max-h-52 w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-1.5" aria-hidden="true">
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`h-2 overflow-hidden rounded-full ${index <= activeTab ? "" : "p-px"}`}
                  style={
                    index <= activeTab
                      ? undefined
                      : {
                          background:
                            "linear-gradient(90deg, rgba(249, 249, 249, 0.5) 0%, rgba(64, 64, 64, 0.5) 8%, rgba(64, 64, 64, 0.35) 22%, #FFFFFF 48%, rgba(255, 255, 255, 0.5) 66%, rgba(64, 64, 64, 0.35) 83%, #F9F9F9 100%)",
                        }
                  }
                >
                  <div className="h-full overflow-hidden rounded-full bg-[#344956]">
                    <span
                      className="block h-full origin-left rounded-full transition-transform duration-500 ease-out"
                      style={{
                        transform: `scaleX(${index <= activeTab ? 1 : 0})`,
                        background:
                          "linear-gradient(296.54deg, #B1E363 33.2%, #A3CC88 41.22%, #92B1B5 50.86%, #8FA8B9 55.36%, #878CC5 68.52%, #734AE2 100%)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCorelink;
