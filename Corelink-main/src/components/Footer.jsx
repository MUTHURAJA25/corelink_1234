import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRight,
  ArrowUp,
} from "lucide-react";
import { Images } from "../assets/images";
import TrustOperatingSystem from "../pages/Home/components/TrustOperatingSystem";
import CustomButton from "./common/Button";
import footerbg from "../images/footerbg.svg";

const FOOTER_COLUMNS = [
  {
    title: "Pages",
    links: ["Home", "About", "Product", "Contact Us"],
  },

  {
    title: "Resources",
    links: ["FAQ's", "Terms & Conditions", "Privacy Policy"],
  },

  // {
  //   title: "Support",
  //   links: [
  //     "Documentation",
  //     "Implementation",
  //     "Service Status",
  //     "Contact Support",
  //   ],
  // },
];

// Links that map to real routes instead of plain "#" anchors.
const LINK_ROUTES = {
  Home: "/",
  About: "/company",
  "About Us": "/company",
  "Contact Us": "/contact",
  Product: "/product",
  "FAQ's": "/faq",
  "Terms & Conditions": "/terms-and-conditions",
  "Privacy Policy": "/privacy-policy",
  "Cookie Policy": "/cookie-policy",
};

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
];

const socialStyles = {
  base: `
    relative flex h-9 w-9 items-center justify-center rounded-full
    bg-[#1A1A1A]
    transition-all duration-300
    hover:bg-[#242424]
    shadow-[inset_0_3px_2px_rgba(255,255,255,0.08),0_0_10px_rgba(255,255,255,0.04)]
  `,
  border: `
    before:absolute
    before:inset-0
    before:rounded-full
    before:p-[1px]
    before:pointer-events-none
    before:content-['']
    before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
    before:[-webkit-mask-composite:xor]
    before:[mask-composite:exclude]
  `,
  gradient: `
    before:bg-[conic-gradient(from_102.21deg_at_52.75%_38.75%,rgba(249,249,249,0.5)_-32.95deg,rgba(64,64,64,0.5)_10.52deg,rgba(64,64,64,0.35)_32.12deg,rgba(255,255,255,0.5)_60.28deg,rgba(255,255,255,0.5)_107.79deg,rgba(64,64,64,0.35)_187.59deg,#F9F9F9_207.58deg,rgba(255,255,255,0.5)_287.31deg,rgba(249,249,249,0.5)_327.05deg,rgba(64,64,64,0.5)_370.52deg)]
  `,
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <TrustOperatingSystem /> */}
      <footer className="w-full  pt-16 relative z-20 bg-gradient-to-r from-[#101415] via-[#1A2214] to-[#101415]">
        <div className="footerbg absolute top-0 right-0">
          <img src={footerbg} />
        </div>
        <div className="w-full pt-1 relative z-20 max-w-7xl mx-auto px-6 lg:px-10 pb-1 flex flex-col justify-between lg:flex-row gap-20">
          {/* Brand column */}
          <div className="flex flex-col items-start gap-5 flex-1">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center">
                {/* Swap for your logo.svg import if you'd rather use the asset directly */}
                <img
                  src={Images.common.corelinkfooterlogo}
                  alt="Footer Logo"
                  className="w-[9 0%] h-auto md:w-[190px]"
                />
              </span>
            </div>

            <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed max-w-xs">
              A unified, bank-led operating platform for banks, cooperative
              banks, societies and their members.
            </p>

            {/* <div className="flex gap-2 order-2 flex-col">
              <a
                href="/disclaimer"
                className="text-[rgba(103,100,120,1)] hover:text-white text-xs transition-colors column"
              >
                enterprise@corelink.com
              </a>

              <a
                href="/ai-statement"
                className="text-[rgba(103,100,120,1)] hover:text-white text-xs transition-colors"
              >
                +91 22 4000 0000
              </a>
            </div> */}
            {/* <div className="w-full">
              <p className="text-[rgba(239, 247, 247, 1)] text-sm mb-5 md:mb-2">
                Stay updated
              </p>
              <div className="flex flex-wrap md:flex-nowrap items-center gap-5 items-center">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="  w-full max-w-md items-center rounded-full border bg-[rgba(6,19,42,1)] border border-[rgba(239,247,247,0.2)] p-1"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="min-w-0 flex-2 bg-transparent px-5 py-2.5 text-sm text-white placeholder:text-[#6E6E87] focus:outline-none"
                  />
                </form>
                <button
                  type="submit"
                  className="group flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#1ED6FF00]  to-[#1ED6FF66]  px-6 py-2.5 text-sm font-medium text-white  transition-all duration-300 hover:brightness-110"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div> */}
            {/* Subscribe input */}

            {/* Social icons */}

            <div className="mt-2 flex items-center gap-4">
              {SOCIALS.map(({ icon: Icon, label }) => (
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
                    <Icon className="h-4 w-4 text-[#D5D5D5]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" grid w-full grid-cols-1 gap-x-6 gap-y-12 mb-16 sm:grid-cols-2 lg:grid-cols-3">
            {/* Link columns — Company / Products / Legal / Support, matching the screenshot */}
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-4 ">
                <h4 className="text-[rgba(198,183,249,1)] font-semibold uppercase text-xs tracking-[0.15em] uppercase mb-2">
                  {col.title}
                </h4>
                <div className="flex flex-col gap-4">
                  {col.links.map((link) =>
                    LINK_ROUTES[link] ? (
                      <Link
                        key={link}
                        to={LINK_ROUTES[link]}
                        className="text-[rgba(255,255,255,0.65)] hover:text-blue-400 text-[14px] transition-colors"
                      >
                        {link}
                      </Link>
                    ) : (
                      <a
                        key={link}
                        href="javascript:void(0)"
                        className="text-[rgba(255,255,255,0.65)] hover:text-blue-400 text-sm transition-colors"
                      >
                        {link}
                      </a>
                    ),
                  )}
                </div>
              </div>
            ))}
            <div>
              <div
                className={`rounded-[24px] p-px`}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(238, 255, 250, 0.5), rgba(119, 139, 137, 0.35) 48%, rgba(238, 255, 250, 0.42))",
                  boxShadow:
                    "-1px 3px 6px rgba(0, 0, 0, 0.08), -3px 11px 11px rgba(0, 0, 0, 0.07), -7px 24px 15px rgba(0, 0, 0, 0.04), -13px 43px 18px rgba(0, 0, 0, 0.01)",
                }}
              >
                <div className="min-h-[186px] rounded-[23px] bg-[rgba(29,35,35,0.78)] p-6 backdrop-blur-[15px]">
                  <h4 className="text-[rgba(198,183,249,1)] font-semibold uppercase text-xs tracking-[0.15em] uppercase mb-2">
                    Stay in the loop
                  </h4>
                  <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed max-w-xs">
                    Occasional notes on building better financial experiences.
                  </p>

                  <CustomButton
                    className="mt-4 !h-auto w-full justify-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      fontSize: "11px",
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
                    Join the network
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
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div>
          <div className="w-full max-w-7xl mx-auto text-left border-t border-[rgba(255,255,255,0.4)]   py-6 flex flex-col md:flex-row items-center md:justify-between gap-4">
                <p className="text-[rgba(255,255,255,0.4)] text-sm">
                  © {new Date().getFullYear()} CoreLink. All rights reserved.
                </p>

                <div className="text-[rgba(255,255,255,0.4)] text-sm text-center md:text-right">
                  GREEN PULSE EMPORIUM PRIVATE LIMITED | Corelink
                </div>
          </div>
        </div>
        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className={`
          fixed
          bottom-8
          right-8
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-[#3FD1FF]/20
          bg-[#0A192F]
          text-white
          backdrop-blur-md
          shadow-[0_0_30px_rgba(21,93,214,0.35)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:scale-110
          hover:border-[#3FD1FF]
          hover:shadow-[0_0_45px_rgba(63,209,255,0.45)]
          ${
            showScrollTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-6 opacity-0"
          }
        `}
        >
          <span
            className="
            absolute
            inset-0
            rounded-full
            bg-[radial-gradient(circle,#3FD1FF_0%,transparent_70%)]
            opacity-20
            blur-xl
          "
          />

          <ArrowUp
            size={22}
            className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1"
          />
        </button>
      </footer>
    </>
  );
};

export default Footer;
