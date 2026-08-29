import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import PrivacyAtAGlance from "./components/PrivacyAtAGlance";
import WhyCorelink from "./components/WhyCorelink";
import CoreLinkPlatform from "./components/CorelinkPlatform";
import KnowledgeHub from "./components/KnowledgeHub";
import GovernanceControlSection from "./components/ComplianceByDesign";
import ConnectTheCoreCTA from "./components/ConnectTheCoreCTA";
import SEO from "../../components/Seo";
import seoData from "../../components/SeoData";
import { initFadeAnimations } from "../../utils/common";

const Home = () => {
  useEffect(() => {
    initFadeAnimations();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-white overflow-clip">
      <SEO {...seoData?.home} />
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-glow absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="bg-glow absolute right-0 top-1/3 translate-x-1/2" />
        <div className="bg-glow absolute bottom-0 left-1/4" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <HeroSection />

        <main className="mt-0 flex w-full max-w-7xl flex-col gap-16 px-4 pb-10 pt-0 sm:px-6 lg:px-8">
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-[-5px]">
            <PrivacyAtAGlance />
            <WhyCorelink />
            <CoreLinkPlatform />
            <GovernanceControlSection />
            <ConnectTheCoreCTA />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
