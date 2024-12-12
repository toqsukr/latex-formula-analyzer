import { FC } from "react"
import SquareRoot from "../../elements/square-root/SquareRoot"
import FormulaTemplate from "../../formula-template/FormulaTemplate"
import { FormulaProp } from "../OperationBar.type"

const FormulaSquareRoot: FC<FormulaProp> = ({ onAdd }) => {
  return (
    <FormulaTemplate
      templates={[
        {
          element: <SquareRoot />,
          value: String.raw`\sqrt{x}`,
        },
      ]}
      onAdd={onAdd}
    />
  )
}

export default FormulaSquareRoot
