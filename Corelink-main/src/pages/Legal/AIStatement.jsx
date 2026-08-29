import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LegalSection from './components/LegalSection';

const sections = [
  {
    title: 'Explainability',
    body:
      'Every AI-driven decision should be understandable by humans. Neuroturing transforms complex model outputs into clear, contextual explanations that support operational teams, customers, and regulators.',
  },
  {
    title: 'Transparency',
    body:
      'We provide visibility into AI behaviour through explainable decisioning, immutable audit trails, and governance dashboards that promote trust across the organization.',
  },
  {
    title: 'Accountability',
    body:
      "Our platform enables organizations to document, monitor, and justify AI-driven outcomes, supporting stronger governance and regulatory compliance.",
  },
  {
    title: 'Fairness',
    body:
      'Neuroturing continuously monitors models for bias, drift, and unexpected behaviour, helping organizations identify and address fairness risks before they impact customers or operations.',
  },
  {
    title: 'Human Oversight',
    body:
      'AI should augment- not replace- human judgment. Neuroturing empowers compliance, risk, and operations teams with the information needed to make informed decisions while maintaining appropriate human oversight.',
  },
  {
    title: 'Privacy & Security',
    body:
      'Our platform follows privacy-by-design principles and integrates securely with existing enterprise environments. We support responsible handling of data through robust security and governance practices.',
  },
  {
    title: 'Regulatory Alignment',
    body:
      'Neuroturing is designed to support explainability, governance, and audit readiness aligned with evolving AI expectations for financial institutions. Our platform helps organizations build transparency and accountability into AI-powered workflows while adapting to changing regulatory requirements.',
  },
  {
    title: 'Our Commitment',
    body:
      'We are committed to building AI that financial institutions, regulators, merchants, and customers can trust. Every decision should be explainable. Every action should be auditable. Every outcome should be accountable.',
  },
];

const AIStatement = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background text-white">
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(59,130,246,0.08) 45%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Legal
            </div>

            <h1
              className="mb-5 bg-gradient-to-r from-white via-[#d8ecff] to-[#8ebeff] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
              style={{ lineHeight: 1.15 }}
            >
              Responsible AI by Design
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-400">
            At Neuroturing, we believe artificial intelligence should be transparent, accountable, and human-centric. Our platform is designed to help financial institutions adopt AI responsibly by making every decision explainable, traceable, and auditable.
            </p>

            {/* <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-gray-300">
              Effective date: July 28, 2026
            </div> */}
          </div>

          <div className="space-y-6">
            <h1 className="
            text-[40px]
            font-bold
            leading-[1.1]
            tracking-[-0.48px]
            sm:text-[48px]
            md:text-[56px]
            lg:text-[50px]
          ">Our <span className="bg-[linear-gradient(90deg,#B4F1FF_70.67%,#357CCE_100%)] bg-clip-text text-transparent">Principles</span></h1>
            {sections.map((section, index) => (
              <LegalSection
                key={section.title}
                index={String(index + 1).padStart(2, '0')}
                title={section.title}
                body={section.body}
                points={section.points}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIStatement;
