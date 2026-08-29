import React from "react";
import { ChevronRight } from "lucide-react";
import Assignment_Turned from "../../../images/assignment_turned_in.svg";
import Analytics from "../../../images/analytics.svg";

const CARDS = [
  {
    image: Analytics,
    iconBg: "bg-[#7C5CFC]/10 border border-[#7C5CFC]/40",
    imgFilter: "", // purple icon, no filter needed if svg is already purple
    title: "Connected Banking with Real-Time Insights",
    description: "Unify banking operations with real-time visibility and actionable insights",
  },
  {
    image: Assignment_Turned,
    iconBg: "bg-cyan-400/10 border border-cyan-400/40",
    imgFilter: "",
    title: "Audit-Ready with Built-In Governance",
    description: "Strengthen governance using automated approvals and complete audit trails",
  },
];

export default function ComplianceBaseline() {
  return (
    <section className="w-full  lg:px-6 sm:px-0 py-10 font-sans text-[#f5f7fa]">
      <div
        className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] border border-white/[0.06] p-10  sm:p-14 lg:p-[72px_64px] md:p-[72px_64px]"
        style={{
          background:
            "radial-gradient(120% 160% at 100% 100%, rgba(99,102,241,0.10) 0%, #0a0d16 55%), radial-gradient(90% 140% at 0% 0%, rgba(239,68,68,0.06) 0%, transparent 45%), #05070c",
        }}
      >
        {/* Glow effects */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-rose-900/10 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left: intro */}
          <div className="flex flex-col justify-center fade-up">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-[7px] text-xs font-bold uppercase tracking-[0.08em] text-cyan-400">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_theme(colors.cyan.400)]" />
              Regulatory ready
            </span>

            <h2 className="mt-7 mb-6 text-[clamp(2rem,4vw,3.25rem)]  font-bold leading-[1.12] tracking-[-0.01em] fade-up">
              Built for Next GeN{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Connected Banking
              </span>
            </h2>

            <p className="max-w-[520px] text-lg leading-[1.65] text-[#9aa4b8] fade-up">
              Neuroturing combines intelligent automation, operational visibility, and explainable governance to help financial institutions modernize merchant operations while remaining audit-ready.
            </p>
          </div>

          {/* Right: cards */}
          <div className="flex flex-col gap-5">
            {CARDS.map(({ image, iconBg, title, description }) => (
              <div
                key={title}
                className="group flex flex-col items-center md:flex-row md:items-start gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] fade-left"
              >
                <div
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl ${iconBg}`}
                >
                  <img src={image} alt={title} className="h-7 w-7" />
                </div>

                <div className="flex-1">
                  <h4 className="mb-1.5 text-lg font-bold leading-[1.3] text-[#f5f7fa]">
                    {title}
                  </h4>
                  <p className="text-[0.95rem] leading-[1.55] text-[#9aa4b8]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}