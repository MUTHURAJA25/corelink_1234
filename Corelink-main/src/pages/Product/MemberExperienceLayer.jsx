import React from "react";
import { MonitorSmartphone, UserCog } from "lucide-react";

import { Images } from "../../assets/images";

const features = [
  {
    icon: Images.Product.Product_member_Icon1,
    isImage: true,
    color: "lime",
    title: "Unified Member Profiles",
    description:
      "Bring member information, interactions, services, and activity into one connected view.",
  },
  {
    icon: MonitorSmartphone,
    isImage: false,
    color: "sky",
    title: "Digital Service Access",
    description:
      "Enable convenient access to banking services, requests, and information.",
  },
  {
    icon: UserCog,
    isImage: false,
    color: "teal",
    title: "Member Self-Service",
    description:
      "Empower members to initiate, track, and manage services with less manual support.",
  },
  {
    icon: Images.Product.Product_mem_Icon2,
    isImage: true,
    color: "indigo",
    title: "Personalized Engagement",
    description:
      "Deliver relevant services, communications, and experiences based on member needs and activity.",
  },
];

// Each color carries its idle (outlined) look plus the exact hover state:
// solid fill + colored glow, matching the reference hover interaction.
const colorMap = {
  lime: {
    text: "text-lime-400",
    line: "bg-lime-400",
    border: "border-lime-400/30",
    hover: "group-hover:bg-lime-400 group-hover:border-lime-400 group-hover:shadow-[0_0_36px_6px_rgba(163,230,53,0.55)]",
  },
  sky: {
    text: "text-sky-400",
    line: "bg-sky-400",
    border: "border-sky-400/30",
    hover: "group-hover:bg-sky-400 group-hover:border-sky-400 group-hover:shadow-[0_0_36px_6px_rgba(56,189,248,0.55)]",
  },
  teal: {
    text: "text-teal-400",
    line: "bg-teal-400",
    border: "border-teal-400/30",
    hover: "group-hover:bg-teal-400 group-hover:border-teal-400 group-hover:shadow-[0_0_36px_6px_rgba(45,212,191,0.55)]",
  },
  indigo: {
    text: "text-indigo-400",
    line: "bg-indigo-400",
    border: "border-indigo-400/30",
    hover: "group-hover:bg-indigo-400 group-hover:border-indigo-400 group-hover:shadow-[0_0_36px_6px_rgba(129,140,248,0.55)]",
  },
};

const IconBubble = ({ icon: Icon, isImage, color }) => {
  const c = colorMap[color];
  return (
    <div
      className={`relative z-10 flex h-12 w-12 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-full border ${c.border} bg-[#0a1418] transition-all duration-300 ease-out group-hover:-translate-y-2 ${c.hover}`}
    >
      {isImage ? (
        <img
          src={Icon}
          alt=""
          className="h-5 w-5 md:h-6 md:w-6 transition-all duration-300 group-hover:brightness-0 group-hover:contrast-200"
        />
      ) : (
        <Icon
          className={`h-5 w-5 md:h-6 md:w-6 ${c.text} transition-colors duration-300 group-hover:text-black`}
          strokeWidth={1.75}
        />
      )}
    </div>
  );
};

const TextBlock = ({ title, description, align, color }) => {
  const c = colorMap[color];
  return (
    <div>
      <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
      <div
        className={`mt-2 mb-3 h-0.5 w-8 ${c.line} transition-all duration-300 group-hover:w-16 ${
          align === "right" ? "ml-auto" : ""
        }`}
      />
      <p className="text-sm md:text-[15px] leading-relaxed text-slate-400">{description}</p>
    </div>
  );
};

const MemberExperienceLayer = () => {
  return (
    <>
      <section
        className="relative w-full overflow-hidden bg-[#050c10] bg-cover bg-center bg-no-repeat py-20 sm:py-28 text-white"
        style={{ backgroundImage: `url(${Images.Product.Product_member_bg_Image})` }}
      >
        <div className="relative mx-auto max-w-6xl px-6">
          {/* header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5">
              <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5B45E0]">
                CONNECTED MEMBER EXPERIENCES
              </span>
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold leading-tight tracking-tight">
              <span className="text-white">#4</span>{" "}
              <span className="title-gradient bg-clip-text text-transparent">
                Member Experience Layer
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-400">
              Unify member services, digital access, interactions, and communication through
              one experience layer. Simplify service delivery while giving members greater
              visibility, accessibility, and control. Create seamless, personalized
              experiences that strengthen engagement and relationships.
            </p>
          </div>

          {/* timeline */}
          <div className="relative mt-16 md:mt-20">
            {/* connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/15 to-white/0 md:left-1/2 md:-translate-x-1/2" />

            <div className="flex flex-col gap-14 md:gap-20">
              {features.map((f, i) => {
                const isRight = i % 2 === 1;
                return (
                  <div key={f.title} className="relative">
                    {/* mobile: icon + text in a row */}
                    <div className="group flex items-start gap-5 md:hidden">
                      <IconBubble icon={f.icon} isImage={f.isImage} color={f.color} />
                      <div className="pt-1">
                        <TextBlock title={f.title} description={f.description} align="left" color={f.color} />
                      </div>
                    </div>

                    {/* desktop: alternating grid */}
                    <div className="hidden md:grid md:grid-cols-[1fr_56px_1fr] md:items-center md:gap-10">
                      {!isRight ? (
                        <>
                          <div className="group contents">
                            <div className="text-right">
                              <TextBlock title={f.title} description={f.description} align="right" color={f.color} />
                            </div>
                            <div className="mx-auto">
                              <IconBubble icon={f.icon} isImage={f.isImage} color={f.color} />
                            </div>
                          </div>
                          <div className="text-left" />
                        </>
                      ) : (
                        <>
                          <div className="text-right" />
                          <div className="group contents">
                            <div className="mx-auto">
                              <IconBubble icon={f.icon} isImage={f.isImage} color={f.color} />
                            </div>
                            <div className="text-left">
                              <TextBlock title={f.title} description={f.description} align="left" color={f.color} />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberExperienceLayer;
