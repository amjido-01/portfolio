import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border-b-[0.492px] text-[#696969] border-[#fff] placeholder:text-[0.5rem] placeholder:md:text-[0.875rem] font-normal lowercase bg-transparent mt-[1.19056rem] py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium Poppins placeholder:text-[#696969] disabled:cursor-not-allowed disabled:opacity-50 outline-none",
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
