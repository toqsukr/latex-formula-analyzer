import { useFirstTip } from "@modules/app/store"
import TipTemplate from "../tip-template/TipTemplate"

/**
 * Пояснение для работы с математическими операциями
 */

const OperationTip = () => {
  const { incrementStep } = useFirstTip()
  return (
    <TipTemplate
      text="Далее"
      className="w-[400px] !left-[45%] !top-[30%]"
      onClick={incrementStep}
    >
      <p>
        Это панель с математическими операциями. Нажмите на операцию для вставки
        в поле ввода. Стрелочка справа от панели показывает в какое поле
        произойдет вставка.
      </p>
    </TipTemplate>
  )
}

export default OperationTip
