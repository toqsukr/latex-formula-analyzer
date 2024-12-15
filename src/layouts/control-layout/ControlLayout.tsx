import { MutationKeys } from "@modules/app/constants"
import { useFirstTip } from "@modules/app/store"
import ResultBar from "@modules/compare/result-bar/ResultBar"
import { useActiveField } from "@modules/compare/store"
import { FieldKeys } from "@modules/compare/type.d"
import LetterBar from "@modules/formula-library/letter-bar/LetterBar"
import OperationBar from "@modules/formula-library/operation-bar/OperationBar"
import {
  useFirstControl,
  useSecondControl,
} from "@modules/formula-library/store"
import { useIsMutating } from "@tanstack/react-query"
import cn from "classnames"
import { FC, PropsWithChildren } from "react"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import css from "./ControlLayout.module.scss"

/**
 * Компонент, задающий расположение элементам управления
 *
 * Отображает подсказку для полей ввода
 *
 * Определяет функцию добавления элементов в активное поле ввода
 * @param children дочерние компоненты
 */

const ControlLayout: FC<PropsWithChildren> = ({ children }) => {
  const { firstTip, currentStep, resetTip } = useFirstTip()
  const { handleChange: firstChange } = useFirstControl()
  const { handleChange: secondChange } = useSecondControl()
  const { fieldKey } = useActiveField()
  const isImagesUploading = useIsMutating({
    mutationKey: [MutationKeys.UPLOAD_IMAGE, fieldKey],
  })

  const handleAdd = (value: string) => {
    if (!isImagesUploading) {
      if (fieldKey === FieldKeys.FIRST) {
        firstChange(value)
      } else {
        secondChange(value)
      }
    }
  }

  return (
    <section className={css.control_wrapper}>
      {firstTip || (
        <AiOutlineQuestionCircle className={css.help} onClick={resetTip} />
      )}
      <div className={css.formula_wrapper}>
        <OperationBar onAdd={handleAdd} />
        <div
          className={cn(css.content, {
            [css.content_tip]: firstTip && currentStep == 2,
          })}
        >
          {children}
        </div>
      </div>
      <div className="flex flex-col gap-8 overflow-auto">
        <LetterBar onAdd={handleAdd} />
        <ResultBar />
      </div>
    </section>
  )
}

export default ControlLayout
