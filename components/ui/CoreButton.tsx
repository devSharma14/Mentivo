import React from "react";
import clsx from "clsx";

type CoreButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CoreButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: CoreButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-full font-bold transition-all duration-300",
        "flex items-center justify-center",

        // Sizes (mobile slightly smaller, desktop same as before)
        {
          "px-4 py-2.5 text-sm": size === "sm",

          "px-6 py-3 text-base": size === "md",

          // 👇 lg reduced only for mobile
          "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg":
            size === "lg",
        },

        // Variants
        {
          "bg-[#F5B301] text-black hover:opacity-90":
            variant === "primary",

          "bg-transparent border border-white/20 text-white hover:bg-white/5":
            variant === "secondary",
        },

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}