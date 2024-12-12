import { TrigonometryType } from "../../elements/trigonometry/Trigonometry.type"

export const trigonometryTypes: TrigonometryType[] = ["sin", "cos"] as const

export const trigonometryValues: Record<TrigonometryType, string> = {
  "sin": String.raw`\sin x`,
  "cos": String.raw`\cos x`,
}
