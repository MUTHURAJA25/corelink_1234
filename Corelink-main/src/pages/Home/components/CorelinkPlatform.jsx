import React, { useRef, useEffect } from 'react';
import PlatformBgImage from '/src/images/platform/platform-bg.png';

// PNG Icons
import BankControlPng from '/src/images/platform/bank-control.png';
import EcosystemPng from '/src/images/platform/ecosystem.png';
import CreditIntelligencePng from '/src/images/platform/credit-intelligence.png';
import MemberExperiencePng from '/src/images/platform/member-experience.png';
import PaymentRailsPng from '/src/images/platform/payment-rails.png';

const layersData = [
  {
    id: 'bank-control',
    title: 'Bank Control Layer',
    description:
      'Centralized dashboards, monitoring, approvals, governance, analytics, and oversight.',
    lineColor: 'bg-blue-600',
    iconImage: BankControlPng,
  },
  {
    id: 'ecosystem-operations',
    title: 'Ecosystem Operations Layer',
    description:
      'Digitize society operations through workflow automation, collections, reconciliation, and operational management.',
    lineColor: 'bg-teal-500',
    iconImage: EcosystemPng,
  },
  {
    id: 'credit-intelligence',
    title: 'Credit & Intelligence Layer',
    description:
      'Alternative credit scoring, lending intelligence, portfolio monitoring, and early-warning systems.',
    lineColor: 'bg-indigo-600',
    iconImage: CreditIntelligencePng,
  },
  {
    id: 'member-experience',
    title: 'Member Experience Layer',
    description:
      'Digital onboarding, payments, loan applications, notifications, and self-service experiences.',
    lineColor: 'bg-lime-500',
    iconImage: MemberExperiencePng,
  },
  {
    id: 'payment-rails',
    title: 'Rails & Disbursals Layer',
    description:
      'Power every financial transaction with integrated payment rails, collections, disbursals, banking APIs, digital banking, and reconciliation—ready to connect with any bank or financial institution.',
    lineColor: 'bg-emerald-500',
    iconImage: PaymentRailsPng,
  },
];

export default function CoreLinkPlatform() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    let rAF;
    let maxTranslate = 0;
    let scrollableDistance = 0;

    const calculateBounds = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const trackWidth = trackRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Distance needed to scroll all cards into view (including end padding)
      maxTranslate = Math.max(0, trackWidth - windowWidth + 64);
      scrollableDistance = maxTranslate;

      // Set full container height to ensure sticky holds through the entire horizontal scroll
      sectionRef.current.style.height = `${windowHeight + scrollableDistance}px`;
    };

    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current || scrollableDistance <= 0) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = -rect.top;

      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
      const currentTranslateX = -progress * maxTranslate;

      // Direct DOM transforms avoid React re-render lag during scroll
      trackRef.current.style.transform = `translate3d(${currentTranslateX}px, 0, 0)`;

      if (progressBarRef.current) {
        const progressWidth = Math.max(15, progress * 100);
        progressBarRef.current.style.width = `${progressWidth}%`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(handleScroll);
    };

    const onResize = () => {
      calculateBounds();
      handleScroll();
    };

    calculateBounds();
    handleScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rAF);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full m-0 p-0 font-sans text-slate-900 select-none block"
    >
      {/* Sticky Fullscreen Viewport */}
      <div
        className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-no-repeat bg-center m-0 p-0"
        style={{
          backgroundImage: `url(${PlatformBgImage})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="relative z-10 w-full flex flex-col justify-center py-4">

          {/* Header Section */}
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-8 mb-4 sm:mb-6">
            <div className="mb-2">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/90 border border-slate-200/60 text-[#653DE9] text-[11px] font-bold tracking-widest uppercase shadow-sm backdrop-blur-sm">
                INTEGRATED ECOSYSTEM
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0d1e32] tracking-tight shrink-0">
                CoreLink <span className="title-gradient-three">Platform</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl font-normal leading-relaxed lg:text-right">
                Discover the five integrated layers connecting banks, societies, members,
                and financial services through one unified platform
              </p>
            </div>
          </div>

          {/* Cards Horizontal Translation Track */}
          <div className="w-full overflow-hidden pt-3 pb-8">
            <div
              ref={trackRef}
              className="flex items-end gap-6 will-change-transform pl-6 sm:pl-12 lg:pl-[max(3rem,calc((100vw-80rem)/2))] pr-16 w-max"
              style={{
                transform: 'translate3d(0, 0, 0)',
              }}
            >
              {layersData.map((layer, index) => {
                const isBig = index % 2 === 0;

                return (
                  <div
                    key={layer.id}
                    className={`group shrink-0 w-[290px] sm:w-[320px] lg:w-[340px] bg-white/95 backdrop-blur-md rounded-[32px] p-6 sm:p-7 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06)] border border-slate-100/90 flex flex-col justify-start transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-5px_rgba(0,0,0,0.12)] cursor-pointer ${
                      isBig
                        ? 'min-h-[295px] sm:min-h-[315px]'
                        : 'min-h-[245px] sm:min-h-[260px]'
                    }`}
                  >
                    {/* Icon & Arrow */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <img
                          src={layer.iconImage}
                          alt={layer.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#06132A] to-[#18415F] text-white flex items-center justify-center shadow-sm group-hover:from-[#653DE9] group-hover:to-[#5229d1] transition-all duration-300">
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">
                      <h3 className="text-base sm:text-lg font-bold text-[#0d1e32] tracking-tight mb-2 transition-colors duration-300 group-hover:text-[#20948b]">
                        {layer.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-4 line-clamp-3">
                        {layer.description}
                      </p>

                      {/* Accent Line */}
                      <div className="w-full h-[2px] bg-slate-100/90 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${layer.lineColor} w-0 group-hover:w-full transition-all duration-500 ease-out origin-left rounded-full`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-8 mt-2">
            <div className="w-full h-1 bg-slate-300/40 rounded-full overflow-hidden relative">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-blue-600 via-teal-500 to-lime-500 rounded-full origin-left"
                style={{ width: '15%' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}