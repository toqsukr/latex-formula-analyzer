import { LimitType } from "../../elements/limit/Limit.type"

export const limitTypes: LimitType[] = ["common", "to-inf"] as const

export const limitValues: Record<LimitType, string> = {
  "to-inf": String.raw`$\lim\limits_{x\to\infty} f(x)$`,
  common: String.raw`$\lim\limits_{x\to a} f(x)$`,
}
