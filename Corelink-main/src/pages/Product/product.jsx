import React from "react";

import ConnectTheCoreCTA from "../Home/components/ConnectTheCoreCTA";
import FeatureTabs from "../Home/components/FeatureTabs";

import ProductHeroSection from "./components/ProductHeroSection";
import IntelligenceLayer from "./components/IntelligenceLayer";
import ProductView from "./components/ProductView";

import EcosystemOperationsLayer from "./EcosystemOperationsLayer";
import MemberExperienceLayer from "./MemberExperienceLayer";
import RailsDisbursalsLayer from "./RailsDisbursalsLayer";

import {
  Brain,
  Landmark,
  Layers,
  Users,
} from "lucide-react";

import { Images } from "../../assets/images";
import combineBg from "../../images/combine-bg.png";

import SEO from "../../components/Seo";
import SeoData from "../../components/SeoData";

const Product = () => {
  const PRODUCT_FEATURE_TABS = [
    {
      title: "Bank Control Layer",
      icon: Landmark,
      image: null,
      iconBg: "bg-[#C8F18B]",
      iconColor: "text-[#4D7A24]",
      activeGradient:
        "bg-[linear-gradient(165deg,#C8F18B80,#C8F18B00,transparent)]",
      link: "bank-control-layer",
    },

    {
      title: "Ecosystem Operations Layer",
      icon: null,
      image: Images.Product.Ecosystemoperation,
      iconBg: "bg-[#DCEEFF]",
      iconColor: "text-[#3D8BD9]",
      activeGradient:
        "bg-[linear-gradient(149deg,#DCEEFF80,#DCEEFF20,transparent)]",
      link: "ecosystem-operations-layer",
    },

    {
      title: "Credit & Intelligence Layer",
      icon: Brain,
      image: null,
      iconBg: "bg-[#DDF3EF]",
      iconColor: "text-[#36A995]",
      activeGradient:
        "bg-[linear-gradient(149deg,#DDF3EF80,#DDF3EF20,transparent)]",
      link: "credit-intelligence-layer",
    },

    {
      title: "Member Experience Layer",
      icon: Users,
      image: null,
      iconBg: "bg-[#E4E7FF]",
      iconColor: "text-[#514DDA]",
      activeGradient:
        "bg-[linear-gradient(149deg,#E4E7FF80,#E4E7FF20,transparent)]",
      link: "member-experience-layer",
    },

    {
      title: "Rails & Disbursals Layer",
      icon: Layers,
      image: null,
      iconBg: "bg-[#F0DEF7]",
      iconColor: "text-[#7B128E]",
      activeGradient:
        "bg-[linear-gradient(149deg,#F0DEF780,#F0DEF720,transparent)]",
      link: "rails-disbursals-layer",
    },
  ];

  return (
    <div className="w-full overflow-x-clip bg-white">
      <SEO {...SeoData.products} />

      <main className="w-full overflow-hidden bg-white">

        {/* =====================================================
            HERO
        ===================================================== */}

        <ProductHeroSection />

        {/* =====================================================
            FEATURE TABS
        ===================================================== */}

        <FeatureTabs
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
          position="absolute"
          bottom="-80px"
          sticky={true}
          stickyTop={80}
          className="custom-position"
        />

        {/* =====================================================
            BANK CONTROL LAYER
        ===================================================== */}

        <section
          id="bank-control-layer"
          className="relative w-full"
        >
          <ProductView
            currentLayer="bank-control-layer"
          />
        </section>

        {/* =====================================================
            ECOSYSTEM OPERATIONS LAYER
        ===================================================== */}

        <section
          id="ecosystem-operations-layer"
          className="relative w-full"
        >
          <EcosystemOperationsLayer />
        </section>

        {/* =====================================================
            COMBINED BACKGROUND
            Background is independent from the sections.
        ===================================================== */}

        <div className="relative w-full">

          {/* Combined Background */}

          <img
            src={combineBg}
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-0
              top-1/2
              z-0
              w-[550px]
              max-w-none
              -translate-y-1/2
              select-none
              object-contain
              sm:w-[700px]
              lg:w-[1500px]
            "
          />

          {/* =================================================
              CREDIT & INTELLIGENCE
              SEPARATE SECTION
          ================================================= */}

          <section
            id="credit-intelligence-layer"
            className="relative z-10 w-full"
          >
            <IntelligenceLayer />
          </section>

          {/* =================================================
              MEMBER EXPERIENCE
              SEPARATE SECTION
          ================================================= */}

          <section
            id="member-experience-layer"
            className="relative z-10 w-full"
          >
            <MemberExperienceLayer />
          </section>

        </div>

        {/* =====================================================
            RAILS & DISBURSALS LAYER
        ===================================================== */}

        <section
          id="rails-disbursals-layer"
          className="relative w-full"
        >
          <RailsDisbursalsLayer />
        </section>

      </main>

      {/* =====================================================
          CTA
      ===================================================== */}

      <ConnectTheCoreCTA className="mt-0 pt-0 sm:pt-8" />
    </div>
  );
};

export default Product;