import { MutationKeys } from "@modules/app/constants"
import { useFirstTip } from "@modules/app/store"
import SpinnerLoader from "@shared/ui/spinner-loader/SpinnerLoader"
import { useIsMutating } from "@tanstack/react-query"
import cn from "classnames"
import { StaticMathField } from "react-mathquill"
import { useCompareResult } from "../store"
import css from "./ResultBar.module.scss"

/**
 * Панель для отображения результата сравнения формул
 *
 * Использует информацию о статусе подсказок для визуального отображения
 *
 * Отображает лоадер во время ожидания результата сравнения
 */
const ResultBar = () => {
  const { result } = useCompareResult()
  const { currentStep, firstTip } = useFirstTip()

  const isComparing = useIsMutating({
    mutationKey: [MutationKeys.COMPARE_FORMULES],
  })

  const content = [
    <StaticMathField>{result}</StaticMathField>,
    <SpinnerLoader />,
  ]

  return (
    <div
      className={cn(css.result_bar, {
        [css.result_bar_tip]: firstTip && currentStep === 5,
      })}
    >
      {content[isComparing]}
    </div>
  )
}

export default ResultBar
