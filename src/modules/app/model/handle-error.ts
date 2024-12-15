import { isAxiosError } from "axios"
import { useNotificationStore } from "../store"
import { Notification, NotificationSchema } from "../type.d"
import { handleNotification } from "./handle-notification"

/**
 * Функция  обработки ошибок
 * Определяет тип переданной ошибки и добавляет ее в список уведомлений
 *
 * @param error уведомление для добавления
 */

export const handleErrorThunk = (error: unknown) => {
  const handledError = (
    NotificationSchema.safeParse(error).success
      ? error
      : isAxiosError(error)
      ? { type: "error", text: error.message, code: error.code ?? "" }
      : {
          type: "error",
          text: JSON.stringify(error),
          code: "client error",
        }
  ) as Notification

  handleNotification({
    notification: handledError,
    store: useNotificationStore.getState(),
  })
}
