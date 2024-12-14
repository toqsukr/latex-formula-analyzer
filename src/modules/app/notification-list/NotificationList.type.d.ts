import { FC } from "react"
import { Notification } from "../type"

export type NotificationListProp = {
  message: FC<{ text: string }>
  notifications: Notification[]
}
