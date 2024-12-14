import { useFirstControl } from "../store"
import FormulaIntegral from "./formula-integral/FormulaIntegral"
import FormulaLogarifm from "./formula-logarifm/FormulaLogarifm"
import FormulaSquareRoot from "./formula-square-root/FormulaSquareRoot"
import css from "./OperationBar.module.scss"

const OperationBar = () => {
  const { handleChange } = useFirstControl()

  const handleAdd = (value: string) => {
    handleChange(value)
  }
  return (
    <section className={css.bar}>
      <FormulaIntegral onAdd={handleAdd} />
      <FormulaLogarifm onAdd={handleAdd} />
      <FormulaSquareRoot onAdd={handleAdd} />
    </section>
  )
}

export default OperationBar
