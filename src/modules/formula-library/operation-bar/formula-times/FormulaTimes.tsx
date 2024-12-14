import Times from "@modules/formula-library/elements/times/Times"
import FormulaTemplate from "@modules/formula-library/formula-template/FormulaTemplate"
import { FC } from "react"
import { FormulaProp } from "../OperationBar.type"

const FormulaTimes: FC<FormulaProp> = ({ onAdd }) => {
  return (
    <FormulaTemplate
      templates={[{ element: <Times />, value: "\\cdot" }]}
      onAdd={onAdd}
    />
  )
}

export default FormulaTimes
