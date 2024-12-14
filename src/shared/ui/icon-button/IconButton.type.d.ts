import { HTMLAttributes } from "react"

export type IconButtonProp = HTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode
}
