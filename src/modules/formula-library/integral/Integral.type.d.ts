export type IntegralProp = {
  type: IntegralType
}

export type IntegralType =
  | "common"
  | "inf-top"
  | "inf-bottom"
  | "minus-inf-top"
  | "minus-inf-bottom"
  | "all"
