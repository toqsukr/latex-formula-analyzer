import { FC, ReactNode } from "react"
import Latex from "react-latex-next"
import css from "./Integral.module.scss"
import { IntegralProp, IntegralType } from "./Integral.type"

const Integral: FC<IntegralProp> = ({ type }) => {
  const topValue: Record<IntegralType, ReactNode> = {
    "all": <Latex>{String.raw`$+\infty$`}</Latex>,
    "minus-inf-bottom": <Latex>{String.raw`$b$`}</Latex>,
    "inf-top": <Latex>{String.raw`$+\infty$`}</Latex>,
    common: <Latex>{String.raw`$b$`}</Latex>,
  }
  const bottomValue: Record<IntegralType, ReactNode> = {
    "all": <Latex>{String.raw`$-\infty$`}</Latex>,
    "minus-inf-bottom": <Latex>{String.raw`$-\infty$`}</Latex>,
    "inf-top": <Latex>{String.raw`$a$`}</Latex>,
    common: <Latex>{String.raw`$a$`}</Latex>,
  }

  return (
    <div className={css.integral}>
      <div className={css.range} id={css.top}>
        {topValue[type]}
      </div>
      <Latex>{String.raw`$\int$`}</Latex>
      <div className={css.range}>{bottomValue[type]}</div>
    </div>
  )
}

export default Integral
