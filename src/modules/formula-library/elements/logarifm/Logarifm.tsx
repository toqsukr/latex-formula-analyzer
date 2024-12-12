import { FC } from "react"
import Latex from "react-latex-next"
import { LogarifmProp } from "./Logarifm.type"

const Logarifm: FC<LogarifmProp> = ({ type }) => {
  return <Latex>{String.raw`$\\${type}$`}</Latex>
}

export default Logarifm
