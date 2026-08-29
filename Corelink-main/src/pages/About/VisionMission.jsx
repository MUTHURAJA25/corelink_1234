import React from "react";
import bgCard from "../../images/Aboutproduct/BackgroundCard.jpg";
import radar from "../../images/Aboutproduct/radar.svg";
import siEye from "../../images/Aboutproduct/si_eye-line.svg";

const VisionMission = () => (
  <div className="mx-auto max-w-[1280px] px-4 pt-20 sm:px-6 lg:px-8">
      <div
        className="relative overflow-hidden rounded-[28px] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(157, 244, 0, 0.1) 0%, rgba(62, 159, 138, 0.1) 36%, rgba(65, 170, 96, 0.1) 66%, rgba(67, 178, 121, 0.1) 100%), url(${bgCard})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* darken + desaturate the photo so it sits behind the text like a
            texture instead of a loud photo — tuned lighter than before */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backdropFilter: "saturate(0.7) brightness(0.6)",
            WebkitBackdropFilter: "saturate(0.7) brightness(0.6)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[#070214]/55" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b1a20]/70 via-transparent to-[#1c1136]/60" />
        {/* keep the very center calm so body text stays easy to read */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_45%,rgba(4,6,14,0.55),transparent_70%)]" />

        {/* thin vertical divider between columns */}
        <div className="pointer-events-none absolute inset-y-6 left-1/2 hidden w-[1.5px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/70 to-transparent md:block" />

        <div className="relative grid grid-cols-1 gap-0 divide-y divide-white/10 md:grid-cols-2 md:divide-x-0 md:divide-y-0">
          <article className="pb-8 md:pb-0 md:pr-10">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5B45E0] shadow-sm ring-1 ring-black/[0.04] sm:mb-5 sm:px-4 sm:text-xs">
              Future Focused
            </span>

            <div className="mt-5 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(180deg, rgba(157,244,0,0.12) 0%, rgba(62,159,138,0.12) 36%, rgba(65,170,96,0.12) 66%, rgba(67,178,121,0.12) 100%)",
                  border: "2px solid rgba(255,255,255,0.15)",
                }}
              >
                <img src={siEye} alt="vision" className="h-5 w-5 object-contain" />
              </span>
              <h2 className="text-[20px] font-bold tracking-tight text-[#baf35a]">
                Our Vision
              </h2>
            </div>

            <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.03em] text-white sm:text-[20px]">
              A More Connected Future for Banking.
            </h3>

            <p className="mt-3 max-w-[410px] text-[12px] leading-[1.6] text-[#d0d9dd]/80 sm:text-[13px]">
              We envision a banking ecosystem where information, financial activity,
              operations, and services move seamlessly—creating stronger connections
              between banks and the businesses and customers they serve.
            </p>
          </article>

          <article className="pt-8 md:pt-0 md:pl-10">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5B45E0] shadow-sm ring-1 ring-black/[0.04] sm:mb-5 sm:px-4 sm:text-xs">
              Empowering Growth
            </span>

            <div className="mt-5 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(180deg, rgba(157,244,0,0.12) 0%, rgba(62,159,138,0.12) 36%, rgba(65,170,96,0.12) 66%, rgba(67,178,121,0.12) 100%)",
                  border: "2px solid rgba(255,255,255,0.15)",
                }}
              >
                <img src={radar} alt="mission" className="h-5 w-5 object-contain" />
              </span>
              <h2 className="text-[20px] font-bold tracking-tight text-[#baf35a]">
                Our Mission
              </h2>
            </div>

            <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.03em] text-white sm:text-[20px]">
              Connect. Govern. Grow.
            </h3>

            <p className="mt-3 max-w-[410px] text-[12px] leading-[1.6] text-[#d0d9dd]/80 sm:text-[13px]">
              To equip financial institutions with intelligent infrastructure that
              connects their ecosystem, strengthens governance, simplifies
              operations, and enables better financial experiences.
            </p>
          </article>
        </div>
      </div>
  </div>
);

export default VisionMission;