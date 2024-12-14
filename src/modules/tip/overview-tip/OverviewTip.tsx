import { useFirstTip } from "@modules/app/store"
import TipTemplate from "../tip-template/TipTemplate"

const OverviewTip = () => {
  const { incrementStep } = useFirstTip()
  return (
    <TipTemplate text="Далее" className="w-[450px]" onClick={incrementStep}>
      <h1>
        Добро пожаловать в наше приложение для обработки формул! Создано
        специально для хакатона от МИРЭА и РосАтома 2024
      </h1>
    </TipTemplate>
  )
}

export default OverviewTip
