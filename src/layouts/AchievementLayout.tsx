import NotificationList from "@modules/app/notification-list/NotificationList"
import { useAchievementStore } from "@modules/app/store"
import AchievementMessage from "@shared/ui/achievement-message/AchievementMessage"
import { FC, PropsWithChildren } from "react"

const AchievementLayout: FC<PropsWithChildren> = ({ children }) => {
  const { notifications } = useAchievementStore()
  return (
    <>
      {children}
      <NotificationList
        message={AchievementMessage}
        notifications={notifications}
      />
    </>
  )
}

export default AchievementLayout
