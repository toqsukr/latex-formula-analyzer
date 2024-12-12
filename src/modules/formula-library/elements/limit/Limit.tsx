import { FC, ReactNode } from "react"
import Latex from "react-latex-next"
import css from "./Limit.module.scss"
import { LimitProp, LimitType } from "./Limit.type"

const Limit: FC<LimitProp> = ({ type }) => {
  const content: Record<LimitType, ReactNode> = {
    "to-inf": <Latex>{"${\\to\\infty}$"}</Latex>,
    common: null,
  }

  return (
    <div className={css.limit}>
      <Latex>{String.raw`$\lim$`}</Latex>
      <span className={css.range}>{content[type]}</span>
    </div>
  )
}

export default Limit
