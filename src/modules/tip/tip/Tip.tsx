import { useFirstTip } from "@modules/app/store"
import FormulaInputTip from "../formula-input-tip/FormulaInputTip"
import LetterTip from "../letter-tip/LetterTip"
import OperationTip from "../operation-tip/OperationTip"
import OverviewTip from "../overview-tip/OverviewTip"
import css from "./Tip.module.scss"

const Tip = () => {
  const { currentStep } = useFirstTip()

  const steps = [
    <OverviewTip />,
    <FormulaInputTip />,
    <OperationTip />,
    <LetterTip />,
  ]

  return <section className={css.tip}>{steps[currentStep - 1]}</section>
}

export default Tip
