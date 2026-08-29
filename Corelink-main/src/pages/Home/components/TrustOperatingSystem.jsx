import React from "react";
import bg1 from "../../../images/glow_bg1.svg";
import bg2 from "../../../images/glow_bg2.svg";
import { Sparkles } from "lucide-react";

const TrustOperatingSystem = () => {
  return (
    <>
      <section
        className="
        relative
        left-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden
        py-10
        text-white
        pb-32
        bg-[#040B16]
      "
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050a0f] to-transparent pointer-events-none z-10" />
        {/* ================= LEFT GLOW ================= */}
        <img
          src={bg1}
          alt=""
          className="
    absolute
    left-0
    top-1/2
    -translate-y-1/2
    w-[600px]
    mix-blend-screen
    opacity-80
    pointer-events-none
  "
          style={{
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
          }}
        />

        <img
          src={bg2}
          alt=""
          className="
    absolute
    -right-40
    top-1/2
    -translate-y-1/2
    w-[700px]
    blur-[40px]
    h-auto
    opacity-70
    mix-blend-screen
    pointer-events-none
    z-0
  "
        />
        {/* ================= CONTENT ================= */}
        <div className="relative z-10 text-center text-left px-3">
          {/* Small Heading */}
          {/* <div className="mb-4 inline-flex  items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span>EXPERIENCE THE FUTURE</span>
          </div> */}

          {/* Main Heading */}
          <h1
            className="
            lg:text-[55px]
            text-[43px]
            font-semibold
            lg:leading-[64px]
            leading-[50px]
            tracking-[-1.5px]
            fade-up
          "
          >
            Scale Connected Banking with
            <span
              className="
              mt-2
              block
              bg-[linear-gradient(90.01deg,#B4F1FF_44.8%,#357CCE_63.39%)]
              bg-clip-text
              text-transparent
            "
            >
              Confidence
            </span>
          </h1>

          {/* Description */}
          <p
            className="
            mx-auto
            mt-[15px]
            text-[16px]
            font-normal
            leading-[28px]
            tracking-[-0.2px]
            text-[#EDF0F5]
            fade-up
          "
          >
            Transform merchant operations, payment workflows, and governance
            through one <br /> intelligent Connected Banking platform.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="mt-[40px] flex flex-row flex-wrap items-center justify-center gap-4 md:gap-5">
            {/* ========== GET STARTED ========== */}
            <div className="group/demo relative flex justify-center">
              <button
                className="
        group
        relative
        flex
        h-[50px]
        w-[160px]
        md:h-[62px]
        md:w-[186px]
        items-center
        justify-center
        overflow-hidden
        rounded-[62px]
        border
        border-white/20
        bg-[#0A192F]
        shadow-[0_0_64px_rgba(21,93,214,.25)]
        fade-up
      "
              >
                {/* Bottom Glow */}
                <span
                  className="
          absolute
          left-1/2
          bottom-[-30px]
          h-[90px]
          w-[70px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,#3FD1FF_68.5%,#266799_100%)]
          opacity-40
          blur-[36px]
          scale-75
          transition-all
          duration-500
          group-hover:scale-100
          group-hover:opacity-60
        "
                />

                {/* Moving Glow */}
                <div
                  className="
          absolute
          left-1/2
          top-full
          h-[130px]
          w-[130px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,#3FD1FF_0%,#266799_65%,transparent_100%)]
          opacity-40
          blur-[38px]
          transition-all
          duration-700
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:top-1/2
          group-hover:-translate-y-1/2
        "
                />

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2 text-[13px] md:gap-3 md:text-[14px]">
                  <Sparkles
                    size={16}
                    className="transition-transform duration-500 group-hover:rotate-180 md:size-[18px]"
                  />
                  Get Started
                </span>
              </button>
            </div>

            {/* ========== WATCH A DEMO ========== */}
            {/* ========== WATCH A DEMO ========== */}
            <div
              className="
    group/watch
    h-[50px]
    w-[160px]
    md:h-[59px]
    md:w-[186px]
    rounded-full
    overflow-hidden          {/* ✅ ADD THIS — clips the black bg to the border shape */}
    bg-[linear-gradient(84.93deg,rgba(255,255,255,0.6)_1.96%,rgba(106,141,255,0.6)_50.04%,rgba(255,255,255,0.6)_93.96%)]
    p-[1px]
    p-[2px]
    fade-up
  "
            >
              <button
                className="
      relative
      w-full          
      h-full          
      overflow-hidden
      rounded-full
      bg-black
      text-[13px]
      md:text-[14px]
      font-semibold
      leading-[20px]
      text-white
    "
              >
                {/* Text */}
                <span
                  className="
        absolute
        left-5
        top-1/2
        -translate-y-1/2
        whitespace-nowrap
        transition-all
        duration-300
        ease-in-out
        group-hover/watch:left-1/2
        group-hover/watch:-translate-x-1/2
        md:left-8
      "
                >
                  Watch a Demo
                </span>

                {/* Arrow */}
                <span
                  className="
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        transition-all
        duration-300
        ease-in-out
        group-hover/watch:translate-x-10
        group-hover/watch:opacity-0
        md:right-7
      "
                >
                  ❯❯
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050a0f] to-transparent pointer-events-none" />
      </section>
    </>
  );
};

export default TrustOperatingSystem;
