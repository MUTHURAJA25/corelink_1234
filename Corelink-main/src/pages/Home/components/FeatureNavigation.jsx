import React, { useState, useRef, useEffect } from "react";
import { Landmark, Activity, TrendingUp, Users } from "lucide-react";

const features = [
  {
    id: "governance",
    title: "Governance",
    description: "Bank-led policy & oversight",
    icon: Landmark,
    theme: {
      iconBg: "bg-[#A7E83E]",
      iconColor: "text-[#284E00]",
      iconGlow: "shadow-[0_12px_26px_rgba(167,232,62,0.45)]",
      activeBg: "bg-gradient-to-br from-[#A7E83E]/20 via-[#A7E83E]/5 to-transparent",
      sliderGradient: "from-[#84D814] via-[#2F80ED] to-[#5856D6]",
    },
  },
  {
    id: "operations",
    title: "Operations",
    description: "One connected workflow spine",
    icon: Activity,
    theme: {
      iconBg: "bg-[#D8EEFD]",
      iconColor: "text-[#247CE7]",
      iconGlow: "shadow-[0_12px_26px_rgba(36,124,231,0.25)]",
      activeBg: "bg-gradient-to-br from-[#D8EEFD]/60 via-[#D8EEFD]/15 to-transparent",
      sliderGradient: "from-[#247CE7] via-[#00B4D8] to-[#6C5CE7]",
    },
  },
  {
    id: "credit-intelligence",
    title: "Credit Intelligence",
    description: "Decision-ready risk signals",
    icon: TrendingUp,
    theme: {
      iconBg: "bg-[#D0F5EB]",
      iconColor: "text-[#18A27E]",
      iconGlow: "shadow-[0_12px_26px_rgba(24,162,126,0.25)]",
      activeBg: "bg-gradient-to-br from-[#D0F5EB]/60 via-[#D0F5EB]/15 to-transparent",
      sliderGradient: "from-[#18A27E] via-[#20BF6B] to-[#0984E3]",
    },
  },
  {
    id: "member-experience",
    title: "Member Experience",
    description: "Digital access for members",
    icon: Users,
    theme: {
      iconBg: "bg-[#E2E6FF]",
      iconColor: "text-[#5468FF]",
      iconGlow: "shadow-[0_12px_26px_rgba(84,104,255,0.25)]",
      activeBg: "bg-gradient-to-br from-[#E2E6FF]/60 via-[#E2E6FF]/15 to-transparent",
      sliderGradient: "from-[#5468FF] via-[#706FD3] to-[#FF5252]",
    },
  },
];

export default function FeatureNavigation({
  items = features,
  activeIndex: controlledIndex,
  onChange,
  className = "",
}) {
  const [internalActiveIndex, setInternalActiveIndex] = useState(0);
  const activeIndex = controlledIndex ?? internalActiveIndex;

  const containerRef = useRef(null);
  const tabRefs = useRef([]);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updateLine = () => {
      const container = containerRef.current;
      const currentTab = tabRefs.current[activeIndex];
      if (container && currentTab) {
        const containerRect = container.getBoundingClientRect();
        const tabRect = currentTab.getBoundingClientRect();
        setLineStyle({
          left: tabRect.left - containerRect.left + 16,
          width: tabRect.width - 32,
        });
      }
    };

    updateLine();
    window.addEventListener("resize", updateLine);
    return () => window.removeEventListener("resize", updateLine);
  }, [activeIndex]);

  const handleSelect = (index) => {
    setInternalActiveIndex(index);
    onChange?.(index);
  };

  return (
    <div
      className={`relative z-30 bottom-[80px] mx-auto w-full max-w-7xl px-4 sm:px-6 ${className}`}
    >
      {/* Main Container */}
      <div
        ref={containerRef}
        className="relative flex flex-col justify-center rounded-[32px] sm:rounded-[40px] border border-slate-100/80 bg-white p-3 sm:p-4 shadow-[0_22px_55px_rgba(20,30,60,0.06)]"
      >
        {/* Responsive Grid with Spacing on Mobile & Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-3 xl:gap-0 items-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id || index}
                ref={(el) => (tabRefs.current[index] = el)}
                onMouseEnter={() => handleSelect(index)}
                onClick={() => handleSelect(index)}
                className="relative flex h-full cursor-pointer select-none items-center"
              >
                {/* Tab Card */}
                <div
                  className={`
                    flex h-full w-full items-center gap-4 rounded-[24px] sm:rounded-[28px] px-4 sm:px-5 py-3.5 sm:py-4.5
                    transition-all duration-300 ease-out
                    ${isActive ? item.theme.activeBg : "bg-slate-50/50 xl:bg-transparent"}
                  `}
                >
                  {/* Circular Icon */}
                  <div
                    className={`
                      flex h-[46px] w-[46px] sm:h-[50px] sm:w-[50px] shrink-0 items-center justify-center rounded-full
                      transition-all duration-300
                      ${item.theme.iconBg}
                      ${isActive ? item.theme.iconGlow : "opacity-90"}
                    `}
                  >
                    {Icon && (
                      <Icon
                        size={22}
                        strokeWidth={2}
                        className={item.theme.iconColor}
                      />
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span
                      className={`
                        truncate text-[15px] sm:text-[15.5px] font-bold tracking-tight transition-colors duration-200
                        ${isActive ? "text-[#121B2A]" : "font-semibold text-[#697281]"}
                      `}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`
                        mt-0.5 sm:mt-1 whitespace-nowrap text-[11.5px] sm:text-[12px] font-normal transition-colors duration-200
                        ${isActive ? "text-[#7A8799]" : "text-[#9CA3AF]"}
                      `}
                    >
                      {item.description}
                    </span>
                  </div>
                </div>

                {/* Vertical Divider (Desktop Only) */}
                {index < items.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-[38px] w-[1px] -translate-y-1/2 bg-[#E5E9F0] xl:block" />
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Sliding Line (Desktop Only) */}
        <div
          className={`
            hidden xl:block absolute bottom-[9px] h-[3.5px] rounded-full transition-all duration-400 ease-out
            bg-gradient-to-r ${items[activeIndex]?.theme.sliderGradient || "from-[#84D814] to-[#5856D6]"}
          `}
          style={{
            left: `${lineStyle.left}px`,
            width: `${lineStyle.width}px`,
          }}
        />
      </div>
    </div>
  );
}