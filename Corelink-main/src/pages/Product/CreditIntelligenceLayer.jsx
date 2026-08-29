import React from "react";
import ProductHeroSection from "./components/ProductHeroSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import KeyFeatures from "./components/KeyFeatures";

const CreditIntelligenceLayer = () => {
 return (
 <>
     <div className="relative w-full overflow-hidden bg-background text-white">
        <ProductHeroSection />
        <KeyFeatures/>
      </div>

  </>
 )
};

export default CreditIntelligenceLayer;
