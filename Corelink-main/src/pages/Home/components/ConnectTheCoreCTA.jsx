import React from "react";
import { Images } from "../../../assets/images";
import CustomButton from "../../../components/common/Button";

const ConnectTheCoreCTA = ({ className = "" }) => {

  return (
    <section
  className={`w-full px-4 pt-8 sm:pt-10 pb-8 sm:pb-5 sm:mb-20 lg:px-8 relative  ${className}`}
>
      {/* bottom-center glow, sitting behind the card and bleeding past its edge */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-20 -translate-x-1/2 translate-y-1/3 w-[40%] max-w-[560px] h-12 rounded-full blur-[60px] opacity-50 hidden sm:block"
        style={{
          background: "linear-gradient(135deg, #9FE600 0%, #7DCE4D 100%)",
        }}
      />
      <img
        src={Images.landingpageconnected.ConnectedCornerVector}
        alt=""
        className="absolute select-none pointer-events-none hidden sm:block"
        style={{
          top: "57%",
          right: "0%",
          transform: "translateY(-50%)",
          height: "131%",
          width: "35%",
          opacity: 0.8,
        }}
        draggable={false}
      />

      {/* ---------- MOBILE: stacked card, no background image ---------- */}
      <div
        className="relative w-full max-w-[1300px] mx-auto rounded-[28px] px-6 py-9 text-center sm:hidden"
        style={{
          containerType: "inline-size",
          background:
            "#182540",
        }}
      >
        <div className="mx-auto mb-5 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5">
          <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5B45E0]">
            A Connected Next Step
          </span>
        </div>

        <h2 className="text-[26px] font-extrabold leading-[1.2] tracking-tight text-white">
          Connect The Core
          <span
            className="inline-block align-baseline"
            style={{
              width: "0.22em",
              height: "0.22em",
              marginLeft: "0.06em",
              background: "#fff",
            }}
          />
          <br />
          Power The Ecosystem
          <span
            className="inline-block align-baseline"
            style={{
              width: "0.22em",
              height: "0.22em",
              marginLeft: "0.06em",
              background: "#fff",
            }}
          />
        </h2>

        <p className="mx-auto mt-4 max-w-[22rem] text-sm leading-[1.5] text-white/60">
          Bring banks, societies, members, and financial services together
          through one connected platform.
        </p>


         <CustomButton
          variant="none"
          className="mt-7 !inline-flex !h-auto items-center justify-center whitespace-nowrap rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
          contentClassName="gap-2"
          style={{
            padding: "0.9rem 1.6rem",
            fontSize: "14px",
            background:
              "linear-gradient(140deg, #6A44F2 0%, #5B3CCA 22.1%, #8961CE 46.6%, #342964 78.4%, #25223D 100%)",
            border: "1px solid transparent",
            backgroundImage:
              "linear-gradient(140deg, #6A44F2 0%, #5B3CCA 22.1%, #8961CE 46.6%, #342964 78.4%, #25223D 100%), linear-gradient(180deg, #E8DAFF 0%, #270F7F 100%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            boxShadow: "0 8px 24px -6px rgba(37, 34, 61, 0.6)",
          }}
        >
          Connect with CoreLink
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </CustomButton>
      </div>

      {/* ---------- sm+: original image-overlay design ---------- */}
      <div
        className="relative hidden w-full max-w-[1200px] mx-auto overflow-hidden sm:block"
        style={{ containerType: "inline-size", borderRadius: "2.6cqw" }}
      >
        <img
          src={Images.landingpageconnected.ConnectedSectionBg}
          alt=""
          className="block w-full h-auto select-none pointer-events-none"
          draggable={false}
        />

        {/* centered content overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <div className="mb-[2.2cqw] inline-flex items-center justify-center rounded-full bg-white px-[1.6cqw] py-[0.7cqw]">
            <span
              className="whitespace-nowrap font-semibold uppercase tracking-[0.14em] text-[#5B45E0]"
              style={{ fontSize: "clamp(8px, 0.85cqw, 14px)" }}
            >
              One Connected Platform
            </span>
          </div>

          <h2
              className="font-bold tracking-tight text-white leading-[1.15]"
              style={{ fontSize: "clamp(18px, 3.6cqw, 42px)" }}
            >
              Connect The Core
              <span
                className="inline-block align-baseline"
                style={{
                  width: "0.22em",
                  height: "0.22em",
                  marginLeft: "0.06em",
                  marginRight: "0.32em",
                  background: "#fff",
                }}
              />
              Power The Ecosystem
              <span
                className="inline-block align-baseline"
                style={{
                  width: "0.22em",
                  height: "0.22em",
                  marginLeft: "0.06em",
                  background: "#fff",
                }}
              />
            </h2>

            <p
              className="mt-[1.6cqw] max-w-[52cqw] text-white/60 leading-[1.5]"
              style={{ fontSize: "clamp(9px, 1.02cqw, 16px)" }}
            >
              Bring banks, societies, members, and financial services together
              through one connected platform.
            </p>


           <CustomButton
            variant="none"
            className="mt-[2.6cqw] !inline-flex !h-auto items-center justify-center whitespace-nowrap rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            contentClassName="gap-[0.5em]"
            style={{
              padding: "1.1cqw 2.2cqw",
              fontSize: "clamp(8px, 1.34cqw, 16px)",
              background:
                "linear-gradient(140deg, #6A44F2 0%, #5B3CCA 22.1%, #8961CE 46.6%, #342964 78.4%, #25223D 100%)",
              border: "1px solid transparent",
              backgroundImage:
                "linear-gradient(140deg, #6A44F2 0%, #5B3CCA 22.1%, #8961CE 46.6%, #342964 78.4%, #25223D 100%), linear-gradient(180deg, #E8DAFF 0%, #270F7F 100%)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              boxShadow: "0 8px 24px -6px rgba(37, 34, 61, 0.6)",
            }}
          >
            Connect with CoreLink
            <svg
              className="h-[1em] w-[1em] transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default ConnectTheCoreCTA;
