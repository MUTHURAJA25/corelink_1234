import React from "react";
import SEO from "../../components/Seo";
import SeoData from "../../components/SeoData";
import WhoWeAre from "./Whoweare";
import VisionMission from "./VisionMission";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";
import ConnectedPlatformCTA from "../Home/components/ConnectTheCoreCTA";
import CommonBgSvg from "/src/images/about-common-bg.svg";

const About = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <SEO {...SeoData.about} />

      <div className="relative bg-gradient-to-b from-[#DAE6FD] via-[#EFE9FB] to-white">
        <WhoWeAre />
      </div>

      {/* Main section anchored to the bottom at full width/height */}
      <main
        className="relative z-10 w-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${CommonBgSvg})`,
          backgroundSize: "100% auto", // ensures it fills 100% width and rests flush at the bottom
        }}
      >
        <VisionMission />
        <WhatMakesUsDifferent />
        <ConnectedPlatformCTA />
      </main>
    </div>
  );
};

export default About;
