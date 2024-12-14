import { useFirstTip } from "@modules/app/store"
import TipTemplate from "../tip-template/TipTemplate"

const FormulaInputTip = () => {
  const { incrementStep } = useFirstTip()
  return (
    <TipTemplate
      text="Далее"
      className="max-w-[480px] !left-[15%]"
      onClick={incrementStep}
    >
      <p>
        Это поля для ввода формул. Каждое из них принимает выражение в формате
        Latex и преобразовывает его в читаемый вид. Нажмите на кнопку в центре
        между двумя полями чтобы провести сравнение введенных формул. Справа от
        каждого поля можно заметить панель управления полями. Кнопки на ней
        (сверху вниз) позволяют:
        <li>скопировать формулу в виде строки Latex в буфер обмена;</li>
        <li> преобразовать изображение в формулу в формате Latex;</li>
        <li> очистить поле.</li>
      </p>
    </TipTemplate>
  )
}

export default FormulaInputTip
