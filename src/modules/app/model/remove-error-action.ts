import { NotificationStore } from "../type"

export const removeNotificationAction = (
  code: string,
  store: NotificationStore
) => {
  return {
    ...store,
    notifications: store.notifications.filter((err) => err.code !== code),
  }
}
