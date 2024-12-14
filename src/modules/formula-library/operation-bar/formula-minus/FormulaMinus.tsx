import Minus from "@modules/formula-library/elements/minus/Minus"
import FormulaTemplate from "@modules/formula-library/formula-template/FormulaTemplate"
import { FC } from "react"
import { FormulaProp } from "../OperationBar.type"

const FormulaMinus: FC<FormulaProp> = ({ onAdd }) => {
  return (
    <FormulaTemplate
      templates={[{ element: <Minus />, value: "-" }]}
      onAdd={onAdd}
    />
  )
}

export default FormulaMinus
