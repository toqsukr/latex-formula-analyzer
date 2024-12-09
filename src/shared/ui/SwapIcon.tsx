import { FC, HTMLAttributes } from "react"

const SwapIcon: FC<HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width="37"
      height="30"
      viewBox="0 0 37 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 14.4616C1 2.34622 6.46875 5.03853 36 5.03853M36 5.03853L28.3438 9.07699M36 5.03853L28.3437 1.00007"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M36 15.7693C36 27.8846 30.5312 25.1923 1 25.1923M1 25.1923L8.65625 21.1539M1 25.1923L8.65625 29.2308"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  )
}

export default SwapIcon
