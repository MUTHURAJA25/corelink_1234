import React from "react";
import { motion } from "framer-motion";
import modelOutputsIcon from "../../../images/how it work B/database.svg";
import decisionRulesIcon from "../../../images/how it work B/balance.svg";
import behaviorDataIcon from "../../../images/how it work B/payments.svg";
import arrowSplitIcon from "../../../images/how it work B/arrow_split.svg";
import emergencyHomeIcon from "../../../images/how it work B/emergency_home.svg";
import bulbIcon from "../../../images/how it work B/icons8_idea.svg";
import brainIcon from "../../../images/how it work B/fluent_brain-circuit-20-regular.svg";
import articlePersonIcon from "../../../images/how it work B/i 1 1.svg";
import vectorIcon from "../../../images/how it work B/Vector.svg";
import { ChevronsRight } from "lucide-react";

/**
 * HowItWorks
 *
 * Props:
 *  - sectionTag  {string}   – chip label
 *  - heading     {string}   – section title
 *  - intro       {string}   – optional lead paragraph
 *  - steps       {Array}    – list of { step, title, description }
 *  - processSteps {Array}   – process flow steps (optional)
 *  - inputs      {Array}    – input items
 *  - outputs     {Array}    – output items
 *  - centerBrand {string}   – center branding text
 *  - theme       {object}   – color config
 *  - cta         {object}   – optional { label, href } for bottom CTA
 */
