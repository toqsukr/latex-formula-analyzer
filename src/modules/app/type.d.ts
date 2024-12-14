import { z } from "zod"

export const NotificationScheme = z.object({
  code: z.string(),
  text: z.string(),
})

export type Notification = z.infer<typeof NotificationScheme>

export type NotificationStore = {
  notifications: Notification[]
  appendNotification: (notification: Notification) => void
  removeNotification: (code: string) => void
}
