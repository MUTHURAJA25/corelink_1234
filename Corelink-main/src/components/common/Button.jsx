import { useNavigate } from "react-router-dom";

export default function CustomButton({
  children,
  variant = "primary",
  type = "button",
  onClick,
  link,
  className = "",
  contentClassName = "",
  style,
}) {
  const navigate = useNavigate();

  let variantClass = "";

  if (variant === "primary") {
    variantClass = "btn-primary";
  } else if (variant === "secondary") {
    variantClass = "btn-secondary";
  } else if (variant === "transparent") {
    variantClass = "btn-transparent";
  }

  const handleClick = () => {
    if (link) {
      navigate(link);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`
        group
        relative
        flex
        h-[56px]
        items-center
        gap-3
        overflow-hidden
        ${variantClass}
        ${className}
      `}
      style={style}
    >
      {/* =========================
          WHITE SHINE
      ========================= */}

      <span
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-[80%]
          z-0
          w-[45%]
          rotate-[20deg]
          bg-white/30
          blur-[8px]
          transition-[left]
          duration-700
          ease-in-out
          group-hover:left-[130%]
        "
      />

      {/* =========================
          CONTENT
      ========================= */}

      <span className={`relative z-10 flex items-center gap-3 ${contentClassName}`}>
        {children}
      </span>
    </button>
  );
}
