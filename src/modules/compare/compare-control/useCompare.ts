import { MutationKeys, NotificationCodes } from "@modules/app/constants"
import { handleErrorThunk } from "@modules/app/model/handle-error"
import { Notification } from "@modules/app/type"
import {
  useFirstControl,
  useSecondControl,
} from "@modules/formula-library/store"
import { useIsMutating } from "@tanstack/react-query"
import { useCompareFormules } from "../model/hooks/useCompareFormules"
import { useCompareResult } from "../store"

/**
 * Хук для объединения логики компонента CompareControl
 *
 * Определяет действия при нажатии на кнопку сравнения
 * После получения результата сравнения записывает его в хранилище
 */
export const useCompare = () => {
  const { key: firstKey, ...firstControl } = useFirstControl()
  const { key: secondKey, ...secondControl } = useSecondControl()
  const { compareFormules, isFormulesComparing } = useCompareFormules()
  const { setResult } = useCompareResult()
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

        setResult(
          String.raw`Схожесть \ формул \ - \ ${similarity}! \ Выражение \ ${firstValue} \ было \ преобразована \ к \ виду \ ${latex1} \ выражение \ ${secondValue} \ было \ преобразовано \ к \ виду \ ${latex2}`
        )
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

  return {
    handleCompare,
    firstControl,
    secondControl,
    isFormulesComparing,
    firstKey,
    secondKey,
  }
}
