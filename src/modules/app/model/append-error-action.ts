import { Notification, NotificationStore } from "../type"

export const appendNotificationAction = (
  error: Notification,
  store: NotificationStore
) => {
  const existNotification = store.notifications.find(
    ({ code }) => code === error.code
  )
  return existNotification
    ? store
    : { ...store, notifications: [...store.notifications, error] }
}
