import { HTMLAttributes } from "react"

export type TipTemplateProp = {
  text: string
} & Pick<HTMLAttributes<HTMLButtonElement>, "onClick" | "className">
