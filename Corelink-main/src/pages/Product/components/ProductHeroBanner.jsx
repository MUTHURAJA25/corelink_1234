import React from 'react';

/**
 * ProductHeroBanner
 * Accepts title, subtitle, description, and productImage as props.
 */
const ProductHeroBanner = ({
  title,
  subtitle,
  description,
  productImage,
}) => {
  return (
    <section className="w-full relative pt-28 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-white text-black flex flex-col items-center justify-center overflow-hidden">

      {/* Header Text Block */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-6">
        <h1 className="text-4xl sm:text-4xl font-bold tracking-tight text-black mb-3">
          {title}
        </h1>

        <h2 className="text-lg sm:text-xl font-medium text-slate-800 mb-3 max-w-2xl mx-auto leading-snug">
          {subtitle}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hero Image Container (Lifted higher) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-center -mt-5 sm:-mt-10 px-2 sm:px-4">
        <img
          src={productImage}
          alt={title}
          className="w-full h-auto object-contain drop-shadow-[0_10px_35px_rgba(194,122,89,0.2)]"
        />
      </div>

    </section>
  );
};

export default ProductHeroBanner;