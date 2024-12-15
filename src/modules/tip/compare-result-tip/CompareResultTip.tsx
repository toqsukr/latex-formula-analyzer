import { useFirstTip } from "@modules/app/store"
import TipTemplate from "../tip-template/TipTemplate"

const CompareResultTip = () => {
  const { setFirstTip, setStep } = useFirstTip()
  const handleLastStep = () => {
    setFirstTip(false)
    setStep(0)
  }
  return (
    <TipTemplate
      text="Начать"
      className="w-[450px] !top-[60%]"
      onClick={handleLastStep}
    >
      <p>
        Это панель для вывода результата сравнения. Помимо процента совпадения,
        на ней также будет выводиться результат преобразования каждого
        выражения.
      </p>
    </TipTemplate>
  )
}

export default CompareResultTip
