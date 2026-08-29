import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import SEO from "../../../components/Seo";
import { LAYERS } from "./ProductHeroSectionData";
import CustomButton from '../../../components/common/Button';
import CommandCentreDashboard from "./analyzingcard";
import { Images } from "../../../assets/images";

const LayerRow = ({ layer, isActive }) => (
    <Link
        to={layer.path}
        className={`flex w-full items-center gap-3 rounded-full px-5 py-3.5 text-left text-sm font-semibold transition-all duration-300 ${isActive
            ? "border-[3px] border-solid border-transparent rounded-[31px] [background:linear-gradient(202deg,#fff,#97b0ff7d,#fff)_padding-box,linear-gradient(180deg,#fff,#97b0ff8f,#fff)_border-box] text-[#4B69DC] shadow-[0_10px_28px_rgba(99,115,249,0.35)]"
            : "border-[3px] border-solid border-transparent rounded-[31px] [background:linear-gradient(202deg,#E2E7F4)_padding-box,linear-gradient(180deg,#fff,#9C9C9C,#fff)_border-box] text-[#616D7C] shadow-[0_10px_28px_rgba(99,115,249,0.35)]"
            }`}
    >
        <span
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${isActive ? "border-[#4B69DC] text-[#4B69DC]" : "border-slate-400 text-slate-400"
                }`}
        >
            <span className="text-lg">•</span>
        </span>
        {layer.title}
    </Link>
);

const ProductHeroSection = ({
    seo,
    layers = LAYERS,
    ctaText = "Request a Demo",
    ctaHref = "/#request-demo",
}) => {
    const { pathname } = useLocation();
    const activeIndex = layers.findIndex((layer) => layer.path === pathname);
    const activeLayer = activeIndex === -1 ? 0 : activeIndex;
    const current = layers[activeLayer];

    
    return (
        <section
            className="relative overflow-hidden pb-[120px] pt-20 sm:pt-15 p-10 bg-cover bg-center bg-no-repeat"
        style={{
  backgroundImage: `
    radial-gradient(
      circle at top left,
      rgba(161, 231, 21, 0.22),
      rgba(162, 231, 21, 0) 45%
    ),
    linear-gradient(
      to bottom right,
      rgba(220, 231, 255, 0.3),
      rgba(237, 235, 251, 0),
      rgba(247, 238, 251, 0.01)
    ),
    url(${Images.common.Productbackground})
  `,
}}
        >
            <div className="relative mx-auto max-w-7xl mt-[50px] lg:mt-[90px]">

                <div className="grid items-start gap-10 lg:grid-cols-12 items-start">

                    {/* Left column - 5 */}
                    <div className="relative pt-6 lg:col-span-6">
                        <h1 className="mt-4 font-bold tracking-tight text-slate-950 sm:text-5xl md:text-[64px]">
                            One Connected Infrastructure for<br />
                            <span className="title-gradient"> Smarter Banking.</span>

                        </h1>
                        <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
                            Unify banking operations, decision intelligence, member experiences, and financial rails to operate with greater speed and control.
                        </p>

                        <div className="mt-10">
                            <CustomButton
                                link="contact"
                                variant="primary"
                            >
                                Connect with CoreLink  <span className="button-animation">
                                    <ChevronRight size={17} />
                                </span>
                            </CustomButton>
                        </div>
                    </div>

                    {/* Right column - 7 */}
                    <div className="lg:col-span-6">
                        <CommandCentreDashboard />
                    </div>

                </div>
            </div>
        </section>

    );
};

export default ProductHeroSection;
