import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full border-b-[0.492px] text-[#696969] border-[#fff] lato placeholder:text-[0.5rem] placeholder:md:text-[0.875rem] font-normal lowercase bg-transparent mt-[1.19056rem] text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#696969] disabled:cursor-not-allowed disabled:opacity-50 outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
