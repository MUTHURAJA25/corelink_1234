import React from "react";

const LegalSection = ({ index, title, body, points, variant = "default" }) => {
  const isPrivacyStyle = variant === "privacy";

  return (
    <section
      className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-out ${isPrivacyStyle ? "border border-[#e5dffa] bg-white shadow-[0_10px_28px_rgba(57,24,124,0.12)] hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(57,24,124,0.17)]" : "border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(57,24,124,0.10)]"}`}
    >
      <div className="mb-5 flex items-center gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${isPrivacyStyle ? "border border-[#d9d2ef] bg-[#f4efff] text-[#5520d7]" : "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"}`}
        >
          {index}
        </div>
        <h2
          className={`text-2xl font-semibold sm:text-3xl ${isPrivacyStyle ? "text-[#211d38]" : "text-white"}`}
        >
          {title}
        </h2>
      </div>

      {body ? (
        <p
          className={`text-base leading-8 ${isPrivacyStyle ? "text-[#5a5268]" : "text-gray-300"}`}
        >
          {body}
        </p>
      ) : null}

      {points?.length ? (
        <ul className="mt-5 space-y-3">
          {points.map((point) => (
            <li
              key={point}
              className={`flex items-start gap-3 ${isPrivacyStyle ? "text-[#5a5268]" : "text-gray-300"}`}
            >
              <span
                className={`mt-2 h-2 w-2 flex-shrink-0 rounded-full ${isPrivacyStyle ? "bg-[#5520d7]" : "bg-cyan-400"}`}
              />
              <span className="leading-7">{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};

export default LegalSection;
