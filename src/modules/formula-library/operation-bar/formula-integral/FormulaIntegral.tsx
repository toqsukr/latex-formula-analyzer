import { FC } from "react"
import Integral from "../../elements/integral/Integral"
import FormulaTemplate from "../../formula-template/FormulaTemplate"
import { FormulaProp } from "../OperationBar.type"
import { integralTypes, integralValues } from "./FormulaIntegral.data"

const FormulaIntegral: FC<FormulaProp> = ({ onAdd }) => {
  return (
    <FormulaTemplate
      templates={integralTypes.map((type) => ({
        element: <Integral type={type} />,
        value: integralValues[type],
      }))}
      onAdd={onAdd}
    />
  )
}

export default FormulaIntegral
