import { FieldKeys } from "@modules/compare/type.d"
import { create } from "zustand"
import { latexChange } from "./model/latex-change"
import { ControlStore } from "./type"

// Хранилище состояния первого поля ввода
export const useFirstControl = create<ControlStore>((set, get) => ({
  key: FieldKeys.FIRST,
  clearLatex: () => set({ ...get(), latexValue: "" }),
  latexValue: String.raw`x\cdot x+2\cdot x-7=0`,
  fieldMode: "latex",
  toggleFieldMode: () =>
    set({ ...get(), fieldMode: get().fieldMode === "latex" ? "raw" : "latex" }),
  handleChange: (inputValue, replace) =>
    set({
      ...get(),
      latexValue: latexChange(inputValue, get().latexValue, replace),
    }),
  setLatex: (value) => set({ ...get(), latexValue: value }),
}))

// Хранилище состояния второго поля ввода
export const useSecondControl = create<ControlStore>((set, get) => ({
  key: FieldKeys.SECOND,
  clearLatex: () => set({ ...get(), latexValue: "" }),
  latexValue: String.raw`x\cdot\left(x+2\right)=7`,
  fieldMode: "latex",
  toggleFieldMode: () =>
    set({ ...get(), fieldMode: get().fieldMode === "latex" ? "raw" : "latex" }),
  handleChange: (inputValue, replace) =>
    set({
      ...get(),
      latexValue: latexChange(inputValue, get().latexValue, replace),
    }),
  setLatex: (value) => set({ ...get(), latexValue: value }),
}))
