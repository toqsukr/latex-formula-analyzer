import NotificationList from "@modules/app/notification-list/NotificationList"
import { useNotificationStore } from "@modules/app/store"
import { FC, PropsWithChildren } from "react"

const NotificationLayout: FC<PropsWithChildren> = ({ children }) => {
  const { notifications } = useNotificationStore()
  return (
    <>
      {children}
      <NotificationList notifications={notifications} />
    </>
  )
}

export default NotificationLayout