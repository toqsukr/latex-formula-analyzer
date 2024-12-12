import { FC } from "react"
import Trigonometry from "../../elements/trigonometry/Trigonometry"
import FormulaTemplate from "../../formula-template/FormulaTemplate"
import { FormulaProp } from "../OperationBar.type"
import {
  trigonometryTypes,
  trigonometryValues,
} from "./FormulaTrigonometry.data"

const FormulaTrigonometry: FC<FormulaProp> = ({ onAdd }) => {
  return (
    <FormulaTemplate
      templates={trigonometryTypes.map((type) => ({
        element: <Trigonometry type={type} />,
        value: trigonometryValues[type],
      }))}
      onAdd={onAdd}
    />
  )
}

export default FormulaTrigonometry
