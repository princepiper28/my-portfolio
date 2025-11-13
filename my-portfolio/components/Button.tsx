import React from "react";

interface ButtonProps {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-dark hover:bg-[#FF8533] hover:shadow-lg hover:shadow-primary/20",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-dark",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
