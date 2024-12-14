import { create } from "zustand"
import { appendNotificationAction } from "./model/append-error-action"
import { removeNotificationAction } from "./model/remove-error-action"
import { NotificationStore } from "./type"

export const useErrorStore = create<NotificationStore>((set, get) => ({
  notifications: [],
  appendNotification: (notification) =>
    set(appendNotificationAction(notification, get())),
  removeNotification: (code) => set(removeNotificationAction(code, get())),
}))

export const useAchievementStore = create<NotificationStore>((set, get) => ({
  notifications: [],
  appendNotification: (notification) =>
    set(appendNotificationAction(notification, get())),
  removeNotification: (code) => set(removeNotificationAction(code, get())),
}))