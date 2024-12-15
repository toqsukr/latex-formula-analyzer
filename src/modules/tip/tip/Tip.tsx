import { useFirstTip } from "@modules/app/store"
import CompareResultTip from "../compare-result-tip/CompareResultTip"
import FormulaInputTip from "../formula-input-tip/FormulaInputTip"
import LetterTip from "../letter-tip/LetterTip"
import OperationTip from "../operation-tip/OperationTip"
import OverviewTip from "../overview-tip/OverviewTip"
import css from "./Tip.module.scss"

/**
 * Компонент с подсказками новым пользователям
 */

const Tip = () => {
  const { currentStep } = useFirstTip()

  const steps = [
    <OverviewTip />,
    <FormulaInputTip />,
    <OperationTip />,
    <LetterTip />,
    <CompareResultTip />,
  ]

  return <section className={css.tip}>{steps[currentStep - 1]}</section>
}

export default Tip
