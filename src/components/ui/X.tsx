import { SVGProps } from "react"
export const X = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={45}
    fill="none"
    {...props}
  >
    <g stroke="#fff">
      <circle cx={22} cy={22.5} r={19.75} strokeWidth={4.5} />
      <g strokeLinecap="round" strokeWidth={2.588}>
        <path d="M17.347 17.207 28.47 28.33M16.823 28.33l11.124-11.123" />
      </g>
    </g>
  </svg>
)