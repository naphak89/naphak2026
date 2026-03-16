'use client';

import * as React from "react";
import { motion } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";

function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

const glassButtonVariants = cva(
  "relative isolate all-unset cursor-pointer rounded-full transition-all",
  {
    variants: {
      size: {
        default: "text-base font-medium",
        sm: "text-sm font-medium",
        lg: "text-lg font-medium",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const glassButtonTextVariants = cva(
  "glass-button-text relative block select-none tracking-tighter",
  {
    variants: {
      size: {
        default: "px-6 py-3.5",
        sm: "px-4 py-2",
        lg: "px-8 py-4",
        icon: "flex h-10 w-10 items-center justify-center",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface GlassButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
    >,
    VariantProps<typeof glassButtonVariants> {
  contentClassName?: string;
}

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
};

const shineTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 18,
  mass: 1.2,
};

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, children, size, contentClassName, ...props }, ref) => {
    return (
      <motion.div
        className={cn(
          "glass-button-wrap cursor-pointer rounded-full",
          className
        )}
        whileHover="hover"
        whileTap="tap"
        initial="idle"
      >
        <motion.button
          className={cn("glass-button", glassButtonVariants({ size }))}
          ref={ref}
          variants={{
            idle: { y: 0, scale: 1 },
            hover: { y: -2 },
            tap: { y: 0, scale: 0.97 },
          }}
          transition={springTransition}
          {...props}
        >
          {/* Light sweep that slides across on hover */}
          <motion.span
            className="glass-button-shine"
            aria-hidden="true"
            variants={{
              idle: { x: "-110%", opacity: 0 },
              hover: { x: "110%", opacity: 1 },
              tap: { x: "110%", opacity: 0.6 },
            }}
            transition={shineTransition}
          />
          {/* Edge highlight that rotates on hover */}
          <motion.span
            className="glass-button-edge"
            aria-hidden="true"
            variants={{
              idle: { rotate: 0 },
              hover: { rotate: 60 },
              tap: { rotate: 90 },
            }}
            transition={shineTransition}
          />
          <span
            className={cn(
              glassButtonTextVariants({ size }),
              contentClassName
            )}
          >
            {children}
          </span>
        </motion.button>
        <div className="glass-button-shadow rounded-full"></div>
      </motion.div>
    );
  }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
