import React from "react";
import Howitworks_1 from "../../../images/howitworks_1.svg";
import Howitworks_2 from "../../../images/howitworks_2.svg";
import Howitworks_3 from "../../../images/howitworks_3.svg";

const STEPS = [
  {
    number: "01",
    title: "Connect",
    description:
      "Integrate with banking systems and APIs.",
  },
  {
    number: "02",
    title: "Enable",
    description:
      "Onboard merchants and automate workflows.",
  },
  {
    number: "03",
    title: "Monitor",
    description:
      "Track transactions, fraud and compliance.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Gain insights through dashboards and analytics.",
  },
];

const OUTPUTS = [
  {
    image: Howitworks_1,
    title: "Explainable predictions",
    description: "For every decision, in real time.",
  },
  {
    image: Howitworks_2,
    title: "Trust & confidence scores",
    description: "Model self-awareness surfaced to users.",
  },
  {
    image: Howitworks_3,
    title: "Regulator-ready reports",
    description: "Compliance-grade audit trails.",
  },
];

const RAILS = [
  {
    number: "01",
    title: "Merchant Onboarding",
    description: "Digitize onboarding with automated verification and faster approvals. ",
  },
  {
    number: "02",
    title: "API Banking",
    description: "Connect seamlessly with banks through secure, scalable API integrations.",
  },
  {
    number: "03",
    title: "Payout Automation",
    description: "Automate bulk payouts with real-time processing and reconciliation.",
  },
  {
    number: "04",
    title: "Fraud & Risk Monitoring",
    description: "Detect fraud proactively with AI-powered monitoring and risk controls.",
  },
];

export default function HowNeuroturingWorks() {
  return (
    <>
      {/* ───────────────────── How it works ───────────────────── */}
      <section className="w-full py-10 lg:px-5 px-6 sm:px-0 md:py-16 lg:py-20 font-sans text-[#f5f7fa]">
        <div className="max-w-[1200px] mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 mb-4 hover:border-cyan-500/60 transition-colors duration-300 fade-up">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              How It Works
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white mb-3 fade-up">
            How Neuroturing {" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 lg:whitespace-nowrap mb-[50px] fade-up">
          Four simple steps to modernize Connected Banking.
          </p>
          <div className="fade-up">
            {/* Step markers — desktop only, sits above the content row */}
            <div className="hidden md:grid md:grid-cols-4 gap-8">
              {STEPS.map((step) => (
                <div key={step.number} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#f5f7fa] flex-shrink-0" />
                  <span className="font-mono text-[13px] tracking-[0.06em] text-[#9aa1ac]">
                    {step.number}
                  </span>
                </div>
              ))}
            </div>

            <div className="hidden md:block h-px bg-[rgba(255,255,255,0.12)] my-6" />

            {/* Step content — number stays paired with its own title on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8">
              {STEPS.map((step) => (
                <div
                  key={step.number}
                  className="py-6 border-b border-[rgba(255,255,255,0.12)]
                             last:border-b-0
                             md:py-0 md:border-b-0"
                >
                  {/* Mobile-only number badge, paired directly with this step's title */}
                  <div className="flex md:hidden items-center gap-3 mb-3">
                    <span className="lg:w-6 lg:h-6 md:w-6 md:h-6 w-2 h-2 rounded-full bg-[#f5f7fa] flex-shrink-0" />
                    <span className="font-mono text-sm tracking-[0.06em] text-[#9aa1ac]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl sm:text-[1.375rem] font-bold leading-[1.3]">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-[0.95rem] leading-relaxed text-[#9aa1ac]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Output header */}
          {/* <div className="flex items-center gap-4 sm:gap-5 mt-10 mb-8 sm:mt-12 md:mt-[88px] md:mb-12">
            <span className="flex-shrink-0 px-4 sm:px-5 py-2 rounded-full border border-[#E4E3D6] text-[#9AA1AC] text-xs font-bold uppercase tracking-[0.08em]">
              Output
            </span>

            <div className="flex-1 border-b border-[#E4E3D6]/25"></div>
          </div> */}

          {/* Outputs */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 lg:gap-10">
            {OUTPUTS.map(({ image, title, description }) => (
              <div key={title} className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 sm:h-[52px] sm:w-[52px] flex-shrink-0 items-center justify-center
                            rounded-full bg-[linear-gradient(131.76deg,#B4F1FF_66.27%,#357CCE_99.5%)]"
                >
                  <img
                    src={image}
                    alt={title}
                    className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                  />
                </div>

                <div>
                  <h4 className="mb-1.5 sm:mb-2 text-lg sm:text-[20px] font-bold leading-[1.3] text-[#F5F7FA]">
                    {title}
                  </h4>

                  <p className="text-sm sm:text-[16px] leading-relaxed sm:leading-7 text-[#9AA1AC]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* ───────────────────── End-to-End Payment Intelligence ───────────────────── */}
      <section className="lg:px-5 px-0 py-6 font-sans text-[#f5f7fa]">
        <div
          className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 sm:gap-12 rounded-[24px] sm:rounded-3xl border border-white/[0.06] p-6 sm:p-10 md:p-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:p-[72px_45px]"
          style={{
            background:
              "radial-gradient(120% 160% at 0% 0%, #141c30 0%, #0a0d16 65%)",
          }}
        >
          {/* Left: intro */}
          <div className="flex flex-col">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.35)]
                     text-[#00E5FF] px-4 py-1 text-xs font-bold uppercase tracking-[0.08em] fade-up">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#4fd1c5] shadow-[0_0_8px_#4fd1c5]" />
              Payment Intelligence
            </span>

            <h2 className="mt-6 mb-5 sm:mt-7 sm:mb-6 text-[2rem] leading-[1.15] sm:text-[45px] sm:leading-[1.12] font-bold tracking-[-0.01em] fade-up">
              End-to-End
              <br />
              <span className="bg-gradient-to-r from-[#d6ecff] to-[#6f9ff2] bg-clip-text text-transparent">
              Banking & Payment
              </span>
              <br />
              Intelligence
            </h2>

            {/* <p className="mb-5 sm:mb-6 text-lg sm:text-2xl font-normal text-[#c7cfe0]">
              Receivables <span className="mx-2 sm:mx-2.5 text-[#9aa4b8]">→</span> Escrow
              <span className="mx-2 sm:mx-2.5 text-[#9aa4b8]">→</span>Payables
            </p> */}

            <p className="max-w-[440px] text-sm sm:text-base leading-relaxed sm:leading-[1.65] text-[#9aa4b8] fade-up">
              Support the complete payment lifecycle from merchant onboarding to settlement with real-time visibility and explainable operational intelligence.
            </p>
          </div>

          {/* Right: rail grid */}
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:gap-x-14 lg:gap-y-16">
            {RAILS.map((rail) => (
              <div key={rail.number} className="fade-up">
                <span className="mb-3 sm:mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#9aa4b8]">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8b7cf6] shadow-[0_0_8px_#8b7cf6]" />
                  {/* Rail / {rail.number} */}
                  {rail.number} 
                </span>
                <h3 className="mb-2.5 sm:mb-3 max-w-none sm:max-w-[22ch] text-lg sm:text-[17px] font-bold leading-[1.3] sm:leading-[1.35]">
                  {rail.title}
                </h3>
                <p className="max-w-none text-sm sm:text-[0.95rem] leading-relaxed sm:leading-[1.6] text-[#9aa4b8] sm:max-w-[32ch]">
                  {rail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
