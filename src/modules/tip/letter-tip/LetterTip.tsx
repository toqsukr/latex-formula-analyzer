import { useFirstTip } from "@modules/app/store"
import TipTemplate from "../tip-template/TipTemplate"

const LetterTip = () => {
  const { setFirstTip, setStep } = useFirstTip()
  const handleLastStep = () => {
    setFirstTip(false)
    setStep(0)
  }

  return (
    <TipTemplate text="Начать" className="w-[450px]" onClick={handleLastStep}>
      <p>
        Это панель с греческими буквами. Вставка происходит в то же поле, что и
        в панели с операциями (на активное поле указывает стрелочка слева от
        него)
      </p>
    </TipTemplate>
  )
}

export default LetterTip
