import { MutationKeys, NotificationCodes } from "@modules/app/constants"
import { handleNotification } from "@modules/app/model/handle-notification"
import { useAchievementStore } from "@modules/app/store"
import UploadImage from "@modules/latex-extract/upload-image/UploadImage"
import IconButton from "@shared/ui/icon-button/IconButton"
import SpinnerLoader from "@shared/ui/spinner-loader/SpinnerLoader"
import { useIsMutating } from "@tanstack/react-query"
import { FC } from "react"
import { IoCopyOutline } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx"
import { EditableMathField } from "react-mathquill"
import css from "./ManipulationBar.module.scss"
import { ManipulationBarProp } from "./ManipulationBar.type"
import "./mathquill.scss"

const ManipulationBar: FC<ManipulationBarProp> = ({
  latexValue,
  handleChange,
  clearLatex,
  uploadKey,
}) => {
  const isFetching = useIsMutating({
    mutationKey: [MutationKeys.UPLOAD_IMAGE, uploadKey],
  })

  const handleCopy = async () => {
    if (latexValue) {
      try {
        await navigator.clipboard.writeText(latexValue)
        const notification = {
          code: NotificationCodes.SUCCESS_COPY,
          text: "Формула скопирована!",
        }
        handleNotification({
          notification,
          store: useAchievementStore.getState(),
          time: 2000,
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  const content = [
    <EditableMathField
      latex={latexValue}
      onChange={(mathField) => {
        handleChange(mathField.latex(), true)
      }}
    />,
    <SpinnerLoader className="absolute top-0 left-0" />,
  ]

  return (
    <div className={css.manipulator}>
      <div className="w-full relative bg-[var(--bar-background-color)] rounded-[var(--bar-border-radius)] overflow-x-auto overflow-y-hidden">
        {content[isFetching]}
      </div>
      <div className={css.buttons}>
        <IconButton
          onClick={handleCopy}
          icon={<IoCopyOutline className="w-[26px] h-[26px]" />}
        />
        <UploadImage
          mutationKey={uploadKey}
          onSuccess={(formulas) => handleChange(formulas.join("\\"))}
        />
        <IconButton
          onClick={clearLatex}
          id={css.reset}
          icon={<RxCross2 className="w-[26px] h-[26px]" />}
        />
      </div>
    </div>
  )
}

export default ManipulationBar
