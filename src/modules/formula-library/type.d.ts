import { FieldKeys } from "@modules/compare/type"

export type CursorPositionStore = {
  position: number
  setPosition: (value: number) => void
  resetPosition: () => void
}

export type ControlStore = {
  key: FieldKeys
  latexValue: string
  fieldMode: "latex" | "raw"
  toggleFieldMode: () => void
  setLatex: (value: string) => void
  handleChange: (inputValue: string, replace?: boolean) => void
  clearLatex: () => void
}

export type Operation = {
  label: string
  latex: string
}

export type OperationResponse = { latex_operations: Operation[] }
