import { isAxiosError } from "axios"
import { useErrorStore } from "../store"
import { Notification, NotificationScheme } from "../type.d"
import { handleNotification } from "./handle-notification"

/**
 * Функция обработки ошибок
 */

export const handleErrorThunk = (error: unknown) => {
  const handledError = (
    NotificationScheme.safeParse(error).success
      ? error
      : isAxiosError(error)
      ? { text: error.message, code: error.code ?? "" }
      : {
          text: JSON.stringify(error),
          code: "client error",
        }
  ) as Notification

  handleNotification({
    notification: handledError,
    store: useErrorStore.getState(),
  })
}
