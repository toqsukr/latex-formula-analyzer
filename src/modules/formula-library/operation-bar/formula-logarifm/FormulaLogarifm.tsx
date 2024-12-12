import { FC } from "react"
import Logarifm from "../../elements/logarifm/Logarifm"
import FormulaTemplate from "../../formula-template/FormulaTemplate"
import { FormulaProp } from "../OperationBar.type"
import { logarifmTypes, logarifmValues } from "./FormulaLogarifm.data"

const FormulaLogarifm: FC<FormulaProp> = ({ onAdd }) => {
  return (
    <FormulaTemplate
      templates={logarifmTypes.map((type) => ({
        element: <Logarifm type={type} />,
        value: logarifmValues[type],
      }))}
      onAdd={onAdd}
    />
  )
}

export default FormulaLogarifm
