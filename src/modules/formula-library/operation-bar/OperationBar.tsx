import FormulaTemplate from "../formula-template/FormulaTemplate"
import Integral from "../integral/Integral"
import Trigonometry from "../trigonometry/Trigonometry"
import css from "./OperationBar.module.scss"

const OperationBar = () => {
  return (
    <section className={css.bar}>
      <FormulaTemplate
        variants={[
          <Integral type="common" />,
          <Integral type="inf-bottom" />,
          <Integral type="minus-inf-bottom" />,
          <Integral type="inf-top" />,
          <Integral type="minus-inf-top" />,
          <Integral type="all" />,
        ]}
        onAdd={() => {}}
      />
      <FormulaTemplate
        variants={[
          <Trigonometry type="sin" />,
          <Trigonometry type="cos" />,
          <Trigonometry type="tg" />,
        ]}
        onAdd={() => {}}
      />
    </section>
  )
}

export default OperationBar
