import React from "react";
import ProductView from "./components/ProductView";
import ProductHeroSection from "./components/ProductHeroSection";
import ProblemItSolves from './components/ProblemItSolves';
import HowItsProcessed from './components/HowItsProcessed';
import ConnectedPlatformCTA from '../Home/components/ConnectTheCoreCTA';
import KeyFeatures from './components/KeyFeatures';
import IntelligenceLayer from './components/IntelligenceLayer';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeatureTabss from '../Home/components/FeatureTabs';
import { Landmark, Users } from 'lucide-react';
import { Images } from '../../assets/images';

import EcosystemOperationsLayer from "./EcosystemOperationsLayer";

const BankControlLayer = () => {


  const PRODUCT_FEATURE_TABS = [
    {
      title: "Bank Control Layer",
      icon: Landmark,
      image: null,
      iconBg: "bg-[#C8F18B]",
      iconColor: "text-[#4D7A24]",
      activeGradient:
        "bg-[linear-gradient(165deg,#C8F18B80,#C8F18B00,transparent)]",
    },

    {
      title: "Ecosystem Operations Layer",
      icon: Landmark,
      image: null,
      iconBg: "bg-[#DCEEFF]",
      iconColor: "text-[#3D8BD9]",
      activeGradient:
        "bg-[linear-gradient(149deg,#DCEEFF80,#DCEEFF20,transparent)]",
    },

    {
      title: "Credit & Intelligence Layer",
      icon: null,
      image: Images.landingpagehero.icons.Chart,
      iconBg: "bg-[#DDF3EF]",
      iconColor: "text-[#36A995]",
      activeGradient:
        "bg-[linear-gradient(149deg,#DDF3EF80,#DDF3EF20,transparent)]",
    },

    {
      title: "Member Experience Layer",
      icon: Users,
      image: null,
      iconBg: "bg-[#E4E7FF]",
      iconColor: "text-[#514DDA]",
      activeGradient:
        "bg-[linear-gradient(149deg,#E4E7FF80,#E4E7FF20,transparent)]",
    },

    {
      title: "Rails & Disbursals Layer",
      icon: Users,
      image: null,
      iconBg: "bg-[#E4E7FF]",
      iconColor: "text-[#514DDA]",
      activeGradient:
        "bg-[linear-gradient(149deg,#E4E7FF80,#E4E7FF20,transparent)]",
    },
  ];


  return (
    <div className="relative w-full overflow-hidden text-white">

      <ProductHeroSection />
      <FeatureTabss
        items={PRODUCT_FEATURE_TABS}
        gridClassName="
        xl:grid-cols-[0.9fr_1.2fr_1.1fr_1.1fr_1fr]
      "
        tabGap="gap-2"
        tabPadding="p-4"
        cardpadding="p-0"
        iconSize={40}
        lucideIconSize={20}
        fontsize={14}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductView currentLayer="bank-control-layer" />
      </div>
      <ProblemItSolves />
      <HowItsProcessed />
      <KeyFeatures />
      <IntelligenceLayer />

      <section className="w-full mx-auto">
        {/* <ConnectedPlatformCTA /> */}
      </section>
    </div>
  );
};

export default BankControlLayer;
