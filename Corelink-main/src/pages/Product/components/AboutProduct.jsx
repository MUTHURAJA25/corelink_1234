import React from "react";

/**
 * AboutProduct
 *
 * Props:
 *  - sectionTag  {string}   – small label chip above heading
 *  - heading     {string}   – section title
 *  - body        {string | string[]} – paragraph text (array = multiple paragraphs)
 *  - theme       {object}   – color config for the tag chip
 *  - image       {string}   – illustration shown on the right (required)
 */
const AboutProduct = ({
  sectionTag = "About",
  heading,
  body,
  theme = {},
  image,
}) => {
  const {
    tagBorderColor = "border-cyan-500/[0.22]",
    tagTextColor = "text-cyan-500",
    tagBgColor = "bg-cyan-500/[0.22]",
  } = theme;

  return (
    <section className="w-full py-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div className="space-y-6">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${tagBorderColor} ${tagBgColor} ${tagTextColor} text-xs font-semibold uppercase tracking-wider`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {sectionTag}
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-snug">
            {heading}
          </h2>

          {/* body: string or string[]; strings are split on blank lines/newlines */}
          <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
            {(Array.isArray(body) ? body : String(body).split(/\n\s*\n|\n/))
              .map((para) => para.trim())
              .filter(Boolean)
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </div>
        </div>

        {/* Right — illustration image */}
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt={sectionTag}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
