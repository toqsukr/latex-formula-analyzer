import { FC } from "react"
import FormulaIntegral from "./formula-integral/FormulaIntegral"
import FormulaLimit from "./formula-limit/FormulaLimit"
import FormulaLogarifm from "./formula-logarifm/FormulaLogarifm"
import FormulaSquareRoot from "./formula-square-root/FormulaSquareRoot"
import css from "./OperationBar.module.scss"
import { OperationBarProp } from "./OperationBar.type"

const OperationBar: FC<OperationBarProp> = ({ onUpdate }) => {
  const handleAdd = (value: string) => {
    console.log(value)
    onUpdate(value)
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
