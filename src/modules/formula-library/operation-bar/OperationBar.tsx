import { useActiveField } from "@modules/compare/store"
import { FieldKeys } from "@modules/compare/type.d"
import { useFirstControl, useSecondControl } from "../store"
import FormulaDivide from "./formula-divide/FormulaDivide"
import FormulaIntegral from "./formula-integral/FormulaIntegral"
import FormulaLogarifm from "./formula-logarifm/FormulaLogarifm"
import FormulaMinus from "./formula-minus/FormulaMinus"
import FormulaSquareRoot from "./formula-square-root/FormulaSquareRoot"
import FormulaSum from "./formula-sum/FormulaSum"
import FormulaTimes from "./formula-times/FormulaTimes"
import css from "./OperationBar.module.scss"

const OperationBar = () => {
  const { handleChange: firstChange } = useFirstControl()
  const { handleChange: secondChange } = useSecondControl()
  const { fieldKey } = useActiveField()

  const handleAdd = (value: string) => {
    if (fieldKey === FieldKeys.FIRST) {
      firstChange(value)
    } else {
      secondChange(value)
    }
  }
  return (
    <section className={css.bar}>
      <FormulaSum onAdd={handleAdd} />
      <FormulaMinus onAdd={handleAdd} />
      <FormulaTimes onAdd={handleAdd} />
      <FormulaDivide onAdd={handleAdd} />
      <FormulaSquareRoot onAdd={handleAdd} />
      <FormulaLogarifm onAdd={handleAdd} />
      <FormulaIntegral onAdd={handleAdd} />
    </section>
  )
}

export default OperationBar
