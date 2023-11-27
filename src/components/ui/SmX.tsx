import { SVGProps } from "react"
export const SmX = (props: SVGProps<SVGSVGElement>) => (
  <svg
   xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <circle cx={11} cy={11} r={9.5} stroke="#fff" strokeWidth={3} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m8.674 8.353 5.561 5.562M8.412 13.915l5.561-5.562"
    />
  </svg>
)