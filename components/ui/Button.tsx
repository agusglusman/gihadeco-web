import { ReactNode } from "react";

export type ButtonVariant =
  "primary"
  | "secondary"
  | "light"
  | "instagram"
  | "servicio";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-colors duration-200 gap-2";

  const variantStyles = {
    primary: "bg-gold font-subtitle text-background hover:bg-foreground font-subtitle uppercase tracking-[0.1em]",
    secondary: " border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
    light: "border border-background bg-transparent text-background hover:bg-background hover:text-foreground",
    instagram: "font-body  border border-gold bg-transparent text-gold hover:bg-gold hover:text-foreground rounded-none",
    servicio: "bg-transparent transition-opacity duration-200 hover:text-gold rounded-none font-subtitle uppercase",
  };

  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {children}
    </button>
  );
}