const HowItWorks = ({
  sectionTag = "Process",
  heading,
  intro,
  steps = [],
  processSteps = [
    { label: "Raw AI Data" },
    { label: "Clarity Core Engine" },
    { label: "Clear Insights" },
  ],
  inputs = [],
  outputs = [],
  centerBrand = "CLARITYCORE",
  theme = {},
  cta,
  custom_theme = {},
  centerImage,
}) => {
  const {
    gradientFrom = "from-blue-600",
    gradientTo = "to-cyan-500",
    tagBorderColor = "border-blue-500/30",
    tagTextColor = "text-blue-400",
    tagBgColor = "bg-blue-500/10",
    glowColor = "rgba(37,99,235,0.15)",
    stepBorderColor = "border-blue-500",
    cardBorderColor = "border-blue-500/20",
    accentTextColor = "text-blue-400",
    connectorColor = "from-blue-900 to-transparent",
    iconBgColor = "bg-blue-900/40",
    iconBorderColor = "border-blue-500/20",
    badgeBorderColor = "border-blue-500/25",
    badgeBgColor = "bg-blue-900/20",
    badgeTextColor = "text-blue-400",
    outerBgColor = "bg-slate-950/30",
    innerCardBgColor = "bg-black/30",
    cardBgColor = "bg-white/5",
    firstItemBg = custom_theme.box_background ??
      "bg-gradient-to-b from-[#DBDAFF33] to-[#8D8DF333]",
    firstItemIconBg = custom_theme.icon_bg ??
      "bg-[linear-gradient(133.92deg,_#24245C_-10.46%,_#6E6EFC_100%)]",
    firstItemIconShadow = custom_theme.icon_shadow ??
      "shadow-[0_0_30px_rgba(234,166,141,0.18)]",
  } = theme;

  const inputIcons = [modelOutputsIcon, decisionRulesIcon, behaviorDataIcon];
  const outputIcons = [vectorIcon, vectorIcon, emergencyHomeIcon];
  const outputIconMap = {
    "Human-readable explanations": articlePersonIcon,
    "Key contributing factors behind decisions": arrowSplitIcon,
    "Contextual summaries for operations, risk, and compliance teams":
      emergencyHomeIcon,
  };
  const processIcons = {
    "Raw AI Data": articlePersonIcon,
    "Clarity Core Engine": brainIcon,
    "Clear Insights": bulbIcon,
  };

  const renderIcon = (icon, fallback) => {
    const iconToRender = icon ?? fallback;
    if (!iconToRender) return null;
    if (React.isValidElement(iconToRender)) {
      return iconToRender;
    }
    return (
      <img src={iconToRender} alt="icon" className="w-6 h-6 object-contain" />
    );
  };

  // Determine if using new layout (with inputs/outputs) or old layout
  const useNewLayout = inputs.length > 0 || outputs.length > 0;

  return (
    <section className="w-full py-20 relative z-10 border-t border-white/5">
      <div className="space-y-16">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${tagBorderColor} ${tagBgColor} ${tagTextColor} text-xs font-semibold uppercase tracking-wider`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {sectionTag}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-snug">
            {heading}
          </h2>
          {intro && (
            <p className="mx-auto max-w-2xl text-gray-400 leading-relaxed text-lg">
              {intro}
            </p>
          )}
        </div>

        {/* New Layout: Process Flow + Input/Output Sections */}
        {useNewLayout ? (
          <div className="space-y-12">
            {/* Process Flow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 md:gap-6"
            >
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                {processSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div
                      className={`
          inline-flex
          w-full
          max-w-[260px]
          sm:min-w-[14rem]
          sm:w-auto
          items-center
          justify-center
          rounded-full
          border
          ${cardBorderColor}
          px-6
          py-3
          text-sm
          font-semibold
          tracking-wide
          ${idx === 1 ? custom_theme.box_background : ""}
          text-white
          shadow-[0_0_40px_rgba(15,23,42,0.35)]
        `}
                    >
                      <div className="flex items-center gap-3">
                        {(step.icon || processIcons[step.label]) && (
                          <span
                            className={`relative flex h-10 w-10 items-center justify-center rounded-full ${iconBgColor} text-current`}
                          >
                            <span
                              className={`absolute inset-0 rounded-full border border-dashed ${tagBorderColor}`}
                            />
                            {renderIcon(step.icon, processIcons[step.label])}
                          </span>
                        )}

                        <span>{step.label}</span>
                      </div>
                    </div>

                    {idx < processSteps.length - 1 && (
                      <div className="flex items-center justify-center rotate-90 sm:rotate-0">
                        <ChevronsRight
                          className={
                            custom_theme.chevron_color ?? "text-white/50"
                          }
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            {/* Input/Output Sections */}
            <div
              className={`rounded-[2rem] border ${cardBorderColor} ${outerBgColor} p-6 shadow-[0_0_70px_rgba(15,23,42,0.35)]`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`rounded-[2rem] border ${cardBorderColor} bg-black/30 backdrop-blur-xl p-8`}
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-white font-bold text-2xl">Inputs</h3>
                      <p className="text-gray-400 text-sm mt-2">
                        The Raw Inputs
                      </p>
                    </div>
                    <div className="space-y-4">
                      {inputs.map((input, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + idx * 0.08,
                          }}
                          viewport={{ once: true }}
                          className={`flex items-center gap-4 rounded-3xl border ${cardBorderColor} ${idx === 0 ? (custom_theme.box_background ?? firstItemBg) : cardBgColor} p-4 transition-colors hover:bg-white/10 ${idx === 0 ? "shadow-[0_0_30px_rgba(234,166,141,0.18)]" : ""}`}
                        >
                          <div
                            className={`flex-shrink-0 min-w-[3rem] w-12 h-12 rounded-xl flex items-center justify-center ${
                              idx === 0
                                ? `${custom_theme.icon_bg ?? firstItemIconBg}`
                                : `bg-transparent border ${iconBorderColor}`
                            }`}
                          >
                            {renderIcon(input.icon, inputIcons[idx])}
                          </div>
                          <div>
                            <p className="text-white font-medium text-sm">
                              {input.title}
                            </p>
                            {/* {input.description && (
                              <p className="text-gray-400 text-xs mt-1">
                                {input.description}
                              </p>
                            )} */}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col items-center justify-center"
                >
                  <div
                    className="relative flex h-48 w-52 items-center justify-center rounded-[2.5rem] bg-gradient-to-br shadow-[0_0_60px_rgba(15,23,42,0.35)]"
                    style={{
                      backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    }}
                  >
                    <span
                      className={`absolute inset-0 rounded-full border border-dashed ${tagBorderColor} opacity-40`}
                    />
                    <span
                      className={`absolute -inset-6 rounded-full border border-dashed ${tagBorderColor} opacity-25`}
                    />
                    <div
                      className={`relative flex h-36 w-36 items-center justify-center rounded-full bg-black/85 border ${iconBorderColor} p-1`}
                    >
                      <span
                        className={`absolute inset-0 rounded-full border border-dashed ${tagBorderColor} opacity-50`}
                      />
                      <div
                        className={`relative flex h-28 w-28 items-center justify-center rounded-full ${custom_theme.icon_shadow} ${custom_theme?.center_icon_bg ?? "bg-slate-950"}`}
                      >
                        <img
                          src={centerImage}
                          alt={centerBrand}
                          className={`${custom_theme.center_icon_size ?? "h-16 w-16"} object-contain`}
                        />
                      </div>
                    </div>
                  </div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.35em] mt-4 ${custom_theme.chevron_color}`}
                  >
                    {centerBrand}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`rounded-[2rem] border ${cardBorderColor} ${innerCardBgColor} backdrop-blur-xl p-8`}
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-white font-bold text-2xl">Outputs</h3>
                      <p className="text-gray-400 text-sm mt-2">
                        The Human Result
                      </p>
                    </div>
                    <div className="space-y-4">
                      {outputs.map((output, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + idx * 0.08,
                          }}
                          viewport={{ once: true }}
                          className={`flex items-center gap-5 rounded-3xl border ${cardBorderColor} ${idx === 0 ? (custom_theme.box_background ?? firstItemBg) : cardBgColor} p-4 transition-colors hover:bg-white/10 ${idx === 0 ? "shadow-[0_0_30px_rgba(234,166,141,0.18)]" : ""}`}
                        >
                          <div
                            className={`flex-shrink-0 min-w-[3rem] w-12 h-12 rounded-xl flex items-center justify-center ${
                              idx === 0
                                ? `${custom_theme.icon_bg ?? firstItemIconBg}`
                                : `bg-transparent border ${iconBorderColor}`
                            }`}
                          >
                            {renderIcon(
                              output.icon,
                              outputIconMap[output.title] || outputIcons[idx],
                            )}
                          </div>
                          <div>
                            <p className="text-white font-medium text-sm">
                              {output.title}
                            </p>
                            {output.description && (
                              <p className="text-gray-400 text-xs mt-1">
                                {output.description}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ) : (
          // Old Layout: Vertical Steps (for backward compatibility)
          <div className="relative">
            {/* Vertical connector line on desktop */}
            <div
              className={`hidden lg:block absolute left-6 top-12 bottom-12 w-px bg-gradient-to-b ${connectorColor}`}
            />

            <div className="space-y-6">
              {steps.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-start gap-6 glass-panel p-8 border ${cardBorderColor} hover:bg-white/5 transition-colors group relative overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 0% 50%, ${glowColor}, transparent 60%)`,
                    }}
                  />

                  {/* Step number circle */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full border-2 ${stepBorderColor} flex items-center justify-center font-bold text-white bg-background relative z-10`}
                  >
                    {item.step || String(idx + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1 relative z-10">
                    <h3 className="text-white font-semibold text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover accent marker */}
                  <div
                    className={`hidden lg:flex items-center self-center ${accentTextColor} opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Optional bottom CTA */}
        {cta && (
          <div className="flex justify-center pt-4">
            <a
              href={cta.href || "#"}
              className={`px-8 py-3.5 rounded-full text-white font-medium bg-gradient-to-r ${gradientFrom} ${gradientTo} shadow-lg transition-all hover:opacity-90`}
              style={{ boxShadow: `0 0 20px ${glowColor}` }}
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
