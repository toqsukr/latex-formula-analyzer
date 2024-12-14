import { IntegralType } from "../../elements/integral/Integral.type"

export const integralTypes: IntegralType[] = [
  "common",
  "inf-top",
  "minus-inf-bottom",
  "all",
] as const

export const integralValues: Record<IntegralType, string> = {
  common: String.raw`\int_{}^{} {f(x)dx}`,
  "inf-top": String.raw`\int_{}^{+\infty} {f(x)dx}`,
  "minus-inf-bottom": String.raw`\int_{-\infty}^{} {f(x)dx}`,
  all: String.raw`\int_{-\infty}^{+\infty} {f(x)dx}`,
}
