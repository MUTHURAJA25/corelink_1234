import React from "react";

const keyFeatures = [
  {
    id: "01",
    title: "Centralized Governance",
    description:
      "Manage oversight across banks and societies from a unified control platform.",
  },
  {
    id: "02",
    title: "Role-Based Access",
    description:
      "Assign secure permissions and responsibilities for controlled operations.",
  },
  {
    id: "03",
    title: "Approval Workflows",
    description:
      "Standardize multi-level approvals to ensure governance and accountability.",
  },
  {
    id: "04",
    title: "Real-Time Monitoring",
    description:
      "Gain instant visibility into operational activities and potential risks.",
  },
  {
    id: "05",
    title: "Comprehensive Audit Trails",
    description:
      "Maintain tamper-resistant records that support regulatory readiness.",
  },
  {
    id: "06",
    title: "Alert & Risk Monitoring",
    description:
      "Proactively anomaly detection flags fraudulent patterns before they escalate.",
  },
];

const KeyFeatures = () => (
  <section className="w-full bg-white py-16">
    <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-5xl sm:mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#e7dff6] bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5f3bc7] shadow-[0_0_0_1px_rgba(255,255,255,0.35)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4A00BF]" />
          
          Complete Control
        </div>

        <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#1e1a2f] sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
          Key Features
        </h2>

        <p className="mt-4 max-w-4xl text-base leading-7 text-[#5f5e72] sm:text-lg">
          Gain end-to-end visibility across banking operations with centralized
          governance, standardized workflows, secure approvals, and
          comprehensive audit trails.
        </p>
      </div>

      <div className="grid gap-0 border-y border-[#dfe2eb] sm:grid-cols-2 xl:grid-cols-3">
        {keyFeatures.map(({ id, title, description }, index) => (
          <div
            key={id}
            className={`min-h-[170px] border border-[#dfe2eb] bg-white p-5 sm:p-6 ${
              index % 3 === 2 ? "xl:border-r-0" : ""
            }`}
          >
            <div className="text-[11px] font-semibold tracking-[0.12em] text-[#653DE9]">
              {id}
            </div>

            <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.04em] text-[#1e1a2f] sm:text-[25px]">
              {title}
            </h3>

            <p className="mt-3 max-w-[26ch] text-sm leading-6 text-[#5f5e72] sm:text-[15px] sm:leading-7">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default KeyFeatures;