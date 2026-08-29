import React from 'react';

const impactRows = [
  {
    id: '01',
    title: 'Reduction in Operations Overhead',
    value: '62%',
    description:
      'Automate manual approvals and monitoring. One dashboard replaces multiple disconnected tools.',
  },
  {
    id: '02',
    title: 'Audit-Ready Compliance',
    value: '100%',
    description:
      'Every transaction logged, every approval tracked. Pre-assembled audit trails remove inspection friction.',
  },
  {
    id: '03',
    title: 'Fraud Detection in Hours, Not Weeks',
    value: '4h',
    description:
      'Real-time anomaly detection flags suspicious patterns instantly, catching default risk before it becomes a loss.',
  },
  {
    id: '04',
    title: 'Full Ecosystem Visibility',
    value: '15+',
    description:
      'Monitor societies, 100k+ members and the full portfolio from one screen. Decide on data, in real time.',
  },
];

const BusinessImpactSection = () => (
  <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(255,255,255,0.45)_25%,_rgba(255,255,255,0.1)_45%,_transparent_70%),radial-gradient(circle_at_bottom_right,_rgba(197,176,255,0.22),_transparent_35%),linear-gradient(90deg,_#f8f7fb_0%,_#f5eefc_30%,_#eef7ff_100%)]" />

    <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#e4dff5] bg-white/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f3ac2] shadow-[0_0_0_1px_rgba(255,255,255,0.3)] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5843d9]" />
          Governance Excellence
        </div>

        <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#1d1a2d] sm:text-5xl lg:text-[64px] lg:leading-[1.06]">
          Business Impact
        </h2>

        <p className="mt-4 max-w-4xl text-base leading-7 text-[#5d5c6b] sm:text-lg">
          Strengthens governance with real-time visibility, improves compliance
          readiness, reduces operational risk, and enables faster, informed
          decisions.
        </p>
      </div>

      <div className="mt-12 divide-y divide-[#d9d2e7]">
        {impactRows.map(({ id, title, value, description }) => (
          <div
            key={id}
            className="flex flex-col gap-4 py-6 sm:py-7 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-center gap-4 lg:w-[52%]">
              <span className="w-8 text-sm font-medium tracking-[0.04em] text-[#a9a3ba]">
                {id}
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#1d1a2d] sm:text-2xl lg:text-[28px]">
                {title}
              </h3>
            </div>

            <div className="flex items-center justify-between gap-6 lg:w-[48%] lg:justify-end">
              <div className="min-w-[90px] text-right text-[34px] font-semibold tracking-[-0.05em] text-[#8ea0b8] sm:text-[40px] lg:text-[25px]">
                {value}
              </div>

              <p className="max-w-[440px] text-left text-sm leading-6 text-[#5d5c6b] sm:text-base lg:text-[17px] lg:leading-7">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessImpactSection;
