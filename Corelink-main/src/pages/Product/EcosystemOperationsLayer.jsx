import React from "react";
import { ArrowRight, EyeIcon, TargetIcon, TvIcon } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Images } from "../../assets/images";
import CustomButton from "../../components/common/Button";
import ProductHeroSection from "./components/ProductHeroSection";
import KeyFeatures from "./components/KeyFeatures";
import VisionMission from "../About/VisionMission";
import bgCard from "../../images/Aboutproduct/BackgroundCard.jpg";

const ecosystemList = [
  {
    id: 1,
    title: "Workflow Orchestration",
    icon: Images.Product.schema,
  },
  {
    id: 2,
    title: "Process Automation",
    icon: Images.Product.robot_2,
  },
  {
    id: 3,
    title: "Task & Work Management",
    icon: Images.Product.list_alt_check,
  },
  {
    id: 4,
    title: "Real-Time Visibility",
    icon: Images.Product.eye_tracking,
  },
];

const EcosystemOperationsLayer = () => {
  return (
    <div className="mx-auto max-w-[1280px] px-4 pt-20 sm:px-6 lg:px-8 mb-[100px]" id="ecosystem-operations-layer">
      <div
        className="relative overflow-hidden rounded-[28px] px-6 py-8 shadow-[0_25px_50px_-24px_rgba(4,20,26,0.7)] sm:px-10 sm:py-10 lg:px-12 lg:py-12"
        style={{
          backgroundImage: `url(${bgCard})`,
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

        <div className="relative grid grid-cols-1 gap-0 divide-y divide-white/10 md:grid-cols-2 md:divide-x-0 md:divide-y-0 place-items-center">
          <div>
            <div className="mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none">
              <img
                src={Images.Product.ecosystemproductimg}
                alt="Digital banking ecosystem illustration with shield, ledger, member ID and analytics"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
          <div>
            {" "}
            <div className="mb-[2.2cqw] inline-flex items-center justify-center rounded-full bg-white px-[1.0cqw] py-[0.5cqw]">
              <span
                className="whitespace-nowrap font-semibold uppercase tracking-[0.14em] text-[#5B45E0]"
                style={{ fontSize: "clamp(8px, 0.85cqw, 11px)" }}
              >
                One Connected Platform
              </span>
            </div>
            <h1 className="text-white text-[35px] font-bold text-black">
              #2{" "}
              <span className="text-[35px] font-bold title-gradient">
                Ecosystem Operations Layer
              </span>
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[rgba(252,252,252,1)] sm:mt-4 sm:text-base sm:leading-7 lg:text-[14px]">
              CoreLink is a bank-led digital infrastructure platform that
              connects governance, financial operations, credit, payments, and
              services through one intelligent ecosystem—giving banks greater
              visibility, control, and trust.
            </p>
            <div className="  flex items-center">
              <p className="my-5 text-[20px] md:w-[100%] lg:w-[25%] font-semibold ">
                Key Feature
              </p>
              <div className=" w-full h-[1px] md:w-[100%] lg:w-[75%] rounded-lg bg-[linear-gradient(100deg,_#9DF400_6.17%,_#1778CB_37.73%,_#3E9F8A_64.02%,_#4A55E4_93.83%)]"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ecosystemList.map((data) => {
                return (
                  <div className="flex items-center gap-2 w-full" key={data.id}>
                    <div
                      className={`rounded-full p-px`}
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(238, 255, 250, 0.5), rgba(119, 139, 137, 0.35) 48%, rgba(238, 255, 250, 0.42))",
                        boxShadow:
                          "-1px 3px 6px rgba(0, 0, 0, 0.08), -3px 11px 11px rgba(0, 0, 0, 0.07), -7px 24px 15px rgba(0, 0, 0, 0.04), -13px 43px 18px rgba(0, 0, 0, 0.01)",
                      }}
                    >
                      <div className="rounded-full bg-[rgba(29,35,35,0.78)] p-3 backdrop-blur-[15px]">
                        <img src={data.icon} />
                      </div>
                    </div>
                    <p className="text-[rgba(228,228,228,1)] text-[16px]  mb-0">
                      {data.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemOperationsLayer;
