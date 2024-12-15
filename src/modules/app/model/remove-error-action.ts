import { NotificationStore } from "../type"

/**
 * Функция удаления уведомления из хранилища
 *
 * @param code код уведомления
 * @param store хранилище уведомлений
 * @returns новое состояние хранилища
 */

export const removeNotificationAction = (
  code: string,
  store: NotificationStore
) => {
  return {
    ...store,
    notifications: store.notifications.filter((err) => err.code !== code),
  }
}
