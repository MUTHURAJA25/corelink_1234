import React, { useEffect, useState } from "react";
import {
    Landmark,
    Workflow,
    Waypoints,
    UserRound,
    Share2,
    Building2,
    Users,
    Activity,
    CreditCard,
    ChevronDown,
    Network
} from "lucide-react";
import { Images } from "../../../assets/images";

function useCountUp(target, { duration = 1800, delay = 0 } = {}) {
    const [value, setValue] = useState(1);

    useEffect(() => {
        let raf;
        let start;

        const timeout = setTimeout(() => {
            const tick = (ts) => {
                if (!start) start = ts;

                const progress = Math.min((ts - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);

                setValue(1 + (target - 1) * eased);

                if (progress < 1) {
                    raf = requestAnimationFrame(tick);
                } else {
                    setValue(target);
                }
            };

            raf = requestAnimationFrame(tick);
        }, delay);

        return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(raf);
        };
    }, [target, duration, delay]);

    return value;
}

const fmtInt = (n) => Math.round(n).toLocaleString("en-IN");
const fmtCr = (n) => n.toFixed(2);
const STAT_CARDS = [
    {
        id: "societies",
        icon: Building2,
        label: "Total Societies Onboarded",
        value: 1248,
        kind: "int",
        change: "4.3%",
        changeColor: "text-[#A2E715]",
        footer: [
            { label: "Active", value: "1,102" },
            { label: "Inactive", value: "98" },
            { label: "Pending", value: "48" },
        ],
    },
    {
        id: "members",
        icon: Users,
        label: "Total Members",
        value: 876342,
        kind: "int",
        change: "12.7%",
        changeColor: "text-[#469B84]",
        footer: [
            { label: "eKYC Verified", value: "87.3%" },
            { label: "eKYC Pending", value: "12.7%" },
        ],
    },
    {
        id: "volume",
        icon: Activity,
        label: "Today's Transaction Volume",
        value: 24.68,
        kind: "cr",
        change: "8.1%",
        changeColor: "text-[#0080D1]",
        footer: [
            { label: "Bank Transfer", value: "54.4%" },
            { label: "Cash", value: "45.6%" },
        ],
    },
    {
        id: "loanbook",
        icon: CreditCard,
        label: "Active Loan Book",
        value: 312.45,
        kind: "cr",
        change: "0.24%",
        changeColor: "text-[#469B84]",
        footer: [{ label: "NPA", value: "2.01%" }],
    },
];

const TAGS = [
    {
        id: "01",
        icon: Landmark,
        label: "Bank Control",
        color: "#bef264",
        glow: "rgba(190,242,100,0.45)",
        style: { top: "2%", left: "0%" },
        delay: 0,
    },
    {
        id: "02",
        icon: Network,
        label: "Ecosystem Operations",
        color: "#0080D1",
        glow: "rgba(125,211,252,0.45)",
        style: { top: "24%", left: "-2%" },
        delay: 0.4,
    },
    {
        id: "03",
        icon: null,
        image: Images.Product.Graychart,
        label: "Credit and Intelligence",
        color: "#469B84",
        glow: "rgba(94,234,212,0.45)",
        style: { top: "78%", left: "-2%" },
        delay: 0.8,
    },
    {
        id: "04",
        icon: Users,
        label: "Member Experience",
        color: "#3D59E3",
        glow: "rgba(165,180,252,0.45)",
        style: { top: "29%", right: "-3%" },
        delay: 1.2,
    },
    {
        id: "05",
        icon: Share2,
        label: "Integration and Data",
        color: "#2EBCCE",
        glow: "rgba(103,232,249,0.45)",
        style: { bottom: "-4%", right: "1%" },
        delay: 1.6,
    },
];


const TAG_CARD_MAP = {
    "01": ["societies"],
    "02": ["volume"],
    "03": ["loanbook"],
    "04": ["members"],
    "05": ["societies", "members", "volume", "loanbook"],
};

const TREND = {
    collections: [18, 22, 24, 27, 30, 34, 40, 47],
    loans: [10, 12, 14, 15, 18, 20, 24, 29],
    expenses: [6, 7, 7, 8, 9, 10, 11, 13],
};

const ACTIVITY = [
    { label: "Active", value: 1102, color: "#a3e635" },
    { label: "Dormant", value: 98, color: "#34d399" },
    { label: "Inactive", value: 48, color: "#38bdf8" },
];


