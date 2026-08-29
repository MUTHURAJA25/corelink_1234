import React, { useEffect, useState } from "react";
import { Images } from "../assets/images";

const InitialLoader = ({ onComplete }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Timer to match loader animation duration before triggering completion
    const timer = setTimeout(() => {
      setHide(true);

      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600); // Smooth exit fade out
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white transition-all duration-700 ease-in-out ${
        hide
          ? "opacity-0 scale-105 invisible pointer-events-none"
          : "opacity-100 scale-100 visible"
      }`}
    >
      {/* Ambient Purple Background Glow */}
      <div className="absolute w-[350px] h-[350px] bg-[#5c20e5]/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      {/* Loader Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">

        {/* CoreLink Logo (Slightly increased size) */}
        <div className="mb-2 relative flex items-center justify-center">
          <img
            src={Images.common.logo}
            alt="CoreLink"
            className="h-7 sm:h-9 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Tagline (Font changed to medium) */}
        <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-medium mb-8">
          One Platform for Banks, Societies & Members
        </p>

        {/* 5-DOT SCALING LOADER (Standard 16px size) */}
        <div className="flex items-center justify-center">
          <div className="dot-scale dot-delay-1" />
          <div className="dot-scale dot-delay-2" />
          <div className="dot-scale dot-delay-3" />
          <div className="dot-scale dot-delay-4" />
          <div className="dot-scale dot-delay-5" />
        </div>

      </div>

      {/* SCOPED CUSTOM ANIMATION STYLES */}
      <style>{`
        @keyframes scaling {
          0%, 100% {
            transform: scale(0.25);
            background-color: #f3e8ff; /* Soft Light Purple */
          }
          40% {
            transform: scale(1);
            background-color: #9d50ff; /* Mid Purple */
          }
          50% {
            transform: scale(1);
            background-color: #5c20e5; /* Core Brand Purple */
          }
        }

        .dot-scale {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          transform: scale(0.25);
          background-color: #f3e8ff;
          animation: scaling 2.2s ease-in-out infinite;
          display: inline-block;
          margin: 0 0.35rem;
        }

        .dot-delay-1 {
          animation-delay: 0s;
        }
        .dot-delay-2 {
          animation-delay: 0.2s;
        }
        .dot-delay-3 {
          animation-delay: 0.4s;
        }
        .dot-delay-4 {
          animation-delay: 0.6s;
        }
        .dot-delay-5 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
};

export default InitialLoader;