import React from "react";
import howitsworkbg from "../../../images/howitsproccessedimg.svg";
import howitsworkicon from "../../../images/problemitssolvesiconone.png";
import howitsworkicontwo from "../../../images/problemitssolvesicontwo.png";

const ProblemItSolves = ({ data }) => {
  return (
    <section
      className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      style={{
        backgroundImage: `url(${howitsworkbg})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
        <div className="space-y-3  ">
          <div className="inline-flex  items-center gap-2 rounded-full bg-[rgba(255,255,255,0.08)] px-4 py-2 text-xs  uppercase tracking-wide text-[#FFFFFF] border border-[rgba(255,255,255,0.16)]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#FFFFFF]"
              aria-hidden="true"
            />
            Connected Workflows
          </div>
          <h1 className="mt-4 text-[#FFFFFF] text-[34px] font-bold leading-[1.06] sm:text-[18px] md:text-[20px] lg:text-[30px]">
            Problem it Solves
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-[1.64] text-[#FCFCFC] opacity-75 sm:text-base sm:leading-[1.7] md:text-[14px] md:leading-[1.76]">
            Eliminates fragmented processes by centralizing approvals,
            monitoring, compliance and decision-making into one secure platform.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div style={{ width: "90px" }}>
              {" "}
              <img src={howitsworkicon} alt="How it works icon" />
            </div>
            <span className="text-[rgba(252,252,252,0.75)] text-sm ">
              Disconnected systems limit operational visibility, governance and
              regulatory oversight across banking ecosystems.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div style={{ width: "100px" }}>
              <img src={howitsworkicontwo} alt="How it works icon" />
            </div>
            <span className="text-[#FFFFFF] text-sm ">
              The Bank Control Layer unifies control, approvals and monitoring
              to improve transparency and institutional accountability.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemItSolves;