function StatCard({ card, mounted, index, forceHighlight }) {
    const displayValue = useCountUp(card.value, {
        duration: 1600,
        delay: 200 + index * 150,
    });

    const shown =
        card.kind === "int"
            ? fmtInt(displayValue)
            : `₹${fmtCr(displayValue)} Cr`;

    const Icon = card.icon;

    return (
        <div
            className={`
        group relative rounded-2xl border
        bg-[#101c30] p-[8px]
        transition-all duration-500 ease-out
        hover:-translate-y-1
        hover:border-lime-300/30
        hover:shadow-[0_18px_40px_-12px_rgba(163,230,53,0.25)]
        h-[124px]

        ${forceHighlight
                    ? "-translate-y-1 border-lime-300/40 shadow-[0_18px_40px_-12px_rgba(163,230,53,0.35)]"
                    : "border-white/[0.06]"
                }

        ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
      `}
            style={{
                transitionDelay: mounted ? `${120 + index * 90}ms` : "0ms",
            }}
        >
            <div className="mb-2 flex items-start justify-between gap-2">
                <span
                    className={`
            flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-lg
            transition-colors duration-300
            group-hover:bg-lime-300/10
            group-hover:text-lime-300
            ${forceHighlight
                            ? "bg-lime-300/10 text-lime-300"
                            : "bg-white/[0.06] text-slate-300"
                        }
          `}
                >
                    <Icon size={12} strokeWidth={1.8} />
                </span>

                <span
                    className={`text-[10px] sm:text-[8px] font-medium ${card.changeColor}`}
                >
                    ↗ {card.change}
                </span>
            </div>

            <p className="text-[8px] leading-5 text-slate-400 sm:text-[9px]">
                {card.label}
            </p>

            <p className="mt-1 break-words font-mono text-[18px] font-semibold tracking-tight text-white tabular-nums sm:text-[19px]">
                {shown}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/[0.06] pt-[10px] text-[6px] text-slate-400 sm:text-[8px]">
                {card.footer.map((f) => (
                    <span key={f.label}>
                        {f.label}:{" "}
                        <span className="text-slate-200">{f.value}</span>
                    </span>
                ))}
            </div>
        </div>
    );
}


function FloatingTag({ tag, mounted, onHoverStart, onHoverEnd, index }) {
    const Icon = tag.icon;
    return (
        <div
            className="absolute z-30"
            style={{
                ...tag.style,
                animation: mounted
                    ? `tagFloat 2.5s ease-in-out ${tag.delay}s infinite`
                    : "none",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.3s ease-out",
                transitionDelay: `${tag.delay}s`,
            }}
        >
            <div
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className={`
          group
          flex
          cursor-default
          items-center
          gap-1.5
          rounded-xl
          border
          border-white/10
          
          py-1
          pl-1
          pr-2.5
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]
          backdrop-blur-md
          bg-[#0b1220]/90
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-[1.04]
          hover:border-white/20
            ${index === 0 ? "shadow-[1px_0px_15px_2px_#bef26463] border border-[#A2E7158C]" : "bg-[#0b1220]/90"}
          sm:gap-2
          sm:py-1.5
          sm:pl-1.5
          sm:pr-4
        `}
            >
                <span
                    className="
            flex
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-full
            text-[9px]
            font-bold
            text-slate-900

            sm:h-7
            sm:w-7
            sm:text-[11px]
          "
                    style={{
                        background: tag.color,
                        "--glow": tag.glow,
                    }}
                >
                    {tag.id}
                </span>
                {tag.icon ?
                    <Icon
                        size={13}
                        strokeWidth={1.8}
                        className="shrink-0 text-slate-300 sm:h-[15px] sm:w-[15px]"
                    />
                    : <img src={tag.image} />}

                <span
                    className="
            whitespace-nowrap
            text-[9px]
            font-medium
            text-slate-200

            sm:text-[10px]
          "
                >
                    {tag.label}
                </span>

                <span
                    className="ml-0.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{
                        background: tag.color,
                        boxShadow: `0 0 8px ${tag.glow}`,
                    }}
                />
            </div>
        </div>
    );
}


