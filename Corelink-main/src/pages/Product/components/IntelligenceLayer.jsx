import React from "react";
import analyticsIcon from "../../../images/products/icons/analytics.svg";
import contactPageIcon from "../../../images/products/icons/contact_page.svg";
import psychologyIcon from "../../../images/products/icons/psychology.svg";
import stackedLineChartIcon from "../../../images/products/icons/stacked_line_chart.svg";

const features = [
  {
    icon: contactPageIcon,
    title: "Unified Credit Profiles",
    text: "Bring borrower, financial, and credit information into one connected view.",
    alt: true,
  },
  {
    icon: analyticsIcon,
    title: "Credit Risk Insights",
    text: "Identify risk indicators and emerging changes in borrower and portfolio behavior.",
    alt: false,
  },
  {
    icon: stackedLineChartIcon,
    title: "Portfolio Monitoring",
    text: "Track credit performance, portfolio quality, trends, and exceptions in real time.",
    alt: false,
  },
  {
    icon: psychologyIcon,
    title: "Decision Intelligence",
    text: "Turn credit data into contextual insights for faster, informed decisions.",
    alt: true,
  },
];

export default function CreditIntelligenceLayer() {
  return (
    <div className="relative w-full min-h-[620px] overflow-hidden px-8 py-12 sm:px-16 sm:py-14">
      {/* ambient gradient glow, top right */}
      <div
        className="pointer-events-none absolute -top-24 right-[-160px] h-[520px] w-[720px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(190,225,140,0.55), rgba(190,225,140,0) 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Eyebrow badge */}
        <span className="inline-block rounded-full bg-indigo-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-indigo-500">
          Smarter Credit Intelligence
        </span>

        {/* Heading */}
        <h1 className="mt-5 flex flex-wrap items-center gap-3 bg-#00D68F text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-sora">
          <span >#3</span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #00D68F 0%, #52BC67 9.13%, #0c7feb 44%, #11BCCB 59%, #7DBBD7 75%, #1CB522 86%, #919E77 100%)",
            }}
          >
            Credit &amp; Intelligence Layer
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500">
          Connect borrower data, credit information, risk indicators, and portfolio insights in
          one intelligent layer. Transform connected data into actionable intelligence for
          faster, more informed lending decisions. Strengthen risk visibility, credit evaluation,
          and portfolio oversight.
        </p>

        {/* Feature grid */}
        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
          {features.map(({ icon, title, text, alt }) => (
            <div key={title}>
              <div className="flex items-center gap-3.5">
                <div
                  className="flex h-9 w-9 min-w-9 items-center justify-center rounded-full text-white shadow-sm"
                  style={{
                    backgroundImage: alt
                      ? "linear-gradient(135deg, #007CD5 0%, #B3A7E6 100%)"
                      : "linear-gradient(135deg, #007CD5 0%, #359F83 100%)",
                  }}
                >
                  <img src={icon} alt="" className="h-4 w-4" />
                </div>
                <span className="whitespace-nowrap text-[15px] font-bold text-slate-900">
                  {title}
                </span>
                <div
                  className="ml-1 h-px flex-1 opacity-50"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #00D68F 0%, #52BC67 9.13%, #1E7ACF 44%, #11BCCB 59%, #7DBBD7 75%, #1CB522 86%, #919E77 100%)",
                  }}
                />
              </div>
              <p className="ml-[50px] mt-3 max-w-[340px] text-[13.5px] leading-relaxed text-slate-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}