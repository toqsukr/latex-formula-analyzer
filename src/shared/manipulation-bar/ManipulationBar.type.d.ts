import { FieldKeys } from "@modules/compare/type"

export type ManipulationBarProp = {
  latexValue: string
  handleChange: (inputValue: string, replace?: boolean) => void
  clearLatex: () => void
  uploadKey: FieldKeys
  active?: boolean
  fieldMode: "latex" | "raw"
  toggleFieldMode: () => void
}
