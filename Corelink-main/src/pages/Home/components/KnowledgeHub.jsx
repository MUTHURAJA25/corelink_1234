import React from 'react';

const steps = [
  {
    label: 'STEP 01',
    title: 'Banking Modernization',
    description: 'Every user acts inside a defined role, scoped to their entity, product and limit.',
  },
  {
    label: 'STEP 02',
    title: 'Governance Excellence',
    description: 'Each action is written with actor, timestamp, before-and-after state and rationale.',
  },
  {
    label: 'STEP 03',
    title: 'Regulatory Readiness',
    description: 'Workflows route by exposure, exception type and delegation matrix — not by inbox.',
  },
  {
    label: 'STEP 04',
    title: 'Credit Intelligence',
    description: 'Breaches and exceptions surface to the bank as they happen, not in a monthly pack.',
  },
];

const KnowledgeHub = () => {
  return (
    <section className="w-full py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-[#B9A9FF]/40 bg-[#F7F2FF] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#6B46FF]">
            Knowledge Hub
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Resources for banking leadership
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Expert insights on modern banking, governance, and digital transformation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-x-8 top-[25px] hidden xl:block">
            <div className="absolute inset-x-0 top-[25px] h-px -translate-y-1/2 bg-[#6a44f2]/10 animated-dashed-line" />

          </div>

          <div className="grid gap-8 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-3xl border-slate-200/80 bg-transparent p-8 transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-transparent via-[#6a44f2]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="row items-center gap-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF2FF] text-[#5B21B6] shadow-sm mb-5">
                      <span className="text-xs font-semibold">{index + 1}</span>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 mt-1">
                      {step.label}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
