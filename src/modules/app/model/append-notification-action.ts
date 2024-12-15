import { Notification, NotificationStore } from "../type"

/**
 * Функция для добавления уведомления в хранилище
 * @param notification уведомление для добавления
 * @param store конкретное хранилище
 * @return новое состояние хранилища
 */

export const appendNotificationAction = (
  notification: Notification,
  store: NotificationStore
) => {
  return { ...store, notifications: [...store.notifications, notification] }
}
