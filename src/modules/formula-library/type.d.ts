import { FieldKeys } from "@modules/compare/type"

export type CursorPositionStore = {
  position: number
  setPosition: (value: number) => void
  resetPosition: () => void
}

export type ControlStore = {
  key: FieldKeys
  latexValue: string
  setLatex: (value: string) => void
  handleChange: (inputValue: string, replace?: boolean) => void
  clearLatex: () => void
}
