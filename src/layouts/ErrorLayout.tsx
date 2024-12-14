import NotificationList from "@modules/app/notification-list/NotificationList"
import { useErrorStore } from "@modules/app/store"
import ErrorMessage from "@shared/ui/error-message/ErrorMessage"
import { FC, PropsWithChildren } from "react"

const ErrorLayout: FC<PropsWithChildren> = ({ children }) => {
  const { notifications } = useErrorStore()
  return (
    <>
      {children}
      <NotificationList message={ErrorMessage} notifications={notifications} />
    </>
  )
}

export default ErrorLayout
