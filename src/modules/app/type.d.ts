import { z } from "zod"

export const NotificationSchema = z.object({
  type: z.literal("success").or(z.literal("error")),
  code: z.string(),
  text: z.string(),
})

export type NotificationType = "success" | "error"

export type Notification = z.infer<typeof NotificationSchema>

export type NotificationStore = {
  notifications: Notification[]
  appendNotification: (notification: Notification) => void
  removeNotification: (code: string) => void
}
