import React from "react";
import { motion } from "framer-motion";

function BorderBeamCard({
  id,
  number,
  title,
  description,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: delay * 0.15 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative w-full rounded-3xl bg-black/40 backdrop-blur-sm px-4 py-6 min-h-[220px] hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-shadow duration-700 overflow-hidden"
    >
      {/* Animated border with flowing white line - flows around outside */}
      <motion.svg 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: delay * 0.15 }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute -inset-0.5 w-[calc(100%+4px)] h-[calc(100%+4px)] pointer-events-none opacity-100 transition-opacity duration-500"
        preserveAspectRatio="none"
        style={{
          filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))"
        }}
      >
        <defs>
          <style>{`
            @keyframes flowBorder {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -800; }
            }
            .flowing-border {
              stroke: rgba(255, 255, 255, 1);
              stroke-width: 4;
              fill: none;
              stroke-dasharray: 1000;
              animation: flowBorder 8s linear infinite;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
          `}</style>
        </defs>
        <rect 
          x="1" 
          y="1" 
          width="calc(100% - 2px)" 
          height="calc(100% - 2px)" 
          rx="26" 
          ry="26" 
          className="flowing-border"
        />
      </motion.svg>

      {/* Static base border */}
      <div className="absolute inset-0 rounded-3xl border border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors duration-500 pointer-events-none" />
      {/* Gradient glow - top left - WHITE */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-3xl opacity-100 transition-opacity duration-500" />
      
      {/* Gradient glow - bottom right - WHITE */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-white/25 to-transparent rounded-full blur-3xl opacity-100" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header with number and icon */}
        <div className="flex items-start justify-between mb-6">
          <span className="text-sm font-medium tracking-widest text-white uppercase">
            {number}
          </span>
          
          <div className="flex p-[6px] items-center justify-center rounded-full bg-[#1935B533] group-hover:bg-blue-700/40 transition-colors duration-300">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6693 10.8311C16.6693 14.9978 13.7526 17.0811 10.2859 18.2894C10.1044 18.351 9.90722 18.348 9.7276 18.2811C6.2526 17.0811 3.33594 14.9978 3.33594 10.8311V4.99777C3.33594 4.77676 3.42374 4.5648 3.58002 4.40851C3.7363 4.25223 3.94826 4.16444 4.16927 4.16444C5.83594 4.16444 7.91927 3.16444 9.36927 1.89777C9.54582 1.74694 9.7704 1.66406 10.0026 1.66406C10.2348 1.66406 10.4594 1.74694 10.6359 1.89777C12.0943 3.17277 14.1693 4.16444 15.8359 4.16444C16.057 4.16444 16.2689 4.25223 16.4252 4.40851C16.5815 4.5648 16.6693 4.77676 16.6693 4.99777V10.8311Z"
                stroke="#0E95EC"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 10.0026L9.16667 11.6693L12.5 8.33594"
                stroke="#0E95EC"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="font-poppins text-xl font-semibold leading-tight text-white mb-2 group-hover:text-cyan-50 transition-colors duration-300">
            {title}
          </h3>

          <p className="font-poppins text-sm leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyExplainable() {
  const cardsData = [
    {
      id: "1",
      number: "01 / 03",
      title: "Slow Merchant Onboarding",
      description:
        "Manual verification delays merchant activation.",
      delay: 0,
    },
    {
      id: "2",
      number: "02 / 03",
      title: "Operational Complexity",
      description:
        "Multiple disconnected systems increase effort.",
      delay: 1,
    },
    {
      id: "3",
      number: "03 / 03",
      title: "Risk & Compliance",
      description:
        "Stronger fraud controls and governance are essential.",
      delay: 2,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden pb-12 pt-10 lg:px-0 px-6">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/3 w-56 h-56 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Content */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 mb-4 hover:border-cyan-500/60 transition-colors duration-300 fade-up">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              Why It Matters
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white mb-3 fade-up">
            Why Connected Banking Needs a {" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Smarter Approach
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 lg:whitespace-nowrap fade-up">
            Accelerate merchant onboarding and secure payment operations. Reduce operational complexity while staying fully compliant.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <BorderBeamCard key={card.id} {...card} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
