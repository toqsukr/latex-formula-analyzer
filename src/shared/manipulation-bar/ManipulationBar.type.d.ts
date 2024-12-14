export type ManipulationBarProp = {
  latexValue: string
  handleChange: (inputValue: string, replace?: boolean) => void
  clearLatex: () => void
  uploadKey?: string
}
