import { LogarifmType } from "../../elements/logarifm/Logarifm.type"

export const logarifmTypes: LogarifmType[] = ["log", "lg", "ln"] as const

export const logarifmValues: Record<LogarifmType, string> = {
  "log": String.raw`\log_{a} b`,
  "lg": String.raw`\log_{10} b`,
  "ln": String.raw`\ln b`,
}
