import React from 'react';

const ComplianceValue = ({
    smalltitle = 'TRUST & COMPLIANCE',
    title = 'Compliance Value',
    description = 'Establish a culture of accountability that bridges the gap between technical execution and public-facing transparency.',
    cards = [],
    theme = {},
}) => {
    // Destructure custom color styles with fallback defaults
    const {
        // Outer Card Border Gradients
        borderGradient = 'from-[#3a6350]/60 via-[#233f32]/40 to-[#14261c]/30',
        borderGradientHover = 'hover:from-[#5eab8a]/80 hover:via-[#376b53]/70 hover:to-[#214234]/50',

        // Card Body Background
        cardBg = 'bg-gradient-to-b from-[#213a2f]/90 via-[#162a21]/95 to-[#101e18]',

        // Inner Display Square Gradients
        innerBg = 'bg-gradient-to-b from-[#2c4e3e]/70 via-[#213c2f]/60 to-[#182d23]/70',
        innerBgHover = 'group-hover:from-[#3a6652]/80 group-hover:via-[#2b4d3d]/75 group-hover:to-[#1e382c]/80',
        innerBorder = 'border-[#43755c]/50',
        innerBorderHover = 'group-hover:border-[#68b38f]/70',

        // Concentric Ring Colors
        ringBorder = 'border-[#96e0c2]/30',
        ringBorderHover = 'group-hover:border-[#b4f0d7]/65',

        // Radial Center Glow
        glowGradient = 'from-[#5eb892]/35 to-[#96e0c2]/25',
        glowGradientHover = 'group-hover:from-[#6ecfa6]/55 group-hover:to-[#b4f0d7]/40',

        // Image Drop Shadow
        imgShadow = 'drop-shadow-[0_4px_14px_rgba(150,224,194,0.35)]',
        imgShadowHover = 'group-hover:drop-shadow-[0_6px_20px_rgba(180,240,215,0.55)]',

        // Card Hover Drop Shadow Glow
        cardShadowHover = 'hover:shadow-[0_12px_35px_rgba(50,135,95,0.3)]',
    } = theme;

    return (
        <section className="w-full relative py-20 px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center justify-center overflow-hidden">

            {/* ──── BADGE / PILL ──── */}
            {smalltitle && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span className="text-cyan-400 text-[10px] tracking-wider font-semibold uppercase">
                        {smalltitle}
                    </span>
                </div>
            )}

            {/* ──── HEADER TEXT BLOCK ──── */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                    {title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>

            {/* ──── CARDS GRID ──── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className={`group relative p-[1px] rounded-2xl bg-gradient-to-b ${borderGradient} ${borderGradientHover} shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 ${cardShadowHover} cursor-pointer`}
                    >
                        {/* INNER CARD BODY */}
                        <div className={`flex flex-col items-center justify-between p-4 sm:p-5 rounded-[15px] ${cardBg} backdrop-blur-md h-full min-h-[380px] text-center`}>

                            {/* INNER DISPLAY CONTAINER */}
                            <div className={`relative w-full aspect-square max-w-[260px] rounded-xl ${innerBg} ${innerBgHover} border ${innerBorder} ${innerBorderHover} flex items-center justify-center overflow-hidden p-6 mb-6 transition-all duration-500`}>

                                {/* EXACT 2 RINGS */}
                                <div className={`absolute w-[82%] h-[82%] rounded-full border ${ringBorder} pointer-events-none transition-all duration-500 ${ringBorderHover} group-hover:scale-[1.01]`} />
                                <div className={`absolute w-[58%] h-[58%] rounded-full border ${ringBorder} pointer-events-none transition-all duration-500 ${ringBorderHover} group-hover:scale-[1.01]`} />

                                {/* GRADIENT RADIAL CENTER GLOW */}
                                <div className={`absolute w-32 h-32 bg-gradient-to-r ${glowGradient} rounded-full blur-xl pointer-events-none transition-all duration-500 ${glowGradientHover} group-hover:scale-110`} />

                                {/* CENTER ICON / IMAGE */}
                                <div className="relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.04]">
                                    <img
                                        src={card.imgSrc}
                                        alt={card.subtitle}
                                        className={`w-16 h-16 sm:w-20 sm:h-20 object-contain ${imgShadow} transition-all duration-500 ${imgShadowHover}`}
                                    />
                                </div>
                            </div>

                            {/* SUBTITLE CONTENT TEXT */}
                            <p className="text-[15px] font-medium text-slate-100 leading-snug pb-3 px-3 max-w-[240px] transition-colors duration-500 group-hover:text-white">
                                {card.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ComplianceValue;