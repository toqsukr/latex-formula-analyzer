import { ElementProp } from "../Element.type"

export type IntegralProp = ElementProp<IntegralType>

export type IntegralType = "common" | "inf-top" | "minus-inf-bottom" | "all"
