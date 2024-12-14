import { create } from "zustand"
import { appendNotificationAction } from "./model/append-error-action"
import { removeNotificationAction } from "./model/remove-error-action"
import { FirstTipStore, NotificationStore } from "./type"

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [],
  appendNotification: (notification) =>
    set(appendNotificationAction(notification, get())),
  removeNotification: (code) => set(removeNotificationAction(code, get())),
}))

export const useFirstTip = create<FirstTipStore>((set, get) => ({
  firstTip: true,
  currentStep: 1,
  incrementStep: () => set({ ...get(), currentStep: get().currentStep + 1 }),
  setStep: (value) => set({ ...get(), currentStep: value }),
  setFirstTip: (value) => set({ ...get(), firstTip: value }),
  resetTip: () => set({ ...get(), currentStep: 1, firstTip: true }),
}))
