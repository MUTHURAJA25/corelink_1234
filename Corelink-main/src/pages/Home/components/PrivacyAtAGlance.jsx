import React, { useState } from "react";

import backgroundImage from "../../../assets/landingpage/platform-at-glance.svg";
import icon1 from "../../../images/PlatformAtGlance backgound/Icon (4).svg";
import icon2 from "../../../images/PlatformAtGlance backgound/Icon (6).svg";
import icon3 from "../../../images/PlatformAtGlance backgound/Icon (5).svg";
import icon4 from "../../../images/PlatformAtGlance backgound/Icon (7).svg";
import { Images } from "../../../assets/images";
import FeatureTabss from "./FeatureTabs";
import { Activity, Landmark, Users } from "lucide-react";
import FeatureNavigation from "./FeatureNavigation";

const cardsData = [
  {
    id: 1,
    title: "5 Connected Layers",
    shortDesc:
      "One integrated banking ecosystem connecting societies, members and banks.",
    longDesc: "",
    icon: icon1,
  },
  {
    id: 2,
    title: "Bank-Led Governance",
    shortDesc:
      "Bank-grade governance, controls and compliance built into every society operation.",
    longDesc: "",
    icon: icon2,
  },
  {
    id: 3,
    title: "Unified Member Experience",
    shortDesc:
      "One seamless digital experience connecting members, societies and banks.",
    longDesc: "",
    icon: icon3,
  },
  {
    id: 4,
    title: "Real-Time Visibility",
    shortDesc:
      "Complete, real-time visibility across accounts, transactions and operations.",
    longDesc: "",
    icon: icon4,
  },
];


const HOME_FEATURE_TABS = [
  {
    title: "Governance",
    description: "Bank-led policy & oversight",
    icon: Landmark,
    image: null,
    iconBg: "bg-[#C8F18B]",
    iconColor: "text-[#4D7A24]",
    activeGradient:
      "bg-[linear-gradient(165deg,#C8F18B80,#C8F18B00,transparent)]",
  },

  {
    title: "Operations",
    description: "One connected workflow spine",
    icon: Activity,
    image: null,
    iconBg: "bg-[#DCEEFF]",
    iconColor: "text-[#3D8BD9]",
    activeGradient:
      "bg-[linear-gradient(149deg,#DCEEFF80,#DCEEFF20,transparent)]",
  },

  {
    title: "Credit Intelligence",
    description: "Decision-ready risk signals",
    icon: null,
    image: Images.landingpagehero.icons.Chart,
    iconBg: "bg-[#DDF3EF]",
    iconColor: "text-[#36A995]",
    activeGradient:
      "bg-[linear-gradient(149deg,#DDF3EF80,#DDF3EF20,transparent)]",
  },

  {
    title: "Member Experience",
    description: "Digital access for members",
    icon: Users,
    image: null,
    iconBg: "bg-[#E4E7FF]",
    iconColor: "text-[#514DDA]",
    activeGradient:
      "bg-[linear-gradient(149deg,#E4E7FF80,#E4E7FF20,transparent)]",
  },
];


