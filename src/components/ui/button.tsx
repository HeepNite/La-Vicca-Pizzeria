import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils/utils"

const buttonVariants = cva(
  "whitespace-nowrap flex justify-center items-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#C3922E] rounded text-black hover:text-white hover:bg-gradient-to-r transition-all duration-300 hover:bg-gradient-to-r from-[#C3922E] to-black ",
        orange: "bg-[#C3922E] rounded text-black  transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-[#C3922E] to-black",
        input: "bg-white/5 rounded text-white border border-white/5 hover:bg-white/8",
        date: "text-white border border-white/10 bg-white/10 flex item-center",
        ghost:'hover:bg-white hover:text-black'

      },
      size: {
        full:'w-full h-[3rem] flex items-center justify-center',
        default: "h-[5rem] w-[15rem] px-4 py-2",
        sm: "h-[5rem] w-[10rem] rounded-xl px-3",
        lg: "h-[5rem] w-[18rem] rounded-md px-8",
        xl: "h-[5rem] w-[24rem] hidden md:block rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
