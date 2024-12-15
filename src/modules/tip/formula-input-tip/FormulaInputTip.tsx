import { useFirstTip } from "@modules/app/store"
import TipTemplate from "../tip-template/TipTemplate"

/**
 * Пояснение для работы с полями для ввода формул
 */

const FormulaInputTip = () => {
  const { incrementStep } = useFirstTip()
  return (
    <TipTemplate
      text="Далее"
      className="max-w-[420px] !left-[16%]"
      onClick={incrementStep}
    >
      <p>
        Это поля для ввода формул. Каждое из них принимает выражение в формате
        Latex и преобразовывает его в читаемый вид. Нажмите на кнопку в центре
        между двумя полями чтобы провести сравнение введенных формул. Для
        просмотра исходной Latex строки нажмите на иконку в правом верхнем углу
        поля. Справа от каждого поля можно заметить панель управления полями.
        Кнопки на ней (сверху вниз) позволяют:
        <li>скопировать формулу в виде строки Latex в буфер обмена;</li>
        <li> преобразовать изображение в формулу в формате Latex;</li>
        <li> очистить поле.</li>
      </p>
    </TipTemplate>
  )
}

export default FormulaInputTip
