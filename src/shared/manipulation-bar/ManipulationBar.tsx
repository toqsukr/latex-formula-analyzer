import { MutationKeys, NotificationCodes } from "@modules/app/constants"
import { handleNotification } from "@modules/app/model/handle-notification"
import { useNotificationStore } from "@modules/app/store"
import { Notification } from "@modules/app/type"
import { useActiveField } from "@modules/compare/store"
import UploadImage from "@modules/latex-extract/upload-image/UploadImage"
import EditableLatexField from "@shared/editable-latex-field/EditableLatexField"
import IconButton from "@shared/ui/icon-button/IconButton"
import SpinnerLoader from "@shared/ui/spinner-loader/SpinnerLoader"
import { useIsMutating } from "@tanstack/react-query"
import { FC } from "react"
import { FaLongArrowAltRight } from "react-icons/fa"
import { IoCopyOutline } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx"
import { MathField } from "react-mathquill"
import css from "./ManipulationBar.module.scss"
import { ManipulationBarProp } from "./ManipulationBar.type"
import "./mathquill.scss"

/**
 * Компонент для управления полем ввода
 *
 * Задает строку управления полем, устанваливает обработчики кликов
 *
 * @param latexValue значение поля
 * @param handleChange функция обработки ввода в поле
 * @param clearLatex функция очистки поля
 * @param uploadKey ключ управления загрузкой фото в данное поле
 * @param active определяет активность поля для вставки
 * @param fieldMode мод поля
 * @param toggleFieldMode функция смены мода ввода
 */
const ManipulationBar: FC<ManipulationBarProp> = ({
  latexValue,
  handleChange,
  clearLatex,
  uploadKey,
  active,
  fieldMode,
  toggleFieldMode,
}) => {
  const isFetching = useIsMutating({
    mutationKey: [MutationKeys.UPLOAD_IMAGE, uploadKey],
  })

  const { setFieldKey } = useActiveField()

  const handleCopy = async () => {
    if (latexValue && !isFetching) {
      try {
        await navigator.clipboard.writeText(latexValue)
        const notification: Notification = {
          type: "success",
          code: NotificationCodes.SUCCESS_COPY,
          text: "Формула скопирована!",
        }
        handleNotification({
          notification,
          store: useNotificationStore.getState(),
          time: 2000,
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  const handleLatexFieldChange = (mathField: MathField) => {
    handleChange(mathField.latex(), true)
  }

  const handleRawFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value, true)
  }

  const handleFocus = () => {
    setFieldKey(uploadKey)
  }

  const content = [
    fieldMode === "raw" ? (
      <EditableLatexField
        onSwapClick={toggleFieldMode}
        mode="raw"
        onFocus={handleFocus}
        value={latexValue}
        onChange={handleRawFieldChange}
      />
    ) : (
      <EditableLatexField
        onSwapClick={toggleFieldMode}
        mode="latex"
        onFocus={handleFocus}
        latex={latexValue}
        onChange={handleLatexFieldChange}
      />
    ),
    <SpinnerLoader className="absolute top-0 left-0" />,
  ]
  return (
    <div className={css.manipulator}>
      {active && <FaLongArrowAltRight className={css.arrow} />}
      <div className="w-full relative bg-[var(--bar-background-color)] rounded-[var(--bar-border-radius)] overflow-x-auto overflow-y-hidden">
        {content[isFetching]}
      </div>
      <div className={css.buttons}>
        <IconButton
          onClick={handleCopy}
          icon={<IoCopyOutline className="w-[22px] h-[22px]" />}
        />
        <UploadImage
          mutationKey={uploadKey}
          onSuccess={(formulas) => handleChange(formulas.join("\\"))}
        />
        <IconButton
          onClick={() => !isFetching && clearLatex()}
          id={css.reset}
          icon={<RxCross2 className="w-[22px] h-[22px]" />}
        />
      </div>
    </div>
  )
}

export default ManipulationBar
