import { useFirstTip } from "@modules/app/store"
import TipTemplate from "../tip-template/TipTemplate"

/**
 * Общее описание программы
 */

const OverviewTip = () => {
  const { incrementStep } = useFirstTip()
  return (
    <TipTemplate text="Далее" className="w-[450px]" onClick={incrementStep}>
      <h1>
        Добро пожаловать в приложение для обработки формул от команды "котики"!
        Создано специально для хакатона от МИРЭА и РАСУ 2024
      </h1>
    </TipTemplate>
  )
}

export default OverviewTip
