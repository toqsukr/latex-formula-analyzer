import { FC } from "react"
import Limit from "../../elements/limit/Limit"
import FormulaTemplate from "../../formula-template/FormulaTemplate"
import { FormulaProp } from "../OperationBar.type"
import { limitTypes, limitValues } from "./FormulaLimit.data"

const FormulaLimit: FC<FormulaProp> = ({ onAdd }) => {
  return (
    <FormulaTemplate
      templates={limitTypes.map((type) => ({
        element: <Limit type={type} />,
        value: limitValues[type],
      }))}
      onAdd={onAdd}
    />
  )
}

export default FormulaLimit
