import { FC } from "react"
import Latex from "react-latex-next"
import FieldInput from "../../../shared/ui/field-input/FieldInput"
import css from "./Trigonometry.module.scss"
import { TrigonometryProp } from "./Trigonometry.type"

const Trigonometry: FC<TrigonometryProp> = ({ type }) => {
  return (
    <div className={css.trigonometry}>
      <Latex>{String.raw`$\\${type}$`}</Latex>
      <FieldInput />
    </div>
  )
}

export default Trigonometry
