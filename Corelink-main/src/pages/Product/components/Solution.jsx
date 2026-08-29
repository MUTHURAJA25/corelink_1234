import React from "react";

const ProblemSolves = ({ data }) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-cyan-300 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {data.badge}
                </span>
            </div>

            <h2 className="mt-6 text-center text-4xl md:text-5xl font-extrabold text-white">
                {data.title}
            </h2>

            <p className="mt-6 text-center text-white/1 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                {data.description}
            </p>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {data.details.map((item) => (
                    <div
                        key={item.id}
                        className="relative flex flex-col gap-5 pl-6"
                    >
                        <span
                            className={`absolute left-0 top-0 h-full w-[2px] ${data.borderStyle}`}
                        />
                        <span
                            className={`flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-b ${data.iconBackground}`}
                        >
                            <img src={item.icon} alt={item.description} />
                        </span>

                        <p className="text-base leading-snug text-white/80">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProblemSolves;