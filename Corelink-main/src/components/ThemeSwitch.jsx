import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitch = ({ isDark, onToggle }) => {
  const [internalEnabled, setInternalEnabled] = useState(false);

  const enabled = isDark !== undefined ? isDark : internalEnabled;

  const handleClick = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalEnabled((prev) => !prev);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={handleClick}
      className="hidden md:inline-flex relative items-center justify-center focus:outline-none group select-none cursor-pointer p-1"
    >
      {/* Outer Dark Border Frame */}

      <div className="relative flex items-center h-[40px] md:h-[47px] w-[70px] md:w-[85px] rounded-full border-[4px] md:border-[5px] border-[#18191e] bg-gradient-to-b from-[#b5c7ef] via-[#9eb4e2] to-[#8ea4db] shadow-[0_12px_28px_rgba(0,0,0,0.35),0_2px_6px_rgba(0,0,0,0.2)]">
        {/* Inner Glowing Light-Blue Rim & Highlight */}
        <div className="absolute inset-0 rounded-full border border-white/80 pointer-events-none" />

        {/* Subtle top inner light highlight */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.95)] pointer-events-none" />

        {/* The Knob / Slider Thumb */}
        <div
          className={`relative z-10 flex items-center justify-center h-[32px] md:h-[35px] w-[32px] md:w-[35px] rounded-full transition-transform duration-300 ease-in-out ${
            enabled
              ? "translate-x-[31px] md:translate-x-[40px]"
              : "translate-x-[2px]"
          }`}
        >
          {/* Knob Layer 1: Outer metallic ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#ffffff] via-[#c2d3f2] to-[#8fa4d4] p-[1.5px] shadow-[0_4px_10px_rgba(0,0,0,0.3),0_1px_3px_rgba(0,0,0,0.2)]">
            {/* Knob Layer 2: Concentric groove / inset bevel ring */}
            <div className="h-full w-full rounded-full bg-gradient-to-b from-[#dde8fa] via-[#b6c7e8] to-[#9fb2de] p-[2.5px] shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.2),inset_0_-1px_1.5px_rgba(255,255,255,0.85)]">
              {/* Knob Layer 3: Center dish surface */}
              <div className="relative flex items-center justify-center h-full w-full rounded-full bg-gradient-to-b from-[#c9d9f5] via-[#b5c6e8] to-[#9cb0de] shadow-[inset_0_1px_2px_rgba(255,255,255,0.95)]">
                {enabled ? (
                  <Moon className="h-[13px] w-[13px] md:h-[15px] md:w-[15px] text-[#0a101d] stroke-[2.3]" />
                ) : (
                  <Sun className="h-[13px] w-[13px] md:h-[15px] md:w-[15px] text-[#0a101d] stroke-[2.4]" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeSwitch;
