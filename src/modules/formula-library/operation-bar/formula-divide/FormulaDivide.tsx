import Divide from "@modules/formula-library/elements/divide/Divide"
import FormulaTemplate from "@modules/formula-library/formula-template/FormulaTemplate"
import { FC } from "react"
import { FormulaProp } from "../OperationBar.type"

const FormulaDivide: FC<FormulaProp> = ({ onAdd }) => {
  return (
    <FormulaTemplate
      templates={[{ element: <Divide />, value: "/" }]}
      onAdd={onAdd}
    />
  )
}

export default FormulaDivide
