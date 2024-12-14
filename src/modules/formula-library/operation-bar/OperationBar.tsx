import { FC } from "react"
import FormulaDivide from "./formula-divide/FormulaDivide"
import FormulaIntegral from "./formula-integral/FormulaIntegral"
import FormulaLogarifm from "./formula-logarifm/FormulaLogarifm"
import FormulaMinus from "./formula-minus/FormulaMinus"
import FormulaSquareRoot from "./formula-square-root/FormulaSquareRoot"
import FormulaSum from "./formula-sum/FormulaSum"
import FormulaTimes from "./formula-times/FormulaTimes"
import css from "./OperationBar.module.scss"

const OperationBar: FC<{ onAdd: (value: string) => void }> = ({ onAdd }) => {
  return (
    <section className={css.bar}>
      <FormulaSum onAdd={onAdd} />
      <FormulaMinus onAdd={onAdd} />
      <FormulaTimes onAdd={onAdd} />
      <FormulaDivide onAdd={onAdd} />
      <FormulaSquareRoot onAdd={onAdd} />
      <FormulaLogarifm onAdd={onAdd} />
      <FormulaIntegral onAdd={onAdd} />
    </section>
  )
}

export default OperationBar
