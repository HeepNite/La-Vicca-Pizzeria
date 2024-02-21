import * as React from "react"

import { cn } from "@/lib/utils/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[3rem] w-full bg-white/10 border border-white/10 px-6 py-2 text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-300/80 disabled:cursor-not-allowed disabled:opacity-50",  
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
