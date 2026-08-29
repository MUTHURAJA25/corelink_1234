import React from "react";
import { Network, Split, Radar } from "lucide-react";
import { Images } from "../../assets/images";

const features = [
  {
    icon: Network,
    isImage: false,
    title: "Integrated Payment Rails",
    description:
      "Connect multiple payment and financial rails through one unified infrastructure.",
  },
  {
    icon: Images.Product.Product_Schedule_Send,
    isImage: true,
    title: "Automated Disbursals",
    description: "Automate disbursal workflows with defined rules and controls.",
  },
  {
    icon: Split,
    isImage: false,
    title: "Transaction Routing",
    description: "Route transactions through the right rails based on configured workflows.",
  },
  {
    icon: Radar,
    isImage: false,
    title: "Real-Time Tracking",
    description:
      "Monitor transaction status, fund movement, and settlement activity in real time.",
  },
];

const RailsDisbursalsLayer = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white bg-cover bg-center bg-no-repeat pt-20 pb-3 sm:pt-40 sm:pb-24 px-5"
      style={{ backgroundImage: `url(${Images.Product.Product_05_bg})` }}
    >
      <div className="pointer-events-none absolute -right-20 top-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#A5CF83]/40 to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-[74rem]">
        {/* header */}
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#EFEBFF] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6C4CE0] xs:text-[11px] sm:text-xs">
            Connected Financial Rails
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold leading-tight tracking-tight text-slate-900">
            <span>#5</span>{" "}
            <span className="title-gradient bg-clip-text text-transparent">
              Rails &amp; Disbursals Layer
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600">
            Connect payment rails, transactions, disbursals, and settlements through one
            unified financial layer. Streamline fund movement with automated workflows,
            transaction routing, and real-time visibility. Enable faster, more secure, and
            traceable movement of funds across the ecosystem.
          </p>
        </div>

        {/* card grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="relative rounded-2xl border border-black/5 bg-white/70 px-5 py-3 sm:px-6  sm:py-4 shadow-[0_2px_20px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-shadow hover:shadow-[0_4px_28px_rgba(15,23,42,0.08)]"
              >
                <div className="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7C65D6]/25 to-[#A5CF83]/25 blur-2xl" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C65D6] to-[#A5CF83] shadow-md shadow-[#7C65D6]/20">
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-[#7C65D6] to-[#A5CF83] blur-xl opacity-50 scale-150" />
                  {f.isImage ? (
                    <img src={Icon} alt="" className="h-6 w-6" />
                  ) : (
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                  )}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RailsDisbursalsLayer;
