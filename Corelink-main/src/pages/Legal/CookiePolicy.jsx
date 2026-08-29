import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LegalSection from './components/LegalSection';

const sections = [
  {
    title: 'What Are Cookies?',
    body:
      'Cookies are small text files stored on your device when you visit a website.',
  },
  {
    title: 'Types of Cookies We May Use',
    points: ['Essential Cookies','Performance & Analytics Cookies','Functional Cookies','Marketing Cookies','Managing Cookies']
  },
  
  {
    title: 'Essential Cookies',
    body:
      'Required for website functionality, navigation, and security.',
  },
  {
    title: 'Performance & Analytics Cookies',
    body:
      'Help us understand website traffic, visitor behaviour, and platform performance.',
  },
  {
    title: 'Functional Cookies',
    body:
      'Remember your preferences and improve user experience.',
  },
  {
    title: 'Marketing Cookies',
    body:
      'May be used for future marketing initiatives, only where legally permitted.',
  },
  {
    title: 'Managing Cookies',
    body:
      'You can modify your browser settings to refuse or delete cookies. Some website features may not function properly if cookies are disabled.',
  },
  {
    title: 'Third-Party Services',
    body:
      'We may use trusted analytics or cloud service providers that place cookies to support website performance and measurement.By continuing to use this website, you consent to our use of cookies in accordance with this Cookie Policy.',
  },
];

const CookiePolicy = () => {
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
              Cookie Policy
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-400">
               Neuroturing uses cookies and similar technologies to improve website functionality, analyse website performance, and enhance your browsing experience.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-gray-300">
              Effective date: July 29, 2026
            </div>
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

export default CookiePolicy;
