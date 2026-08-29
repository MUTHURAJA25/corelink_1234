import React, { useState } from "react";
import { KeyRound, FileCheck2, Radar, BadgeCheck, ChevronDown } from "lucide-react";
import { Images } from "../../../assets/images";

const PILLARS = [
  {
    id: "access",
    title: "Access",
    description:
      "Role-based permissions ensure the right people have the right access, creating clear ownership across critical operations.",
    Icon: KeyRound,
    underline: "bg-[#9DF400]",
    iconWrap: "bg-white/80 text-lime-600",
    card: "bg-gradient-to-br from-[#F7FFEC] via-[#E9FBC4] to-[#D3F96A]",
    bigIcon: "text-lime-600/10",
    glow: "bg-lime-300/50",
    border: "border-[#D3F96A]/40",
    glowColor: "#84CC16",
    tint: "#65A30D",
    hue: 0,
  },
  {
    id: "evidence",
    title: "Evidence",
    description:
      "Every transaction, action, and approval is captured in a complete audit trail for transparent, review-ready operations.",
    Icon: FileCheck2,
    underline: "bg-sky-600",
    iconWrap: "bg-white/85 text-sky-600",
    card: "bg-gradient-to-br from-[#F2F8FF] via-[#DCEEFC] to-[#BEE0FB]",
    bigIcon: "text-sky-600/10",
    glow: "bg-sky-300/50",
    border: "border-[#BEE0FB]/40",
    glowColor: "#0284C7",
    tint: "#0284C7",
    hue: 0,
  },
  {
    id: "vigilance",
    title: "Vigilance",
    description:
      "Real-time monitoring surfaces unusual activity and emerging risks, helping teams detect and respond before issues escalate.",
    Icon: Radar,
    underline: "bg-emerald-600",
    iconWrap: "bg-white/85 text-emerald-600",
    card: "bg-gradient-to-br from-[#F2FBF6] via-[#DCF4EA] to-[#BDEBDA]",
    bigIcon: "text-emerald-600/10",
    glow: "bg-emerald-300/50",
    border: "border-[#BDEBDA]/40",
    glowColor: "#059669",
    tint: "#059669",
    hue: 0,
  },
  {
    id: "assurance",
    title: "Assurance",
    description:
      "Structured approvals, centralized oversight, and RBI-aligned controls help institutions strengthen compliance and stay prepared for regulatory scrutiny.",
    Icon: BadgeCheck,
    underline: "bg-indigo-600",
    iconWrap: "bg-white/85 text-indigo-600",
    card: "bg-gradient-to-br from-[#F2F2FD] via-[#DEDFFA] to-[#CBCCF7]",
    bigIcon: "text-indigo-600/10",
    glow: "bg-indigo-300/50",
    border: "border-[#CBCCF7]/90",
    glowColor: "#4F46E5",
    tint: "#4F46E5",
    hue: 0,
  },
];

const EXPAND_CONTENT_DELAY = 220;
const COLLAPSE_LABEL_DELAY = 160;

const GovernanceControlSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden px-4 pt-2 sm:px-6 sm:pt-14 lg:px-8 lg:pt-2 pb-24">
      {/* Ambient diagonal light rays */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(190,230,120,0.14) 0px, rgba(190,230,120,0.14) 1px, transparent 1px, transparent 90px)",
        }}
      />
      {/* Top-right decorative background image */}
      <img
        src={Images.landingpageconnected.ConnectedTopRightGraphic}
        alt=""
        className="pointer-events-none absolute -top-10 right-0 z-0 w-[65%] max-w-[900px] select-none opacity-15 mix-blend-multiply sm:w-[70%] sm:opacity-20 lg:w-[80%] lg:max-w-[1600px] lg:opacity-25"
        draggable={false}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#EFEBFF] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6C4CE0] xs:text-[11px] sm:text-xs">
          Compliance by Design
        </div>

        {/* Heading */}
        <h2 className="text-[26px] font-extrabold leading-tight tracking-tight text-[#0B1220] sm:text-4xl lg:text-[40px] lg:leading-[1.2]">
          Governance
          <span
            className="inline-block align-baseline"
            style={{
              width: "0.22em",
              height: "0.22em",
              marginLeft: "0.06em",
              marginRight: "0.32em",
              background: "#000",
            }}
          />
          Control
          <span
            className="inline-block align-baseline"
            style={{
              width: "0.22em",
              height: "0.22em",
              marginLeft: "0.06em",
              background: "#000",
            }}
          />
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(100deg, #9DF400 6.17%, #1778CB 37.73%, #3E9F8A 64.02%, #4A55E4 93.83%)",
            }}
          >
            Confidence
          </span>
          <span
            className="inline-block align-baseline"
            style={{
              width: "0.22em",
              height: "0.22em",
              marginLeft: "0.06em",
              background: "#4A55E4",
            }}
          />
        </h2>

        {/* Paragraph */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
          CoreLink embeds governance across banking operations—bringing
          access control, auditability, risk monitoring, and regulatory
          readiness into one connected framework.
        </p>
      </div>

      {/* Accordion — stacked below lg, horizontal at lg+ (matches iPad Pro portrait, 1024px, exactly) */}
      <div
          className="relative z-10 mx-auto mt-12 flex w-full max-w-3xl flex-col gap-3 sm:mt-16 lg:h-[400px] lg:flex-row lg:gap-4 xl:h-[440px] xl:max-w-[78rem]"
          onMouseLeave={() => setActiveIndex(0)}
        >
        {(() => {
          const ACTIVE_BASIS = 46; // %
          const OTHER_BASIS = (100 - ACTIVE_BASIS) / (PILLARS.length - 1); // %
          return PILLARS.map((pillar, index) => {
            const isActive = activeIndex === index;
            const { Icon } = pillar;

            return (
              <div
                key={pillar.id}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() =>
                  setActiveIndex((prev) => (prev === index ? prev : index))
                }
                style={{
                  containerType: "inline-size",
                  flexGrow: 0,
                  flexShrink: 0,
                  "--basis": `${isActive ? "51" : "15"}%`,
                  transition: "flex-basis 500ms ease-in-out",
                }}
                className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-[20px] border sm:rounded-[32px] ${pillar.border} shadow-sm outline-none lg:h-full lg:[flex-basis:var(--basis)] ${pillar.card}`}
              >
                {/* Glow accent (desktop, active only) */}
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 hidden h-40 w-40 rounded-full blur-3xl transition-opacity duration-300 lg:block ${pillar.glow}`}
                  style={{
                    opacity: isActive ? 1 : 0,
                    transitionDelay: isActive ? `${EXPAND_CONTENT_DELAY}ms` : "0ms",
                  }}
                />

                {/* Right-side ray effect, active card only, tinted per pillar */}
                <img
                  src={Images.landingpageconnected.ConnectedCardRays}
                  alt=""
                  draggable={false}
                  className="pointer-events-none absolute top-0 right-0 hidden h-full w-[70%] select-none object-cover object-right transition-opacity duration-300 lg:block"
                  style={{
                    opacity: isActive ? 0.9 : 0,
                    transitionDelay: isActive ? `${EXPAND_CONTENT_DELAY}ms` : "0ms",
                    filter: `hue-rotate(${pillar.hue}deg)`,
                    borderTopRightRadius: "32px",
                    borderBottomRightRadius: "32px",
                  }}
                />

                {/* Big line-art icon — scales with card width via cqw, never overruns text */}
                <Icon
                  strokeWidth={1.2}
                  className={`pointer-events-none absolute hidden transition-opacity duration-300 lg:block ${pillar.bigIcon}`}
                  style={{
                    top: "clamp(-4.5rem, -20cqw, -1.5rem)",
                    right: "clamp(-0.75rem, -2cqw, 0rem)",
                    width: "clamp(9rem, 62cqw, 20rem)",
                    height: "clamp(9rem, 62cqw, 20rem)",
                    opacity: isActive ? 1 : 0,
                    transitionDelay: isActive ? `${EXPAND_CONTENT_DELAY}ms` : "0ms",
                  }}
                />

                {/* Icon halo — scales with card width, fixed margins replaced with cqw */}
                <div
                  className="relative hidden shrink-0 items-center justify-center transition-opacity ease-in-out lg:flex"
                  style={{
                    marginLeft: "clamp(1.25rem, 10cqw, 3rem)",
                    marginTop: "clamp(1.25rem, 7cqw, 2rem)",
                    width: "clamp(2.75rem, 13cqw, 3.5rem)",
                    height: "clamp(2.75rem, 13cqw, 3.5rem)",
                    opacity: isActive ? 1 : 0,
                    transitionDuration: isActive ? "300ms" : "150ms",
                    transitionDelay: isActive ? `${EXPAND_CONTENT_DELAY}ms` : "0ms",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    className="absolute inset-[-8px] rounded-full blur-md"
                    style={{
                      background: `radial-gradient(circle, ${pillar.glowColor}55 0%, ${pillar.glowColor}00 70%)`,
                    }}
                  />
                  <div
                    className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                    style={{
                      boxShadow: `0 0 0 1px ${pillar.glowColor}26, 0 4px 12px rgba(0,0,0,0.06)`,
                    }}
                  >
                    <Icon
                      className={`h-5 w-5 ${pillar.iconWrap
                        .split(" ")
                        .find((c) => c.startsWith("text-"))}`}
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Mobile/tablet-collapsed icon (below lg) */}
                <div
                  className={`m-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm lg:hidden ${pillar.iconWrap}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>

                {/* Mobile/tablet toggle header (below lg) */}
                <button
                  type="button"
                  className="flex items-center justify-between px-5 pb-4 text-left lg:hidden"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(isActive ? -1 : index);
                  }}
                >
                  <span className="text-sm font-extrabold uppercase tracking-wide text-[#0B1220] xs:text-base">
                    {pillar.title}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#0B1220] transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Collapsed vertical label — scales with card width via cqw */}
                <div
                  className="pointer-events-none absolute inset-0 hidden items-center justify-center transition-opacity ease-in-out lg:flex"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transitionDuration: isActive ? "150ms" : "300ms",
                    transitionDelay: isActive ? "0ms" : `${COLLAPSE_LABEL_DELAY}ms`,
                  }}
                >
                  <div
                    className="relative flex aspect-square items-center justify-center"
                    style={{ width: "clamp(3rem, 55cqw, 9rem)" }}
                  >
                    <Icon
                      strokeWidth={1}
                      className={`absolute inset-0 h-full w-full ${pillar.bigIcon}`}
                    />
                    <span
                      className="relative rotate-180 whitespace-nowrap font-bold uppercase [writing-mode:vertical-lr] text-[#0B1220]"
                      style={{
                        fontSize: "clamp(10px, 16cqw, 16px)",
                        letterSpacing: "0.25em",
                      }}
                    >
                      {pillar.title}
                    </span>
                  </div>
                </div>

                {/* Expanded content — scales with card width via cqw */}
                <div
                  className="mt-auto hidden transition-all ease-in-out lg:block"
                  style={{
                    padding: "clamp(1.25rem, 6cqw, 1.75rem)",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(8px)",
                    transitionDuration: isActive ? "350ms" : "150ms",
                    transitionDelay: isActive ? `${EXPAND_CONTENT_DELAY}ms` : "0ms",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <h3
                    className="font-extrabold uppercase tracking-wide text-[#0B1220]"
                    style={{ fontSize: "clamp(15px, 4cqw, 18px)" }}
                  >
                    {pillar.title}
                  </h3>
                  <span
                    className={`mt-2 block h-[3px] w-12 rounded-full ${pillar.underline}`}
                  />
                  <p
                    className="mt-3 max-w-xs leading-6 text-[#3A3F4B]/80"
                    style={{ fontSize: "clamp(12px, 3.4cqw, 14px)" }}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* Mobile/tablet collapsible body (below lg) */}
                <div
                  className={`grid px-5 transition-[grid-template-rows] duration-500 ease-in-out lg:hidden ${
                    isActive ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <span
                      className={`mb-2 block h-[3px] w-9 rounded-full ${pillar.underline}`}
                    />
                    <p className="text-[13px] leading-5 text-[#3A3F4B]/80">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          });
        })()}
      </div>
    </section>
  );
};

export default GovernanceControlSection;