import LetterBar from "@modules/formula-library/letter-bar/LetterBar"
import OperationBar from "@modules/formula-library/operation-bar/OperationBar"
import { useFirstControl } from "@modules/formula-library/store"
import { FC, PropsWithChildren } from "react"
import css from "./ControlLayout.module.scss"

const ControlLayout: FC<PropsWithChildren> = ({ children }) => {
  const { handleChange } = useFirstControl()

  const handleAdd = (value: string) => {
    handleChange(value)
  }

  return (
    <section className={css.control_wrapper}>
      <div className={css.formula_wrapper}>
        <OperationBar />
        <div className={css.content}>{children}</div>
      </div>
      <LetterBar onAdd={handleAdd} />
    </section>
  )
}

export default ControlLayout