function TrendChart({ mounted }) {
    const width = 480;
    const height = 150;
    const pad = 8;

    const series = [
        {
            data: TREND.collections,
            color: "#a3e635",
            key: "collections",
        },

    ];

    const max = Math.max(...TREND.collections) * 1.15;

    const toPoints = (arr) =>
        arr.map((v, i) => {
            const x =
                pad + (i * (width - pad * 2)) / (arr.length - 1);

            const y =
                height -
                pad -
                (v / max) * (height - pad * 2);

            return [x, y];
        });

    const toPath = (pts) =>
        pts
            .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`)
            .join(" ");

    const collectionsPts = toPoints(TREND.collections);

    const areaPath =
        toPath(collectionsPts) +
        ` L${width - pad},${height - pad} L${pad},${height - pad} Z`;

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
            className="mt-3 h-[59px] w-full overflow-visible sm:h-[62px]"
        >
            <defs>
                <linearGradient
                    id="trendFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stopColor="#a3e635"
                        stopOpacity="0.35"
                    />
                    <stop
                        offset="100%"
                        stopColor="#a3e635"
                        stopOpacity="0"
                    />
                </linearGradient>
            </defs>

            <path
                d={areaPath}
                fill="url(#trendFill)"
                style={{
                    opacity: mounted ? 1 : 0,
                    transition: "opacity 1s ease 0.6s",
                }}
            />

            {series.map((s, si) => {
                const pts = toPoints(s.data);
                const d = toPath(pts);

                return (
                    <path
                        key={s.key}
                        d={d}
                        fill="none"
                        stroke={s.color}
                        strokeWidth={s.key === "collections" ? 2.5 : 1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        pathLength={1}
                        style={{
                            strokeDasharray: 1,
                            strokeDashoffset: mounted ? 0 : 1,
                            transition: `stroke-dashoffset 1.4s ease ${0.3 + si * 0.2
                                }s`,
                        }}
                    />
                );
            })}

            {collectionsPts.map(([x, y], i) => (
                <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={mounted ? 3 : 0}
                    fill="#0b1220"
                    stroke="#a3e635"
                    strokeWidth={2}
                    style={{
                        transition: `r 0.4s ease ${0.9 + i * 0.06}s`,
                    }}
                />
            ))}
        </svg>
    );
}


function ActivityDonut({ mounted }) {
    const size = 132;
    const r = 52;
    const c = 2 * Math.PI * r;

    const total = ACTIVITY.reduce(
        (a, b) => a + b.value,
        0
    );

    let cumulative = 0;

    const segments = ACTIVITY.map((a) => {
        const frac = a.value / total;
        const len = frac * c;

        const seg = {
            ...a,
            len,
            offset: cumulative,
        };

        cumulative += len;

        return seg;
    });

    const centerValue = useCountUp(ACTIVITY[0].value, {
        duration: 1600,
        delay: 500,
    });

    return (
        <div className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center sm:h-[78px] sm:w-[78px]">
            <svg
                width={size}
                height={size}
                className="h-full w-full -rotate-90"
                viewBox={`0 0 ${size} ${size}`}
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth={12}
                />

                {segments.map((s) => (
                    <circle
                        key={s.label}
                        cx={size / 2}
                        cy={size / 2}
                        r={r}
                        fill="none"
                        stroke={s.color}
                        strokeWidth={12}
                        strokeLinecap="round"
                        strokeDasharray={`${s.len} ${c - s.len}`}
                        strokeDashoffset={mounted ? -s.offset : c}
                        style={{
                            transition:
                                "stroke-dashoffset 1.3s ease 0.5s",
                            filter: `drop-shadow(0 0 6px ${s.color}55)`,
                        }}
                    />
                ))}
            </svg>

            <div className="absolute flex flex-col items-center">
                <span className="font-mono text-[10px] font-bold tabular-nums text-white sm:text-[12px]">
                    {fmtInt(centerValue)}
                </span>
            </div>
        </div>
    );
}


export default function CommandCentreDashboard() {
    const [mounted, setMounted] = useState(false);
    const [hoveredTagId, setHoveredTagId] = useState(null);
    const highlightedCardIds = hoveredTagId
        ? TAG_CARD_MAP[hoveredTagId] || []
        : [];

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80);

        return () => clearTimeout(t);
    }, []);

    return (
        <div className="w-full">
            <style>{`
        @keyframes tagFloat {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes livePulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(163,230,53,0.55);
          }

          50% {
            box-shadow: 0 0 0 6px rgba(163,230,53,0);
          }
        }
      `}</style>

            <div
                className="relative mx-auto w-full shrink-0 px-2 py-6 sm:px-4 sm:py-8 md:px-6 lg:px-8 xl:px-10"
                style={{
                    backgroundImage:
                        "radial-gradient(#d7dbe1 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
            >

                <div
                    className="
            absolute
            right-1
            top-0
            z-30
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-[#0b1220]/90
            px-3
            py-1.5
            shadow-lg
            backdrop-blur-md
            transition-transform
            duration-300
            hover:-translate-y-1
            sm:right-2
            sm:px-4
            sm:py-2
          "
                    style={{
                        opacity: mounted ? 1 : 0,
                        transition:
                            "opacity 0.6s ease-out 1.9s, transform 0.3s ease",
                    }}
                >
                    <span
                        className="h-2 w-2 rounded-full bg-lime-300"
                        style={{
                            animation:
                                "livePulse 1.8s ease-in-out infinite",
                        }}
                    />

                    <span className="text-[9px] font-semibold tracking-[0.14em] text-slate-200 sm:text-[9px] sm:tracking-[0.18em]">
                        LIVE SYNC
                    </span>
                </div>

                <div
                    className="
            relative
            mt-0
            rounded-2xl
            border
            p-[15px]
            sm:rounded-[28px]
          "
                    style={{
                        background:
                            "linear-gradient(160deg, #0c1526 0%, #101d33 60%, #0c1526 100%)",
                        borderColor:
                            "rgba(190,242,100,0.18)",
                        boxShadow:
                            "0 0 0 1px rgba(190,242,100,0.06), 0 30px 80px -30px rgba(0,0,0,0.6), 0 0 60px -20px rgba(163,230,53,0.15)",
                    }}
                >


                    <div className="mb-[3px] flex flex-col gap-4 sm:mb-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <h2 className="text-[12px] font-semibold text-white sm:text-[15px]">
                                Command Centre
                            </h2>

                            <p className="mt-1 text-[9px] text-slate-400 sm:text-[9px]">
                                Overview of cooperative banking operations
                            </p>
                        </div>

                        <button
                            className="
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-2
                text-[11px]
                text-slate-200
                transition-colors
                duration-200
                hover:bg-white/[0.08]
                sm:px-4
                sm:text-[8px]
              "
                        >
                            Last 30 days
                            <ChevronDown size={14} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-2 min-[480px]:grid-cols-2 sm:gap-2">
                        {STAT_CARDS.map((card, i) => (
                            <StatCard
                                card={card}
                                mounted={mounted}
                                index={i}
                                key={card.id}
                                forceHighlight={highlightedCardIds.includes(card.id)}
                            />
                        ))}
                    </div>

                    <div className="mt-2 grid grid-cols-1 gap-3 sm:mt-2 sm:gap-2 lg:grid-cols-12">
                        <div
                            className={`
      rounded-2xl
      border
      border-white/[0.06]
      bg-[#101c30]
      p-[8px]
      transition-all
      duration-500
      lg:col-span-7
      h-[141px]
      ${mounted
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                                }
    `}
                            style={{
                                transitionDelay: mounted ? "620ms" : "0ms",
                            }}
                        >
                            <p className="text-[7px] font-semibold text-white sm:text-[10px]">
                                Transaction Volume Trend
                            </p>

                            <p className="mt-1 text-[6px] leading-5 text-slate-400 sm:text-[8px]">
                                Monthly overview of collections, loans and expenses
                            </p>

                            <TrendChart mounted={mounted} />

                            <div className="mt-0 flex flex-wrap items-center gap-x-3 gap-y-2 text-[7px] text-slate-400 sm:gap-x-4 sm:text-[7px]">
                                <span className="flex items-center gap-1.5">
                                    <i className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                                    Collections
                                </span>

                                <span className="flex items-center gap-1.5">
                                    <i className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                                    Loans Disbursed
                                </span>

                                <span className="flex items-center gap-1.5">
                                    <i className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                                    Expenses
                                </span>
                            </div>
                        </div>
                        <div
                            className={`
      rounded-2xl
      border
      border-white/[0.06]
      bg-[#101c30]
      p-[8px]
      transition-all
      duration-500
      lg:col-span-5
      h-[141px]
      ${mounted
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-4 opacity-0"
                                }
    `}
                            style={{
                                transitionDelay: mounted ? "700ms" : "0ms",
                            }}
                        >
                            <p className="text-[8px] font-semibold text-white sm:text-[10px]">
                                Society Activity Status
                            </p>

                            <p className="mt-1 text-[8px] leading-5 text-slate-400 sm:text-[9px]">
                                Current engagement breakdown
                            </p>

                            <div
                                className="
        mt-0
        flex
        flex-col
        items-center
        justify-center
        gap-5
        min-[480px]:flex-row
        min-[480px]:items-center
      "
                            >
                                <ActivityDonut mounted={mounted} />

                                <div className="flex w-full flex-col gap-2 min-[480px]:w-auto">
                                    {ACTIVITY.map((a) => (
                                        <div
                                            key={a.label}
                                            className="flex items-center gap-2 text-[7px] sm:text-[9px]"
                                        >
                                            <span
                                                className="h-1 w-1 shrink-0 rounded-full"
                                                style={{
                                                    background: a.color,
                                                }}
                                            />

                                            <span className="text-slate-300">
                                                {a.label}
                                            </span>

                                            <span className="ml-auto font-mono font-semibold text-white">
                                                {a.value.toLocaleString("en-IN")}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {TAGS.map((tag, index) => (
                    <FloatingTag
                        tag={tag}
                        index={index}
                        mounted={mounted}
                        key={tag.id}
                        onHoverStart={() => setHoveredTagId(tag.id)}
                        onHoverEnd={() =>
                            setHoveredTagId((current) =>
                                current === tag.id ? null : current
                            )
                        }
                    />
                ))}
            </div>
        </div>
    );
}
