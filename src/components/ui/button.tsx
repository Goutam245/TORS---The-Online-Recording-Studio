import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:scale-105 hover:shadow-[0_0_40px_hsl(45_99%_66%_/_0.4)] rounded-full",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline: "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary rounded-full",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
        ghost: "hover:bg-muted hover:text-foreground rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium TORS variants
        hero: "bg-primary text-primary-foreground font-bold hover:scale-105 hover:shadow-[0_0_50px_hsl(45_99%_66%_/_0.5)] active:scale-100 rounded-full",
        "hero-outline": "border-2 border-foreground/20 bg-transparent text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 rounded-full",
        gold: "bg-gradient-to-r from-primary to-gold-dim text-primary-foreground font-bold hover:scale-105 hover:shadow-[0_0_40px_hsl(45_99%_66%_/_0.4)] rounded-full",
        glass: "bg-foreground/5 backdrop-blur-xl border border-foreground/10 text-foreground hover:bg-foreground/10 hover:border-foreground/20 rounded-full",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
