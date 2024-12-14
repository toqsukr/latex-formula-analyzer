import { useControl } from "../store"
import FormulaIntegral from "./formula-integral/FormulaIntegral"
import FormulaLimit from "./formula-limit/FormulaLimit"
import FormulaLogarifm from "./formula-logarifm/FormulaLogarifm"
import FormulaSquareRoot from "./formula-square-root/FormulaSquareRoot"
import css from "./OperationBar.module.scss"

const OperationBar = () => {
  const { handleChange } = useControl()

  const handleAdd = (value: string) => {
    handleChange(value)
  }
  return (
    <section className={css.bar}>
      <FormulaIntegral onAdd={handleAdd} />
      <FormulaLogarifm onAdd={handleAdd} />
      <FormulaLimit onAdd={handleAdd} />
      <FormulaSquareRoot onAdd={handleAdd} />
    </section>
  )
}

export default OperationBar
