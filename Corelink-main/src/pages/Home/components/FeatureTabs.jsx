import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function FeatureTabs({
  items = [],
  activeIndex: controlledActiveIndex,
  onChange,

  gridClassName = "xl:grid-cols-4",
  containerClassName = "",

  tabGap = "gap-4",
  tabPadding = "p-4",

  iconSize = 52,
  lucideIconSize = 25,
  fontsize = 15,

  showSeparators = true,
  showProgress = true,

  cardpadding = 4,
  position = "relative",
  bottom = "80px",

  // Sticky disabled by default
  sticky = true,
  stickyTop = 0,

  className,
}) {
  const [internalActiveIndex, setInternalActiveIndex] = useState(0);

  const activeIndex = controlledActiveIndex ?? internalActiveIndex;

  const containerRef = useRef(null);
  const tabRefs = useRef([]);
  const wrapperRef = useRef(null);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  const [separators, setSeparators] = useState([]);

  const [isSticky, setIsSticky] = useState(false);
  const [tabsHeight, setTabsHeight] = useState(0);

  /*
   * ============================================================
   * TAB CLICK
   * ============================================================
   */

  const handleTabChange = (index) => {
    setInternalActiveIndex(index);

    onChange?.(index);

    const targetId = items[index]?.link;

    if (!targetId) return;

    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    const stickyOffset = sticky ? 100 : 0;

    const targetTop =
      targetSection.getBoundingClientRect().top + window.scrollY - stickyOffset;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };

  /*
   * ============================================================
   * STICKY HANDLING
   * ============================================================
   */

  useEffect(() => {
    if (!sticky) return;

    const handleScroll = () => {
      const wrapper = wrapperRef.current;

      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();

      /*
       * Once the original tab position reaches the top,
       * convert the tabs into fixed positioning.
       */
      const shouldStick = rect.top <= stickyTop;

      setIsSticky(shouldStick);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", handleScroll);
    };
  }, [sticky, stickyTop]);

  /*
   * ============================================================
   * MEASURE TAB HEIGHT
   * ============================================================
   */

  useLayoutEffect(() => {
    const measureHeight = () => {
      const wrapper = wrapperRef.current;

      if (!wrapper) return;

      const height = wrapper.offsetHeight;

      setTabsHeight(height);
    };

    measureHeight();

    window.addEventListener("resize", measureHeight);

    return () => {
      window.removeEventListener("resize", measureHeight);
    };
  }, [items.length]);

  /*
   * ============================================================
   * MEASURE INDICATOR + SEPARATORS
   * ============================================================
   */

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;

      if (!container || !items.length) return;

      const containerRect = container.getBoundingClientRect();

      /*
       * Active tab indicator
       */
      const activeTab = tabRefs.current[activeIndex];

      if (activeTab) {
        const activeRect = activeTab.getBoundingClientRect();

        setIndicator({
          left: activeRect.left - containerRect.left,

          width: activeRect.width,
        });
      }

      /*
       * Separators
       */
      if (!showSeparators) return;

      const nextSeparators = [];

      for (let i = 0; i < items.length - 1; i++) {
        const current = tabRefs.current[i];

        const next = tabRefs.current[i + 1];

        if (!current || !next) continue;

        const currentRect = current.getBoundingClientRect();

        const nextRect = next.getBoundingClientRect();

        const midpoint = (currentRect.right + nextRect.left) / 2;

        nextSeparators.push(midpoint - containerRect.left);
      }

      setSeparators(nextSeparators);
    };

    measure();

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, [activeIndex, items.length, showSeparators, isSticky]);

  /*
   * ============================================================
   * UPDATE ACTIVE TAB WHILE SCROLLING
   * ============================================================
   */

  useEffect(() => {
    if (!items.length) return;

    const handleSectionScroll = () => {
      const scrollPosition = window.scrollY + stickyTop + 80;

      let currentIndex = 0;

      items.forEach((item, index) => {
        if (!item.link) return;

        const section = document.getElementById(item.link);

        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition >= sectionTop) {
          currentIndex = index;
        }
      });

      if (currentIndex !== activeIndex) {
        setInternalActiveIndex(currentIndex);
        onChange?.(currentIndex);
      }
    };

    window.addEventListener("scroll", handleSectionScroll, { passive: true });

    handleSectionScroll();

    return () => {
      window.removeEventListener("scroll", handleSectionScroll);
    };
  }, [items, activeIndex, onChange, stickyTop]);

  /*
   * ============================================================
   * TAB CARD
   * ============================================================
   */

  const tabsContent = (
    <div
      className={`
    my-5
    ${isSticky ? "rounded-none" : "rounded-[30px]"}
    bg-white
    ${isSticky ? "shadow-none" : "shadow-[0_15px_45px_rgba(30,40,70,0.08)]"}
    
${isSticky ? "xl:py-0 xl:my-1" : "sm:my-3"}  `}
    >
      <div
        className={`
          relative
          mx-auto
          max-w-[1500px]
          overflow-hidden
          ${isSticky ? "xl:p-0" : "p-3"}
          p-3
        "
        `}
      >
        {/* =====================================================
            TABS
        ===================================================== */}

        <div
          ref={containerRef}
          className={`
            relative
            grid
            grid-cols-1
            md:grid-cols-2
            ${isSticky ? "bg-[#fff]" : ""}
            ${gridClassName}
          `}
        >
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            const Icon = item.icon;

            return (
              <div
                key={`${item.title}-${index}`}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                className="
                  relative
                  min-w-0
                  p-1
                "
              >
                {/* =================================================
                    TAB BUTTON
                ================================================= */}

                <button
                  type="button"
                  onClick={() => handleTabChange(index)}
                  className={`
                    group
                    flex
                    w-full
                    items-center
                    ${tabGap}
                    rounded-[25px] 
                    ${tabPadding} ${isSticky ? "py-2 px-2" : tabPadding}
                    text-left
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          ${item.activeGradient}
                          opacity-100
                        `
                        : `
                          bg-[#fff]
                          opacity-80
                          hover:opacity-100
                        `
                    }
                  `}
                  style={{
                    fontSize: `${fontsize}px`,
                  }}
                >
                  {/* =================================================
                      ICON
                  ================================================= */}

                  <span
                    style={{
                      width: iconSize,
                      height: iconSize,
                    }}
                    className={`
                      flex
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300
                      ${item.iconBg}

                      ${
                        isActive
                          ? "shadow-[0_8px_25px_rgba(120,180,70,0.22)]"
                          : ""
                      }
                    `}
                  >
                    {item.icon && (
                      <Icon
                        size={lucideIconSize}
                        strokeWidth={1.8}
                        className={item.iconColor}
                      />
                    )}

                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          h-[25px]
                          w-[25px]
                          object-contain
                        "
                      />
                    )}
                  </span>

                  {/* =================================================
                      TEXT
                  ================================================= */}

                  <span className="min-w-0">
                    <span
                      className={`
                        block
                        whitespace-nowrap
                        font-semibold
                        leading-tight
                        transition-colors
                        duration-300

                        ${isActive ? "text-[#17233A]" : "text-[#687387]"}
                      `}
                      style={{
                        fontSize: `${fontsize}px`,
                      }}
                    >
                      {item.title}
                    </span>

                    {item.description && (
                      <span
                        className="
                          mt-1
                          block
                          whitespace-nowrap
                          text-[11.5px]
                          font-normal
                          leading-tight
                          text-[#8C96A8]
                        "
                      >
                        {item.description}
                      </span>
                    )}
                  </span>
                </button>

                {/* =================================================
                    MOBILE ACTIVE INDICATOR
                ================================================= */}

                {isActive && (
                  <div
                    className="
                      absolute
                      bottom-[-2px]
                      left-5
                      right-5
                      h-[4px]
                      overflow-hidden
                      rounded-full
                      bg-[#F3F5F8]
                      lg:hidden
                    "
                  >
                    <div
                      className="
                        h-full
                        w-full
                        rounded-full
                        bg-gradient-to-r
                        from-[#62D52F]
                        to-[#4D63F5]
                      "
                    />
                  </div>
                )}
              </div>
            );
          })}

          {/* =====================================================
              DESKTOP DYNAMIC SEPARATORS
          ===================================================== */}

          {showSeparators &&
            separators.map((left, index) => (
              <div
                key={index}
                className="
                    pointer-events-none
                    absolute
                    top-1/2
                    hidden
                    h-[20px]
                    w-px
                    -translate-x-1/2
                    -translate-y-1/2
                    bg-[#D9DEE7]
                    xl:block
                  "
                style={{
                  left: `${left}px`,
                }}
              />
            ))}

          {/* =====================================================
              TABLET VERTICAL SEPARATOR
          ===================================================== */}

          {showSeparators && (
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/4
                hidden
                h-[20px]
                w-px
                -translate-x-1/2
                bg-[#D9DEE7]
                md:block
                lg:hidden
              "
            />
          )}
        </div>

        {/* =======================================================
            DESKTOP PROGRESS BAR
        ======================================================= */}

        {showProgress && (
          <div
            className="
              relative
              mt-2
              hidden
              h-[4px]
              w-full
              overflow-hidden
              rounded-full
              bg-[#F3F5F8]
              xl:block
            "
          >
            <div
              className="
                absolute
                top-0
                h-full
                rounded-full
                bg-gradient-to-r
                from-[#62D52F]
                to-[#4D63F5]
                transition-[left,width]
                duration-500
                ease-in-out
              "
              style={{
                left: `${indicator.left}px`,
                width: `${indicator.width}px`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );

  /*
   * ============================================================
   * RENDER
   * ============================================================
   */

  return (
    <section ref={wrapperRef} className="relative w-full text-slate-900">
      {/* =========================================================
          PLACEHOLDER
          Prevents layout jump when tabs become fixed
      ========================================================= */}

      {isSticky && (
        <div
          style={{
            height: tabsHeight,
          }}
        />
      )}

      {/* =========================================================
          NORMAL / STICKY TAB CONTAINER
      ========================================================= */}

      <div
        className={`
          ${className || ""}
          z-50
          transition-all
          duration-500
          ease-in-out
          ${
            isSticky
              ? `
    relative
      xl:fixed
      left-0
      right-0
      top-0
      w-full
      bg-[#fff]
      shadow-none
      backdrop-blur-0
      h-[0px]
      

   
      
    `
              : `
      ${position}
      left-0
      right-0
      mx-auto
      max-w-7xl
    `
          }

          ${cardpadding}
          ${containerClassName}
        `}
        style={
          !isSticky
            ? {
                bottom,
              }
            : {
                top: `${stickyTop}px`,
              }
        }
      >
        <div
          className={`
            mx-auto
            w-full
            ${isSticky ? "max-w-none" : "max-w-7xl"}
          `}
        >
          {tabsContent}
        </div>
      </div>
    </section>
  );
}
