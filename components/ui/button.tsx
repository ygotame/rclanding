import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const sizeClass =
    size === "sm"
      ? "px-2 py-1 text-sm"
      : size === "lg"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2";

  const variantClass =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : variant === "secondary"
      ? "bg-gray-500 text-white hover:bg-gray-600"
      : variant === "outline"
      ? "border border-gray-500 text-gray-500 hover:bg-gray-100"
      : "";

  return (
    <button
      className={`rounded ${sizeClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

