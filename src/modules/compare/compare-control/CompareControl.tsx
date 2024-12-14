import { MutationKeys, NotificationCodes } from "@modules/app/constants"
import { handleErrorThunk } from "@modules/app/model/handle-error"
import { handleNotification } from "@modules/app/model/handle-notification"
import { useNotificationStore } from "@modules/app/store"
import { Notification } from "@modules/app/type"
import {
  useFirstControl,
  useSecondControl,
} from "@modules/formula-library/store"
import ManipulationBar from "@shared/manipulation-bar/ManipulationBar"
import IconButton from "@shared/ui/icon-button/IconButton"
import SpinnerLoader from "@shared/ui/spinner-loader/SpinnerLoader"
import { useIsMutating } from "@tanstack/react-query"
import { MdCompareArrows } from "react-icons/md"
import { useCompareFormules } from "../model/hooks/useCompareFormules"
import css from "./CompareControl.module.scss"

const CompareControl = () => {
  const { key: firstKey, ...firstControl } = useFirstControl()
  const { key: secondKey, ...secondControl } = useSecondControl()
  const { compareFormules, isFormulesComparing } = useCompareFormules()
  const isImagesUploading = useIsMutating({
    mutationKey: [MutationKeys.UPLOAD_IMAGE],
  })

  const handleCompare = async () => {
    const { latexValue: firstValue } = firstControl
    const { latexValue: secondValue } = secondControl
    if (firstValue && secondValue) {
      if (!isFormulesComparing && !isImagesUploading) {
        const { latex1, latex2, similarity } = await compareFormules({
          latex1: firstValue,
          latex2: secondValue,
        })

        const notification: Notification = {
          type: "success",
          code: `${NotificationCodes.COMPARE_RESULT}_${latex1}_${latex2}`,
          text: `Формулы ${latex1} и ${latex2} похожи на ${similarity}`,
        }
        handleNotification({
          notification,
          store: useNotificationStore.getState(),
        })
      }
    } else {
      const error: Notification = {
        type: "error",
        code: NotificationCodes.NO_COMPARE_DATA_ERROR,
        text: "Для сравнения формул заполните оба поля!",
      }
      handleErrorThunk(error)
    }
  }

  const content = [
    <MdCompareArrows />,
    <SpinnerLoader className="absolute top-0 left-0" />,
  ]
  return (
    <>
      <ManipulationBar {...firstControl} uploadKey={firstKey} />
      <ManipulationBar {...secondControl} uploadKey={secondKey} />
      <IconButton
        onClick={handleCompare}
        id={css.compare}
        icon={content[+isFormulesComparing]}
      />
    </>
  )
}

export default CompareControl