export default function PlatformAtAGlance() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      className="
        relative
        w-full
        pt-0
        px-4
        sm:px-6
        lg:px-8
        font-sans">

      <style>{`

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =========================================
           CARD
        ========================================= */

        .card {
          will-change: transform;
          transform-origin: center;
        }

        .card-content {
          max-height: 3.6rem;
          overflow: hidden;
        }

        .green-card-shadow {
          box-shadow:
            0 8px 30px rgba(82, 188, 103, 0.10),
            0 2px 8px rgba(82, 188, 103, 0.05);
        }

        .green-card-shadow:hover {
          box-shadow:
            0 14px 40px rgba(82, 188, 103, 0.18),
            0 4px 14px rgba(82, 188, 103, 0.08);
        }

        /* =========================================
           BACKGROUND IMAGE
           IMAGE IS BEHIND THE COLOR
        ========================================= */

        .background-image {
          position: absolute;
          pointer-events: none;

          right: -2%;
          bottom: -2%;

          width: 100%;
          height: 100%;

          background-image: url(${backgroundImage});

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          filter: blur(0.6px) saturate(1.05);

          opacity: 0.9;

          transform: scale(1.08);

          z-index: 0;
        }

        /* =========================================
           BACKGROUND COLOR
           COLOR IS IN FRONT OF THE IMAGE
        ========================================= */

        .background-overlay {
          position: absolute;
          pointer-events: none;

          inset: 0;

          background: linear-gradient(
            180deg,
            rgba(252, 252, 253, 1) 0%,
            rgba(252, 252, 253, 0.98) 15%,
            rgba(252, 252, 253, 0.90) 25%,
            rgba(252, 252, 253, 0.70) 35%,
            rgba(252, 252, 253, 1) 45%,
            rgba(252, 252, 253, 0.20) 55%,
            rgba(252, 252, 253, 0.05) 65%,
            rgba(252, 252, 253, 0) 75%
          );

          z-index: 1;
        }

        /* =========================================
           EXTRA SOFT GREEN FADE
        ========================================= */

        .green-glow {
          position: absolute;
          pointer-events: none;

          left: 0;
          top: 10%;

          width: 220px;
          height: 75%;

          background: linear-gradient(
            to right,
            rgba(82, 188, 103, 0),
            rgba(82, 188, 103, 0.07),
            rgba(82, 188, 103, 0)
          );

          filter: blur(30px);

          z-index: 2;
        }

        /* =========================================
           ICON GRADIENT
        ========================================= */

        .icon-gradient {
          background:
            linear-gradient(
              315deg,
              #B1E363 0%,
              #92B1B5 39.9%,
              #734AE2 100%
            );
        }

        .icon-gradient:hover {
          box-shadow:
            0 10px 25px rgba(115, 74, 226, 0.20),
            0 6px 15px rgba(82, 188, 103, 0.15);
        }

        /* =========================================
           TABLET / MOBILE
        ========================================= */

        @media (max-width: 768px) {
          .background-image {
            width: 100%;
            height: 600px;

            right: -20%;

            opacity: 0.55;

            background-size: cover;
          }

          .background-overlay {
            background: linear-gradient(
              to right,
              rgba(252, 252, 253, 1) 0%,
              rgba(252, 252, 253, 0.95) 20%,
              rgba(252, 252, 253, 0.70) 35%,
              rgba(252, 252, 253, 0.35) 50%,
              rgba(252, 252, 253, 0) 75%
            );
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .background-image {
            width: 120%;
            height: 500px;

            right: -30%;

            opacity: 0.45;
          }

          .background-overlay {
            background: linear-gradient(
              to right,
              rgba(252, 252, 253, 1) 0%,
              rgba(252, 252, 253, 0.92) 25%,
              rgba(252, 252, 253, 0.55) 45%,
              rgba(252, 252, 253, 0) 75%
            );
          }
        }
      `}</style>

      <div className="background-image" />
      <div className="background-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto">
          <FeatureNavigation/>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span
            className="
              inline-block
              px-4
              py-1
              text-xs
              font-bold
              tracking-widest
              text-indigo-600
              bg-indigo-50/90
              border
              border-indigo-100/80
              rounded-full
              uppercase
              shadow-sm
            "
          >
            Digital Foundation
          </span>

          {/* Heading */}

          <h2
            className="
              text-3xl
              sm:text-3xl
              md:text-[40px]
              font-bold
              text-slate-900
              tracking-tight
            "
          >
            Platform at a{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                title-gradient
              "
            >
              Glance
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              text-sm
              sm:text-base
              text-slate-500
              leading-relaxed
              font-normal
            "
          >
            CoreLink transforms fragmented banking operations into one
            connected ecosystem designed to connect banks, societies,
            members, and financial institutions.
          </p>
        </div>

        {/* =========================================
            CARDS
        ========================================= */}
        <div className="b-line"></div>

        <div
          className="
            mt-16
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
            pb-24
          "
        >
          {cardsData.map((card, index) => {
            const isHovered = hoveredCard === card.id;

            const cardOffset =
              index % 2 === 0 ? "lg:mt-0" : "lg:mt-10";

            return (
              <div
                key={card.id}
                className={`
                  relative
                  min-h-[220px]
                  ${cardOffset}
                `}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* =========================================
                    CARD
                ========================================= */}

                <div
                  className={`
                    absolute
                    top-0
                    left-0
                    right-0
                    rounded-3xl
                    bg-white/95
                    backdrop-blur-md
                    p-6
                    border
                    transition-all
                    duration-300
                    ease-out

                    ${isHovered
                      ? `
                          z-30
                          border-teal-200/80
                          shadow-2xl
                          shadow-teal-900/10
                          -translate-y-2
                        `
                      : `
                          z-10
                          border-slate-100
                          shadow-lg
                          shadow-[#def3f0]
                        `
                    }
                  `}
                >
                  {/* =========================================
                      ICON
                  ========================================= */}

                  <div
                    className="
                      relative
                      mb-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      p-[1px]
                      shadow-md
                      transition-all
                      duration-300
                      icon-gradient
                    "
                  >
                    <div
                      className="
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/10
                        backdrop-blur-sm
                      "
                    >
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                  </div>

                  {/* =========================================
                      TITLE
                  ========================================= */}

                  <h3
                    className="
                      text-lg
                      font-bold
                      text-slate-800
                      tracking-tight
                    "
                  >
                    {card.title}
                  </h3>

                  {/* =========================================
                      SHORT DESCRIPTION
                  ========================================= */}

                  <p
                    className="
                      mt-2
                      text-xs
                      sm:text-sm
                      leading-relaxed
                      text-slate-500
                    "
                  >
                    {card.shortDesc}
                  </p>

                  {/* =========================================
                      EXPANDABLE CONTENT
                  ========================================= */}

                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-in-out

                      ${isHovered
                        ? `
                            grid-rows-[1fr]
                            opacity-100
                            pt-4
                            mt-4
                            border-t
                            border-slate-100
                          `
                        : `
                            grid-rows-[0fr]
                            opacity-0
                          `
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="
                          text-xs
                          text-slate-600
                          leading-normal
                        "
                      >
                        {card.longDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}