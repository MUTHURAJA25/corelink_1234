import React, { useEffect, useRef, useState } from 'react';

const MeasurableImpact = () => {
  const metrics = [
    {
      value: 7,
      suffix: "",
      label: "Day Go-Live ",
      desc: "Launch production-ready solutions in just seven days."
    },
    {
      value: 10,
      suffix: "×",
      label: "Faster Deployment ",
      desc: "Deploy faster with plug-and-play integrations and scalable architecture."
    },
    {
      value: 80,
      suffix: "%",
      label: "Faster Implementation ",
      desc: "Simplify implementation using configurable workflows and automation."
    },
    {
      value: 95,
      suffix: "%",
      label: "Faster Platform Rollout",
      desc: "Enable enterprise-wide rollout with speed, consistency, and governance."
    }
  ];

  const sectionRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounts();
          } else {
            // reset so it can play again next time it enters
            if (animationFrameRef.current) {
              cancelAnimationFrame(animationFrameRef.current);
            }
            setCounts(metrics.map(() => 0));
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const animateCounts = () => {
    const duration = 1500; // ms
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic for a nice deceleration
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(
        metrics.map((metric) => Math.round(metric.value * eased))
      );

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);
  };

  return (
    <section ref={sectionRef} className="w-full py-16 relative z-10">

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/30 mb-6 fade-up">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
        <span className="text-cyan-400 text-[11px] tracking-wider font-semibold uppercase">
          THE PLATFORM
        </span>
      </div>

      {/* Title with Gradient Text */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-[45px] font-bold tracking-tight mb-3 fade-up">
          Measurable Business{" "}
          <span className="bg-gradient-to-r from-[#B4F1FF] via-[#B4F1FF] to-blue-500 bg-clip-text text-transparent">
            Impact
          </span>
        </h2>
        {/* Description */}
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 lg:whitespace-nowrap mb-[50px] fade-up">
          Accelerate digital banking transformation with measurable operational improvements.
          </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-y border-neutral-800 text-center md:text-left">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-between py-8 px-6 fade-up ${idx !== 0 ? 'border-t sm:border-t-0 border-neutral-800 sm:border-l' : ''
              }`}
          >
            {/* Top Text Group */}
            <div>
              {/* Big Stat Number */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4 tabular-nums">
                {counts[idx]}{metric.suffix}
              </div>

              {/* Subhead (Label) */}
              <div className="text-lg text-[#EDF0F5] font-bold">
                {metric.label}
              </div>

              {/* Small Description */}
              <div className="text-xs text-neutral-400 mt-1">
                {metric.desc}
              </div>
            </div>

            {/* Bottom Accent Bar matching the reference gradient */}
            <div className="w-[64px] h-[3px] mx-auto md:mx-0 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 rounded-full mt-[15px]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeasurableImpact;