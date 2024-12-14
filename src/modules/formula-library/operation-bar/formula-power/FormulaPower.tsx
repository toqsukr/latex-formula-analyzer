import Power from "@modules/formula-library/elements/power/Power"
import FormulaTemplate from "@modules/formula-library/formula-template/FormulaTemplate"
import { FC } from "react"
import { FormulaProp } from "../OperationBar.type"

const FormulaPower: FC<FormulaProp> = ({ onAdd }) => {
  return (
    <FormulaTemplate
      templates={[{ element: <Power />, value: "^" }]}
      onAdd={onAdd}
    />
  )
}

export default FormulaPower
