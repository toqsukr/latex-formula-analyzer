import Sum from "@modules/formula-library/elements/sum/Sum"
import FormulaTemplate from "@modules/formula-library/formula-template/FormulaTemplate"
import { FC } from "react"
import { FormulaProp } from "../OperationBar.type"

const FormulaSum: FC<FormulaProp> = ({ onAdd }) => {
  return (
    <FormulaTemplate
      templates={[{ element: <Sum />, value: "+" }]}
      onAdd={onAdd}
    />
  )
}

export default FormulaSum
