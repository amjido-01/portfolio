import { SVGProps } from "react"
export const ReadMore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M0 5a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm26 0L18.5.67v8.66L26 5ZM4 5.75h15.25v-1.5H4v1.5Z"
    />
  </svg>
)