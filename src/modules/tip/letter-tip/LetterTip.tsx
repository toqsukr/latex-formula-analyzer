import { useFirstTip } from "@modules/app/store"
import TipTemplate from "../tip-template/TipTemplate"

/**
 * Пояснение для работы с греческими буквами
 */

const LetterTip = () => {
  const { incrementStep } = useFirstTip()

  return (
    <TipTemplate
      text="Начать"
      className="w-[450px] !top-[40%]"
      onClick={incrementStep}
    >
      <p>
        Это панель с греческими буквами. Вставка происходит в то же поле, что и
        в панели с операциями (на активное поле указывает стрелочка слева от
        него)
      </p>
    </TipTemplate>
  )
}

export default LetterTip
