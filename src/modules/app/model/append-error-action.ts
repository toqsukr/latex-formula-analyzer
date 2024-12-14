import { Notification, NotificationStore } from "../type"

export const appendNotificationAction = (
  notification: Notification,
  store: NotificationStore
) => {
  return { ...store, notifications: [...store.notifications, notification] }
}
