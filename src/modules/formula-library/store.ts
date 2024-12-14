import { FieldKeys } from "@modules/compare/type.d"
import { create } from "zustand"
import { latexChange } from "./model/latex-change"
import { ControlStore, CursorPositionStore } from "./type"

export const useCursorPosition = create<CursorPositionStore>((set, get) => ({
  position: -1,
  resetPosition: () => set({ ...get(), position: -1 }),
  setPosition: (value) => set({ ...get(), position: value }),
}))

export const useFirstControl = create<ControlStore>((set, get) => ({
  key: FieldKeys.FIRST,
  clearLatex: () => set({ ...get(), latexValue: "" }),
  latexValue: "",
  handleChange: (inputValue, replace) =>
    set({
      ...get(),
      latexValue: latexChange(inputValue, get().latexValue, replace),
    }),
  setLatex: (value) => set({ ...get(), latexValue: value }),
}))

export const useSecondControl = create<ControlStore>((set, get) => ({
  key: FieldKeys.SECOND,
  clearLatex: () => set({ ...get(), latexValue: "" }),
  latexValue: "",
  handleChange: (inputValue, replace) =>
    set({
      ...get(),
      latexValue: latexChange(inputValue, get().latexValue, replace),
    }),
  setLatex: (value) => set({ ...get(), latexValue: value }),
}))
