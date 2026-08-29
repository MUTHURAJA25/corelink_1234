import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Explainer from '../../../images/platform/Explainer.png';
import Audit from '../../../images/platform/Audit.png';
import Defence from '../../../images/platform/Defence.png';
import Compliance from '../../../images/platform/Compliance.png';
import Scoring from '../../../images/platform/Scoring.png';

const CAPABILITIES = [
  {
    variant: 'explainer',
    icon: Explainer,
    tag: 'Explainer',
    name: 'ClarityCore™',
    path: '/products/clarity-core',
    description:
      'Delivers clear, AI-driven explanations for onboarding, risk, and payment decisions.',
  },
  {
    variant: 'audit',
    icon: Audit,
    tag: 'Audit',
    name: 'ProofChain™',
    path: '/products/proof-chain',
    description:
      'Creates tamper-proof audit trails for complete compliance and traceability.',
  },
  {
    variant: 'defence',
    icon: Defence,
    tag: 'Defence',
    name: 'DriftSense™',
    path: '/products/drift-sense',
    description:
      'Detects model drift, fraud patterns, and transaction anomalies in real time.',
  },
  {
    variant: 'compliance',
    icon: Compliance,
    tag: 'Compliance',
    name: 'ExplainTouch™',
    path: '/products/explain-touch',
    description:
      'Enhances customer trust with transparent, explainable merchant communications.',
    wide: true,
  },
  {
    variant: 'scoring',
    icon: Scoring,
    tag: 'Scoring',
    name: 'InsightHub™',
    path: '/products/insight-hub',
    description:
      'Provides real-time executive dashboards with actionable operational intelligence.',
  },
];

const variantStyles = {
  explainer: {
    accent: '#002776',
    bg: 'linear-gradient(180deg,#1B3D7A 0%,#17356C 25%,#122A56 55%,#0D1F42 100%)',
    glow: 'rgba(91,157,251,.22)',
    gradient:
      'conic-gradient(from 90deg,#3b82f6,#dbeafe,#ffffff,#dbeafe,#3b82f6,#dbeafe,#ffffff,#dbeafe,#3b82f6)',
  },

  audit: {
    accent: '#3B3AB5',
    bg: 'linear-gradient(180deg,#654FCF 0%,#5743BC 25%,#47359D 55%,#352777 100%)',
    glow: 'rgba(143,124,246,.22)',
    gradient:
      'conic-gradient(from 90deg,#8f7cf6,#ede9fe,#ffffff,#ede9fe,#8f7cf6,#ede9fe,#ffffff,#ede9fe,#8f7cf6)',
  },

  defence: {
    accent: '#FF5812',
    bg: 'linear-gradient(180deg,#C95D31 0%,#B65229 25%,#994320 55%,#753117 100%)',
    glow: 'rgba(240,120,74,.22)',
    gradient:
      'conic-gradient(from 90deg,#f0784a,#ffe3d7,#ffffff,#ffe3d7,#f0784a,#ffe3d7,#ffffff,#ffe3d7,#f0784a)',
  },

  compliance: {
    accent: '#0D5E3F',
    bg: 'linear-gradient(180deg,#2F966D 0%,#277E5C 25%,#20684B 55%,#174D38 100%)',
    glow: 'rgba(63,174,130,.22)',
    gradient:
      'conic-gradient(from 90deg,#3fae82,#d7f5e8,#ffffff,#d7f5e8,#3fae82,#d7f5e8,#ffffff,#d7f5e8,#3fae82)',
  },

  scoring: {
    accent: '#E0855E',
    bg: 'linear-gradient(180deg,#B77552 0%,#9F6243 25%,#834F35 55%,#643A27 100%)',
    glow: 'rgba(231,165,130,.22)',
    gradient:
      'conic-gradient(from 90deg,#e7a582,#fde9dd,#ffffff,#fde9dd,#e7a582,#fde9dd,#ffffff,#fde9dd,#e7a582)',
  },
};

function CapabilityCard({ icon, tag, name, description, variant, wide, path }) {
  const colors = variantStyles[variant];

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`
      group
      relative
      overflow-hidden
      rounded-[20px]
      border border-[#1F1F2A]
      bg-[#080D1B]
      p-8
      ${wide ? 'md:col-span-2' : ''}
      fade-up
      `}
      style={{
        '--accent': colors.accent,
        '--accent-bg': colors.bg,
        '--glow': colors.glow,
      }}
    >
      {/* Spotlight */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle 260px at var(--x,50%) var(--y,50%), var(--glow), transparent 70%)',
        }}
      />

      {/* Top */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="relative flex h-11 w-11 items-center justify-center rounded-full">
          {/* Outer Ring */}
          <div
            className="absolute inset-0 rounded-full p-[1px]"
            style={{
              background:
                'linear-gradient(180deg,#6b7280,#40444f,#1b1e27,#40444f,#6b7280)',
            }}
          >
            {/* Inner Circle */}
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#080d1c]">
              <img
                src={icon}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className="rounded-full p-[2px]"
          style={{
            background: colors.gradient,
          }}
        >
          <div
            className="rounded-full px-[11px] py-[5px] text-[10px] font-regular uppercase tracking-[0.15em] shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            style={{
              color: '#FFFFFF',
              borderColor: '#FFFFFF',
              background: colors.bg,
            }}
          >
            {tag}
          </div>
        </div>
      </div>

      {/* Content */}
      <h3 className="relative z-10 mb-2 text-2xl font-semibold text-white">
        {name}
      </h3>

      <p className="relative z-10 mb-5 max-w-[34ch] text-sm text-[#616174] leading-6">
        {description}
      </p>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between">
        <Link
          to={path}
          className="group flex items-center gap-2 text-sm font-medium text-[#8F5DE4]"
        >
          Explore product
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        <span
          className="h-1 w-11 rounded-full"
          style={{
            background: colors.accent,
          }}
        />
      </div>
    </div>
  );
}

export default function PlatformCapabilities() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full
                     bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.35)]
                     text-[#00E5FF] text-xs font-bold uppercase tracking-[0.08em] fade-up"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] flex-shrink-0" />
          The platform
        </span>

        {/* Heading */}
        <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-[50px]  text-[36px] fade-up">
          One Platform{' '}
          <span className="bg-gradient-to-r from-[#B4F1FF] via-[#B4F1FF] to-[#357CCE] bg-clip-text text-transparent">
            Five Modular Capabilities.
          </span>
        </h2>
        {/* Description */}
        <p className="mt-5 mb-14 text-lg leading-8 text-white fade-up">
          Deploy independently or together to create a complete Connected Banking ecosystem.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
          {CAPABILITIES.map((item, index) => (
            <div
              key={item.name}
              className={index < 3 ? 'xl:col-span-2' : 'xl:col-span-3'}
            >
              <CapabilityCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
