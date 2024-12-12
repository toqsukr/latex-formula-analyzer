export type FormulaTemplateProp = {
  templates: TemplateProp[]
  onAdd: (value: string) => void
}

export type TemplateProp = {
  element: ReactNode
  value: string
}
