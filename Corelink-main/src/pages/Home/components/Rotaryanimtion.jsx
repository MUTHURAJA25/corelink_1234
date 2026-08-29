import React, { useEffect, useState } from "react";
import { Images } from "../../../assets/images";

const CAROUSEL_ITEMS = [
  {
    heading: "Institutions",
    image: Images.landingpagehero.icons.Building,
  },
  {
    heading: "Members",
    image: Images.landingpagehero.icons.Members,
  },
  {
    heading: "Banks",
    image: Images.landingpagehero.icons.Bank,
  },
  {
    heading: "Security",
    image: Images.landingpagehero.icons.Security,
  },
];

/* =========================
   CONFIGURATION
========================= */

const CONTAINER_WIDTH = 460;
const CONTAINER_HEIGHT = 560;

const ORBIT_CENTER_X = 220;
const ORBIT_CENTER_Y = 280;

const ORBIT_RADIUS_X = 200;
const ORBIT_RADIUS_Y = 200;

/*
 * 4 original icons + 4 duplicates
 */
const TOTAL_ITEMS = CAROUSEL_ITEMS.length * 2;

const ANGLE_STEP = 360 / TOTAL_ITEMS;

const DWELL_MS = 2000;
const MOVE_MS = 900;

/*
 * 180° = 9 o'clock
 *
 * This is where the title is located.
 */
const TITLE_ANGLE = 180;

/* =========================
   ORBIT BUTTON
========================= */

function OrbitButton({
  item,
  index,
  rotation,
  onClick,
}) {
  /*
   * Every icon gets its own position
   * around the complete 360° circle.
   */
  const angleDeg =
    180 +
    index * ANGLE_STEP +
    rotation;

  const angleRad =
    (angleDeg * Math.PI) / -180;

  const x =
    ORBIT_CENTER_X +
    ORBIT_RADIUS_X *
    Math.cos(angleRad);

  const y =
    ORBIT_CENTER_Y +
    ORBIT_RADIUS_Y *
    Math.sin(angleRad);

  /*
   * Make icons slightly larger
   * around the left/right side.
   */
  const horizontalPosition =
    Math.abs(Math.cos(angleRad));

  const scale =
    0.78 +
    horizontalPosition * 0.22;

  const opacity =
    0.65 +
    horizontalPosition * 0.35;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Show ${item.heading}`}
      className="
        absolute
        left-0
        top-3
        ml-[-21px]
      "
      style={{
        transform: `
          translate(${x}px, ${y}px)
          translate(-50%, -50%)
          scale(${scale})
        `,

        opacity,

        transition: `
          transform ${MOVE_MS}ms ease-in-out,
          opacity ${MOVE_MS}ms ease-in-out
        `,
      }}
    >
      <span
        className="
          flex
          items-center
          justify-center
        "
      >
        <img
          src={item.image}
          alt={item.heading}
          className="w-full"
        />
      </span>
    </button>
  );
}

/* =========================
   CIRCULAR CAROUSEL
========================= */

export default function CircularCarousel() {
  /*
   * Duplicate the icons.
   */
  const duplicatedItems = [
    ...CAROUSEL_ITEMS,
    ...CAROUSEL_ITEMS,
  ];

  /*
   * Complete orbit rotation.
   */
  const [rotation, setRotation] =
    useState(0);
  const rotationSteps =
    Math.round(
      rotation / ANGLE_STEP
    );

  const activeIndex =
    (
      -rotationSteps %
      CAROUSEL_ITEMS.length +
      CAROUSEL_ITEMS.length
    ) %
    CAROUSEL_ITEMS.length;

  /* =========================
     AUTO ROTATION
  ========================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setRotation(
        (previousRotation) =>
          previousRotation -
          ANGLE_STEP
      );
    }, DWELL_MS);

    return () => {
      clearInterval(timer);
    };
  }, []);

  /* =========================
     HANDLE ICON CLICK
  ========================= */

  const handleIconClick = (
    clickedIndex
  ) => {
    const originalIndex =
      clickedIndex %
      CAROUSEL_ITEMS.length;

    /*
     * Current item at 9 o'clock.
     */
    const currentIndex =
      activeIndex;

    /*
     * Calculate difference.
     */
    const difference =
      originalIndex - currentIndex;

    /*
     * Rotate the circle so the
     * clicked icon reaches 9 o'clock.
     */
    setRotation(
      (previousRotation) =>
        previousRotation -
        difference * ANGLE_STEP
    );
  };

  return (
    <div
      className="
        relative
        mx-auto
        carousel-position
      "
      style={{
        width: CONTAINER_WIDTH,
        height: CONTAINER_HEIGHT,
      }}
    >
      {/* =========================
          TITLE AT 9 O'CLOCK
      ========================= */}

      <div
        className="
          absolute
          top-1/2
          z-1
          flex
          h-[120px]
          w-full
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          left-[167px]
          rounded-[100px_10px_10px_100px]
          bg-white
          shadow-xl
        "
      >
        <span
          className="carousel-title">
          {
            CAROUSEL_ITEMS[
              activeIndex
            ].heading
          }
        </span>
      </div>

      {/* =========================
          CIRCULAR ICONS
      ========================= */}

      {duplicatedItems.map(
        (item, index) => (
          <OrbitButton
            key={`${item.heading}-${index}`}
            item={item}
            index={index}
            rotation={rotation}
            onClick={() =>
              handleIconClick(index)
            }
          />
        )
      )}
    </div>
  );
}