import { FC } from "react"
import Latex from "react-latex-next"
import { TrigonometryProp } from "./Trigonometry.type"

const Trigonometry: FC<TrigonometryProp> = ({ type }) => {
  return <Latex>{String.raw`$\\${type}$`}</Latex>
}

export default Trigonometry
