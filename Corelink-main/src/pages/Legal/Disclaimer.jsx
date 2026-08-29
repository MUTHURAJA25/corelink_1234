import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LegalSection from './components/LegalSection';

const sections = [
  {
    title: 'Product Information',
    body:
      'Features, capabilities, product roadmaps, and technical specifications may change without prior notice as our platform continues to evolve.',
  },
  {
    title: 'No Professional Advice',
    body:
      'Nothing on this website constitutes legal, financial, compliance, investment, or regulatory advice. Customers should seek professional advice before making business or compliance decisions.',
  },
  {
    title: 'AI Explanations',
    body:
      "Neuroturing provides explainability, monitoring, governance, and audit capabilities for AI systems. Final operational, compliance, and business decisions remain the customer's responsibility.",
  },
  {
    title: 'Third-Party Links',
    body:
      'Our website may contain links to third-party websites. Neuroturing is not responsible for their content or privacy practices.',
  },
  {
    title: 'Limitation of Liability',
    body:
      'To the fullest extent permitted by applicable law, Neuroturing shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on its content.',
  },
];

const Disclaimer = () => {
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
              style={{ WebkitBackgroundClip: 'text' }}
            >
              Disclaimer
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-400">
            The information provided on the Neuroturing website is intended solely for general informational purposes.
            While every effort is made to ensure accuracy, Neuroturing makes no representations or warranties regarding the completeness, reliability, or suitability of the information presented.
            </p>

          </div>

          <div className="space-y-6">
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

export default Disclaimer;
