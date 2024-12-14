import { Notification, NotificationStore } from "../type"

export const handleNotification = ({
  notification,
  store,
  time = 5000,
}: {
  notification: Notification
  store: NotificationStore
  time?: number
}) => {
  const { appendNotification, removeNotification } = store
  const existNotification = store.notifications.find(
    ({ code }) => code === notification.code
  )
  if (!existNotification) {
    appendNotification(notification)
    setTimeout(() => {
      removeNotification(notification.code)
    }, time)
  }
}
