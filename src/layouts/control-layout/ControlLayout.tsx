import OperationBar from "@modules/formula-library/operation-bar/OperationBar"
import { FC, PropsWithChildren } from "react"
import css from "./ControlLayout.module.scss"

const ControlLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className={css.control_layout}>
      <OperationBar />
      <div className={css.content}>{children}</div>
    </section>
  )
}

export default ControlLayout
